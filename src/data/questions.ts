export interface QuestionOption {
  value: number;
  label: string;
}

export interface Question {
  id: string;
  text: string;
  options: QuestionOption[];
}

export interface Section {
  id: number;
  name: string;
  route: string;
  questions: Question[];
}

export const sections: Section[] = [
  {
    id: 1,
    name: "Risk Governance Framework",
    route: "/assessment/section/1",
    questions: [
      {
        id: "q1",
        text: "Does your organisation have a documented enterprise risk management (ERM) framework?",
        options: [
          { value: 0, label: "No framework exists" },
          { value: 1, label: "Framework in development" },
          { value: 2, label: "Framework documented but not fully embedded" },
          { value: 3, label: "Framework embedded with annual review" },
          { value: 4, label: "Mature framework with continuous monitoring" },
        ],
      },
      {
        id: "q2",
        text: "How does your organisation identify and assess material risks?",
        options: [
          { value: 0, label: "Ad-hoc identification only" },
          { value: 1, label: "Annual workshop-based assessment" },
          { value: 2, label: "Quarterly risk reviews with register" },
          { value: 3, label: "Continuous monitoring with escalation protocols" },
          { value: 4, label: "Real-time monitoring integrated with business processes" },
        ],
      },
      {
        id: "q3",
        text: "Who owns the enterprise risk management framework?",
        options: [
          { value: 0, label: "No clear ownership" },
          { value: 1, label: "Finance or Internal Audit owns it" },
          { value: 2, label: "Risk function exists but limited authority" },
          { value: 3, label: "Chief Risk Officer with board reporting line" },
          { value: 4, label: "CRO with board committee and executive sponsorship" },
        ],
      },
      {
        id: "q4",
        text: "How frequently does your board review material risks?",
        options: [
          { value: 0, label: "Annually or less" },
          { value: 1, label: "Twice per year" },
          { value: 2, label: "Quarterly" },
          { value: 3, label: "Quarterly with ad-hoc deep dives" },
          { value: 4, label: "Continuous monitoring with real-time alerts" },
        ],
      },
      {
        id: "q5",
        text: "Does your risk framework align to an established standard (e.g., COSO, ISO 31000)?",
        options: [
          { value: 0, label: "No alignment to standards" },
          { value: 1, label: "Partially aligned to COSO or ISO 31000" },
          { value: 2, label: "Aligned to COSO or ISO 31000" },
          { value: 3, label: "Aligned with external validation/audit" },
          { value: 4, label: "Fully integrated with Provision 29 requirements" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Material Controls Identification",
    route: "/assessment/section/2",
    questions: [
      {
        id: "q6",
        text: "Has your organisation defined what constitutes a 'material control'?",
        options: [
          { value: 0, label: "No definition exists" },
          { value: 1, label: "Working definition in draft" },
          { value: 2, label: "Definition documented but not approved" },
          { value: 3, label: "Board-approved definition" },
          { value: 4, label: "Approved definition with clear identification criteria" },
        ],
      },
      {
        id: "q7",
        text: "How many material controls have you identified across financial, operational, reporting, and compliance domains?",
        options: [
          { value: 0, label: "Haven't started identification" },
          { value: 1, label: "Less than 10 controls identified" },
          { value: 2, label: "10-25 controls identified" },
          { value: 3, label: "25-50 controls identified" },
          { value: 4, label: "50+ controls with comprehensive mapping" },
        ],
      },
      {
        id: "q8",
        text: "How do you link material controls to material risks?",
        options: [
          { value: 0, label: "No linkage exists" },
          { value: 1, label: "Manual linkage in spreadsheets" },
          { value: 2, label: "Documented linkage in risk register" },
          { value: 3, label: "System-enabled linkage with workflow" },
          { value: 4, label: "Automated linkage with impact analysis" },
        ],
      },
      {
        id: "q9",
        text: "Who validates that controls are correctly classified as 'material'?",
        options: [
          { value: 0, label: "No validation process" },
          { value: 1, label: "Management self-assessment only" },
          { value: 2, label: "Internal Audit validation" },
          { value: 3, label: "External audit or consultant validation" },
          { value: 4, label: "Multi-layer validation including board review" },
        ],
      },
      {
        id: "q10",
        text: "Are your material controls documented in a centralised repository?",
        options: [
          { value: 0, label: "No centralised documentation" },
          { value: 1, label: "Spreadsheet-based repository" },
          { value: 2, label: "Shared drive with templates" },
          { value: 3, label: "Basic GRC system" },
          { value: 4, label: "Advanced GRC platform with workflow automation" },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Monitoring & Testing",
    route: "/assessment/section/3",
    questions: [
      {
        id: "q11",
        text: "How frequently do you test material controls effectiveness?",
        options: [
          { value: 0, label: "No formal testing" },
          { value: 1, label: "Annual testing only" },
          { value: 2, label: "Semi-annual testing" },
          { value: 3, label: "Quarterly testing" },
          { value: 4, label: "Continuous automated testing" },
        ],
      },
      {
        id: "q12",
        text: "Who performs material controls testing in your organisation?",
        options: [
          { value: 0, label: "No one currently" },
          { value: 1, label: "Control owners self-test" },
          { value: 2, label: "Internal Audit leads testing" },
          { value: 3, label: "Dedicated controls testing team" },
          { value: 4, label: "Automated testing with independent validation" },
        ],
      },
      {
        id: "q13",
        text: "How do you document control testing evidence?",
        options: [
          { value: 0, label: "No documentation" },
          { value: 1, label: "Email-based evidence collection" },
          { value: 2, label: "Shared folders or SharePoint" },
          { value: 3, label: "GRC system with evidence repository" },
          { value: 4, label: "Automated evidence capture with audit trail" },
        ],
      },
      {
        id: "q14",
        text: "What happens when a material control fails testing?",
        options: [
          { value: 0, label: "No formal process" },
          { value: 1, label: "Ad-hoc remediation" },
          { value: 2, label: "Documented remediation plans" },
          { value: 3, label: "Remediation with escalation to management" },
          { value: 4, label: "Automated remediation workflow with board visibility" },
        ],
      },
      {
        id: "q15",
        text: "Can you produce control testing reports for the Audit Committee within 24 hours if requested?",
        options: [
          { value: 0, label: "No, would take weeks" },
          { value: 1, label: "Within 2 weeks with manual compilation" },
          { value: 2, label: "Within 1 week" },
          { value: 3, label: "Within 48 hours" },
          { value: 4, label: "Real-time dashboards available instantly" },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Board Oversight",
    route: "/assessment/section/4",
    questions: [
      {
        id: "q16",
        text: "Does your board receive regular reports on material controls effectiveness?",
        options: [
          { value: 0, label: "No board reporting" },
          { value: 1, label: "Annual reporting only" },
          { value: 2, label: "Semi-annual reporting" },
          { value: 3, label: "Quarterly reporting" },
          { value: 4, label: "Continuous monitoring dashboard for board" },
        ],
      },
      {
        id: "q17",
        text: "Has your board approved the organisation's material controls framework?",
        options: [
          { value: 0, label: "No board involvement" },
          { value: 1, label: "Framework presented for information only" },
          { value: 2, label: "Framework discussed but not formally approved" },
          { value: 3, label: "Framework approved by board" },
          { value: 4, label: "Approved with annual effectiveness review" },
        ],
      },
      {
        id: "q18",
        text: "Does your board understand its Provision 29 declaration obligations?",
        options: [
          { value: 0, label: "Not aware of requirements" },
          { value: 1, label: "Aware but not actively planning" },
          { value: 2, label: "Planning in early stages" },
          { value: 3, label: "Clear understanding with preparation underway" },
          { value: 4, label: "Fully prepared with rehearsal declarations completed" },
        ],
      },
      {
        id: "q19",
        text: "Who presents material controls updates to the board?",
        options: [
          { value: 0, label: "No presentations" },
          { value: 1, label: "CFO presents ad-hoc" },
          { value: 2, label: "CFO presents quarterly" },
          { value: 3, label: "CRO or Chief Audit Executive presents quarterly" },
          { value: 4, label: "Dedicated governance team with executive sponsorship" },
        ],
      },
      {
        id: "q20",
        text: "Can your board members access control status information between meetings?",
        options: [
          { value: 0, label: "No access to control information" },
          { value: 1, label: "Must request reports from management" },
          { value: 2, label: "Monthly email updates" },
          { value: 3, label: "Quarterly board pack with detailed reports" },
          { value: 4, label: "Real-time board portal with dashboard access" },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Audit Committee Engagement",
    route: "/assessment/section/5",
    questions: [
      {
        id: "q21",
        text: "Does your Audit Committee have material controls oversight in its terms of reference?",
        options: [
          { value: 0, label: "Not in terms of reference" },
          { value: 1, label: "General risk oversight only" },
          { value: 2, label: "Material controls mentioned but not detailed" },
          { value: 3, label: "Explicit material controls oversight" },
          { value: 4, label: "Detailed Provision 29 responsibilities documented" },
        ],
      },
      {
        id: "q22",
        text: "How often does your Audit Committee review material controls effectiveness?",
        options: [
          { value: 0, label: "Never or annually" },
          { value: 1, label: "Semi-annually" },
          { value: 2, label: "Quarterly" },
          { value: 3, label: "Quarterly with deep dives on specific controls" },
          { value: 4, label: "Quarterly plus continuous monitoring dashboard" },
        ],
      },
      {
        id: "q23",
        text: "Has your Audit Committee received training on Provision 29 requirements?",
        options: [
          { value: 0, label: "No training provided" },
          { value: 1, label: "General governance training only" },
          { value: 2, label: "Basic Provision 29 awareness session" },
          { value: 3, label: "Detailed Provision 29 training from external experts" },
          { value: 4, label: "Ongoing training with peer benchmarking and FRC updates" },
        ],
      },
      {
        id: "q24",
        text: "Does your Audit Committee review control deficiencies and remediation plans?",
        options: [
          { value: 0, label: "No review of deficiencies" },
          { value: 1, label: "Annual summary review" },
          { value: 2, label: "Quarterly deficiency reporting" },
          { value: 3, label: "Detailed remediation tracking with accountability" },
          { value: 4, label: "Real-time deficiency monitoring with escalation protocols" },
        ],
      },
      {
        id: "q25",
        text: "Is your Audit Committee prepared to support the board's 2026 Provision 29 declaration?",
        options: [
          { value: 0, label: "Not prepared" },
          { value: 1, label: "Early planning stages" },
          { value: 2, label: "Preparation underway with gaps identified" },
          { value: 3, label: "Well advanced with dress rehearsal planned" },
          { value: 4, label: "Fully prepared with dry run completed" },
        ],
      },
    ],
  },
];
