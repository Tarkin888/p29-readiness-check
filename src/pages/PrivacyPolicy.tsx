import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
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

        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-slate max-w-none space-y-6">
          <p className="text-lg text-muted-foreground">
            Last updated: January 2025
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">1. Introduction</h2>
            <p className="text-muted-foreground">
              Protecht Group ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Provision 29 Readiness Assessment tool.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
            <p className="text-muted-foreground">
              We may collect the following types of information:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><strong>Company Information:</strong> Company name, industry, size, and maturity level</li>
              <li><strong>Contact Information:</strong> Email address and phone number (optional)</li>
              <li><strong>Assessment Data:</strong> Your responses to assessment questions and resulting scores</li>
              <li><strong>Technical Data:</strong> Browser type, device information, and usage patterns</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">3. How We Use Your Information</h2>
            <p className="text-muted-foreground">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Generate your personalised Provision 29 readiness report</li>
              <li>Send you your assessment results via email (if requested)</li>
              <li>Provide follow-up consultation services (if requested)</li>
              <li>Improve our assessment tool and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">4. Data Storage and Security</h2>
            <p className="text-muted-foreground">
              Your assessment data is stored locally in your browser during the session. If you choose to receive your report via email, your data is transmitted securely and stored in accordance with industry-standard security practices.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">5. Data Sharing</h2>
            <p className="text-muted-foreground">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Service providers who assist in delivering our services</li>
              <li>Professional advisors and consultants</li>
              <li>Regulatory authorities when required by law</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">6. Your Rights</h2>
            <p className="text-muted-foreground">
              Under applicable data protection laws, you have the right to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request data portability</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">7. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="text-muted-foreground">
              <strong>Protecht Group</strong><br />
              Email: privacy@protechtgroup.com<br />
              Website: www.protechtgroup.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;