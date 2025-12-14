import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock, CheckCircle2 } from 'lucide-react';
import { useAssessment } from '@/context/AssessmentContext';

interface LeadCaptureModalProps {
  open: boolean;
  onClose: () => void;
}

export const LeadCaptureModal = ({ open, onClose }: LeadCaptureModalProps) => {
  const { state, getTotalScore } = useAssessment();
  const [email, setEmail] = useState(state.companyProfile?.email || '');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    // Prepare webhook payload
    const totalScore = getTotalScore();
    const percentage = Math.round((totalScore / 100) * 100);
    
    const payload = {
      timestamp: new Date().toISOString(),
      assessmentId: crypto.randomUUID(),
      companyName: state.companyProfile?.companyName,
      industry: state.companyProfile?.industry,
      companySize: state.companyProfile?.companySize,
      currentMaturity: state.companyProfile?.currentMaturity,
      email: email,
      phone: state.companyProfile?.phone,
      totalScore: totalScore,
      percentage: percentage,
      maturityLevel: getMaturityLevelName(percentage),
      sectionScores: {
        riskGovernance: getSectionScore(1),
        materialControls: getSectionScore(2),
        monitoring: getSectionScore(3),
        boardOversight: getSectionScore(4),
        auditCommittee: getSectionScore(5),
      },
      leadSource: 'Provision 29 Readiness Assessment - Protecht',
      partnerVendor: 'Protecht Group',
      userAgent: navigator.userAgent,
      completionTime: Math.round(Object.keys(state.answers).length * 30), // Approximate
    };

    try {
      // In production, this would send to: [PROTECHT_WEBHOOK_URL]
      // For now, we'll store locally and show success
      localStorage.setItem('p29_lead_captured', JSON.stringify(payload));
      
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
      }, 3000);
    } catch (err) {
      setError('Failed to send report. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSectionScore = (section: number) => {
    const startQ = (section - 1) * 5 + 1;
    const endQ = section * 5;
    let score = 0;
    for (let i = startQ; i <= endQ; i++) {
      score += state.answers[`q${i}`] || 0;
    }
    return score;
  };

  const getMaturityLevelName = (percentage: number) => {
    if (percentage <= 20) return 'Initial';
    if (percentage <= 40) return 'Developing';
    if (percentage <= 60) return 'Defined';
    if (percentage <= 80) return 'Managed';
    return 'Optimised';
  };

  if (isSuccess) {
    return (
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center justify-center py-8">
            <CheckCircle2 className="w-16 h-16 text-success mb-4" />
            <h3 className="text-xl font-semibold mb-2">Report Sent!</h3>
            <p className="text-center text-muted-foreground">
              Check your email for your detailed Provision 29 readiness report.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Get Your Provision 29 Readiness Report</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Download your personalised 15-page report with:
          </p>
          
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>Detailed assessment breakdown</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>Gap analysis & recommendations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>Implementation roadmap</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>How Protecht's platform can help</span>
            </li>
          </ul>

          <form onSubmit={handleSubmit} className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={error ? 'border-error' : ''}
              />
              {error && (
                <p className="text-sm text-error">{error}</p>
              )}
            </div>

            <div className="flex gap-3">
              <Button
                type="submit"
                className="flex-1"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Report'}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
              <Lock className="w-4 h-4" />
              <span>Your email is secure and won't be shared without your consent.</span>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
