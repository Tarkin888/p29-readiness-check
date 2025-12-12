import { Button } from '@/components/ui/button';
import { Shield, BarChart3, Calendar, ArrowRight } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useAssessment } from '@/context/AssessmentContext';

const Landing = () => {
  const navigate = useNavigate();
  const { state, getCompletionPercentage, clearAssessment } = useAssessment();
  const hasExistingData = state.companyProfile !== null || Object.keys(state.answers).length > 0;
  const completionPercentage = getCompletionPercentage();

  const handleStartNew = () => {
    clearAssessment();
    navigate('/assessment/profile');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="gradient-hero py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
              January 2026 Deadline Approaching
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Is Your Organisation Ready for Provision 29?
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Assess your material controls framework in 10 minutes. Get instant readiness score, gap analysis, and implementation roadmap.
            </p>

            {hasExistingData ? (
              <div className="flex flex-col gap-4 items-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    onClick={() => {
                      // Navigate to current section if profile exists, otherwise to profile
                      if (state.companyProfile) {
                        navigate(`/assessment/section/${state.currentSection}`);
                      } else {
                        navigate('/assessment/profile');
                      }
                    }}
                    className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all"
                  >
                    Resume Assessment ({completionPercentage}% Complete)
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    onClick={handleStartNew}
                    className="text-lg px-8 py-6 border-2"
                  >
                    Start New Assessment
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Starting a new assessment will clear your current progress
                </p>
              </div>
            ) : (
              <Button 
                size="lg" 
                onClick={() => navigate('/assessment/profile')}
                className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all"
              >
                Start Free Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">What You'll Discover</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-xl p-6 hover:border-accent hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Material Controls Gap Analysis</h3>
              <p className="text-muted-foreground">
                Protecht's dedicated Provision 29 control library and risk-control mapping ensure you identify and document every material control the Code requires.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:border-accent hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Board Readiness Score</h3>
              <p className="text-muted-foreground">
                Protecht's real-time board dashboards provide the evidence and assurance your board needs to sign the declaration with confidence.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:border-accent hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">2026 Compliance Roadmap</h3>
              <p className="text-muted-foreground">
                With Protecht's automated testing workflows across three lines of defence, you'll gather the year-long evidence required for ongoing effectiveness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-wrap justify-center gap-6 text-center">
            <div className="px-6 py-3 bg-card rounded-lg border border-border">
              <span className="text-sm font-semibold">10-Minute Assessment</span>
            </div>
            <div className="px-6 py-3 bg-card rounded-lg border border-border">
              <span className="text-sm font-semibold">Based on 100+ FTSE Implementations</span>
            </div>
            <div className="px-6 py-3 bg-card rounded-lg border border-border">
              <span className="text-sm font-semibold">ACMA CGMA Certified Methodology</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-lg font-semibold text-foreground mb-4">
              Protecht + Zia Rezvi: Achieving Confidence for Your Provision 29 Declaration
            </p>
            <div className="flex justify-center gap-6 text-sm text-muted-foreground">
              <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <span>|</span>
              <Link to="/about-assessment" className="hover:text-primary transition-colors">About This Assessment</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
