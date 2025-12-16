import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CircularProgress } from '@/components/CircularProgress';
import { Download, Calendar, ArrowLeft, AlertTriangle, Target, Shield, FileCheck } from 'lucide-react';


const DemoResults = () => {
  // Demo mock data
  const demoPercentage = 65;
  const demoColor = 'hsl(var(--maturity-defined))';
  
  const sectionData = [
    { name: 'Risk Governance Framework', percentage: 60 },
    { name: 'Material Controls Identification', percentage: 70 },
    { name: 'Monitoring & Testing', percentage: 55 },
    { name: 'Board Oversight', percentage: 75 },
    { name: 'Audit Committee Engagement', percentage: 65 },
  ];


  const priorityAreas = [
    {
      icon: Target,
      heading: 'Priority Area 1',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      icon: Shield,
      heading: 'Priority Area 2',
      body: 'Lorem ipsum dolor sit amet. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
    },
    {
      icon: FileCheck,
      heading: 'Priority Area 3',
      body: 'Lorem ipsum dolor sit amet. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.',
    },
  ];

  const getBarColor = (percentage: number) => {
    if (percentage < 50) return 'hsl(var(--maturity-developing))';
    if (percentage <= 75) return 'hsl(var(--maturity-defined))';
    return 'hsl(var(--maturity-managed))';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Demo Banner */}
      <div className="bg-amber-500 text-amber-950 py-3 px-6 text-center font-semibold">
        <AlertTriangle className="inline-block w-5 h-5 mr-2 -mt-1" />
        Demo Results - Sample Data for Illustration Purposes Only
      </div>

      <div className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Overall Score Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-8">Overall Readiness Score</h1>
            
            <div className="flex justify-center mb-8">
              <CircularProgress
                percentage={demoPercentage}
                size={200}
                color={demoColor}
                maturityLevel="Mid-Range"
                description="[Maturity Level]"
              />
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your organization shows moderate readiness for Provision 29. Key areas identified for improvement.
            </p>
          </div>

          {/* Section Breakdown */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Section Breakdown</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sectionData.map((section, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold mb-4 text-sm">{section.name}</h3>
                  <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full transition-all duration-700 rounded-full"
                      style={{ 
                        width: `${section.percentage}%`,
                        backgroundColor: getBarColor(section.percentage)
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* Top Priority Areas */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Your Top 3 Priority Areas</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {priorityAreas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <div key={index} className="bg-card border border-border rounded-xl p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-3">{area.heading}</h3>
                    <p className="text-muted-foreground text-sm italic">[{area.body}]</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Deadline Reminder */}
          <div className="mb-16 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-8">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                <Calendar className="w-8 h-8 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2 text-amber-800 dark:text-amber-200">
                  Provision 29 Deadline: 1 January 2026
                </h2>
                <p className="text-2xl font-bold text-amber-600 dark:text-amber-400 mb-2">
                  Time remaining: ~12 days
                </p>
                <p className="text-amber-700 dark:text-amber-300 text-sm">
                  The board must declare confidence in the effectiveness of internal controls by this date.
                </p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-accent hover:bg-accent/90"
              onClick={() => {}}
            >
              <Download className="mr-2 w-5 h-5" />
              Download Demo Report
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Schedule Protecht Consultation
            </Button>

            <Button 
              size="lg" 
              variant="outline"
              asChild
              className="text-lg px-8 py-6"
            >
              <Link to="/">
                <ArrowLeft className="mr-2 w-5 h-5" />
                Return to Assessment
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoResults;
