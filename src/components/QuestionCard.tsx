import { Question } from '@/data/questions';
import { useAssessment } from '@/context/AssessmentContext';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
}

export const QuestionCard = ({ question, questionNumber }: QuestionCardProps) => {
  const { state, setAnswer } = useAssessment();
  const selectedValue = state.answers[question.id];

  const handleSelect = (value: number) => {
    setAnswer(question.id, value);
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold mb-4 text-foreground">
        {questionNumber}. {question.text}
      </h3>
      
      <div className="space-y-3">
        {question.options.map((option) => (
          <label 
            key={option.value}
            className="flex items-start gap-3 p-4 rounded-lg border border-border cursor-pointer hover:bg-muted/50 transition-colors"
          >
            <input
              type="radio"
              name={question.id}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={() => handleSelect(option.value)}
              className="mt-1 w-5 h-5 text-primary focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer"
            />
            <span className="text-base text-foreground flex-1">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
