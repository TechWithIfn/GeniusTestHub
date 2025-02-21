import { Subject } from '../types';

export const subjects: Subject[] = [
  {
    id: 'dsa',
    name: 'Data Structures & Algorithms',
    icon: 'Binary',
    description: 'Master fundamental DSA concepts including arrays, linked lists, trees, graphs, and common algorithms',
    topics: ['Arrays & Strings', 'Linked Lists', 'Trees & Graphs', 'Sorting Algorithms', 'Dynamic Programming']
  },
  {
    id: 'coding',
    name: 'Coding & Programming',
    icon: 'Code',
    description: 'Practice coding problems and improve your programming skills across different languages',
    topics: ['Problem Solving', 'Clean Code', 'Object-Oriented Programming', 'Design Patterns', 'Code Optimization']
  },
  {
    id: 'aptitude',
    name: 'Quantitative Aptitude',
    icon: 'Calculator',
    description: 'Enhance your mathematical and logical reasoning abilities',
    topics: ['Number System', 'Algebra', 'Geometry', 'Data Interpretation', 'Logical Reasoning']
  },
  {
    id: 'cs',
    name: 'Computer Science Fundamentals',
    icon: 'Cpu',
    description: 'Learn core computer science concepts and principles',
    topics: ['Operating Systems', 'Database Management', 'Computer Networks', 'System Design', 'Software Engineering']
  },
  {
    id: 'verbal',
    name: 'Verbal Ability',
    icon: 'BookOpen',
    description: 'Improve your English language and communication skills',
    topics: ['Reading Comprehension', 'Grammar', 'Vocabulary', 'Verbal Reasoning', 'Communication Skills']
  },
  {
    id: 'technical',
    name: 'Technical Interview Prep',
    icon: 'Terminal',
    description: 'Prepare for technical interviews with comprehensive practice',
    topics: ['System Design', 'Problem Solving', 'Code Review', 'Architecture', 'Best Practices']
  }
];