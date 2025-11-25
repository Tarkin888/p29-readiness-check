export interface MaturityLevel {
  name: string;
  color: string;
  description: string;
  textColor: string;
}

export const getMaturityLevel = (percentage: number): MaturityLevel => {
  if (percentage <= 20) {
    return {
      name: 'Initial',
      color: 'hsl(var(--maturity-initial))',
      description: 'Immediate Action Required',
      textColor: 'text-maturity-initial'
    };
  }
  if (percentage <= 40) {
    return {
      name: 'Developing',
      color: 'hsl(var(--maturity-developing))',
      description: 'Significant Gaps Exist',
      textColor: 'text-maturity-developing'
    };
  }
  if (percentage <= 60) {
    return {
      name: 'Defined',
      color: 'hsl(var(--maturity-defined))',
      description: 'Good Progress, More Work Needed',
      textColor: 'text-maturity-defined'
    };
  }
  if (percentage <= 80) {
    return {
      name: 'Managed',
      color: 'hsl(var(--maturity-managed))',
      description: 'Strong Position, Minor Enhancements',
      textColor: 'text-maturity-managed'
    };
  }
  return {
    name: 'Optimised',
    color: 'hsl(var(--maturity-optimised))',
    description: 'Provision 29 Ready',
    textColor: 'text-maturity-optimised'
  };
};

export const getUrgencyMessage = (percentage: number): { emoji: string; message: string; color: string } => {
  if (percentage < 40) {
    return {
      emoji: '🔴',
      message: 'CRITICAL: Your current position requires 9-12 months minimum. Begin immediately.',
      color: 'text-error'
    };
  }
  if (percentage < 60) {
    return {
      emoji: '🟠',
      message: 'IMPORTANT: You have 6-9 months to close gaps. Create an action plan now.',
      color: 'text-warning'
    };
  }
  if (percentage < 80) {
    return {
      emoji: '🟡',
      message: 'MANAGEABLE: With 3-6 months focused effort, you can achieve confidence.',
      color: 'text-maturity-defined'
    };
  }
  return {
    emoji: '🟢',
    message: 'WELL POSITIONED: Use remaining time for final validation and board preparation.',
    color: 'text-success'
  };
};

export const calculateDaysUntil2026 = (): number => {
  const deadline = new Date('2026-01-01');
  const now = new Date();
  const diffTime = deadline.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

export const getPriorityGaps = (sectionScores: { name: string; score: number; percentage: number }[]) => {
  return sectionScores
    .sort((a, b) => a.percentage - b.percentage)
    .slice(0, 3);
};

export const getGapRecommendation = (sectionName: string, percentage: number) => {
  const recommendations: Record<string, any> = {
    'Risk Governance Framework': {
      recommendation: 'Implement structured ERM framework aligned to COSO/ISO 31000',
      solution: 'Provision 29-Specific Control Library aligned to COSO/ISO 31000, enabling structured scope definition and risk-control mapping.',
      implementation: 'Protecht ERM integrates material risk identification with automated workflows, delivering board-ready evidence in real-time.',
      timeline: '8-12 weeks'
    },
    'Material Controls Identification': {
      recommendation: 'Define material controls with board approval and centralised documentation',
      solution: 'Detailed Risk-Control Mapping connects material risks to their mitigating controls, satisfying the Code\'s requirement for a sound internal control system.',
      implementation: 'Protecht\'s control library pre-populates with Provision 29-relevant controls, accelerating your identification process.',
      timeline: '6-10 weeks'
    },
    'Monitoring & Testing': {
      recommendation: 'Establish automated testing schedule with evidence repository',
      solution: 'Automated Testing & Structured Assurance across three lines of defence captures the necessary evidence to prove ongoing effectiveness.',
      implementation: 'Protecht\'s testing workflows integrate with your existing controls, eliminating manual evidence gathering and spreadsheet reconciliation.',
      timeline: '6-10 weeks'
    },
    'Board Oversight': {
      recommendation: 'Implement real-time board reporting and continuous monitoring',
      solution: 'Real-time Board-Level Reporting delivers clear, auditable evidence and live dashboards to monitor control effectiveness.',
      implementation: 'Protecht\'s executive dashboards provide the board with instant visibility into material control status and issue remediation.',
      timeline: '4-8 weeks'
    },
    'Audit Committee Engagement': {
      recommendation: 'Establish integrated risk monitoring and committee reporting',
      solution: 'Integrated Risk-in-Motion (RiM) View connects controls with KRIs, incidents, issues, and actions in a single aggregated view.',
      implementation: 'Protecht ensures your Audit Committee has a holistic, dynamic assessment of control effectiveness—exactly what Provision 29 demands.',
      timeline: '4-8 weeks'
    }
  };

  return recommendations[sectionName] || {
    recommendation: 'Strengthen governance framework',
    solution: 'Protecht ERM provides comprehensive governance capabilities',
    implementation: 'Implement with Protecht\'s proven methodology',
    timeline: '6-10 weeks'
  };
};
