import { CheckCircle2 } from 'lucide-react';
import { useAssessment } from '@/context/AssessmentContext';
import { sections } from '@/data/questions';

export const ProgressBar = () => {
  const { state, getCompletionPercentage } = useAssessment();
  const percentage = getCompletionPercentage();
  const answeredCount = Object.keys(state.answers).length;

  return (
    <div className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-foreground">
            {answeredCount} of 25 questions complete | {percentage}%
          </span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${percentage}%` }}
          />
        </div>

        {/* Section Indicators */}
        <div className="flex items-center gap-2 mt-4 flex-wrap">
          <span className="text-xs font-medium text-muted-foreground mr-2">Profile</span>
          {state.companyProfile && (
            <CheckCircle2 className="w-4 h-4 text-success" />
          )}
          
          {sections.map((section) => {
            const isComplete = state.completedSections.includes(section.id);
            const isCurrent = state.currentSection === section.id;
            
            return (
              <div key={section.id} className="flex items-center gap-2">
                <span className="text-muted-foreground text-xs">|</span>
                <span 
                  className={`text-xs font-medium ${
                    isCurrent ? 'text-primary' : 
                    isComplete ? 'text-success' : 
                    'text-muted-foreground'
                  }`}
                >
                  Section {section.id}
                </span>
                {isComplete && (
                  <CheckCircle2 className="w-4 h-4 text-success" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
