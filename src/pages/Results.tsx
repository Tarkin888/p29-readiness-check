import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAssessment } from '@/context/AssessmentContext';
import { sections } from '@/data/questions';
import { Button } from '@/components/ui/button';
import { CircularProgress } from '@/components/CircularProgress';
import { LeadCaptureModal } from '@/components/LeadCaptureModal';
import { getMaturityLevel, getUrgencyMessage, calculateDaysUntil2026, getPriorityGaps, getGapRecommendation } from '@/utils/scoring';
import { Download, Calendar, ExternalLink, ArrowRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const Results = () => {
  const { state, getTotalScore, getSectionScore } = useAssessment();
  const navigate = useNavigate();
  const [showLeadCapture, setShowLeadCapture] = useState(false);

  if (!state.companyProfile) {
    navigate('/assessment/profile');
    return null;
  }

  const totalScore = getTotalScore();
  const percentage = Math.round((totalScore / 100) * 100);
  const maturity = getMaturityLevel(percentage);
  const urgency = getUrgencyMessage(percentage);
  const daysUntil2026 = calculateDaysUntil2026();
  const monthsRemaining = Math.floor(daysUntil2026 / 30);

  const sectionScores = sections.map(section => ({
    name: section.name,
    score: getSectionScore(section.id),
    percentage: Math.round((getSectionScore(section.id) / 20) * 100)
  }));

  const priorityGaps = getPriorityGaps(sectionScores);

  const benchmarkData = [
    { name: 'Your Score', value: percentage, color: maturity.color },
    { name: 'FTSE 100', value: 72, color: 'hsl(var(--muted-foreground))' },
    { name: 'FTSE 350', value: 58, color: 'hsl(var(--muted-foreground))' },
  ];

  return (
    <div className="min-h-screen bg-background py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Score Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-8">Your Provision 29 Readiness Score</h1>
          
          <div className="flex justify-center mb-8">
            <CircularProgress
              percentage={percentage}
              size={200}
              color={maturity.color}
              maturityLevel={maturity.name}
              description={maturity.description}
            />
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your organisation is at a <span className={`font-semibold ${maturity.textColor}`}>{maturity.name}</span> level of Provision 29 readiness. 
            With focused effort on the priorities below, you can advance your position.
          </p>
        </div>

        {/* Section Breakdown */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Section Breakdown</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sectionScores.map((section, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-3 text-sm">{section.name}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-primary">{section.score}</span>
                  <span className="text-muted-foreground">/20</span>
                  <span className="text-sm text-muted-foreground ml-auto">{section.percentage}%</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all ${
                      section.percentage < 50 ? 'bg-maturity-developing' :
                      section.percentage < 70 ? 'bg-maturity-defined' :
                      'bg-maturity-managed'
                    }`}
                    style={{ width: `${section.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Priority Gaps */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Your Top 3 Priority Areas</h2>
          <p className="text-muted-foreground mb-8">
            These areas represent your biggest opportunities to strengthen your Provision 29 readiness. 
            Protecht's platform directly addresses each of these.
          </p>

          <div className="space-y-6">
            {priorityGaps.map((gap, index) => {
              const recommendation = getGapRecommendation(gap.name, gap.percentage);
              
              return (
                <div key={index} className="bg-card border-l-4 border-l-primary rounded-xl p-6 shadow-sm">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold">Priority {index + 1}: {gap.name}</h3>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                      {gap.percentage}%
                    </span>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-semibold mb-1">Recommendation:</h4>
                      <p className="text-muted-foreground">{recommendation.recommendation}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-1">Protecht Solution:</h4>
                      <p className="text-muted-foreground">{recommendation.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-1">Implementation:</h4>
                      <p className="text-muted-foreground">{recommendation.implementation}</p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-xs text-muted-foreground">
                        Implementation Timeline: <span className="font-semibold">{recommendation.timeline}</span>
                      </span>
                      <Button variant="link" size="sm" className="text-primary">
                        Learn More <ArrowRight className="ml-1 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2026 Countdown */}
        <div className="mb-16 bg-card border border-border rounded-xl p-8">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Calendar className="w-10 h-10 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">Provision 29 Deadline: 1 January 2026</h2>
              <div className="flex gap-6 mb-4">
                <div>
                  <div className="text-3xl font-bold text-primary">{daysUntil2026}</div>
                  <div className="text-sm text-muted-foreground">days remaining</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">{monthsRemaining}</div>
                  <div className="text-sm text-muted-foreground">months remaining</div>
                </div>
              </div>
              <p className={`font-semibold ${urgency.color}`}>
                {urgency.emoji} {urgency.message}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Your Provision 29 declaration is due 1 January 2026. The board must declare confidence in the effectiveness of internal controls.
              </p>
            </div>
          </div>
        </div>

        {/* Benchmark Comparison */}
        <div className="mb-16 bg-card border border-border rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">How You Compare to FTSE Peers</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={benchmarkData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                  {benchmarkData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-muted-foreground mt-4">
            Your Provision 29 readiness score of {percentage}% positions you among FTSE companies. 
            {percentage >= 72 ? ' You are above the FTSE 100 average.' :
             percentage >= 58 ? ' You are above the FTSE 350 average but below FTSE 100.' :
             ' There is significant opportunity to improve your readiness.'}
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={() => setShowLeadCapture(true)}
            className="text-lg px-8 py-6"
          >
            <Download className="mr-2 w-5 h-5" />
            Download Your Full Report
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-8 py-6"
          >
            <Calendar className="mr-2 w-5 h-5" />
            Schedule a Protecht ERM Demo
          </Button>

          <Button 
            size="lg" 
            variant="outline"
            onClick={() => window.open('https://www.protecht.com.au/solutions/protecht-erm', '_blank')}
            className="text-lg px-8 py-6"
          >
            Explore Protecht Platform
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>

      <LeadCaptureModal 
        open={showLeadCapture}
        onClose={() => setShowLeadCapture(false)}
      />
    </div>
  );
};

export default Results;
