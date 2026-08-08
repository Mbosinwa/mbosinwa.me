# CMS 710: Principles of Programming Languages


## Module 3: Review of Basic Data Types, Including Lists and
Trees

### Learning Objectives
At the end of this module, students should be able to:
1. Explain the role of data structures in programming languages.
2. Differentiate between arrays, lists, stacks, queues, and trees.
3. Describe the concept of Abstract Data Types (ADT).
4. Analyze how programming languages implement common data structures.
5. Compare the representation of lists and trees in Python, JavaScript, and C++.
6. Explain the relationship between data structures and algorithm efficiency.
7. Construct and manipulate binary trees in different programming languages.
8. Relate parse trees and Abstract Syntax Trees (ASTs) to programming language
processing.


### 3.1 Introduction
Data structures are fundamental components of programming languages and software systems. While data types define the nature of data that can be stored, data structures determine how data is organized, managed, and accessed. Efficient data organization is critical because the choice of data structure directly affects:

- Program performance
- Memory utilization
- Execution speed
- Scalability
- Maintainability
Programming languages provide various mechanisms for representing and manipulating collections of data. Some languages offer built-in support for certain structures, while others require programmers to implement them manually. Understanding data structures is essential for understanding how programming languages support problem solving and computational efficiency.


### 3.2 What is a Data Structure?
A data structure is a method of organizing and storing data in a computer so that it can be accessed and modified efficiently. A data structure defines:

- How data is arranged
- How data is accessed
- How data is updated
- How data is removed
Examples include:

- Arrays
- Lists
- Stacks
- Queues
- Trees
- Graphs
Different problems require different data structures. For example:

- Student records may be stored in arrays or lists.
- Browser history is commonly implemented using stacks.
- Printer scheduling often uses queues.
- Programming language parsers utilize trees.


### 3.3 Principles of Data Structures
Several important principles govern the use of data structures.

Principle 1: Efficient Organization of Data Data structures provide mechanisms for organizing data in ways that support efficient operations. Example:

Searching for a value in:

- An unsorted array may require scanning every element.
- A binary search tree may require significantly fewer comparisons.

Principle 2: Abstraction of Complexity Data structures hide implementation details and provide simplified interfaces for interacting with data. For example: A programmer may use a stack without understanding its internal memory allocation mechanism.

Principle 3: Trade-Off Between Time and Space Improving execution speed often requires additional memory. Reducing memory usage may increase processing time. Programming language designers and software developers continually balance these competing requirements.


### 3.4 Abstract Data Types (ADT)
An Abstract Data Type (ADT) is a logical description of a data structure that specifies:

- The data it stores
- The operations that can be performed
without specifying implementation details. An ADT focuses on:

What the structure does rather than

How the structure is implemented

Example: Stack ADT Operations:

- Push()
- Pop()
- Peek()
- IsEmpty()
The stack ADT does not specify whether the stack is implemented using:

- Arrays
- Linked lists
- Dynamic memory
Those implementation details are hidden.

Advantages of ADTs Abstraction Reduces complexity.

Reusability Can be implemented in multiple ways.

Maintainability Implementation can change without affecting users.

Modularity Encourages separation of concerns.


### 3.5 Arrays
An array is a collection of elements stored in contiguous memory locations. Each element is accessed using an index.

Characteristics of Arrays
- Fixed size
- Indexed access
- Efficient retrieval
- Homogeneous data

Python Example scores = [70, 80, 90, 85, 95]

JavaScript Example let scores = [70, 80, 90, 85, 95];

C++ Example int scores[5] = {70, 80, 90, 85, 95};

Advantages
- Fast access
- Simple implementation

Disadvantages
- Fixed size
- Costly insertion and deletion


### 3.6 Lists
A list is an ordered collection of elements. Unlike arrays, lists can grow and shrink dynamically.

Python Example students = ["John", "Mary", "Paul"]

JavaScript Example let students = ["John", "Mary", "Paul"];

C++ Example
#include <vector>

vector<string> students;

Common Operations
- Insert
- Delete
- Update
- Search
- Traverse

Advantages
- Dynamic size
- Flexible

Disadvantages
- Additional memory overhead
- Slower than arrays for some operations


### 3.7 Stacks
A stack is a linear data structure that follows the principle of:

Last-In, First-Out (LIFO) The last element inserted is the first element removed.

Real-Life Examples
- Browser history
- Undo operations
- Function calls
- Expression evaluation

Stack Operations Push Add an element.

Pop Remove an element.

Peek View the top element.

IsEmpty Check whether the stack contains elements.

Stack Illustration Top │ │ 40 │ 30 │ 20 │ 10 └────────

Python Example stack = []

stack.append(10) stack.append(20)

stack.pop()

JavaScript Example let stack = [];

stack.push(10); stack.push(20);

stack.pop();

C++ Example
#include <stack>

stack<int> s;

s.push(10); s.push(20);

s.pop();


### 3.8 Queues
A queue is a linear data structure that follows:

First-In, First-Out (FIFO) The first element inserted is the first element removed.

Real-Life Examples
- Bank customers
- Print queues
- Operating system scheduling
- Network packet processing

Queue Operations Enqueue Insert an element.

Dequeue Remove an element.

Front View the first element.

IsEmpty Check whether the queue is empty.

Queue Illustration Front                       Rear

10 → 20 → 30 → 40

Python Example from collections import deque

queue = deque()

queue.append(10) queue.append(20)

queue.popleft()

JavaScript Example let queue = [];

queue.push(10); queue.push(20);

queue.shift();

C++ Example
#include <queue>

queue<int> q;

q.push(10); q.push(20);

q.pop();


### 3.9 Trees
A tree is a hierarchical data structure consisting of nodes connected by edges. Trees are widely used in:

- Databases
- Operating systems
- Artificial intelligence
- Compiler design
- File systems

Components of a Tree Root Node The topmost node.

Parent Node A node that has children.

Child Node A node connected below another node.

Leaf Node A node with no children.


### Example
A / \ B   C / \ D   E

Root Node: A Leaf Nodes: D, E, C


### 3.10 Binary Trees
A binary tree is a tree in which each node has at most two children. These are commonly referred to as:

- Left child
- Right child


### Example
50 / \ 30    70 / \   / \ 20 40 60 80

Applications
- Searching
- Sorting
- Expression evaluation
- Database indexing


### 3.11 Binary Tree Implementation
Python class Node:

def __init__(self, value): self.value = value self.left = None

self.right = None

root = Node(50)

JavaScript class Node {

constructor(value){ this.value = value; this.left = null; this.right = null; } }

let root = new Node(50);

C++ class Node {

public:

int value; Node* left; Node* right;

Node(int v){ value = v; left = nullptr; right = nullptr; } };

Node* root = new Node(50);


### 3.12 Parse Trees
A parse tree represents the grammatical structure of a program according to the language grammar. Parse trees are generated during syntax analysis.

Example Expression a + b * c

Parse Tree + / \ a   * / \ b   c

The parse tree shows that multiplication is evaluated before addition.


### 3.13 Abstract Syntax Trees (AST)
An Abstract Syntax Tree (AST) is a simplified version of a parse tree. ASTs remove unnecessary grammar details while preserving program meaning.

Why ASTs are Important ASTs are used in:

- Compilers
- Interpreters
- Static analysis tools
- Code optimization systems
- Modern AI code assistants

Example AST Assignment │ ├── Variable(a) │ └── Addition ├── b └── c


### 3.14 Trees in Programming Language Processing
Programming language translators use trees extensively. Examples:

Lexical Analysis Produces tokens.

Parsing Produces parse trees.

Semantic Analysis Produces ASTs.

Code Generation Uses ASTs to generate executable instructions. Thus, trees are central to compiler and interpreter design.


### 3.15 Comparative Study of Python, JavaScript, and C++
Feature                            Python        JavaScript   C++ Built-in List Support              Excellent     Excellent    Vector Library Dynamic Resizing                   Yes           Yes          Yes Memory Management                  Automatic Automatic Manual/Automatic Tree Implementation Complexity Low               Moderate     High Runtime Performance                Moderate      Moderate     High Ease of Use                        Very High     High         Moderate


### 3.16 Complexity and Readability Considerations
When implementing data structures: Python generally provides:

- Greater readability
- Shorter code
- Faster development
JavaScript provides:

- Flexibility
- Dynamic structures
- Web integration
C++ provides:

- Better performance
- Greater memory control
- More efficient execution
The choice depends on application requirements.


### Summary
This module examined fundamental data structures used in programming languages, including arrays, lists, stacks, queues, and trees. The concept of Abstract Data Types was introduced to demonstrate how data structures can be specified independently of implementation details. Binary trees, parse trees, and Abstract Syntax Trees were discussed to illustrate the importance of hierarchical structures in programming language processing. Python, JavaScript, and C++ were used as comparative examples to demonstrate different approaches to data representation and manipulation.
