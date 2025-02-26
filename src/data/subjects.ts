import { Subject } from '../types';

export const subjects: Subject[] = [
  {
    id: 'dsa',
    name: 'Data Structures & Algorithms',
    icon: 'Binary',
    description: 'Master fundamental DSA concepts including arrays, linked lists, trees, graphs, and common algorithms',
    topics: [
      {
        name: 'Arrays & Strings',
        description: 'Learn array manipulation, string algorithms, and pattern matching techniques. Master two-pointer approach, sliding window, and array transformations.'
      },
      {
        name: 'Linked Lists',
        description: 'Understand singly and doubly linked lists, circular lists, and their operations. Practice reversing, merging, and detecting cycles.'
      },
      {
        name: 'Trees & Graphs',
        description: 'Explore binary trees, BST, AVL trees, and graph algorithms. Master DFS, BFS, and tree traversal techniques.'
      },
      {
        name: 'Sorting Algorithms',
        description: 'Study various sorting algorithms including quicksort, mergesort, and heapsort. Analyze time and space complexity.'
      },
      {
        name: 'Dynamic Programming',
        description: 'Master DP concepts through problems like knapsack, longest sequences, and matrix chain multiplication.'
      }
    ]
  },
  {
    id: 'coding',
    name: 'Coding & Programming',
    icon: 'Code',
    description: 'Practice coding problems and improve your programming skills across different languages',
    topics: [
      {
        name: 'Problem Solving',
        description: 'Develop systematic approaches to break down complex problems into manageable components.'
      },
      {
        name: 'Clean Code',
        description: 'Learn principles of writing maintainable, readable, and efficient code following industry best practices.'
      },
      {
        name: 'Object-Oriented Programming',
        description: 'Master OOP concepts including inheritance, polymorphism, encapsulation, and abstraction.'
      },
      {
        name: 'Design Patterns',
        description: 'Study common design patterns like Singleton, Factory, Observer, and their practical applications.'
      },
      {
        name: 'Code Optimization',
        description: 'Learn techniques to improve code performance, reduce complexity, and optimize resource usage.'
      }
    ]
  },
  {
    id: 'aptitude',
    name: 'Quantitative Aptitude',
    icon: 'Calculator',
    description: 'Enhance your mathematical and logical reasoning abilities',
    topics: [
      {
        name: 'Number System',
        description: 'Master fundamental concepts of numbers, divisibility rules, and number properties.'
      },
      {
        name: 'Algebra',
        description: 'Practice equations, inequalities, progressions, and algebraic expressions.'
      },
      {
        name: 'Geometry',
        description: 'Study shapes, angles, triangles, circles, and coordinate geometry concepts.'
      },
      {
        name: 'Data Interpretation',
        description: 'Analyze graphs, charts, tables, and statistical data to draw meaningful conclusions.'
      },
      {
        name: 'Logical Reasoning',
        description: 'Develop skills in pattern recognition, logical deduction, and problem-solving.'
      }
    ]
  },
  {
    id: 'cs',
    name: 'Computer Science Fundamentals',
    icon: 'Cpu',
    description: 'Learn core computer science concepts and principles',
    topics: [
      {
        name: 'Operating Systems',
        description: 'Understand process management, memory allocation, file systems, and scheduling algorithms.'
      },
      {
        name: 'Database Management',
        description: 'Master SQL, database design, normalization, and transaction management.'
      },
      {
        name: 'Computer Networks',
        description: 'Learn networking protocols, OSI model, TCP/IP, and network security concepts.'
      },
      {
        name: 'System Design',
        description: 'Study scalable system design, distributed systems, and microservices architecture.'
      },
      {
        name: 'Software Engineering',
        description: 'Explore software development lifecycle, testing methodologies, and project management.'
      }
    ]
  },
  {
    id: 'verbal',
    name: 'Verbal Ability',
    icon: 'BookOpen',
    description: 'Improve your English language and communication skills',
    topics: [
      {
        name: 'Reading Comprehension',
        description: 'Develop skills to understand and analyze complex written passages effectively.'
      },
      {
        name: 'Grammar',
        description: 'Master English grammar rules, sentence structure, and common usage patterns.'
      },
      {
        name: 'Vocabulary',
        description: 'Build a strong vocabulary through word families, contextual usage, and idioms.'
      },
      {
        name: 'Verbal Reasoning',
        description: 'Practice analogies, sentence completion, and critical reasoning questions.'
      },
      {
        name: 'Communication Skills',
        description: 'Enhance written and verbal communication for professional environments.'
      }
    ]
  },
  {
    id: 'technical',
    name: 'Technical Interview Prep',
    icon: 'Terminal',
    description: 'Prepare for technical interviews with comprehensive practice',
    topics: [
      {
        name: 'System Design',
        description: 'Learn to design scalable systems, handle trade-offs, and make architectural decisions.'
      },
      {
        name: 'Problem Solving',
        description: 'Practice technical problem-solving with real interview questions and scenarios.'
      },
      {
        name: 'Code Review',
        description: 'Understand code review best practices and common pitfalls to avoid.'
      },
      {
        name: 'Architecture',
        description: 'Study different architectural patterns, their pros and cons, and use cases.'
      },
      {
        name: 'Best Practices',
        description: 'Learn industry-standard practices for code quality, testing, and deployment.'
      }
    ]
  }
];
