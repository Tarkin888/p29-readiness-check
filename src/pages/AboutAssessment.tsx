import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield, BarChart3, CheckCircle, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutAssessment = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl py-12 px-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <h1 className="text-4xl font-bold mb-4">About This Assessment</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Understanding your Provision 29 readiness in 10 minutes
        </p>

        <div className="space-y-12">
          {/* What is Provision 29 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <Shield className="w-6 h-6 text-accent" />
              What is Provision 29?
            </h2>
            <p className="text-muted-foreground">
              Provision 29 is a requirement under the 2024 UK Corporate Governance Code that mandates boards of Premium Listed companies to declare the effectiveness of their material controls. Starting January 2026, boards must provide a formal declaration on the effectiveness of their risk management and internal control framework.
            </p>
            <p className="text-muted-foreground">
              This represents a significant shift from the previous "comply or explain" approach to a more rigorous "declare and evidence" requirement.
            </p>
          </section>

          {/* Assessment Methodology */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <BarChart3 className="w-6 h-6 text-accent" />
              Assessment Methodology
            </h2>
            <p className="text-muted-foreground">
              This assessment is based on the CIMA/ACMA certified methodology and draws from over 100 FTSE implementations. It evaluates your organisation across five key governance domains:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold mb-2">1. Risk Governance</h3>
                <p className="text-sm text-muted-foreground">Framework alignment, risk appetite, and governance structure</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold mb-2">2. Material Controls</h3>
                <p className="text-sm text-muted-foreground">Control identification, documentation, and risk-control mapping</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold mb-2">3. Monitoring & Testing</h3>
                <p className="text-sm text-muted-foreground">Testing frequency, three lines of defence, and evidence capture</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold mb-2">4. Board Oversight</h3>
                <p className="text-sm text-muted-foreground">Board reporting, dashboards, and declaration readiness</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 md:col-span-2">
                <h3 className="font-semibold mb-2">5. Audit Committee</h3>
                <p className="text-sm text-muted-foreground">Committee oversight, assurance processes, and external audit coordination</p>
              </div>
            </div>
          </section>

          {/* Maturity Levels */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-accent" />
              Maturity Levels
            </h2>
            <p className="text-muted-foreground">
              Your responses are scored and mapped to one of five maturity levels:
            </p>
            <div className="space-y-3 mt-4">
              <div className="flex items-center gap-4 p-3 bg-card border border-border rounded-lg">
                <div className="w-3 h-3 rounded-full bg-[hsl(var(--maturity-initial))]"></div>
                <div>
                  <span className="font-semibold">Initial (0-20%)</span>
                  <span className="text-muted-foreground ml-2">— Ad-hoc processes, minimal documentation</span>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-card border border-border rounded-lg">
                <div className="w-3 h-3 rounded-full bg-[hsl(var(--maturity-developing))]"></div>
                <div>
                  <span className="font-semibold">Developing (21-40%)</span>
                  <span className="text-muted-foreground ml-2">— Basic processes in place, some gaps remain</span>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-card border border-border rounded-lg">
                <div className="w-3 h-3 rounded-full bg-[hsl(var(--maturity-defined))]"></div>
                <div>
                  <span className="font-semibold">Defined (41-60%)</span>
                  <span className="text-muted-foreground ml-2">— Documented processes, consistent application</span>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-card border border-border rounded-lg">
                <div className="w-3 h-3 rounded-full bg-[hsl(var(--maturity-managed))]"></div>
                <div>
                  <span className="font-semibold">Managed (61-80%)</span>
                  <span className="text-muted-foreground ml-2">— Measured and controlled processes</span>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-card border border-border rounded-lg">
                <div className="w-3 h-3 rounded-full bg-[hsl(var(--maturity-optimised))]"></div>
                <div>
                  <span className="font-semibold">Optimised (81-100%)</span>
                  <span className="text-muted-foreground ml-2">— Continuous improvement, industry-leading</span>
                </div>
              </div>
            </div>
          </section>

          {/* Who Should Take This */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <Users className="w-6 h-6 text-accent" />
              Who Should Take This Assessment?
            </h2>
            <p className="text-muted-foreground">
              This assessment is designed for senior leaders responsible for governance and compliance:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
              <li>Chief Financial Officers (CFOs)</li>
              <li>Chief Risk Officers (CROs)</li>
              <li>Heads of Internal Audit</li>
              <li>Audit Committee Members</li>
              <li>Company Secretaries</li>
              <li>Governance, Risk & Compliance (GRC) Leaders</li>
            </ul>
          </section>

          {/* CTA */}
          <div className="bg-secondary/30 rounded-xl p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Ready to assess your Provision 29 readiness?</h3>
            <Button 
              size="lg"
              onClick={() => navigate('/')}
              className="bg-accent hover:bg-accent/90"
            >
              Start Assessment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAssessment;