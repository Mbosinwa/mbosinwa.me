# CMS 710: Principles of Programming Languages


## Module 2: Data Types and Structures

### Learning Objectives
At the end of this module, students should be able to:
1. Define data types and explain their importance in programming languages.
2. Differentiate between primitive and composite data types.
3. Explain the concept of user-defined data types.
4. Describe type systems and their role in programming language design.
5. Explain data abstraction and its significance in software development.
6. Compare static and dynamic typing in Python, JavaScript, and C++.
7. Evaluate the impact of type systems on software reliability, flexibility, and
performance.


### 2.1 Introduction
Data is the fundamental building block of every computer program. Programming languages provide mechanisms for representing, storing, manipulating, and organizing data through various data types and structures. A programming language must define how data is represented internally, what operations can be performed on data, and how different data elements can interact within a program. The study of data types is one of the most important aspects of programming language design because it directly affects:

- Program correctness
- Software reliability
- Runtime efficiency
- Memory utilization
- Program maintainability
Understanding data types and structures enables programmers to choose appropriate representations for solving computational problems efficiently.


### 2.2 What is a Data Type?
A data type is a classification that specifies:

- The kind of values that can be stored.
- The operations that can be performed on those values.
- The amount of memory required for storage.
- The interpretation of stored data.
For example: age = 25

The variable age contains an integer value. The data type determines that arithmetic operations such as addition and subtraction can be performed on the variable. Thus, a data type defines both:
1. A set of values.
2. A set of permissible operations.


### 2.3 Importance of Data Types
Data types play a critical role in programming language design because they:

1. Improve Program Correctness
Data types help prevent invalid operations. Example: int age = 25;

Attempting to assign text to the variable will generate an error.

2. Improve Reliability
Type checking helps detect errors before program execution.

3. Improve Efficiency
The compiler or interpreter can optimize memory allocation when data types are known.

4. Enhance Readability
Proper use of data types makes programs easier to understand.


### 2.4 Primitive Data Types
Primitive data types are the basic building blocks provided directly by a programming language. They cannot be decomposed into simpler data types. Common primitive data types include:

- Integer
- Floating-point number
- Character
- Boolean
- String (primitive in some languages)

Integer Type Represents whole numbers. Examples: Python age = 25

JavaScript let age = 25;

C++ int age = 25;

Floating-Point Type Represents real numbers containing decimal values. Examples:

Python salary = 25000.50

JavaScript let salary = 25000.50;

C++ float salary = 25000.50;

Character Type Represents a single character. C++ char grade = 'A';

In Python and JavaScript, characters are represented using strings of length one. Python grade = "A"

JavaScript let grade = "A";

Boolean Type Represents logical values. Possible values:

- True
- False
Python passed = True

JavaScript let passed = true;

C++

bool passed = true;


### 2.5 Composite Data Types
Composite data types combine multiple primitive values into a single structure. Examples include:

- Arrays
- Lists
- Tuples
- Dictionaries
- Structures
- Objects

Arrays An array stores multiple values of the same type. C++ int scores[5] = {70, 80, 90, 85, 95};

Lists Lists are dynamic collections that can grow or shrink during execution. Python scores = [70, 80, 90, 85, 95]

Objects Objects combine data and behavior into a single entity. JavaScript let student = { name: "John", age: 20 };

Dictionaries Dictionaries store data as key-value pairs. Python student = { "name": "John", "age": 20 }


### 2.6 User-Defined Data Types
Programming languages allow programmers to create their own data types. These are called user-defined data types. Examples include:

- Structures
- Classes
- Enumerations
- Records

Structures in C++ struct Student { string name; int age; };

Classes in Python class Student: def __init__(self, name, age): self.name = name self.age = age

Classes in JavaScript class Student { constructor(name, age){ this.name = name; this.age = age; } }


### 2.7 Type Systems
A type system is a set of rules governing how data types are defined, checked, and used in a programming language. Type systems help ensure that programs behave correctly. A type system determines:

- What values variables may contain.
- What operations are permitted.
- How errors are detected.


### 2.8 Static and Dynamic Typing
One of the most important classifications of type systems is based on when type checking occurs.

Static Typing Static typing performs type checking during compilation. Example: C++ int x = 10;

Attempting: x = "CMS710";

produces a compilation error.

Advantages
- Early error detection
- Improved reliability
- Better performance
- Compiler optimization

Disadvantages
- Reduced flexibility
- More verbose code

Dynamic Typing Dynamic typing performs type checking during program execution. Python x = 10 x = "CMS710"

JavaScript let x = 10; x = "CMS710";

Advantages
- Greater flexibility
- Faster development
- Less code

Disadvantages
- Runtime errors
- Reduced type safety


### 2.9 Strong and Weak Typing
Type systems can also be classified based on enforcement strictness.

Strong Typing Strongly typed languages prevent inappropriate type conversions.

Example: Python age = 20


# age + "years"

Produces an error.

Weak Typing Weakly typed languages allow implicit type conversions. JavaScript console.log("5" + 2);

Output: 52

The number is automatically converted to a string.


### 2.10 Data Abstraction
Data abstraction is the process of hiding implementation details while exposing only essential features. It allows programmers to focus on what an object does rather than how it is implemented.


### Example
Consider a car. A driver uses:

- Steering wheel
- Accelerator
- Brake
The driver does not need to understand the internal engine mechanisms. Similarly, programmers interact with data structures through well-defined interfaces.

Benefits of Data Abstraction Simplicity Reduces complexity.

Reusability Abstract components can be reused.

Maintainability Changes to implementation do not affect users.

Security Internal details remain hidden.


### 2.11 Comparative Study of Python, JavaScript, and C++
Feature           Python          JavaScript       C++ Typing Style      Dynamic         Dynamic          Static Type Safety       Strong          Weak/Moderate Strong Compilation       Interpreted JIT/Interpreted      Compiled Memory Control Automatic          Automatic        Manual/Automatic Flexibility       Very High       High             Moderate Runtime Speed     Moderate        Moderate         High


### 2.12 Type Safety and Reliability
Type safety refers to the extent to which a language prevents invalid operations. Example: int age = 25;

Attempting: age = "Twenty Five";

produces an error.

Such restrictions improve software reliability. Languages with stronger type systems generally produce fewer runtime errors.


### 2.13 Flexibility versus Reliability
Programming language designers often balance flexibility against reliability. Dynamic languages: Advantages:

- Rapid development
- Easier experimentation
Disadvantages:

- Increased runtime errors
Static languages: Advantages:

- Strong verification
- Improved reliability
Disadvantages:

- More development effort
This trade-off is a central principle in programming language design.


### 2.14 Performance Implications of Type Systems
Type systems also influence program performance. Static typing enables:

- Compile-time optimization
- Efficient memory allocation
- Faster execution
Dynamic typing introduces:

- Runtime type checking

- Additional overhead
Consequently, C++ often outperforms Python and JavaScript in computationally intensive applications.


### Summary
This module examined the concept of data types and structures as fundamental elements of programming languages. The discussion covered primitive, composite, and user-defined data types, type systems, static and dynamic typing, strong and weak typing, and data abstraction. Python, JavaScript, and C++ were used to illustrate how different programming languages implement these concepts. The module demonstrated that type systems significantly influence software reliability, flexibility, maintainability, and performance.
