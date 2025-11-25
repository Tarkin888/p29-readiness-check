import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAssessment } from '@/context/AssessmentContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight } from 'lucide-react';

const CompanyProfile = () => {
  const navigate = useNavigate();
  const { state, setCompanyProfile } = useAssessment();
  
  const [formData, setFormData] = useState({
    companyName: state.companyProfile?.companyName || '',
    industry: state.companyProfile?.industry || '',
    companySize: state.companyProfile?.companySize || '',
    currentMaturity: state.companyProfile?.currentMaturity || '',
    email: state.companyProfile?.email || '',
    phone: state.companyProfile?.phone || '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.companyName || formData.companyName.length < 3) {
      newErrors.companyName = 'Company name must be at least 3 characters';
    }
    if (!formData.industry) {
      newErrors.industry = 'Please select an industry';
    }
    if (!formData.companySize) {
      newErrors.companySize = 'Please select company size';
    }
    if (!formData.currentMaturity) {
      newErrors.currentMaturity = 'Please select current maturity level';
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setCompanyProfile(formData);
      navigate('/assessment/section/1');
    }
  };

  const isValid = formData.companyName.length >= 3 && 
                  formData.industry && 
                  formData.companySize && 
                  formData.currentMaturity && 
                  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

  return (
    <div className="min-h-screen bg-background py-12 px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
          <h1 className="text-3xl font-bold mb-2">Company Profile</h1>
          <p className="text-muted-foreground mb-8">
            Tell us about your organisation to customise your assessment
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name *</Label>
                <Input
                  id="companyName"
                  placeholder="Your Organisation"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className={errors.companyName ? 'border-error' : ''}
                />
                {errors.companyName && (
                  <p className="text-sm text-error">{errors.companyName}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="industry">Industry Sector *</Label>
                <Select value={formData.industry} onValueChange={(value) => setFormData({ ...formData, industry: value })}>
                  <SelectTrigger className={errors.industry ? 'border-error' : ''}>
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="financial-services">Financial Services</SelectItem>
                    <SelectItem value="insurance">Insurance</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="energy">Energy & Utilities</SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.industry && (
                  <p className="text-sm text-error">{errors.industry}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="companySize">Company Size *</Label>
                <Select value={formData.companySize} onValueChange={(value) => setFormData({ ...formData, companySize: value })}>
                  <SelectTrigger className={errors.companySize ? 'border-error' : ''}>
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="250-999">250-999 employees</SelectItem>
                    <SelectItem value="1000-4999">1,000-4,999 employees</SelectItem>
                    <SelectItem value="5000-9999">5,000-9,999 employees</SelectItem>
                    <SelectItem value="10000+">10,000+ employees</SelectItem>
                  </SelectContent>
                </Select>
                {errors.companySize && (
                  <p className="text-sm text-error">{errors.companySize}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="currentMaturity">Current GRC Maturity *</Label>
                <Select value={formData.currentMaturity} onValueChange={(value) => setFormData({ ...formData, currentMaturity: value })}>
                  <SelectTrigger className={errors.currentMaturity ? 'border-error' : ''}>
                    <SelectValue placeholder="Select maturity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="just-starting">Just starting</SelectItem>
                    <SelectItem value="basic-controls">Basic controls in place</SelectItem>
                    <SelectItem value="structured-framework">Structured framework</SelectItem>
                    <SelectItem value="mature-optimised">Mature & optimised</SelectItem>
                  </SelectContent>
                </Select>
                {errors.currentMaturity && (
                  <p className="text-sm text-error">{errors.currentMaturity}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={errors.email ? 'border-error' : ''}
                />
                {errors.email && (
                  <p className="text-sm text-error">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+44 20 1234 5678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <Button 
                type="submit" 
                size="lg"
                disabled={!isValid}
                className="px-8"
              >
                Begin Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
