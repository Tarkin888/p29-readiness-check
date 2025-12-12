import { CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAssessment } from '@/context/AssessmentContext';
import { sections } from '@/data/questions';

export const ProgressBar = () => {
  const navigate = useNavigate();
  const { state, getCompletionPercentage } = useAssessment();
  const percentage = getCompletionPercentage();
  const answeredCount = Object.keys(state.answers).length;

  // Check if a section is accessible (started or completed, or previous sections are complete)
  const isSectionAccessible = (sectionId: number): boolean => {
    // Section 1 is always accessible if profile is complete
    if (sectionId === 1) return !!state.companyProfile;
    
    // Section is accessible if it's complete, current, or all previous sections are complete
    if (state.completedSections.includes(sectionId)) return true;
    if (state.currentSection === sectionId) return true;
    
    // Check if all previous sections are complete
    for (let i = 1; i < sectionId; i++) {
      if (!state.completedSections.includes(i)) return false;
    }
    return true;
  };

  const handleProfileClick = () => {
    navigate('/assessment/profile');
  };

  const handleSectionClick = (sectionId: number) => {
    if (isSectionAccessible(sectionId)) {
      navigate(`/assessment/section/${sectionId}`);
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-background border-b shadow-sm">
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
          <button
            onClick={handleProfileClick}
            className="text-xs font-medium text-muted-foreground hover:text-primary hover:underline transition-colors cursor-pointer mr-2"
          >
            Profile
          </button>
          {state.companyProfile && (
            <CheckCircle2 className="w-4 h-4 text-success" />
          )}
          
          {sections.map((section) => {
            const isComplete = state.completedSections.includes(section.id);
            const isCurrent = state.currentSection === section.id;
            const isAccessible = isSectionAccessible(section.id);
            
            return (
              <div key={section.id} className="flex items-center gap-2">
                <span className="text-muted-foreground text-xs">|</span>
                <button
                  onClick={() => handleSectionClick(section.id)}
                  disabled={!isAccessible}
                  className={`text-xs font-medium transition-colors ${
                    isCurrent ? 'text-primary font-semibold' : 
                    isComplete ? 'text-success hover:text-success/80 hover:underline cursor-pointer' : 
                    isAccessible ? 'text-muted-foreground hover:text-primary hover:underline cursor-pointer' :
                    'text-muted-foreground/50 cursor-not-allowed'
                  }`}
                >
                  Section {section.id}
                </button>
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