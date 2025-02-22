import { TestQuestion } from '../types';

// Company-specific questions for TCS
const tcsQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "What is the time complexity of quicksort in the average case?",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
    correctAnswer: 1,
    explanation: "Quicksort has an average time complexity of O(n log n) due to its divide-and-conquer approach.",
    category: "DSA",
    company: "TCS"
  },
  {
    id: 2,
    question: "In Java, what is the difference between '==' and '.equals()'?",
    options: [
      "No difference",
      "'==' compares references, .equals() compares content",
      ".equals() compares references, '==' compares content",
      "Both compare content"
    ],
    correctAnswer: 1,
    explanation: "'==' compares object references while .equals() compares the content of objects.",
    category: "Coding",
    company: "TCS"
  },
  {
    id: 3,
    question: "What is the time complexity of quicksort in the average case?",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
    correctAnswer: 1,
    explanation: "Quicksort has an average time complexity of O(n log n) due to its divide-and-conquer approach.",
    category: "DSA",
    company: "TCS"
  },
  {
    id: 4,
    question: "What is the time complexity of quicksort in the average case?",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
    correctAnswer: 1,
    explanation: "Quicksort has an average time complexity of O(n log n) due to its divide-and-conquer approach.",
    category: "DSA",
    company: "TCS"
  }
];

// Company-specific questions for Infosys
const infosysQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "What is the main advantage of using a HashMap over a Hashtable in Java?",
    options: [
      "HashMap is synchronized",
      "HashMap allows null keys and values",
      "HashMap is faster",
      "HashMap uses less memory"
    ],
    correctAnswer: 1,
    explanation: "HashMap allows one null key and multiple null values, while Hashtable doesn't allow any null keys or values.",
    category: "Coding",
    company: "Infosys"
  }
];

// Company-specific questions for Amazon
const amazonQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "What is the time complexity of finding an element in a balanced binary search tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctAnswer: 1,
    explanation: "In a balanced BST, finding an element takes O(log n) time as we eliminate half of the remaining nodes at each step.",
    category: "DSA",
    company: "Amazon"
  }
];

// Company-specific questions for Google
const googleQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "What is the space complexity of DFS traversal?",
    options: ["O(1)", "O(V+E)", "O(V)", "O(E)"],
    correctAnswer: 2,
    explanation: "DFS uses a stack that can grow up to the height of the tree, which in the worst case is O(V) where V is the number of vertices.",
    category: "DSA",
    company: "Google"
  }
];

// Extended DSA Questions
const dsaQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"],
    correctAnswer: 1,
    explanation: "Binary search has a time complexity of O(log n) as it divides the search space in half with each iteration.",
    category: "DSA",
    company: "Google"
  },
  {
    id: 2,
    question: "Which data structure uses LIFO (Last In First Out)?",
    options: ["Queue", "Stack", "Linked List", "Array"],
    correctAnswer: 1,
    explanation: "A stack follows the LIFO principle where the last element added is the first one to be removed.",
    category: "DSA",
    company: "Amazon"
  },
  {
    id: 3,
    question: "What is the space complexity of a recursive fibonacci implementation?",
    options: ["O(1)", "O(n)", "O(log n)", "O(2^n)"],
    correctAnswer: 1,
    explanation: "The recursive fibonacci implementation uses O(n) space due to the call stack.",
    category: "DSA",
    company: "Facebook"
  },
  {
    id: 4,
    question: "Which sorting algorithm has the best average case time complexity?",
    options: ["Bubble Sort", "Quick Sort", "Selection Sort", "Insertion Sort"],
    correctAnswer: 1,
    explanation: "Quick Sort has an average time complexity of O(n log n), which is optimal for comparison-based sorting.",
    category: "DSA",
    company: "Microsoft"
  },
  {
    id: 5,
    question: "What is the time complexity of inserting an element at the beginning of a linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
    correctAnswer: 0,
    explanation: "Inserting at the beginning of a linked list is O(1) as only the head pointer needs to be updated.",
    category: "DSA",
    company: "Apple"
  },
  {
    id: 25,
    question: "What is the space complexity of merge sort?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correctAnswer: 1,
    explanation: "Merge sort requires O(n) auxiliary space to store the merged arrays during the sorting process.",
    category: "DSA",
    company: "Microsoft"
  },
  {
    id: 6,
    question: "Given a sorted rotated array, how can you find the pivot element (smallest element) in O(log n) time?",
    options: ["Linear Search", "Binary Search", "Hash Map", "Stack"],
    correctAnswer: 1,
    explanation: "A modified binary search helps find the pivot efficiently. If the mid element is greater than the last element, the pivot is on the right; otherwise, it's on the left.",
    category: "DSA",
    company: "Microsoft"
  },
  {
    id: 7,
    question: "Which sorting algorithm is best for nearly sorted data?",
    options: ["Merge Sort", "Quick Sort", "Insertion Sort", "Heap Sort"],
    correctAnswer: 2,
    explanation: "Insertion Sort runs in O(n) for nearly sorted data, making it more efficient than other O(n log n) algorithms in this case.",
    category: "DSA",
    company: "Microsoft"
  },
  {
    id: 8,
    question: "Which algorithm is best for finding the shortest path in a weighted graph with negative edges?",
    options: ["Dijkstra’s Algorithm", "Floyd-Warshall Algorithm", "Bellman-Ford Algorithm", "Prim’s Algorithm"],
    correctAnswer: 2,
    explanation: "Dijkstra’s Algorithm fails with negative edges, whereas Bellman-Ford can handle negative weights in O(V E) time.",
    category: "DSA",
    company: "Microsoft"
  },
  {
    id: 9,
    question: "What is the best time complexity for searching an element in a balanced BST?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: 1,
    explanation: "Balanced BSTs (like AVL or Red-Black Trees) maintain a height of O(log n), allowing efficient search operations.",
    category: "DSA",
    company: "Microsoft"
  },
  {
    id: 10,
    question: "Which data structure is best for implementing a Min Stack in O(1) time?",
    options: ["Stack + HashMap", "Two Stacks", "O(n)", "Queue"],
    correctAnswer: 1,
    explanation: "One stack is used to store elements while a secondary stack keeps track of the minimum values.",
    category: "DSA",
    company: "Microsoft"
  },
  {
    id: 11,
    question: "How can you check if a number is a power of 2 in O(1) time?",
    options: ["n % 2 == 0", "n & (n - 1) == 0", "n / 2 == 0", "n << 1"],
    correctAnswer: 1,
    explanation: "A number that is a power of 2 has only one set bit in its binary representation.",
    category: "DSA",
    company: "Microsoft"
  }
];

// Coding Questions
const codingQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "What is the output of: console.log(typeof typeof 1)?",
    options: ["number", "string", "undefined", "object"],
    correctAnswer: 1,
    explanation: "typeof 1 returns 'number', and typeof 'number' returns 'string'.",
    category: "Coding",
    company: "Google"
  },
  {
    id: 2,
    question: "Which of the following is NOT a JavaScript data type?",
    options: ["undefined", "boolean", "float", "symbol"],
    correctAnswer: 2,
    explanation: "In JavaScript, there is no specific 'float' type. All numbers are of the 'number' type.",
    category: "Coding",
    company: "Facebook"
  },
  {
    id: 3,
    question: "What is the purpose of the 'use strict' directive in JavaScript?",
    options: [
      "To enable strict type checking",
      "To enforce stricter parsing and error handling",
      "To improve performance",
      "To enable new JavaScript features"
    ],
    correctAnswer: 1,
    explanation: "'use strict' enables strict mode which catches common coding mistakes and prevents unsafe actions.",
    category: "Coding",
    company: "Google"
  },
  {
    id: 4,
    question: "What is the difference between '==' and '===' in JavaScript?",
    options: [
      "No difference",
      "'===' compares values only",
      "'===' compares both value and type",
      "'===' is faster"
    ],
    correctAnswer: 2,
    explanation: "'===' is a strict equality operator that compares both value and type without type coercion.",
    category: "Coding",
    company: "Amazon"
  },
  {
    id: 5,
    question: "What is a closure in JavaScript?",
    options: [
      "A way to close browser windows",
      "A function with access to its outer scope",
      "A method to end loops",
      "A way to close database connections"
    ],
    correctAnswer: 1,
    explanation: "A closure is a function that retains access to its lexical scope even when executed outside that scope.",
    category: "Coding",
    company: "Apple"
  },
  {
    id: 6,
    question: "What is the output of: console.log(0.1 + 0.2 === 0.3)?",
    options: ["true", "false", "undefined", "NaN"],
    correctAnswer: 1,
    explanation: "Due to floating-point precision issues, 0.1 + 0.2 results in 0.30000000000000004, making the comparison false.",
    category: "Coding",
    company: "Amazon"
  },
  {
    id: 7,
    question: "What is the worst-case time complexity of Merge Sort?",
    options: ["O(n)", "O(n²)", "O(n log n)", "O(log n)"],
    correctAnswer: 2,
    explanation: "Merge Sort consistently divides the array and merges the sorted halves, resulting in O(n log n) complexity.",
    category: "Coding",
    company: "Google"
  }
];

// Aptitude Questions
const aptitudeQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "If a train travels 120 km in 2 hours, what is its speed?",
    options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
    correctAnswer: 1,
    explanation: "Speed = Distance / Time = 120 km / 2 hours = 60 km/h",
    category: "Aptitude",
    company: "TCS"
  },
  {
    id: 2,
    question: "Find the next number in sequence: 2, 4, 8, 16, __",
    options: ["20", "24", "32", "36"],
    correctAnswer: 2,
    explanation: "Each number is doubled to get the next number. So, 16 × 2 = 32",
    category: "Aptitude",
    company: "Infosys"
  },
  {
    id: 3,
    question: "If 8 workers can complete a job in 6 days, how many workers are needed to complete it in 2 days?",
    options: ["16", "24", "32", "40"],
    correctAnswer: 1,
    explanation: "Using inverse proportion: (8 workers × 6 days) / 2 days = 24 workers",
    category: "Aptitude",
    company: "Wipro"
  },
  {
    id: 4,
    question: "What percentage of 80 is 20?",
    options: ["15%", "20%", "25%", "30%"],
    correctAnswer: 2,
    explanation: "20 is 25% of 80 because (20 / 80) × 100 = 25%",
    category: "Aptitude",
    company: "Accenture"
  },
  {
    id: 5,
    question: "A train 100 meters long passes a pole in 5 seconds. What is its speed in km/hr?",
    options: ["72", "60", "90", "108"],
    correctAnswer: 0,
    explanation: "Speed = (100 meters / 5 seconds) = 20 m/s, which converts to 72 km/hr",
    category: "Aptitude",
    company: "Cognizant"
  },
  {
    id: 25,
    question: "A car travels 150 km in 2.5 hours. What is its speed in meters per second?",
    options: ["12.5 m/s", "16.67 m/s", "20 m/s", "25 m/s"],
    correctAnswer: 1,
    explanation: "Speed = (150 km / 2.5 hours) = 60 km/hr, which is approximately 16.67 m/s",
    category: "Aptitude",
    company: "TCS"
  }
];

// CS Questions
const csQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "What is the time complexity of finding the shortest path in a weighted graph using Dijkstra’s algorithm with a priority queue?",
    options: ["O(V²)", "O(V + V log V)", "O(V + E log E)", "O(E log V)"],
    correctAnswer: 1,
    explanation: "Using a priority queue (min-heap), Dijkstra’s algorithm runs in O(E + V log V) time, with the logarithmic term from queue operations.",
    category: "CS",
    company: "CS"
  },
  {
    id: 2,
    question: "What is inheritance in OOP?",
    options: ["Data hiding", "Method overloading", "Creating objects", "Extending class properties"],
    correctAnswer: 3,
    explanation: "Inheritance allows a class to inherit properties and methods from a parent class.",
    category: "CS",
    company: "Microsoft"
  },
  {
    id: 3,
    question: "What is the purpose of virtual memory?",
    options: ["Increase RAM speed", "Extend physical memory", "Improve CPU performance", "Reduce power consumption"],
    correctAnswer: 1,
    explanation: "Virtual memory uses disk space to extend the available physical memory (RAM).",
    category: "CS",
    company: "Intel"
  },
  {
    id: 4,
    question: "What is a deadlock in operating systems?",
    options: ["System crash", "Infinite loop", "Resource conflict", "Memory leak"],
    correctAnswer: 2,
    explanation: "Deadlock occurs when processes are waiting for each other's resources, causing a circular dependency.",
    category: "CS",
    company: "IBM"
  },
  {
    id: 5,
    question: "Which HTTP method is idempotent?",
    options: ["POST", "GET", "PATCH", "DELETE"],
    correctAnswer: 1,
    explanation: "GET is idempotent as multiple identical requests yield the same result.",
    category: "CS",
    company: "Amazon"
  },
  {
    id: 25,
    question: "What is the difference between process and thread?",
    options: [
      "Processes share memory, threads don't",
      "Threads share memory, processes don't",
      "Both share memory",
      "Neither shares memory"
    ],
    correctAnswer: 1,
    explanation: "Threads within the same process share memory space, while processes have separate memory spaces.",
    category: "CS",
    company: "Microsoft"
  },
  {
    id: 6,
    question: "What data structure is used in Tarjan’s algorithm for finding Strongly Connected Components (SCCs)?",
    options: ["Queue", "Stack", "Linked List", "Heap"],
    correctAnswer: 1,
    explanation: "Tarjan’s algorithm uses a stack to maintain nodes during DFS for identifying strongly connected components.",
    category: "CS",
    company: "CS"
  }
];

// Extended VA Questions
const vaQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "Identify the grammatically correct sentence.",
    options: [
      "Neither of the two boys were selected for the final round",
      "Neither of the two boys was selected for the final round",
      "Neither of the two boys have been selected for the final round",
      "Neither of the two boys were being selected for the final round"
    ],
    correctAnswer: 1,
    explanation: "The subject 'neither' is singular, so it takes a singular verb.",
    category: "VA"
  }
];

// Company-specific question generator
export const generateQuestionsForCompany = (company: string): TestQuestion[] => {
  let companyQuestions: TestQuestion[] = [];
  
  switch (company.toLowerCase()) {
    case 'tcs':
      companyQuestions = tcsQuestions;
      break;
    case 'infosys':
      companyQuestions = infosysQuestions;
      break;
    case 'amazon':
      companyQuestions = amazonQuestions;
      break;
    case 'google':
      companyQuestions = googleQuestions;
      break;
    default:
      companyQuestions = [...dsaQuestions, ...codingQuestions, ...aptitudeQuestions, ...csQuestions];
  }
  
  return companyQuestions
    .filter(q => q.company?.toLowerCase() === company.toLowerCase())
    .sort(() => Math.random() - 0.5)
    .slice(0, 25);
};

// Subject-specific questions generator
export const generateQuestionsForSubject = (subjectId: string): TestQuestion[] => {
  switch (subjectId.toLowerCase()) {
    case 'dsa':
      return dsaQuestions;
    case 'coding':
      return codingQuestions;
    case 'aptitude':
      return aptitudeQuestions;
    case 'cs':
      return csQuestions;
    default:
      return [];
  }
};
