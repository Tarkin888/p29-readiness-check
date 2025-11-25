import { useNavigate, useParams } from 'react-router-dom';
import { useAssessment } from '@/context/AssessmentContext';
import { sections } from '@/data/questions';
import { ProgressBar } from '@/components/ProgressBar';
import { QuestionCard } from '@/components/QuestionCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Save } from 'lucide-react';
import { useEffect } from 'react';

const AssessmentSection = () => {
  const { sectionId } = useParams<{ sectionId: string }>();
  const navigate = useNavigate();
  const { state, setCurrentSection, markSectionComplete, isSectionComplete } = useAssessment();
  
  const sectionNumber = parseInt(sectionId || '1');
  const section = sections.find(s => s.id === sectionNumber);
  
  useEffect(() => {
    setCurrentSection(sectionNumber);
  }, [sectionNumber, setCurrentSection]);

  if (!section) {
    navigate('/');
    return null;
  }

  const isComplete = isSectionComplete(sectionNumber);
  
  const handlePrevious = () => {
    if (sectionNumber === 1) {
      navigate('/assessment/profile');
    } else {
      navigate(`/assessment/section-${sectionNumber - 1}`);
    }
  };

  const handleNext = () => {
    if (isComplete) {
      markSectionComplete(sectionNumber);
      
      if (sectionNumber === 5) {
        navigate('/results');
      } else {
        navigate(`/assessment/section-${sectionNumber + 1}`);
      }
    }
  };

  const handleSaveAndExit = () => {
    navigate('/');
  };

  const startQuestionNumber = (sectionNumber - 1) * 5 + 1;

  return (
    <div className="min-h-screen bg-background">
      <ProgressBar />
      
      <div className="container mx-auto max-w-4xl py-12 px-6">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm font-semibold text-primary mb-2">Section {sectionNumber} of 5</p>
              <h1 className="text-3xl font-bold">{section.name}</h1>
            </div>
            <Button 
              variant="outline" 
              onClick={handleSaveAndExit}
              className="hidden md:flex"
            >
              <Save className="mr-2 w-4 h-4" />
              Save & Exit
            </Button>
          </div>
          <p className="text-muted-foreground">
            Answer all 5 questions to proceed to the next section
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {section.questions.map((question, index) => (
            <QuestionCard
              key={question.id}
              question={question}
              questionNumber={startQuestionNumber + index}
            />
          ))}
        </div>

        <div className="flex items-center justify-between pt-6 border-t">
          <Button 
            variant="outline" 
            onClick={handlePrevious}
            size="lg"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Previous
          </Button>
          
          <Button 
            onClick={handleNext}
            disabled={!isComplete}
            size="lg"
          >
            {sectionNumber === 5 ? 'View Results' : 'Next Section'}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        <Button 
          variant="outline" 
          onClick={handleSaveAndExit}
          className="w-full mt-4 md:hidden"
        >
          <Save className="mr-2 w-4 h-4" />
          Save & Exit
        </Button>
      </div>
    </div>
  );
};

export default AssessmentSection;
