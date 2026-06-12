import {
  Activity,
  BarChart3,
  BookOpen,
  Brain,
  CalendarDays,
  ClipboardCheck,
  Flame,
  GraduationCap,
  LineChart,
  NotebookPen,
  Target,
  Trophy
} from "lucide-react";

export const navItems = [
  { href: "/", label: "Dashboard", icon: Activity },
  { href: "/planner", label: "Planner", icon: CalendarDays },
  { href: "/subjects", label: "Subjects", icon: BookOpen },
  { href: "/mock-tests", label: "Mocks", icon: ClipboardCheck },
  { href: "/revision", label: "Revision", icon: Brain },
  { href: "/pyq", label: "PYQ", icon: GraduationCap },
  { href: "/mistakes", label: "Mistakes", icon: NotebookPen },
  { href: "/notes", label: "Notes", icon: NotebookPen },
  { href: "/resources", label: "Library", icon: BookOpen },
  { href: "/coach", label: "AI Coach", icon: Brain },
  { href: "/analytics/study", label: "Analytics", icon: BarChart3 },
  { href: "/analytics/prediction", label: "Prediction", icon: Target }
];

export const analyticsNav = [
  { href: "/analytics/study", label: "Study" },
  { href: "/analytics/mock-tests", label: "Mock Tests" },
  { href: "/analytics/subjects", label: "Subjects" },
  { href: "/analytics/revision", label: "Revision" },
  { href: "/analytics/consistency", label: "Consistency" },
  { href: "/analytics/prediction", label: "Prediction" }
];

export const dashboardStats = [
  { label: "Today", value: "6.4h", delta: "+1.1h", icon: Activity },
  { label: "Weekly", value: "38h", delta: "82% target", icon: LineChart },
  { label: "Monthly", value: "146h", delta: "+12%", icon: BarChart3 },
  { label: "Streak", value: "21 days", delta: "Level 8", icon: Flame },
  { label: "Completion", value: "68%", delta: "Syllabus", icon: Trophy },
  { label: "Predicted", value: "635", delta: "Rank 5.2k", icon: Target }
];

export const upcomingTasks = [
  { time: "06:30", title: "Electrostatics MCQ sprint", subject: "Physics", priority: "High" },
  { time: "10:00", title: "Biomolecules NCERT recap", subject: "Biology", priority: "Medium" },
  { time: "14:30", title: "Coordination compounds notes", subject: "Chemistry", priority: "High" },
  { time: "19:00", title: "Full syllabus mock review", subject: "Mock", priority: "High" }
];

export const revisionsDue = [
  { chapter: "Thermodynamics", subject: "Physics", due: "Today", cycle: "R2" },
  { chapter: "Human Physiology", subject: "Biology", due: "Today", cycle: "R3" },
  { chapter: "Equilibrium", subject: "Chemistry", due: "Overdue", cycle: "R1" }
];

export const mockSchedule = [
  { date: "Jun 14", test: "Part Test 18", scope: "Physics + Organic" },
  { date: "Jun 17", test: "Full Mock 42", scope: "Full syllabus" }
];

export const studyTrend = [
  { day: "Mon", Physics: 2.5, Chemistry: 1.5, Biology: 2.2 },
  { day: "Tue", Physics: 1.8, Chemistry: 2.4, Biology: 2.6 },
  { day: "Wed", Physics: 2.9, Chemistry: 1.7, Biology: 2.1 },
  { day: "Thu", Physics: 2.3, Chemistry: 2.2, Biology: 2.5 },
  { day: "Fri", Physics: 3.0, Chemistry: 2.1, Biology: 1.6 },
  { day: "Sat", Physics: 2.2, Chemistry: 2.9, Biology: 2.7 },
  { day: "Sun", Physics: 1.6, Chemistry: 1.9, Biology: 3.2 }
];

export const scoreTrend = [
  { test: "M33", score: 590, physics: 132, chemistry: 150, biology: 308 },
  { test: "M34", score: 606, physics: 140, chemistry: 154, biology: 312 },
  { test: "M35", score: 615, physics: 148, chemistry: 156, biology: 311 },
  { test: "M36", score: 628, physics: 152, chemistry: 160, biology: 316 },
  { test: "M37", score: 635, physics: 156, chemistry: 158, biology: 321 }
];

export const subjectPerformance = [
  { subject: "Physics", completion: 61, accuracy: 72, confidence: 64 },
  { subject: "Chemistry", completion: 67, accuracy: 79, confidence: 70 },
  { subject: "Biology", completion: 76, accuracy: 92, confidence: 86 }
];

export const chapters = {
  Physics: [
    "Physics and Measurement",
    "Mathematics in Physics",
    "Motion in a Straight Line",
    "Motion in a Plane",
    "Laws of Motion",
    "Work, Energy and Power",
    "System of Particles and Rotational Motion",
    "Gravitation",
    "Mechanical Properties of Solids",
    "Mechanical Properties of Fluids",
    "Thermal Properties of Matter",
    "Thermodynamics",
    "Kinetic Theory",
    "Oscillations",
    "Waves",
    "Electric Charges and Fields",
    "Electrostatic Potential and Capacitance",
    "Current Electricity",
    "Moving Charges and Magnetism",
    "Magnetism and Matter",
    "Electromagnetic Induction",
    "Alternating Current",
    "Electromagnetic Waves",
    "Ray Optics and Optical Instruments",
    "Wave Optics",
    "Dual Nature of Radiation and Matter",
    "Atoms",
    "Nuclei",
    "Semiconductor Electronics"
  ],
  Chemistry: [
    "Some Basic Concepts of Chemistry",
    "Structure of Atom",
    "Classification of Elements and Periodicity",
    "Chemical Bonding and Molecular Structure",
    "States of Matter",
    "Thermodynamics",
    "Equilibrium",
    "Redox Reactions",
    "Solutions",
    "Electrochemistry",
    "Chemical Kinetics",
    "Surface Chemistry",
    "General Principles and Processes of Isolation",
    "Hydrogen",
    "s-Block Elements",
    "p-Block Elements",
    "d- and f-Block Elements",
    "Coordination Compounds",
    "Organic Chemistry Basic Principles",
    "Hydrocarbons",
    "Haloalkanes and Haloarenes",
    "Alcohols, Phenols and Ethers",
    "Aldehydes, Ketones and Carboxylic Acids",
    "Amines",
    "Biomolecules",
    "Polymers",
    "Chemistry in Everyday Life"
  ],
  Biology: [
    "The Living World",
    "Biological Classification",
    "Plant Kingdom",
    "Animal Kingdom",
    "Morphology of Flowering Plants",
    "Anatomy of Flowering Plants",
    "Structural Organisation in Animals",
    "Cell: The Unit of Life",
    "Biomolecules",
    "Cell Cycle and Cell Division",
    "Transport in Plants",
    "Mineral Nutrition",
    "Photosynthesis in Higher Plants",
    "Respiration in Plants",
    "Plant Growth and Development",
    "Digestion and Absorption",
    "Breathing and Exchange of Gases",
    "Body Fluids and Circulation",
    "Excretory Products and Their Elimination",
    "Locomotion and Movement",
    "Neural Control and Coordination",
    "Chemical Coordination and Integration",
    "Reproduction in Organisms",
    "Sexual Reproduction in Flowering Plants",
    "Human Reproduction",
    "Reproductive Health",
    "Principles of Inheritance and Variation",
    "Molecular Basis of Inheritance",
    "Evolution",
    "Human Health and Disease",
    "Strategies for Enhancement in Food Production",
    "Microbes in Human Welfare",
    "Biotechnology Principles and Processes",
    "Biotechnology and Its Applications",
    "Organisms and Populations",
    "Ecosystem",
    "Biodiversity and Conservation",
    "Environmental Issues"
  ]
};

export const statusCycle = ["Not Started", "In Progress", "Completed", "Needs Revision", "Mastered"];

export const mockTests = [
  { name: "Full Mock 37", date: "2026-06-10", marks: 635, total: 720, accuracy: 84, attempted: 172, unattempted: 8, Physics: 156, Chemistry: 158, Biology: 321 },
  { name: "Full Mock 36", date: "2026-06-06", marks: 628, total: 720, accuracy: 83, attempted: 170, unattempted: 10, Physics: 152, Chemistry: 160, Biology: 316 },
  { name: "Part Test 17", date: "2026-06-02", marks: 312, total: 360, accuracy: 86, attempted: 88, unattempted: 2, Physics: 88, Chemistry: 82, Biology: 142 }
];

export const mistakes = [
  { subject: "Physics", chapter: "Electrostatic Potential", topic: "Capacitance in series", type: "Concept forgotten", review: "Tomorrow" },
  { subject: "Chemistry", chapter: "Equilibrium", topic: "Kp-Kc conversion", type: "Incorrect", review: "Today" },
  { subject: "Biology", chapter: "Human Reproduction", topic: "Hormonal control", type: "Guessed", review: "Jun 15" }
];

export const pyqRows = [
  { year: 2025, subject: "Physics", chapter: "Current Electricity", completion: 92, correct: 78, difficulty: "Medium" },
  { year: 2024, subject: "Chemistry", chapter: "Chemical Kinetics", completion: 100, correct: 86, difficulty: "Hard" },
  { year: 2023, subject: "Biology", chapter: "Genetics", completion: 88, correct: 91, difficulty: "Medium" }
];

export const consistency = Array.from({ length: 35 }, (_, index) => ({
  day: index + 1,
  score: [2, 4, 1, 5, 3, 0, 4][index % 7]
}));

export const badges = [
  { title: "21 Day Streak", icon: Flame },
  { title: "Physics Fighter", icon: Trophy },
  { title: "Mock Analyst", icon: LineChart }
];

export const aiInsights = [
  "Spend more time on Electrostatics. Your accuracy drops to 64% after multi-concept capacitor questions.",
  "Your Biology accuracy is 92%, so maintain NCERT revision and shift one daily hour to Physics numericals.",
  "Based on your last 10 mock tests, your expected score is 635 with a 71% chance of crossing 650 in six weeks."
];

export const resourceLibrary = [
  { type: "NCERT", subject: "Biology", title: "NCERT Biology line-by-line checklist", chapter: "Genetics" },
  { type: "PDF", subject: "Physics", title: "Formula sheet: Mechanics and Modern Physics", chapter: "Mechanics" },
  { type: "Video", subject: "Chemistry", title: "Organic reaction map revision", chapter: "Organic Chemistry" },
  { type: "Short Notes", subject: "Physics", title: "Electrostatics one-page recap", chapter: "Electrostatics" }
];
