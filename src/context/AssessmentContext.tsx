import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CompanyProfile {
  companyName: string;
  industry: string;
  companySize: string;
  currentMaturity: string;
  email: string;
  phone?: string;
}

export interface AssessmentAnswers {
  [key: string]: number;
}

export interface AssessmentState {
  companyProfile: CompanyProfile | null;
  answers: AssessmentAnswers;
  currentSection: number;
  completedSections: number[];
}

interface AssessmentContextType {
  state: AssessmentState;
  setCompanyProfile: (profile: CompanyProfile) => void;
  setAnswer: (questionId: string, value: number) => void;
  setCurrentSection: (section: number) => void;
  markSectionComplete: (section: number) => void;
  isSectionComplete: (section: number) => boolean;
  getTotalScore: () => number;
  getSectionScore: (section: number) => number;
  clearAssessment: () => void;
  getCompletionPercentage: () => number;
}

const AssessmentContext = createContext<AssessmentContextType | undefined>(undefined);

const STORAGE_KEY = 'p29_assessment_state';
const PROFILE_KEY = 'p29_company_profile';

const initialState: AssessmentState = {
  companyProfile: null,
  answers: {},
  currentSection: 1,
  completedSections: [],
};

export const AssessmentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AssessmentState>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return initialState;
      }
    }
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const setCompanyProfile = (profile: CompanyProfile) => {
    setState(prev => ({ ...prev, companyProfile: profile }));
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  };

  const setAnswer = (questionId: string, value: number) => {
    setState(prev => ({
      ...prev,
      answers: { ...prev.answers, [questionId]: value }
    }));
  };

  const setCurrentSection = (section: number) => {
    setState(prev => ({ ...prev, currentSection: section }));
  };

  const markSectionComplete = (section: number) => {
    setState(prev => ({
      ...prev,
      completedSections: prev.completedSections.includes(section)
        ? prev.completedSections
        : [...prev.completedSections, section]
    }));
  };

  const isSectionComplete = (section: number): boolean => {
    const startQ = (section - 1) * 5 + 1;
    const endQ = section * 5;
    
    for (let i = startQ; i <= endQ; i++) {
      if (state.answers[`q${i}`] === undefined) {
        return false;
      }
    }
    return true;
  };

  const getSectionScore = (section: number): number => {
    const startQ = (section - 1) * 5 + 1;
    const endQ = section * 5;
    let score = 0;
    
    for (let i = startQ; i <= endQ; i++) {
      score += state.answers[`q${i}`] || 0;
    }
    return score;
  };

  const getTotalScore = (): number => {
    let total = 0;
    for (let i = 1; i <= 5; i++) {
      total += getSectionScore(i);
    }
    return total;
  };

  const getCompletionPercentage = (): number => {
    const answeredCount = Object.keys(state.answers).length;
    return Math.round((answeredCount / 25) * 100);
  };

  const clearAssessment = () => {
    setState(initialState);
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(PROFILE_KEY);
  };

  return (
    <AssessmentContext.Provider
      value={{
        state,
        setCompanyProfile,
        setAnswer,
        setCurrentSection,
        markSectionComplete,
        isSectionComplete,
        getTotalScore,
        getSectionScore,
        clearAssessment,
        getCompletionPercentage,
      }}
    >
      {children}
    </AssessmentContext.Provider>
  );
};

export const useAssessment = () => {
  const context = useContext(AssessmentContext);
  if (!context) {
    throw new Error('useAssessment must be used within AssessmentProvider');
  }
  return context;
};
