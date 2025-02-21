export interface Company {
  name: string;
  logo: string;
  description: string;
}

export interface TestQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
  company?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface TestProgress {
  currentQuestion: number;
  answers: number[];
  score: number;
  completed: boolean;
  timeSpent?: number;
  startTime?: number;
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  description: string;
  topics: string[];
}