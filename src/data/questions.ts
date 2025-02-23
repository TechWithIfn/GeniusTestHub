import { TestQuestion } from '../types';

// Data Structures & Algorithms Questions
const dsaQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
    correctAnswer: 1,
    explanation: "Binary search has a time complexity of O(log n) as it divides the search space in half with each iteration.",
    category: "DSA"
  },
  {
    id: 2,
    question: "What is the space complexity of merge sort?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correctAnswer: 1,
    explanation: "Merge sort requires O(n) auxiliary space to store the merged arrays during sorting.",
    category: "DSA"
  },
  {
    id: 3,
    question: "Which data structure is best for implementing a priority queue?",
    options: ["Array", "Linked List", "Heap", "Stack"],
    correctAnswer: 2,
    explanation: "A heap is ideal for priority queues as it maintains elements in a partially ordered state and supports efficient insertion and extraction.",
    category: "DSA"
  },
  {
    id: 4,
    question: "What is the worst-case time complexity of quicksort?",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
    correctAnswer: 2,
    explanation: "Quicksort's worst-case time complexity is O(n²) when the pivot selection consistently results in unbalanced partitions.",
    category: "DSA"
  },
  {
    id: 5,
    question: "Which traversal of a binary tree visits the root first?",
    options: ["Inorder", "Preorder", "Postorder", "Level order"],
    correctAnswer: 1,
    explanation: "Preorder traversal visits the root node first, then the left subtree, and finally the right subtree.",
    category: "DSA"
  },
  {
    id: 6,
    question: "What is the time complexity of inserting into a balanced BST?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctAnswer: 1,
    explanation: "Insertion in a balanced BST takes O(log n) time as we traverse down a single path from root to leaf.",
    category: "DSA"
  },
  {
    id: 7,
    question: "Which sorting algorithm is stable by nature?",
    options: ["Quicksort", "Merge sort", "Heap sort", "Selection sort"],
    correctAnswer: 1,
    explanation: "Merge sort is naturally stable as it preserves the relative order of equal elements during merging.",
    category: "DSA"
  },
  {
    id: 8,
    question: "What is the time complexity of finding an element in a hash table?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctAnswer: 0,
    explanation: "Hash tables provide O(1) average case time complexity for element lookup.",
    category: "DSA"
  },
  {
    id: 9,
    question: "Which data structure is used for implementing DFS?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    correctAnswer: 1,
    explanation: "DFS uses a stack (either explicit or through recursion) to keep track of nodes to visit.",
    category: "DSA"
  },
  {
    id: 10,
    question: "What is the space complexity of recursive fibonacci?",
    options: ["O(1)", "O(n)", "O(log n)", "O(2^n)"],
    correctAnswer: 1,
    explanation: "The recursive fibonacci implementation uses O(n) space due to the call stack depth.",
    category: "DSA"
  }
];

// Coding & Programming Questions
const codingQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "What is a closure in JavaScript?",
    options: [
      "A way to close browser windows",
      "A function with access to its outer scope",
      "A method to end loops",
      "A way to close database connections"
    ],
    correctAnswer: 1,
    explanation: "A closure is a function that has access to variables in its outer (enclosing) lexical scope.",
    category: "Coding"
  },
  {
    id: 2,
    question: "What is the purpose of the 'use strict' directive?",
    options: [
      "To enable type checking",
      "To enforce stricter parsing and error handling",
      "To improve performance",
      "To enable new features"
    ],
    correctAnswer: 1,
    explanation: "'use strict' enables strict mode which catches common coding mistakes and prevents unsafe actions.",
    category: "Coding"
  },
  {
    id: 3,
    question: "What is the difference between let and var?",
    options: [
      "No difference",
      "let is block-scoped, var is function-scoped",
      "var is block-scoped, let is function-scoped",
      "let is slower than var"
    ],
    correctAnswer: 1,
    explanation: "let declarations are block-scoped while var declarations are function-scoped or globally-scoped.",
    category: "Coding"
  },
  {
    id: 4,
    question: "What is the purpose of async/await?",
    options: [
      "To make code run faster",
      "To handle asynchronous operations synchronously",
      "To create loops",
      "To define classes"
    ],
    correctAnswer: 1,
    explanation: "async/await provides a cleaner syntax for handling promises and asynchronous operations.",
    category: "Coding"
  },
  {
    id: 5,
    question: "What is dependency injection?",
    options: [
      "A way to inject code into production",
      "A design pattern for handling dependencies",
      "A type of database",
      "A testing framework"
    ],
    correctAnswer: 1,
    explanation: "Dependency injection is a design pattern where dependencies are passed into an object instead of being created inside.",
    category: "Coding"
  },
  {
    id: 6,
    question: "What is the purpose of the map function?",
    options: [
      "To create a map of values",
      "To transform array elements",
      "To store key-value pairs",
      "To find locations"
    ],
    correctAnswer: 1,
    explanation: "map creates a new array with the results of calling a function for every array element.",
    category: "Coding"
  },
  {
    id: 7,
    question: "What is the purpose of TypeScript interfaces?",
    options: [
      "To create UI interfaces",
      "To define object shapes and contracts",
      "To improve performance",
      "To create databases"
    ],
    correctAnswer: 1,
    explanation: "Interfaces in TypeScript define contracts in your code and provide explicit names for type checking.",
    category: "Coding"
  },
  {
    id: 8,
    question: "What is the difference between null and undefined?",
    options: [
      "They are the same",
      "undefined means not assigned, null is explicit",
      "null means not assigned, undefined is explicit",
      "Both mean error"
    ],
    correctAnswer: 1,
    explanation: "undefined represents a variable that hasn't been assigned a value, while null is an explicit assignment of no value.",
    category: "Coding"
  },
  {
    id: 9,
    question: "What is the purpose of the reduce function?",
    options: [
      "To make arrays smaller",
      "To accumulate values into a single result",
      "To remove elements",
      "To sort arrays"
    ],
    correctAnswer: 1,
    explanation: "reduce executes a reducer function on each element of the array to produce a single output value.",
    category: "Coding"
  },
  {
    id: 10,
    question: "What is the purpose of the Promise.all method?",
    options: [
      "To cancel all promises",
      "To wait for all promises to complete",
      "To reject promises",
      "To create new promises"
    ],
    correctAnswer: 1,
    explanation: "Promise.all waits for all promises in an array to resolve and returns their results as an array.",
    category: "Coding"
  }
];

// Quantitative Aptitude Questions
const aptitudeQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "If a train travels 120 km in 2 hours, what is its speed?",
    options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
    correctAnswer: 1,
    explanation: "Speed = Distance/Time = 120/2 = 60 km/h",
    category: "Aptitude"
  },
  {
    id: 2,
    question: "Find the next number in sequence: 2, 4, 8, 16, __",
    options: ["20", "24", "32", "36"],
    correctAnswer: 2,
    explanation: "Each number is doubled to get the next number. So, 16 × 2 = 32",
    category: "Aptitude"
  },
  {
    id: 3,
    question: "What percentage of 80 is 20?",
    options: ["15%", "20%", "25%", "30%"],
    correctAnswer: 2,
    explanation: "20 is 25% of 80 because (20/80) × 100 = 25%",
    category: "Aptitude"
  },
  {
    id: 4,
    question: "If 8 workers can complete a job in 6 days, how many workers are needed to complete it in 2 days?",
    options: ["16", "24", "32", "40"],
    correctAnswer: 1,
    explanation: "Using inverse proportion: (8 × 6) / 2 = 24 workers",
    category: "Aptitude"
  },
  {
    id: 5,
    question: "A car travels 150 km in 2.5 hours. What is its speed in m/s?",
    options: ["12.5 m/s", "16.67 m/s", "20 m/s", "25 m/s"],
    correctAnswer: 1,
    explanation: "Speed = 150 km/2.5 h = 60 km/h = 16.67 m/s",
    category: "Aptitude"
  },
  {
    id: 6,
    question: "What is the compound interest on $1000 at 10% per annum for 2 years?",
    options: ["$210", "$220", "$221", "$200"],
    correctAnswer: 2,
    explanation: "CI = P(1 + r/100)^t - P = 1000(1 + 0.1)^2 - 1000 = 221",
    category: "Aptitude"
  },
  {
    id: 7,
    question: "If the ratio of boys to girls in a class is 3:2 and there are 30 boys, how many students are there in total?",
    options: ["40", "50", "60", "70"],
    correctAnswer: 1,
    explanation: "If 3 parts = 30 boys, 1 part = 10. So 5 parts = 50 students total",
    category: "Aptitude"
  },
  {
    id: 8,
    question: "What is the probability of getting a sum of 7 when rolling two dice?",
    options: ["1/6", "5/36", "6/36", "7/36"],
    correctAnswer: 2,
    explanation: "Favorable outcomes (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6; Total outcomes = 36",
    category: "Aptitude"
  },
  {
    id: 9,
    question: "If a square has a perimeter of 20 units, what is its area?",
    options: ["16", "25", "36", "49"],
    correctAnswer: 1,
    explanation: "Side length = perimeter/4 = 20/4 = 5; Area = 5² = 25",
    category: "Aptitude"
  },
  {
    id: 10,
    question: "What is the average of first 10 natural numbers?",
    options: ["4.5", "5.5", "6.5", "7.5"],
    correctAnswer: 1,
    explanation: "Sum = 55; Average = 55/10 = 5.5",
    category: "Aptitude"
  }
];

// Computer Science Fundamentals Questions
const csQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "What is the purpose of virtual memory?",
    options: [
      "To increase RAM speed",
      "To extend physical memory using disk space",
      "To improve CPU performance",
      "To reduce power consumption"
    ],
    correctAnswer: 1,
    explanation: "Virtual memory uses disk space to extend the available physical memory (RAM).",
    category: "CS"
  },
  {
    id: 2,
    question: "What is a deadlock in operating systems?",
    options: [
      "System crash",
      "Infinite loop",
      "Resource conflict between processes",
      "Memory leak"
    ],
    correctAnswer: 2,
    explanation: "Deadlock occurs when processes are waiting for each other's resources, creating a circular dependency.",
    category: "CS"
  },
  {
    id: 3,
    question: "What is the purpose of ACID properties in databases?",
    options: [
      "To improve query speed",
      "To ensure database transaction reliability",
      "To reduce storage space",
      "To encrypt data"
    ],
    correctAnswer: 1,
    explanation: "ACID properties ensure reliable processing of database transactions.",
    category: "CS"
  },
  {
    id: 4,
    question: "What is the difference between compiler and interpreter?",
    options: [
      "No difference",
      "Compiler translates all at once, interpreter line by line",
      "Interpreter translates all at once, compiler line by line",
      "Both translate line by line"
    ],
    correctAnswer: 1,
    explanation: "A compiler translates the entire program at once, while an interpreter translates and executes line by line.",
    category: "CS"
  },
  {
    id: 5,
    question: "What is the purpose of DNS?",
    options: [
      "To secure websites",
      "To translate domain names to IP addresses",
      "To compress data",
      "To encrypt traffic"
    ],
    correctAnswer: 1,
    explanation: "DNS (Domain Name System) translates human-readable domain names into IP addresses.",
    category: "CS"
  },
  {
    id: 6,
    question: "What is cache memory?",
    options: [
      "Main memory",
      "Fast memory between CPU and main memory",
      "Virtual memory",
      "Hard disk storage"
    ],
    correctAnswer: 1,
    explanation: "Cache memory is a fast memory that sits between the CPU and main memory to improve performance.",
    category: "CS"
  },
  {
    id: 7,
    question: "What is the purpose of an operating system?",
    options: [
      "To run games",
      "To manage hardware and software resources",
      "To store data",
      "To connect to internet"
    ],
    correctAnswer: 1,
    explanation: "An operating system manages computer hardware and software resources.",
    category: "CS"
  },
  {
    id: 8,
    question: "What is the difference between HTTP and HTTPS?",
    options: [
      "No difference",
      "HTTPS is secure, HTTP is not",
      "HTTP is secure, HTTPS is not",
      "They use different ports only"
    ],
    correctAnswer: 1,
    explanation: "HTTPS is the secure version of HTTP, using SSL/TLS for encryption.",
    category: "CS"
  },
  {
    id: 9,
    question: "What is the purpose of a primary key in a database?",
    options: [
      "To encrypt data",
      "To uniquely identify records",
      "To compress data",
      "To sort data"
    ],
    correctAnswer: 1,
    explanation: "A primary key uniquely identifies each record in a database table.",
    category: "CS"
  },
  {
    id: 10,
    question: "What is the purpose of an IP address?",
    options: [
      "To store websites",
      "To uniquely identify devices on a network",
      "To encrypt data",
      "To compress data"
    ],
    correctAnswer: 1,
    explanation: "An IP address uniquely identifies devices on a network for communication.",
    category: "CS"
  }
];

// Verbal Ability Questions
const verbalQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "Choose the correct synonym for 'Benevolent':",
    options: ["Malicious", "Kind", "Hostile", "Indifferent"],
    correctAnswer: 1,
    explanation: "'Benevolent' means kind and generous, similar to 'Kind'.",
    category: "Verbal"
  },
  {
    id: 2,
    question: "Identify the correct antonym for 'Abundant':",
    options: ["Plentiful", "Scarce", "Numerous", "Ample"],
    correctAnswer: 1,
    explanation: "'Abundant' means plentiful, so its antonym is 'Scarce'.",
    category: "Verbal"
  },
  {
    id: 3,
    question: "Choose the correctly spelled word:",
    options: ["Accomodate", "Accommodate", "Acommodate", "Accomadate"],
    correctAnswer: 1,
    explanation: "'Accommodate' is the correct spelling with two 'c's and two 'm's.",
    category: "Verbal"
  },
  {
    id: 4,
    question: "Select the correct meaning of the idiom 'Beat around the bush':",
    options: ["To win easily", "To avoid the main topic", "To search thoroughly", "To get lost"],
    correctAnswer: 1,
    explanation: "'Beat around the bush' means to avoid talking about something directly.",
    category: "Verbal"
  },
  {
    id: 5,
    question: "Identify the passive voice: 'The letter ____ written yesterday.'",
    options: ["is", "was", "were", "will"],
    correctAnswer: 1,
    explanation: "'Was' is correct as the action happened in the past.",
    category: "Verbal"
  },
  {
    id: 6,
    question: "Choose the correct article: '__ European country'",
    options: ["A", "An", "The", "No article"],
    correctAnswer: 0,
    explanation: "'A' is used before words beginning with a consonant sound, including 'European'.",
    category: "Verbal"
  },
  {
    id: 7,
    question: "Select the correct plural form of 'criterion':",
    options: ["Criterions", "Criteria", "Criterias", "Criterion"],
    correctAnswer: 1,
    explanation: "'Criteria' is the correct plural form of 'criterion'.",
    category: "Verbal"
  },
  {
    id: 8,
    question: "Identify the correct form: 'Neither of the students ____ present.'",
    options: ["are", "is", "were", "have"],
    correctAnswer: 1,
    explanation: "'Is' is correct as 'neither' is treated as singular.",
    category: "Verbal"
  },
  {
    id: 9,
    question: "Choose the correct preposition: 'He is afraid ____ spiders.'",
    options: ["from", "of", "at", "with"],
    correctAnswer: 1,
    explanation: "'Of' is the correct preposition to use with 'afraid'.",
    category: "Verbal"
  },
  {
    id: 10,
    question: "Select the correct word order: 'He (1)bought (2)never (3)has (4)a car'",
    options: ["1-2-3-4", "2-3-1-4", "3-2-1-4", "4-3-2-1"],
    correctAnswer: 2,
    explanation: "The correct order is 'He has never bought a car'.",
    category: "Verbal"
  }
];

// Technical Interview Questions
const technicalQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "What is the difference between REST and SOAP?",
    options: [
      "They are the same",
      "REST is lightweight and flexible, SOAP is more structured",
      "SOAP is lightweight, REST is more structured",
      "They are different programming languages"
    ],
    correctAnswer: 1,
    explanation: "REST is a lightweight architectural style while SOAP is a more structured protocol.",
    category: "Technical"
  },
  {
    id: 2,
    question: "Explain microservices architecture:",
    options: [
      "A single large application",
      "Multiple independent services working together",
      "A database design pattern",
      "A front-end framework"
    ],
    correctAnswer: 1,
    explanation: "Microservices architecture breaks down applications into small, independent services.",
    category: "Technical"
  },
  {
    id: 3,
    question: "What is CI/CD?",
    options: [
      "Code Integration/Code Deployment",
      "Continuous Integration/Continuous Deployment",
      "Computer Interface/Computer Design",
      "Continuous Interface/Continuous Design"
    ],
    correctAnswer: 1,
    explanation: "CI/CD stands for Continuous Integration/Continuous Deployment, automating build and deployment processes.",
    category: "Technical"
  },
  {
    id: 4,
    question: "What is the purpose of load balancing?",
    options: [
      "To reduce server load",
      "To distribute traffic across multiple servers",
      "To increase server capacity",
      "To backup data"
    ],
    correctAnswer: 1,
    explanation: "Load balancing distributes incoming network traffic across multiple servers to ensure no single server bears too much load.",
    category: "Technical"
  },
  {
    id: 5,
    question: "What is the CAP theorem?",
    options: [
      "A programming principle",
      "Consistency, Availability, Partition tolerance trade-offs",
      "A security protocol",
      "A database design pattern"
    ],
    correctAnswer: 1,
    explanation: "CAP theorem states that a distributed system can only guarantee two out of three: Consistency, Availability, and Partition tolerance.",
    category: "Technical"
  },
  {
    id: 6,
    question: "What is the purpose of Docker?",
    options: [
      "To write code",
      "To containerize applications",
      "To design interfaces",
      "To test code"
    ],
    correctAnswer: 1,
    explanation: "Docker is used to containerize applications, making them portable and consistent across different environments.",
    category: "Technical"
  },
  {
    id: 7,
    question: "What is the difference between SQL and NoSQL databases?",
    options: [
      "They are the same",
      "SQL is structured, NoSQL is more flexible",
      "NoSQL is structured, SQL is more flexible",
      "They store different types of data"
    ],
    correctAnswer: 1,
    explanation: "SQL databases are structured and table-based, while NoSQL databases are more flexible and can handle unstructured data.",
    category: "Technical"
  },
  {
    id: 8,
    question: "What is the purpose of version control?",
    options: [
      "To write code",
      "To track and manage code changes",
      "To deploy applications",
      "To test applications"
    ],
    correctAnswer: 1,
    explanation: "Version control systems track and manage changes to code, allowing multiple developers to work together effectively.",
    category: "Technical"
  },
  {
    id: 9,
    question: "What is the difference between unit testing and integration testing?",
    options: [
      "They are the same",
      "Unit tests individual components, integration tests interactions",
      "Integration tests individual components, unit tests interactions",
      "They test different languages"
    ],
    correctAnswer: 1,
    explanation: "Unit testing tests individual components in isolation, while integration testing tests how components work together.",
    category: "Technical"
  },
  {
    id: 10,
    question: "What is the purpose of caching?",
    options: [
      "To delete data",
      "To store frequently accessed data for quick access",
      "To encrypt data",
      "To compress data"
    ],
    correctAnswer: 1,
    explanation: "Caching stores frequently accessed data in a faster storage layer to improve performance.",
    category: "Technical"
  }
];

// Capgemini specific questions
const capgeminiQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "What is the difference between abstract class and interface?",
    options: [
      "They are the same",
      "Abstract class can have implementation, interface cannot",
      "Interface can have implementation, abstract class cannot",
      "Both can have full implementation"
    ],
    correctAnswer: 1,
    explanation: "Abstract classes can have method implementations while interfaces (before Java 8) can only have method declarations.",
    category: "Coding",
    company: "Capgemini"
  },
  {
    id: 2,
    question: "What is dependency injection in Spring?",
    options: [
      "A way to create objects",
      "A design pattern for handling dependencies",
      "A type of database",
      "A testing framework"
    ],
    correctAnswer: 1,
    explanation: "Dependency injection is a design pattern where dependencies are provided to objects instead of being created internally.",
    category: "Framework",
    company: "Capgemini"
  }
];

// Cognizant specific questions
const cognizantQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "What is the purpose of JUnit?",
    options: [
      "To write Java code",
      "To test Java code",
      "To compile Java code",
      "To deploy Java applications"
    ],
    correctAnswer: 1,
    explanation: "JUnit is a testing framework for Java applications that helps in unit testing.",
    category: "Testing",
    company: "Cognizant"
  },
  {
    id: 2,
    question: "What is the difference between GET and POST methods?",
    options: [
      "No difference",
      "GET is for retrieving data, POST for sending data",
      "POST is for retrieving data, GET for sending data",
      "Both are for sending data"
    ],
    correctAnswer: 1,
    explanation: "GET requests retrieve data and are idempotent, while POST requests send data to be processed.",
    category: "Web",
    company: "Cognizant"
  }
];

// Function to get questions for a specific company
export const generateQuestionsForCompany = (company: string): TestQuestion[] => {
  let companySpecificQuestions: TestQuestion[] = [];
  
  switch (company.toLowerCase()) {
    case 'capgemini':
      companySpecificQuestions = capgeminiQuestions;
      break;
    case 'cognizant':
      companySpecificQuestions = cognizantQuestions;
      break;
    default:
      companySpecificQuestions = [...dsaQuestions, ...codingQuestions, ...aptitudeQuestions, ...csQuestions, ...verbalQuestions, ...technicalQuestions];
  }
  
  return companySpecificQuestions
    .filter(q => q.company?.toLowerCase() === company.toLowerCase())
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);
};

// Function to get questions for a specific subject
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
    case 'verbal':
      return verbalQuestions;
    case 'technical':
      return technicalQuestions;
    default:
      return [];
  }
};
