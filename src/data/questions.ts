import type { TestQuestion } from "../types"

// Data Structures & Algorithms Questions
const dsaQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
    correctAnswer: 1,
    explanation:
      "Binary search has a time complexity of O(log n) as it divides the search space in half with each iteration.",
    category: "DSA",
  },
  {
    id: 2,
    question: "What is the space complexity of merge sort?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correctAnswer: 1,
    explanation: "Merge sort requires O(n) auxiliary space to store the merged arrays during sorting.",
    category: "DSA",
  },
  {
    id: 3,
    question: "Which data structure is best for implementing a priority queue?",
    options: ["Array", "Linked List", "Heap", "Stack"],
    correctAnswer: 2,
    explanation:
      "A heap is ideal for priority queues as it maintains elements in a partially ordered state and supports efficient insertion and extraction.",
    category: "DSA",
  },
  {
    id: 4,
    question: "What is the worst-case time complexity of quicksort?",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
    correctAnswer: 2,
    explanation:
      "Quicksort's worst-case time complexity is O(n²) when the pivot selection consistently results in unbalanced partitions.",
    category: "DSA",
  },
  {
    id: 5,
    question: "Which traversal of a binary tree visits the root first?",
    options: ["Inorder", "Preorder", "Postorder", "Level order"],
    correctAnswer: 1,
    explanation: "Preorder traversal visits the root node first, then the left subtree, and finally the right subtree.",
    category: "DSA",
  },
  {
    id: 6,
    question: "What is the time complexity of inserting into a balanced BST?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctAnswer: 1,
    explanation: "Insertion in a balanced BST takes O(log n) time as we traverse down a single path from root to leaf.",
    category: "DSA",
  },
  {
    id: 7,
    question: "Which sorting algorithm is stable by nature?",
    options: ["Quicksort", "Merge sort", "Heap sort", "Selection sort"],
    correctAnswer: 1,
    explanation: "Merge sort is naturally stable as it preserves the relative order of equal elements during merging.",
    category: "DSA",
  },
  {
    id: 8,
    question: "What is the time complexity of finding an element in a hash table?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctAnswer: 0,
    explanation: "Hash tables provide O(1) average case time complexity for element lookup.",
    category: "DSA",
  },
  {
    id: 9,
    question: "Which data structure is used for implementing DFS?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    correctAnswer: 1,
    explanation: "DFS uses a stack (either explicit or through recursion) to keep track of nodes to visit.",
    category: "DSA",
  },
  {
    id: 10,
    question: "What is the space complexity of recursive fibonacci?",
    options: ["O(1)", "O(n)", "O(log n)", "O(2^n)"],
    correctAnswer: 1,
    explanation: "The recursive fibonacci implementation uses O(n) space due to the call stack depth.",
    category: "DSA",
  },
]

// Coding & Programming Questions
const codingQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "What is a closure in JavaScript?",
    options: [
      "A way to close browser windows",
      "A function with access to its outer scope",
      "A method to end loops",
      "A way to close database connections",
    ],
    correctAnswer: 1,
    explanation: "A closure is a function that has access to variables in its outer (enclosing) lexical scope.",
    category: "Coding",
  },
  {
    id: 2,
    question: "What is the purpose of the 'use strict' directive?",
    options: [
      "To enable type checking",
      "To enforce stricter parsing and error handling",
      "To improve performance",
      "To enable new features",
    ],
    correctAnswer: 1,
    explanation: "'use strict' enables strict mode which catches common coding mistakes and prevents unsafe actions.",
    category: "Coding",
  },
  {
    id: 3,
    question: "What is the difference between let and var?",
    options: [
      "No difference",
      "let is block-scoped, var is function-scoped",
      "var is block-scoped, let is function-scoped",
      "let is slower than var",
    ],
    correctAnswer: 1,
    explanation: "let declarations are block-scoped while var declarations are function-scoped or globally-scoped.",
    category: "Coding",
  },
  {
    id: 4,
    question: "What is the purpose of async/await?",
    options: [
      "To make code run faster",
      "To handle asynchronous operations synchronously",
      "To create loops",
      "To define classes",
    ],
    correctAnswer: 1,
    explanation: "async/await provides a cleaner syntax for handling promises and asynchronous operations.",
    category: "Coding",
  },
  {
    id: 5,
    question: "What is dependency injection?",
    options: [
      "A way to inject code into production",
      "A design pattern for handling dependencies",
      "A type of database",
      "A testing framework",
    ],
    correctAnswer: 1,
    explanation:
      "Dependency injection is a design pattern where dependencies are passed into an object instead of being created inside.",
    category: "Coding",
  },
  {
    id: 6,
    question: "What is the purpose of the map function?",
    options: [
      "To create a map of values",
      "To transform array elements",
      "To store key-value pairs",
      "To find locations",
    ],
    correctAnswer: 1,
    explanation: "map creates a new array with the results of calling a function for every array element.",
    category: "Coding",
  },
  {
    id: 7,
    question: "What is the purpose of TypeScript interfaces?",
    options: [
      "To create UI interfaces",
      "To define object shapes and contracts",
      "To improve performance",
      "To create databases",
    ],
    correctAnswer: 1,
    explanation: "Interfaces in TypeScript define contracts in your code and provide explicit names for type checking.",
    category: "Coding",
  },
  {
    id: 8,
    question: "What is the difference between null and undefined?",
    options: [
      "They are the same",
      "undefined means not assigned, null is explicit",
      "null means not assigned, undefined is explicit",
      "Both mean error",
    ],
    correctAnswer: 1,
    explanation:
      "undefined represents a variable that hasn't been assigned a value, while null is an explicit assignment of no value.",
    category: "Coding",
  },
  {
    id: 9,
    question: "What is the purpose of the reduce function?",
    options: [
      "To make arrays smaller",
      "To accumulate values into a single result",
      "To remove elements",
      "To sort arrays",
    ],
    correctAnswer: 1,
    explanation: "reduce executes a reducer function on each element of the array to produce a single output value.",
    category: "Coding",
  },
  {
    id: 10,
    question: "What is the purpose of the Promise.all method?",
    options: [
      "To cancel all promises",
      "To wait for all promises to complete",
      "To reject promises",
      "To create new promises",
    ],
    correctAnswer: 1,
    explanation: "Promise.all waits for all promises in an array to resolve and returns their results as an array.",
    category: "Coding",
  },
]

// Quantitative Aptitude Questions
const aptitudeQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "If a train travels 120 km in 2 hours, what is its speed?",
    options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
    correctAnswer: 1,
    explanation: "Speed = Distance/Time = 120/2 = 60 km/h",
    category: "Aptitude",
  },
  {
    id: 2,
    question: "Find the next number in sequence: 2, 4, 8, 16, __",
    options: ["20", "24", "32", "36"],
    correctAnswer: 2,
    explanation: "Each number is doubled to get the next number. So, 16 × 2 = 32",
    category: "Aptitude",
  },
  {
    id: 3,
    question: "What percentage of 80 is 20?",
    options: ["15%", "20%", "25%", "30%"],
    correctAnswer: 2,
    explanation: "20 is 25% of 80 because (20/80) × 100 = 25%",
    category: "Aptitude",
  },
  {
    id: 4,
    question: "If 8 workers can complete a job in 6 days, how many workers are needed to complete it in 2 days?",
    options: ["16", "24", "32", "40"],
    correctAnswer: 1,
    explanation: "Using inverse proportion: (8 × 6) / 2 = 24 workers",
    category: "Aptitude",
  },
  {
    id: 5,
    question: "A car travels 150 km in 2.5 hours. What is its speed in m/s?",
    options: ["12.5 m/s", "16.67 m/s", "20 m/s", "25 m/s"],
    correctAnswer: 1,
    explanation: "Speed = 150 km/2.5 h = 60 km/h = 16.67 m/s",
    category: "Aptitude",
  },
  {
    id: 6,
    question: "What is the compound interest on $1000 at 10% per annum for 2 years?",
    options: ["$210", "$220", "$221", "$200"],
    correctAnswer: 2,
    explanation: "CI = P(1 + r/100)^t - P = 1000(1 + 0.1)^2 - 1000 = 221",
    category: "Aptitude",
  },
  {
    id: 7,
    question:
      "If the ratio of boys to girls in a class is 3:2 and there are 30 boys, how many students are there in total?",
    options: ["40", "50", "60", "70"],
    correctAnswer: 1,
    explanation: "If 3 parts = 30 boys, 1 part = 10. So 5 parts = 50 students total",
    category: "Aptitude",
  },
  {
    id: 8,
    question: "What is the probability of getting a sum of 7 when rolling two dice?",
    options: ["1/6", "5/36", "6/36", "7/36"],
    correctAnswer: 2,
    explanation: "Favorable outcomes (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6; Total outcomes = 36",
    category: "Aptitude",
  },
  {
    id: 9,
    question: "If a square has a perimeter of 20 units, what is its area?",
    options: ["16", "25", "36", "49"],
    correctAnswer: 1,
    explanation: "Side length = perimeter/4 = 20/4 = 5; Area = 5² = 25",
    category: "Aptitude",
  },
  {
    id: 10,
    question: "What is the average of first 10 natural numbers?",
    options: ["4.5", "5.5", "6.5", "7.5"],
    correctAnswer: 1,
    explanation: "Sum = 55; Average = 55/10 = 5.5",
    category: "Aptitude",
  },
]

// Computer Science Fundamentals Questions
const csQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "What is the purpose of virtual memory?",
    options: [
      "To increase RAM speed",
      "To extend physical memory using disk space",
      "To improve CPU performance",
      "To reduce power consumption",
    ],
    correctAnswer: 1,
    explanation: "Virtual memory uses disk space to extend the available physical memory (RAM).",
    category: "CS",
  },
  {
    id: 2,
    question: "What is a deadlock in operating systems?",
    options: ["System crash", "Infinite loop", "Resource conflict between processes", "Memory leak"],
    correctAnswer: 2,
    explanation:
      "Deadlock occurs when processes are waiting for each other's resources, creating a circular dependency.",
    category: "CS",
  },
  {
    id: 3,
    question: "What is the purpose of ACID properties in databases?",
    options: [
      "To improve query speed",
      "To ensure database transaction reliability",
      "To reduce storage space",
      "To encrypt data",
    ],
    correctAnswer: 1,
    explanation: "ACID properties ensure reliable processing of database transactions.",
    category: "CS",
  },
  {
    id: 4,
    question: "What is the difference between compiler and interpreter?",
    options: [
      "No difference",
      "Compiler translates all at once, interpreter line by line",
      "Interpreter translates all at once, compiler line by line",
      "Both translate line by line",
    ],
    correctAnswer: 1,
    explanation:
      "A compiler translates the entire program at once, while an interpreter translates and executes line by line.",
    category: "CS",
  },
  {
    id: 5,
    question: "What is the purpose of DNS?",
    options: [
      "To secure websites",
      "To translate domain names to IP addresses",
      "To compress data",
      "To encrypt traffic",
    ],
    correctAnswer: 1,
    explanation: "DNS (Domain Name System) translates human-readable domain names into IP addresses.",
    category: "CS",
  },
  {
    id: 6,
    question: "What is cache memory?",
    options: ["Main memory", "Fast memory between CPU and main memory", "Virtual memory", "Hard disk storage"],
    correctAnswer: 1,
    explanation: "Cache memory is a fast memory that sits between the CPU and main memory to improve performance.",
    category: "CS",
  },
  {
    id: 7,
    question: "What is the purpose of an operating system?",
    options: ["To run games", "To manage hardware and software resources", "To store data", "To connect to internet"],
    correctAnswer: 1,
    explanation: "An operating system manages computer hardware and software resources.",
    category: "CS",
  },
  {
    id: 8,
    question: "What is the difference between HTTP and HTTPS?",
    options: [
      "No difference",
      "HTTPS is secure, HTTP is not",
      "HTTP is secure, HTTPS is not",
      "They use different ports only",
    ],
    correctAnswer: 1,
    explanation: "HTTPS is the secure version of HTTP, using SSL/TLS for encryption.",
    category: "CS",
  },
  {
    id: 9,
    question: "What is the purpose of a primary key in a database?",
    options: ["To encrypt data", "To uniquely identify records", "To compress data", "To sort data"],
    correctAnswer: 1,
    explanation: "A primary key uniquely identifies each record in a database table.",
    category: "CS",
  },
  {
    id: 10,
    question: "What is the purpose of an IP address?",
    options: ["To store websites", "To uniquely identify devices on a network", "To encrypt data", "To compress data"],
    correctAnswer: 1,
    explanation: "An IP address uniquely identifies devices on a network for communication.",
    category: "CS",
  },
]

// Verbal Ability Questions
const verbalQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "Choose the correct synonym for 'Benevolent':",
    options: ["Malicious", "Kind", "Hostile", "Indifferent"],
    correctAnswer: 1,
    explanation: "'Benevolent' means kind and generous, similar to 'Kind'.",
    category: "Verbal",
  },
  {
    id: 2,
    question: "Identify the correct antonym for 'Abundant':",
    options: ["Plentiful", "Scarce", "Numerous", "Ample"],
    correctAnswer: 1,
    explanation: "'Abundant' means plentiful, so its antonym is 'Scarce'.",
    category: "Verbal",
  },
  {
    id: 3,
    question: "Choose the correctly spelled word:",
    options: ["Accomodate", "Accommodate", "Acommodate", "Accomadate"],
    correctAnswer: 1,
    explanation: "'Accommodate' is the correct spelling with two 'c's and two 'm's.",
    category: "Verbal",
  },
  {
    id: 4,
    question: "Select the correct meaning of the idiom 'Beat around the bush':",
    options: ["To win easily", "To avoid the main topic", "To search thoroughly", "To get lost"],
    correctAnswer: 1,
    explanation: "'Beat around the bush' means to avoid talking about something directly.",
    category: "Verbal",
  },
  {
    id: 5,
    question: "Identify the passive voice: 'The letter ____ written yesterday.'",
    options: ["is", "was", "were", "will"],
    correctAnswer: 1,
    explanation: "'Was' is correct as the action happened in the past.",
    category: "Verbal",
  },
  {
    id: 6,
    question: "Choose the correct article: '__ European country'",
    options: ["A", "An", "The", "No article"],
    correctAnswer: 0,
    explanation: "'A' is used before words beginning with a consonant sound, including 'European'.",
    category: "Verbal",
  },
  {
    id: 7,
    question: "Select the correct plural form of 'criterion':",
    options: ["Criterions", "Criteria", "Criterias", "Criterion"],
    correctAnswer: 1,
    explanation: "'Criteria' is the correct plural form of 'criterion'.",
    category: "Verbal",
  },
  {
    id: 8,
    question: "Identify the correct form: 'Neither of the students ____ present.'",
    options: ["are", "is", "were", "have"],
    correctAnswer: 1,
    explanation: "'Is' is correct as 'neither' is treated as singular.",
    category: "Verbal",
  },
  {
    id: 9,
    question: "Choose the correct preposition: 'He is afraid ____ spiders.'",
    options: ["from", "of", "at", "with"],
    correctAnswer: 1,
    explanation: "'Of' is the correct preposition to use with 'afraid'.",
    category: "Verbal",
  },
  {
    id: 10,
    question: "Select the correct word order: 'He (1)bought (2)never (3)has (4)a car'",
    options: ["1-2-3-4", "2-3-1-4", "3-2-1-4", "4-3-2-1"],
    correctAnswer: 2,
    explanation: "The correct order is 'He has never bought a car'.",
    category: "Verbal",
  },
]

// Technical Interview Questions
const technicalQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "What is the difference between REST and SOAP?",
    options: [
      "They are the same",
      "REST is lightweight and flexible, SOAP is more structured",
      "SOAP is lightweight, REST is more structured",
      "They are different programming languages",
    ],
    correctAnswer: 1,
    explanation: "REST is a lightweight architectural style while SOAP is a more structured protocol.",
    category: "Technical",
  },
  {
    id: 2,
    question: "Explain microservices architecture:",
    options: [
      "A single large application",
      "Multiple independent services working together",
      "A database design pattern",
      "A front-end framework",
    ],
    correctAnswer: 1,
    explanation: "Microservices architecture breaks down applications into small, independent services.",
    category: "Technical",
  },
  {
    id: 3,
    question: "What is CI/CD?",
    options: [
      "Code Integration/Code Deployment",
      "Continuous Integration/Continuous Deployment",
      "Computer Interface/Computer Design",
      "Continuous Interface/Continuous Design",
    ],
    correctAnswer: 1,
    explanation:
      "CI/CD stands for Continuous Integration/Continuous Deployment, automating build and deployment processes.",
    category: "Technical",
  },
  {
    id: 4,
    question: "What is the purpose of load balancing?",
    options: [
      "To reduce server load",
      "To distribute traffic across multiple servers",
      "To increase server capacity",
      "To backup data",
    ],
    correctAnswer: 1,
    explanation:
      "Load balancing distributes incoming network traffic across multiple servers to ensure no single server bears too much load.",
    category: "Technical",
  },
  {
    id: 5,
    question: "What is the CAP theorem?",
    options: [
      "A programming principle",
      "Consistency, Availability, Partition tolerance trade-offs",
      "A security protocol",
      "A database design pattern",
    ],
    correctAnswer: 1,
    explanation:
      "CAP theorem states that a distributed system can only guarantee two out of three: Consistency, Availability, and Partition tolerance.",
    category: "Technical",
  },
  {
    id: 6,
    question: "What is the purpose of Docker?",
    options: ["To write code", "To containerize applications", "To design interfaces", "To test code"],
    correctAnswer: 1,
    explanation:
      "Docker is used to containerize applications, making them portable and consistent across different environments.",
    category: "Technical",
  },
  {
    id: 7,
    question: "What is the difference between SQL and NoSQL databases?",
    options: [
      "They are the same",
      "SQL is structured, NoSQL is more flexible",
      "NoSQL is structured, SQL is more flexible",
      "They store different types of data",
    ],
    correctAnswer: 1,
    explanation:
      "SQL databases are structured and table-based, while NoSQL databases are more flexible and can handle unstructured data.",
    category: "Technical",
  },
  {
    id: 8,
    question: "What is the purpose of version control?",
    options: ["To write code", "To track and manage code changes", "To deploy applications", "To test applications"],
    correctAnswer: 1,
    explanation:
      "Version control systems track and manage changes to code, allowing multiple developers to work together effectively.",
    category: "Technical",
  },
  {
    id: 9,
    question: "What is the difference between unit testing and integration testing?",
    options: [
      "They are the same",
      "Unit tests individual components, integration tests interactions",
      "Integration tests individual components, unit tests interactions",
      "They test different languages",
    ],
    correctAnswer: 1,
    explanation:
      "Unit testing tests individual components in isolation, while integration testing tests how components work together.",
    category: "Technical",
  },
  {
    id: 10,
    question: "What is the purpose of caching?",
    options: [
      "To delete data",
      "To store frequently accessed data for quick access",
      "To encrypt data",
      "To compress data",
    ],
    correctAnswer: 1,
    explanation: "Caching stores frequently accessed data in a faster storage layer to improve performance.",
    category: "Technical",
  },
]

// Capgemini specific questions
const capgeminiQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "What is the difference between abstract class and interface?",
    options: [
      "They are the same",
      "Abstract class can have implementation, interface cannot",
      "Interface can have implementation, abstract class cannot",
      "Both can have full implementation",
    ],
    correctAnswer: 1,
    explanation:
      "Abstract classes can have method implementations while interfaces (before Java 8) can only have method declarations.",
    category: "Coding",
    company: "Capgemini",
  },
  {
    id: 2,
    question: "What is dependency injection in Spring?",
    options: [
      "A way to create objects",
      "A design pattern for handling dependencies",
      "A type of database",
      "A testing framework",
    ],
    correctAnswer: 1,
    explanation:
      "Dependency injection is a design pattern where dependencies are provided to objects instead of being created internally.",
    category: "Framework",
    company: "Capgemini",
  },
  {
    id: 3,
    question: "What is the purpose of the @Autowired annotation in Spring?",
    options: [
      "To create a new object",
      "To automatically inject dependencies",
      "To define a REST endpoint",
      "To configure database connections",
    ],
    correctAnswer: 1,
    explanation: "The @Autowired annotation in Spring is used to automatically inject dependencies into a Spring bean.",
    category: "Framework",
    company: "Capgemini",
  },
  {
    id: 4,
    question: "What is the difference between @Component, @Service, and @Repository annotations in Spring?",
    options: [
      "They are the same",
      "They indicate different layers of the application",
      "They are used for different types of dependencies",
      "They have different scopes",
    ],
    correctAnswer: 1,
    explanation:
      "@Component is a generic stereotype, @Service indicates the service layer, and @Repository indicates the persistence layer in a Spring application.",
    category: "Framework",
    company: "Capgemini",
  },
]

// Cognizant specific questions
const cognizantQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "What is the purpose of JUnit?",
    options: ["To write Java code", "To test Java code", "To compile Java code", "To deploy Java applications"],
    correctAnswer: 1,
    explanation: "JUnit is a testing framework for Java applications that helps in unit testing.",
    category: "Testing",
    company: "Cognizant",
  },
  {
    id: 2,
    question: "What is the difference between GET and POST methods?",
    options: [
      "No difference",
      "GET is for retrieving data, POST for sending data",
      "POST is for retrieving data, GET for sending data",
      "Both are for sending data",
    ],
    correctAnswer: 1,
    explanation: "GET requests retrieve data and are idempotent, while POST requests send data to be processed.",
    category: "Web",
    company: "Cognizant",
  },
  {
    id: 3,
    question: "What is Agile methodology?",
    options: [
      "A programming language",
      "An iterative approach to software development",
      "A database management system",
      "A testing framework",
    ],
    correctAnswer: 1,
    explanation:
      "Agile is an iterative approach to software development that emphasizes flexibility, customer collaboration, and rapid delivery of functional software.",
    category: "Methodology",
    company: "Cognizant",
  },
  {
    id: 4,
    question: "What is the purpose of Maven in Java development?",
    options: [
      "To write Java code",
      "To manage project dependencies and build processes",
      "To test Java applications",
      "To deploy Java applications",
    ],
    correctAnswer: 1,
    explanation:
      "Maven is a build automation and project management tool used primarily for Java projects to manage dependencies and the build process.",
    category: "Tools",
    company: "Cognizant",
  },
]

// Google specific questions
const googleQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "What is the time complexity of quicksort in the average case?",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
    correctAnswer: 1,
    explanation: "The average time complexity of quicksort is O(n log n).",
    category: "DSA",
    company: "Google",
  },
  {
    id: 2,
    question: "What is the purpose of the 'this' keyword in JavaScript?",
    options: ["To create a new object", "To refer to the current object", "To define a function", "To import modules"],
    correctAnswer: 1,
    explanation: "The 'this' keyword in JavaScript refers to the object that is executing the current function.",
    category: "Coding",
    company: "Google",
  },
  {
    id: 3,
    question: "What is the primary purpose of Google's MapReduce?",
    options: [
      "To create maps",
      "To process and generate large datasets",
      "To reduce memory usage",
      "To improve search engine results",
    ],
    correctAnswer: 1,
    explanation:
      "Google's MapReduce is a programming model for processing and generating large datasets in a parallel, distributed manner on a cluster.",
    category: "Distributed Systems",
    company: "Google",
  },
  {
    id: 4,
    question: "What is the main advantage of using Google's Protocol Buffers?",
    options: [
      "To encrypt data",
      "To serialize structured data efficiently",
      "To create user interfaces",
      "To manage databases",
    ],
    correctAnswer: 1,
    explanation:
      "Google's Protocol Buffers is a method of serializing structured data that is smaller, faster, and simpler than XML.",
    category: "Data Serialization",
    company: "Google",
  },
]

// Microsoft specific questions
const microsoftQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "What is the difference between value types and reference types in C#?",
    options: [
      "They are the same",
      "Value types are stored on the stack, reference types on the heap",
      "Reference types are stored on the stack, value types on the heap",
      "Both are stored on the heap",
    ],
    correctAnswer: 1,
    explanation:
      "Value types are stored on the stack and contain the actual data, while reference types are stored on the heap and contain a reference to the data.",
    category: "Coding",
    company: "Microsoft",
  },
  {
    id: 2,
    question: "What is the purpose of the 'using' statement in C#?",
    options: [
      "To import namespaces",
      "To ensure proper disposal of resources",
      "To create a new object",
      "To define a function",
    ],
    correctAnswer: 1,
    explanation:
      "The 'using' statement in C# ensures that disposable objects are properly disposed of when they go out of scope.",
    category: "Coding",
    company: "Microsoft",
  },
  {
    id: 3,
    question: "What is Azure in Microsoft's ecosystem?",
    options: [
      "A programming language",
      "A cloud computing platform",
      "An operating system",
      "A database management system",
    ],
    correctAnswer: 1,
    explanation:
      "Azure is Microsoft's cloud computing platform that provides a wide range of services for building, deploying, and managing applications.",
    category: "Cloud",
    company: "Microsoft",
  },
  {
    id: 4,
    question: "What is the purpose of LINQ in C#?",
    options: [
      "To create user interfaces",
      "To query and manipulate data",
      "To connect to databases",
      "To handle exceptions",
    ],
    correctAnswer: 1,
    explanation:
      "LINQ (Language Integrated Query) in C# is used to query and manipulate data from various sources using a consistent syntax.",
    category: "Coding",
    company: "Microsoft",
  },
]

// IBM specific questions
const ibmQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "What is the main purpose of IBM Watson?",
    options: [
      "To play chess",
      "To provide AI-powered question answering and analysis",
      "To manage databases",
      "To design user interfaces",
    ],
    correctAnswer: 1,
    explanation: "IBM Watson is an AI system designed to answer questions and provide analysis across various domains.",
    category: "Technical",
    company: "IBM",
  },
  {
    id: 2,
    question: "What is the primary focus of IBM's quantum computing efforts?",
    options: [
      "To create faster classical computers",
      "To develop quantum computers for solving complex problems",
      "To improve graphics processing",
      "To enhance cloud storage",
    ],
    correctAnswer: 1,
    explanation:
      "IBM's quantum computing efforts focus on developing quantum computers capable of solving complex problems that are intractable for classical computers.",
    category: "Technical",
    company: "IBM",
  },
  {
    id: 3,
    question: "What is IBM Cloud?",
    options: [
      "A weather forecasting service",
      "A cloud computing platform for building and running applications",
      "A social media platform",
      "A database management system",
    ],
    correctAnswer: 1,
    explanation:
      "IBM Cloud is a cloud computing platform that provides a range of services for building, running, and managing applications in the cloud.",
    category: "Cloud",
    company: "IBM",
  },
  {
    id: 4,
    question: "What is the purpose of IBM Db2?",
    options: [
      "To create websites",
      "To manage and analyze data",
      "To design user interfaces",
      "To write programming code",
    ],
    correctAnswer: 1,
    explanation:
      "IBM Db2 is a family of data management products, including database servers, designed to store, analyze, and retrieve data efficiently.",
    category: "Database",
    company: "IBM",
  },
]

// Oracle specific questions
const oracleQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "What is the purpose of an Oracle database index?",
    options: ["To store data", "To improve query performance", "To create backups", "To encrypt data"],
    correctAnswer: 1,
    explanation: "An Oracle database index is used to improve query performance by allowing faster data retrieval.",
    category: "Database",
    company: "Oracle",
  },
  {
    id: 2,
    question: "What is the difference between a CHAR and VARCHAR2 data type in Oracle?",
    options: [
      "They are the same",
      "CHAR is fixed-length, VARCHAR2 is variable-length",
      "VARCHAR2 is fixed-length, CHAR is variable-length",
      "Both are variable-length",
    ],
    correctAnswer: 1,
    explanation: "In Oracle, CHAR is a fixed-length data type, while VARCHAR2 is a variable-length data type.",
    category: "Database",
    company: "Oracle",
  },
  {
    id: 3,
    question: "What is a materialized view in Oracle?",
    options: ["A virtual table", "A physical copy of a query result", "A type of index", "A stored procedure"],
    correctAnswer: 1,
    explanation:
      "A materialized view in Oracle is a database object that contains the results of a query, stored as a physical copy for faster access.",
    category: "Database",
    company: "Oracle",
  },
  {
    id: 4,
    question: "What is the purpose of the MERGE statement in Oracle?",
    options: [
      "To delete data",
      "To update or insert data based on a condition",
      "To create a new table",
      "To join two tables",
    ],
    correctAnswer: 1,
    explanation:
      "The MERGE statement in Oracle is used to perform an update or insert operation (upsert) based on a specified condition.",
    category: "Database",
    company: "Oracle",
  },
]

// Amazon specific questions
const amazonQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "What is Amazon S3?",
    options: ["A database service", "An object storage service", "A compute service", "A messaging service"],
    correctAnswer: 1,
    explanation:
      "Amazon S3 (Simple Storage Service) is an object storage service that offers industry-leading scalability, data availability, security, and performance.",
    category: "Cloud",
    company: "Amazon",
  },
  {
    id: 2,
    question: "What is the purpose of Amazon EC2?",
    options: [
      "To store data",
      "To provide resizable compute capacity in the cloud",
      "To manage databases",
      "To handle authentication",
    ],
    correctAnswer: 1,
    explanation:
      "Amazon EC2 (Elastic Compute Cloud) provides resizable compute capacity in the cloud, allowing users to quickly scale computing resources.",
    category: "Cloud",
    company: "Amazon",
  },
  {
    id: 3,
    question: "What is Amazon DynamoDB?",
    options: [
      "A relational database service",
      "A NoSQL database service",
      "A data warehousing service",
      "A caching service",
    ],
    correctAnswer: 1,
    explanation:
      "Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability.",
    category: "Database",
    company: "Amazon",
  },
  {
    id: 4,
    question: "What is the purpose of Amazon Lambda?",
    options: [
      "To store data",
      "To run code without provisioning servers",
      "To manage networks",
      "To create user interfaces",
    ],
    correctAnswer: 1,
    explanation:
      "Amazon Lambda is a serverless compute service that runs your code in response to events and automatically manages the underlying compute resources.",
    category: "Cloud",
    company: "Amazon",
  },
]

// Infosys specific questions
const infosysQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "What is Infosys Nia?",
    options: ["A programming language", "An AI platform", "A database management system", "A cloud service"],
    correctAnswer: 1,
    explanation:
      "Infosys Nia is an artificial intelligence platform that enables businesses to automate and innovate their processes.",
    category: "AI",
    company: "Infosys",
  },
  {
    id: 2,
    question: "What is the primary focus of Infosys' digital services?",
    options: [
      "Hardware manufacturing",
      "Software development and digital transformation",
      "Telecommunications",
      "E-commerce",
    ],
    correctAnswer: 1,
    explanation:
      "Infosys' digital services primarily focus on software development and helping businesses with their digital transformation journey.",
    category: "Services",
    company: "Infosys",
  },
  {
    id: 3,
    question: "What is Infosys Cobalt?",
    options: [
      "A programming language",
      "A set of cloud-related services and solutions",
      "A database management system",
      "An operating system",
    ],
    correctAnswer: 1,
    explanation:
      "Infosys Cobalt is a set of services, solutions, and platforms for enterprises to accelerate their cloud journey.",
    category: "Cloud",
    company: "Infosys",
  },
  {
    id: 4,
    question: "What is the Infosys Learning Platform?",
    options: [
      "A social media platform",
      "An e-learning platform for employees and clients",
      "A project management tool",
      "A customer relationship management system",
    ],
    correctAnswer: 1,
    explanation:
      "The Infosys Learning Platform is an e-learning platform that provides training and skill development resources for Infosys employees and clients.",
    category: "Training",
    company: "Infosys",
  },
]

// TCS specific questions
const tcsQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "What is TCS iON?",
    options: [
      "A mobile operating system",
      "A cloud-based solution for educational institutions",
      "A programming language",
      "A database management system",
    ],
    correctAnswer: 1,
    explanation:
      "TCS iON is a cloud-based solution designed to meet the needs of educational institutions, training and assessment organizations.",
    category: "Cloud",
    company: "TCS",
  },
  {
    id: 2,
    question: "What is the primary focus of TCS's COIN (Co-Innovation Network)?",
    options: [
      "Cryptocurrency development",
      "Collaborative innovation with startups and academia",
      "Internal software development",
      "Hardware manufacturing",
    ],
    correctAnswer: 1,
    explanation:
      "TCS's COIN (Co-Innovation Network) focuses on fostering collaborative innovation with startups, academia, and other partners to create innovative solutions.",
    category: "Innovation",
    company: "TCS",
  },
  {
    id: 3,
    question: "What is TCS BaNCS?",
    options: [
      "A social media platform",
      "A suite of financial solutions",
      "A project management tool",
      "An e-commerce platform",
    ],
    correctAnswer: 1,
    explanation:
      "TCS BaNCS is a suite of financial solutions that helps financial services institutions enhance end-customer experience, enable faster launches of new products and services, and create new revenue streams.",
    category: "Finance",
    company: "TCS",
  },
  {
    id: 4,
    question: "What is the purpose of TCS's Ignio?",
    options: [
      "To manage human resources",
      "To provide AI-driven enterprise IT operations and processes",
      "To design user interfaces",
      "To handle customer support",
    ],
    correctAnswer: 1,
    explanation:
      "TCS's Ignio is an AI-driven software that autonomously manages and optimizes enterprise IT operations and processes.",
    category: "AI",
    company: "TCS",
  },
]

// Wipro specific questions
const wiproQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "What is Wipro HOLMES?",
    options: [
      "A detective agency",
      "An AI and automation platform",
      "A cloud storage service",
      "A programming language",
    ],
    correctAnswer: 1,
    explanation:
      "Wipro HOLMES is an AI and automation platform that helps enterprises in their digital transformation journey.",
    category: "AI",
    company: "Wipro",
  },
  {
    id: 2,
    question: "What is Wipro's Topcoder?",
    options: [
      "A social media platform",
      "A crowdsourcing platform for developers and designers",
      "An e-learning platform",
      "A project management tool",
    ],
    correctAnswer: 1,
    explanation:
      "Topcoder, acquired by Wipro, is a crowdsourcing platform that connects businesses with a global community of developers, designers, and data scientists.",
    category: "Crowdsourcing",
    company: "Wipro",
  },
  {
    id: 3,
    question: "What is Wipro's primary focus in digital services?",
    options: ["Hardware manufacturing", "Digital transformation and consulting", "Telecommunications", "E-commerce"],
    correctAnswer: 1,
    explanation:
      "Wipro's primary focus in digital services is on digital transformation and consulting, helping businesses adapt to the digital age.",
    category: "Services",
    company: "Wipro",
  },
  {
    id: 4,
    question: "What is Wipro Ventures?",
    options: [
      "A venture capital firm",
      "A strategic investment arm focusing on emerging technologies",
      "A real estate investment trust",
      "A mutual fund",
    ],
    correctAnswer: 1,
    explanation:
      "Wipro Ventures is the strategic investment arm of Wipro, focusing on investing in early to mid-stage startups developing emerging technologies.",
    category: "Investment",
    company: "Wipro",
  },
]

// Update the generateQuestionsForCompany function
export const generateQuestionsForCompany = (company: string): TestQuestion[] => {
  let companySpecificQuestions: TestQuestion[] = []

  switch (company.toLowerCase()) {
    case "capgemini":
      companySpecificQuestions = capgeminiQuestions
      break
    case "cognizant":
      companySpecificQuestions = cognizantQuestions
      break
    case "google":
      companySpecificQuestions = googleQuestions
      break
    case "microsoft":
      companySpecificQuestions = microsoftQuestions
      break
    case "ibm":
      companySpecificQuestions = ibmQuestions
      break
    case "oracle":
      companySpecificQuestions = oracleQuestions
      break
    case "amazon":
      companySpecificQuestions = amazonQuestions
      break
    case "infosys":
      companySpecificQuestions = infosysQuestions
      break
    case "tcs":
      companySpecificQuestions = tcsQuestions
      break
    case "wipro":
      companySpecificQuestions = wiproQuestions
      break
    default:
      companySpecificQuestions = [
        ...dsaQuestions,
        ...codingQuestions,
        ...aptitudeQuestions,
        ...csQuestions,
        ...verbalQuestions,
        ...technicalQuestions,
      ]
  }

  return companySpecificQuestions
    .filter((q) => q.company?.toLowerCase() === company.toLowerCase())
    .sort(() => Math.random() - 0.5)
    .slice(0, 10)
}

// Function to get questions for a specific subject
export const generateQuestionsForSubject = (subjectId: string): TestQuestion[] => {
  switch (subjectId.toLowerCase()) {
    case "dsa":
      return dsaQuestions
    case "coding":
      return codingQuestions
    case "aptitude":
      return aptitudeQuestions
    case "cs":
      return csQuestions
    case "verbal":
      return verbalQuestions
    case "technical":
      return technicalQuestions
    default:
      return []
  }
}

