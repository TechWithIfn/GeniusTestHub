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
  {
    id: 11,
    question: "What is the time complexity of inserting an element at the beginning of an array?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctAnswer: 2,
    explanation:
      "Inserting at the beginning of an array requires shifting all existing elements, resulting in O(n) time complexity.",
    category: "DSA",
  },
  {
    id: 12,
    question: "What is the main advantage of a Red-Black tree over a regular binary search tree?",
    options: ["Faster search", "Self-balancing", "Less memory usage", "Simpler implementation"],
    correctAnswer: 1,
    explanation:
      "Red-Black trees are self-balancing, ensuring O(log n) time complexity for insertions, deletions, and searches in the worst case.",
    category: "DSA",
  },
  {
    id: 13,
    question: "What is the time complexity of the best sorting algorithm for sorting a linked list?",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
    correctAnswer: 1,
    explanation: "The best sorting algorithm for a linked list (e.g., merge sort) has a time complexity of O(n log n).",
    category: "DSA",
  },
  // Advanced DSA questions
  {
    id: 14,
    question: "What is the time complexity of the Floyd-Warshall algorithm?",
    options: ["O(V^2)", "O(V^3)", "O(E log V)", "O(V E)"],
    correctAnswer: 1,
    explanation:
      "The Floyd-Warshall algorithm has a time complexity of O(V^3), where V is the number of vertices in the graph.",
    category: "DSA",
  },
  {
    id: 15,
    question: "Explain the concept of amortized analysis in data structures.",
    options: [
      "It's a way to analyze worst-case scenarios",
      "It's used to calculate average-case complexity",
      "It provides a way to analyze a sequence of operations and guarantee a worst-case per-operation bound",
      "It's only applicable to hash tables",
    ],
    correctAnswer: 2,
    explanation:
      "Amortized analysis provides a way to analyze a sequence of operations and guarantee a worst-case per-operation bound, even when single operations can be expensive.",
    category: "DSA",
  },
  {
    id: 16,
    question: "What is the space complexity of a Bloom filter?",
    options: ["O(n)", "O(1)", "O(log n)", "O(n log n)"],
    correctAnswer: 1,
    explanation:
      "A Bloom filter has a constant space complexity of O(1), as its size doesn't grow with the number of elements it contains.",
    category: "DSA",
  },
  {
    id: 17,
    question: "What is the time complexity of the Bellman-Ford algorithm?",
    options: ["O(V)", "O(E)", "O(V * E)", "O(V^2 * E)"],
    correctAnswer: 2,
    explanation:
      "The Bellman-Ford algorithm has a time complexity of O(V * E), where V is the number of vertices and E is the number of edges in the graph.",
    category: "DSA",
  },
  {
    id: 18,
    question: "Explain the concept of a B-tree and its advantages.",
    options: [
      "A binary tree with balanced height",
      "A self-balancing tree optimized for disk access",
      "A tree with unlimited children per node",
      "A tree used only for in-memory operations",
    ],
    correctAnswer: 1,
    explanation:
      "A B-tree is a self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time. It's optimized for systems that read and write large blocks of data, such as disk access.",
    category: "DSA",
  },
  {
    id: 19,
    question: "What is the purpose of the A* search algorithm?",
    options: [
      "To sort arrays efficiently",
      "To find the shortest path in a weighted graph",
      "To balance binary search trees",
      "To compress data for storage",
    ],
    correctAnswer: 1,
    explanation:
      "The A* search algorithm is used to find the shortest path between two nodes in a weighted graph. It uses heuristics to guide the search and is more efficient than Dijkstra's algorithm for many problems.",
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
  {
    id: 11,
    question: "What is the purpose of the 'yield' keyword in Python?",
    options: ["To define a class", "To create a generator function", "To import modules", "To handle exceptions"],
    correctAnswer: 1,
    explanation: "The 'yield' keyword is used to define generator functions, which return an iterator object.",
    category: "Coding",
  },
  {
    id: 12,
    question: "What is the difference between '=='' and '===' in JavaScript?",
    options: [
      "No difference",
      "'===' checks value and type, '==' only checks value",
      "'==' checks value and type, '===' only checks value",
      "They are used in different programming languages",
    ],
    correctAnswer: 1,
    explanation:
      "'===' is the strict equality operator that checks both value and type, while '==' performs type coercion before comparison.",
    category: "Coding",
  },
  {
    id: 13,
    question: "What is a lambda function in programming?",
    options: [
      "A function with multiple parameters",
      "An anonymous function",
      "A function that only returns boolean values",
      "A function that can't be called directly",
    ],
    correctAnswer: 1,
    explanation:
      "A lambda function is an anonymous function that can have any number of parameters but can only have one expression.",
    category: "Coding",
  },
  // Advanced Coding questions
  {
    id: 14,
    question: "What is a monad in functional programming?",
    options: [
      "A type of loop",
      "A design pattern for handling side effects",
      "A way to define classes",
      "A type of variable",
    ],
    correctAnswer: 1,
    explanation:
      "A monad is a design pattern used in functional programming to handle side effects and sequencing of operations in a pure functional way.",
    category: "Coding",
  },
  {
    id: 15,
    question: "Explain the concept of tail call optimization.",
    options: [
      "It's a way to optimize loops",
      "It allows recursive functions to execute in constant stack space",
      "It's a technique to reduce memory usage in objects",
      "It's used to optimize database queries",
    ],
    correctAnswer: 1,
    explanation:
      "Tail call optimization is a technique where recursive function calls in tail position are optimized to execute in constant stack space, preventing stack overflow for deep recursions.",
    category: "Coding",
  },
  {
    id: 16,
    question: "What is the purpose of the 'volatile' keyword in C++?",
    options: [
      "To make a variable constant",
      "To optimize memory usage",
      "To indicate that a variable can be changed by external factors",
      "To create thread-local storage",
    ],
    correctAnswer: 2,
    explanation:
      "The 'volatile' keyword in C++ indicates that a variable can be changed by external factors (like hardware or other threads) and should not be optimized by the compiler.",
    category: "Coding",
  },
  {
    id: 17,
    question: "What is the difference between covariance and contravariance in programming?",
    options: [
      "They are the same concept",
      "Covariance preserves assignment compatibility, contravariance reverses it",
      "Contravariance is only used in functional programming",
      "Covariance is only applicable to primitive types",
    ],
    correctAnswer: 1,
    explanation:
      "Covariance preserves the ordering of types from more specific to more general, allowing assignment compatibility. Contravariance reverses this ordering, which is useful in certain scenarios like function parameter types.",
    category: "Coding",
  },
  {
    id: 18,
    question: "Explain the concept of currying in functional programming.",
    options: [
      "A method of optimizing curry recipes",
      "Converting a function with multiple arguments into a sequence of functions with single arguments",
      "A technique for parallel processing",
      "A way to implement multiple inheritance",
    ],
    correctAnswer: 1,
    explanation:
      "Currying is a technique in functional programming where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument. This allows for partial application of functions and can lead to more reusable and composable code.",
    category: "Coding",
  },
  {
    id: 19,
    question: "What is the purpose of the 'yield' keyword in Python generators?",
    options: [
      "To pause the execution of a function",
      "To generate random numbers",
      "To import modules lazily",
      "To define class properties",
    ],
    correctAnswer: 0,
    explanation:
      "The 'yield' keyword in Python is used in generator functions to pause the function's execution and return a value to the caller. When the function is called again, it resumes execution from where it left off, maintaining its state between calls.",
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
  {
    id: 11,
    question: "If x% of y is z, what is y% of x?",
    options: ["x% of z", "y% of z", "z", "Cannot be determined"],
    correctAnswer: 2,
    explanation: "If x% of y is z, then (x/100) * y = z. Similarly, y% of x would be (y/100) * x, which is equal to z.",
    category: "Aptitude",
  },
  {
    id: 12,
    question: "A car travels 120 km in 2 hours 40 minutes. What is its speed in m/s?",
    options: ["10 m/s", "12.5 m/s", "15 m/s", "18 m/s"],
    correctAnswer: 1,
    explanation: "Speed = 120 km / (2 + 40/60) hours = 45 km/h = 12.5 m/s",
    category: "Aptitude",
  },
  {
    id: 13,
    question: "If the sum of two numbers is 15 and their product is 56, what are the two numbers?",
    options: ["7 and 8", "6 and 9", "5 and 10", "4 and 11"],
    correctAnswer: 0,
    explanation:
      "Using the sum-product method: x + y = 15 and xy = 56. The numbers that satisfy both conditions are 7 and 8.",
    category: "Aptitude",
  },
  // Advanced Aptitude questions
  {
    id: 14,
    question: "In how many ways can 8 people be seated around a circular table?",
    options: ["40,320", "5,040", "20,160", "362,880"],
    correctAnswer: 1,
    explanation: "For circular permutations, we use the formula (n-1)!. Here, (8-1)! = 7! = 5,040.",
    category: "Aptitude",
  },
  {
    id: 15,
    question: "What is the probability of getting at least one 6 when rolling three dice?",
    options: ["1/6", "91/216", "125/216", "5/6"],
    correctAnswer: 2,
    explanation:
      "Probability of not getting a 6 on one die is 5/6. For three dice, it's (5/6)^3. So, probability of getting at least one 6 is 1 - (5/6)^3 = 125/216.",
    category: "Aptitude",
  },
  {
    id: 16,
    question: "Solve the equation: log₂(x) + log₂(x+1) = 3",
    options: ["x = 3", "x = 4", "x = 2", "x = 5"],
    correctAnswer: 1,
    explanation: "2^3 = x(x+1), 8 = x^2 + x, x^2 + x - 8 = 0, (x+4)(x-3) = 0, x = 3 or -4. Since x is positive, x = 3.",
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
  {
    id: 11,
    question: "What is the purpose of a semaphore in operating systems?",
    options: [
      "To encrypt data",
      "To control access to shared resources",
      "To allocate memory",
      "To schedule processes",
    ],
    correctAnswer: 1,
    explanation: "Semaphores are used to control access to shared resources in a multi-processing environment.",
    category: "CS",
  },
  {
    id: 12,
    question: "What is the difference between a stack and a queue?",
    options: [
      "No difference",
      "Stack is LIFO, Queue is FIFO",
      "Stack is FIFO, Queue is LIFO",
      "They are used in different programming paradigms",
    ],
    correctAnswer: 1,
    explanation:
      "A stack follows Last-In-First-Out (LIFO) order, while a queue follows First-In-First-Out (FIFO) order.",
    category: "CS",
  },
  {
    id: 13,
    question: "What is the purpose of normalization in database design?",
    options: [
      "To increase data redundancy",
      "To eliminate data redundancy and dependency",
      "To improve query performance",
      "To encrypt sensitive data",
    ],
    correctAnswer: 1,
    explanation:
      "Normalization is used to eliminate data redundancy and dependency, organizing data efficiently in a relational database.",
    category: "CS",
  },
  // Advanced CS questions
  {
    id: 14,
    question: "What is the difference between process and thread in operating systems?",
    options: [
      "They are the same",
      "Processes are independent, threads share resources",
      "Threads are always faster than processes",
      "Processes are used only in single-core systems",
    ],
    correctAnswer: 1,
    explanation:
      "Processes are independent execution units with their own memory space, while threads are lighter-weight units that share the same memory space within a process. Threads are often used for concurrent execution within a single process.",
    category: "CS",
  },
  {
    id: 15,
    question: "Explain the concept of virtual memory in operating systems.",
    options: [
      "A type of fast RAM",
      "A technique to use disk space as an extension of RAM",
      "A method to encrypt memory contents",
      "A way to increase CPU cache size",
    ],
    correctAnswer: 1,
    explanation:
      "Virtual memory is a memory management technique that uses disk space to extend the available physical RAM. It allows running processes that require more memory than physically available by swapping data between RAM and disk as needed.",
    category: "CS",
  },
  {
    id: 16,
    question: "What is the purpose of the OSI model in networking?",
    options: [
      "To optimize search engine algorithms",
      "To standardize network protocols and communication",
      "To manage operating system updates",
      "To improve graphics processing in computers",
    ],
    correctAnswer: 1,
    explanation:
      "The OSI (Open Systems Interconnection) model is a conceptual framework used to describe how data communication occurs between devices in a network. It standardizes protocols and divides the communication process into seven abstraction layers.",
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
  {
    id: 11,
    question: "Choose the word that is closest in meaning to 'Ephemeral':",
    options: ["Eternal", "Transient", "Sturdy", "Ancient"],
    correctAnswer: 1,
    explanation: "'Ephemeral' means short-lived or transient, which is the opposite of eternal.",
    category: "Verbal",
  },
  {
    id: 12,
    question: "Identify the correct sentence:",
    options: [
      "Neither of the students have completed their assignments.",
      "Neither of the students has completed their assignment.",
      "Neither of the students has completed his assignment.",
      "Neither of the student has completed their assignments.",
    ],
    correctAnswer: 2,
    explanation:
      "'Neither' is singular, so it takes a singular verb 'has'. 'His' is used because 'student' is singular.",
    category: "Verbal",
  },
  {
    id: 13,
    question: "What is the meaning of the idiom 'To bite off more than you can chew'?",
    options: ["To eat too much", "To take on a task that is too big", "To speak without thinking", "To be greedy"],
    correctAnswer: 1,
    explanation: "This idiom means to take on a task that is too big or complex to handle.",
    category: "Verbal",
  },
  // Advanced Verbal questions
  {
    id: 14,
    question:
      "Choose the word that best fits the given definition: 'A person who renounces material comforts and leads a life of austere self-discipline'",
    options: ["Hedonist", "Ascetic", "Epicurean", "Sybarite"],
    correctAnswer: 1,
    explanation:
      "An 'ascetic' is a person who practices severe self-discipline and abstains from all forms of indulgence, typically for religious reasons.",
    category: "Verbal",
  },
  {
    id: 15,
    question:
      "Identify the rhetorical device used in the following sentence: 'Ask not what your country can do for you – ask what you can do for your country.'",
    options: ["Alliteration", "Anaphora", "Chiasmus", "Hyperbole"],
    correctAnswer: 2,
    explanation:
      "This famous quote by John F. Kennedy uses 'chiasmus', a rhetorical device where the second part of a phrase is balanced against the first but with the parts reversed.",
    category: "Verbal",
  },
  {
    id: 16,
    question: "What is the meaning of the phrase 'Pyrrhic victory'?",
    options: [
      "A decisive victory",
      "A victory that comes at a great cost to the victor",
      "A victory achieved through deception",
      "A victory in a sporting event",
    ],
    correctAnswer: 1,
    explanation:
      "A 'Pyrrhic victory' refers to a victory that inflicts such a devastating toll on the victor that it is tantamount to defeat. It comes from King Pyrrhus of Epirus, whose army suffered irreplaceable casualties in defeating the Romans.",
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
  {
    id: 11,
    question: "What is the purpose of a load balancer in a distributed system?",
    options: [
      "To increase system load",
      "To distribute network traffic across multiple servers",
      "To balance the power consumption",
      "To manage database connections",
    ],
    correctAnswer: 1,
    explanation:
      "A load balancer distributes incoming network traffic across multiple servers to ensure no single server bears too much load.",
    category: "Technical",
  },
  {
    id: 12,
    question: "What is the difference between TCP and UDP?",
    options: [
      "TCP is faster, UDP is more reliable",
      "UDP is connectionless, TCP is connection-oriented",
      "TCP is used for emails, UDP for web browsing",
      "They are the same protocol",
    ],
    correctAnswer: 1,
    explanation:
      "TCP is a connection-oriented protocol that ensures reliable, ordered data delivery. UDP is connectionless and doesn't guarantee delivery or order.",
    category: "Technical",
  },
  {
    id: 13,
    question: "What is the purpose of an ORM (Object-Relational Mapping) in software development?",
    options: [
      "To create user interfaces",
      "To convert data between incompatible type systems in databases and programming languages",
      "To optimize database queries",
      "To manage server resources",
    ],
    correctAnswer: 1,
    explanation:
      "An ORM is used to convert data between incompatible type systems in object-oriented programming languages and relational databases.",
    category: "Technical",
  },
  // Advanced Technical questions
  {
    id: 14,
    question: "What is the CAP theorem in distributed systems?",
    options: [
      "A theorem about CPU architecture",
      "Consistency, Availability, Partition tolerance - pick two",
      "A method for optimizing database queries",
      "A principle for designing user interfaces",
    ],
    correctAnswer: 1,
    explanation:
      "The CAP theorem states that in a distributed system, it is impossible to simultaneously provide more than two out of three guarantees: Consistency, Availability, and Partition tolerance.",
    category: "Technical",
  },
  {
    id: 15,
    question: "Explain the concept of eventual consistency in distributed systems.",
    options: [
      "Data is always consistent across all nodes",
      "Data will become consistent over time, but may be temporarily inconsistent",
      "Data is only consistent on the primary node",
      "Consistency is not achievable in distributed systems",
    ],
    correctAnswer: 1,
    explanation:
      "Eventual consistency is a consistency model used in distributed systems that allows for temporary inconsistencies but guarantees that all replicas will eventually converge to the same state, given enough time without updates.",
    category: "Technical",
  },
  {
    id: 16,
    question: "What is the purpose of a Bloom filter?",
    options: [
      "To filter out spam emails",
      "To efficiently test whether an element is a member of a set",
      "To compress large datasets",
      "To encrypt network traffic",
    ],
    correctAnswer: 1,
    explanation:
      "A Bloom filter is a space-efficient probabilistic data structure used to test whether an element is a member of a set. It can have false positives but no false negatives, making it useful for applications where space is at a premium and false positives can be tolerated.",
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
  // Advanced Capgemini questions
  {
    id: 5,
    question: "What is the purpose of Capgemini's Applied Innovation Exchange (AIE)?",
    options: [
      "To provide office space for startups",
      "To foster innovation and digital transformation",
      "To manage Capgemini's internal IT systems",
      "To organize tech conferences",
    ],
    correctAnswer: 1,
    explanation:
      "Capgemini's Applied Innovation Exchange (AIE) is a global platform designed to enable enterprises to discover relevant innovations and to contextualize and experiment with them within their specific industry.",
    category: "Innovation",
    company: "Capgemini",
  },
  {
    id: 6,
    question: "What is Capgemini's Intelligent Industry approach?",
    options: [
      "A method for traditional manufacturing",
      "An approach combining digital and engineering technologies",
      "A strategy for reducing industrial emissions",
      "A technique for improving supply chain efficiency",
    ],
    correctAnswer: 1,
    explanation:
      "Capgemini's Intelligent Industry approach focuses on the digital transformation of industrial and technology companies, leveraging technologies like 5G, AI, cloud, edge computing, and IoT to create smart products, operations, and services.",
    category: "Digital Transformation",
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
  // Advanced Cognizant questions
  {
    id: 5,
    question: "What is Cognizant's 'Digital Engineering' practice?",
    options: [
      "A method for designing digital circuits",
      "An approach to integrate software engineering with digital transformation",
      "A technique for optimizing search engines",
      "A strategy for reducing digital carbon footprint",
    ],
    correctAnswer: 1,
    explanation:
      "Cognizant's Digital Engineering practice focuses on integrating software engineering principles with digital transformation strategies to help businesses create innovative digital products and services.",
    category: "Digital Transformation",
    company: "Cognizant",
  },
  {
    id: 6,
    question: "What is the purpose of Cognizant's 'Evolutionary AI'?",
    options: [
      "To study biological evolution",
      "To create AI systems that can adapt and improve over time",
      "To develop AI-powered fitness applications",
      "To simulate evolutionary processes in computer games",
    ],
    correctAnswer: 1,
    explanation:
      "Cognizant's Evolutionary AI is an approach to create AI systems that can adapt and improve over time, similar to biological evolution. It aims to develop AI solutions that can continuously learn and optimize their performance in changing environments.",
    category: "AI",
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
  {
    id: 5,
    question: "Explain the concept of consistent hashing and its applications in distributed systems.",
    options: [
      "It's a way to encrypt data consistently",
      "It's a technique for load balancing and scaling distributed caches",
      "It's used for consistent database transactions",
      "It's a method for hash table collision resolution",
    ],
    correctAnswer: 1,
    explanation:
      "Consistent hashing is a technique used in distributed systems for load balancing and scaling. It minimizes the number of keys that need to be remapped when the hash table is resized.",
    category: "Distributed Systems",
    company: "Google",
  },
  {
    id: 6,
    question: "What is the purpose of Google's Spanner database system?",
    options: [
      "To provide fast in-memory caching",
      "To offer a globally distributed, strongly consistent database",
      "To optimize search engine algorithms",
      "To manage user authentication across Google services",
    ],
    correctAnswer: 1,
    explanation:
      "Google's Spanner is a globally distributed and strongly consistent database system that provides external consistency and global snapshots across the database.",
    category: "Database",
    company: "Google",
  },
  // Advanced Google questions
  {
    id: 7,
    question: "What is the purpose of Google's Tensor Processing Unit (TPU)?",
    options: [
      "To process text documents",
      "To accelerate machine learning workloads",
      "To improve Google Search results",
      "To optimize Google Maps routing",
    ],
    correctAnswer: 1,
    explanation:
      "Google's Tensor Processing Unit (TPU) is an AI accelerator application-specific integrated circuit developed specifically to accelerate machine learning workloads, particularly for neural network machine learning.",
    category: "AI Hardware",
    company: "Google",
  },
  {
    id: 8,
    question: "Explain the concept of 'site reliability engineering' as practiced at Google.",
    options: [
      "A method for improving website SEO",
      "An approach to IT operations that applies software engineering principles to infrastructure and operations problems",
      "A technique for load testing websites",
      "A strategy for reducing website downtime",
    ],
    correctAnswer: 1,
    explanation:
      "Site Reliability Engineering (SRE) at Google is an approach to IT operations that applies software engineering principles to infrastructure and operations problems. It aims to create scalable and highly reliable software systems through automation and proactive management.",
    category: "DevOps",
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
  {
    id: 5,
    question: "Explain the concept of 'async streams' in C# 8.0.",
    options: [
      "It's a way to create asynchronous loops",
      "It allows asynchronous enumeration of data sequences",
      "It's used for parallel processing of streams",
      "It's a method to compress data streams asynchronously",
    ],
    correctAnswer: 1,
    explanation:
      "Async streams in C# 8.0 allow for asynchronous enumeration of data sequences, combining the benefits of yield return and async/await.",
    category: "Coding",
    company: "Microsoft",
  },
  {
    id: 6,
    question: "What is the purpose of the Cosmos DB in Azure?",
    options: [
      "To provide virtual machine services",
      "To offer a globally distributed, multi-model database service",
      "To manage Azure Active Directory",
      "To optimize network traffic in Azure",
    ],
    correctAnswer: 1,
    explanation:
      "Cosmos DB is Azure's globally distributed, multi-model database service designed for scalable and high-performance applications.",
    category: "Cloud",
    company: "Microsoft",
  },
  // Advanced Microsoft questions
  {
    id: 7,
    question: "What is the purpose of Microsoft's Q# programming language?",
    options: [
      "To develop web applications",
      "To write quantum computing programs",
      "To create cross-platform mobile apps",
      "To optimize database queries",
    ],
    correctAnswer: 1,
    explanation:
      "Q# is a domain-specific programming language used for expressing quantum algorithms. It's designed for writing sub-programs that run on an adjunct quantum processor under the control of a classical host program and computer.",
    category: "Programming Languages",
    company: "Microsoft",
  },
  {
    id: 8,
    question: "What is the primary purpose of Microsoft's Project Brainwave?",
    options: [
      "To develop brain-computer interfaces",
      "To accelerate deep learning and AI workloads using FPGAs",
      "To improve natural language processing in Cortana",
      "To optimize Windows performance on low-end devices",
    ],
    correctAnswer: 1,
    explanation:
      "Microsoft's Project Brainwave is a deep learning acceleration platform that uses field-programmable gate arrays (FPGAs) to accelerate real-time AI calculations. It's designed to handle complex deep learning models with high performance and low latency.",
    category: "AI Hardware",
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
  // Advanced IBM questions
  {
    id: 5,
    question: "What is IBM's approach to hybrid cloud with Red Hat OpenShift?",
    options: [
      "A method for painting clouds red",
      "A platform for building and managing containerized applications across multiple cloud environments",
      "A technique for optimizing cloud storage costs",
      "A strategy for migrating all applications to public cloud",
    ],
    correctAnswer: 1,
    explanation:
      "IBM's approach to hybrid cloud with Red Hat OpenShift provides a consistent platform for building, deploying, and managing containerized applications across on-premises, private cloud, and public cloud environments, enabling true hybrid and multi-cloud strategies.",
    category: "Cloud Computing",
    company: "IBM",
  },
  {
    id: 6,
    question: "What is the significance of IBM's 'Call for Code' initiative?",
    options: [
      "A contest for the best programming jokes",
      "A global initiative to use technology to solve pressing global issues",
      "A program to teach coding to underprivileged communities",
      "An internal hackathon for IBM employees",
    ],
    correctAnswer: 1,
    explanation:
      "IBM's 'Call for Code' is a global initiative that brings together developers, data scientists, and problem solvers to create practical, effective, and high-quality applications based on cloud, data, and AI that can have an immediate and lasting impact on humanitarian issues.",
    category: "Social Responsibility",
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
  // Advanced Oracle questions
  {
    id: 5,
    question: "What is Oracle's Autonomous Database?",
    options: [
      "A database that runs without electricity",
      "A self-driving, self-securing, and self-repairing database cloud service",
      "A database exclusively for autonomous vehicles",
      "A manual database management system",
    ],
    correctAnswer: 1,
    explanation:
      "Oracle Autonomous Database is a cloud service that uses machine learning to automate database tuning, security, backups, updates, and other routine management tasks traditionally performed by DBAs.",
    category: "Database",
    company: "Oracle",
  },
  {
    id: 6,
    question: "What is the purpose of Oracle's APEX (Application Express)?",
    options: [
      "To create high-performance gaming applications",
      "A low-code development platform for building web applications",
      "To manage Oracle's cloud infrastructure",
      "A tool for database performance tuning",
    ],
    correctAnswer: 1,
    explanation:
      "Oracle APEX (Application Express) is a low-code development platform that enables developers to build scalable, secure enterprise web applications with world-class features that can be deployed anywhere.",
    category: "Development Tools",
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
  // Advanced Amazon questions
  {
    id: 5,
    question: "What is Amazon's approach to 'serverless' computing with AWS Lambda?",
    options: [
      "Running applications without any servers",
      "A service that lets you run code without provisioning or managing servers",
      "A technique for reducing server energy consumption",
      "A method for distributing servers geographically",
    ],
    correctAnswer: 1,
    explanation:
      "AWS Lambda is Amazon's serverless compute service that lets you run code without provisioning or managing servers. It automatically scales your application by running code in response to each trigger, scaling precisely with the size of the workload.",
    category: "Cloud Computing",
    company: "Amazon",
  },
  {
    id: 6,
    question: "What is the purpose of Amazon's Elastic Kubernetes Service (EKS)?",
    options: [
      "To provide elastic bands for packaging",
      "To manage and orchestrate containerized applications using Kubernetes",
      "To improve the elasticity of AWS data centers",
      "To offer streaming services for educational content",
    ],
    correctAnswer: 1,
    explanation:
      "Amazon Elastic Kubernetes Service (EKS) is a managed Kubernetes service that makes it easy for you to run Kubernetes on AWS without needing to install, operate, and maintain your own Kubernetes control plane.",
    category: "Container Orchestration",
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
  // Advanced Infosys questions
  {
    id: 5,
    question: "What is Infosys' 'Live Enterprise' concept?",
    options: [
      "A reality TV show about tech companies",
      "An approach to create sentient AI for businesses",
      "A framework for building agile, responsive, and learning organizations",
      "A method for live-streaming corporate events",
    ],
    correctAnswer: 2,
    explanation:
      "Infosys' 'Live Enterprise' is a framework and approach to help organizations become more agile, responsive, and adaptive by leveraging data, AI, and cloud technologies to create a 'sensing, feeling, and responding' enterprise.",
    category: "Digital Transformation",
    company: "Infosys",
  },
  {
    id: 6,
    question: "What is the primary focus of Infosys' 'AI-first' strategy?",
    options: [
      "Replacing all employees with AI",
      "Integrating AI across all aspects of business and technology solutions",
      "Developing humanoid robots",
      "Creating AI-powered video games",
    ],
    correctAnswer: 1,
    explanation:
      "Infosys' 'AI-first' strategy focuses on integrating artificial intelligence across all aspects of its business and technology solutions, aiming to help clients leverage AI to drive innovation, efficiency, and growth in their operations.",
    category: "AI",
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
  // Advanced TCS questions
  {
    id: 5,
    question: "What is TCS' 'Business 4.0' framework?",
    options: [
      "A new programming language",
      "A strategy for the fourth industrial revolution",
      "A method for quadrupling business profits",
      "A technique for managing four businesses simultaneously",
    ],
    correctAnswer: 1,
    explanation:
      "TCS' Business 4.0 is a thought leadership framework that helps enterprises leverage digital technologies to address customer needs and drive exponential value. It focuses on intelligent, agile, automated, and cloud-based strategies.",
    category: "Digital Transformation",
    company: "TCS",
  },
  {
    id: 6,
    question: "What is the purpose of TCS' 'Neural Automation System'?",
    options: [
      "To automate neurosurgery procedures",
      "An AI-based system for automating IT operations and business processes",
      "To simulate neural networks in the human brain",
      "A system for automating neural network design",
    ],
    correctAnswer: 1,
    explanation:
      "TCS' Neural Automation System is an AI and machine learning-based platform designed to automate complex IT operations and business processes, improving efficiency and reducing errors in enterprise operations.",
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
  // Advanced Wipro questions
  {
    id: 5,
    question: "What is Wipro's 'AI-First' approach?",
    options: [
      "Replacing all human workers with AI",
      "Integrating AI capabilities across all services and solutions",
      "Focusing exclusively on AI research",
      "Developing AI before any other technology",
    ],
    correctAnswer: 1,
    explanation:
      "Wipro's 'AI-First' approach involves integrating artificial intelligence capabilities across all its services and solutions, aiming to help clients leverage AI to drive innovation, improve efficiency, and create new business models.",
    category: "AI",
    company: "Wipro",
  },
  {
    id: 6,
    question: "What is the primary focus of Wipro's 'Cloud Studio'?",
    options: [
      "A recording studio in the cloud",
      "A platform for cloud-native application development and migration",
      "A tool for creating 3D models in the cloud",
      "A cloud-based video editing suite",
    ],
    correctAnswer: 1,
    explanation:
      "Wipro's Cloud Studio is a comprehensive platform that enables enterprises to rapidly develop, deploy, and manage cloud-native applications. It provides tools and frameworks for application modernization, cloud migration, and cloud-native development.",
    category: "Cloud Computing",
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

  return companySpecificQuestions.sort(() => Math.random() - 0.5).slice(0, 10)
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

