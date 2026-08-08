# CMS 710: Principles of Programming Languages


## Module 1: Language Definition Structure

### Learning Objectives
At the end of this module, students should be able to:
1. Define a programming language and explain its purpose.
2. Describe the fundamental goals of programming language design.
3. Differentiate between syntax and semantics.
4. Explain the role of language specifications and formal grammars.
5. Discuss the characteristics of a good programming language.
6. Compare language definition structures in Python, JavaScript, and C++.
7. Analyse trade-offs involved in programming language design.


### 1.1 Introduction
Programming languages serve as the primary medium through which humans communicate instructions to computers. Since computers understand only machine-level instructions represented in binary form, programming languages provide an abstraction layer that enables programmers to express computational solutions in a more natural and understandable manner. Over the years, hundreds of programming languages have been developed to address different computational needs. Some languages are designed for scientific computing, others for web development, artificial intelligence, systems programming, or embedded systems. Despite their differences, all programming languages share common structural principles that govern how programs are written, interpreted, compiled, and executed. Understanding the structure of programming languages is essential because it provides insight into why languages are designed the way they are and how their design affects program development, readability, efficiency, and maintainability.


### 1.2 What is a Programming Language?
A programming language is a formal language consisting of a set of symbols, keywords, syntax rules, and semantic rules used to communicate instructions to a computer.

In simpler terms, a programming language is a means through which programmers express algorithms and computational procedures that can be translated into machine-executable instructions.


### Definitions
A programming language can be viewed from three perspectives:

1. Communication Perspective
A programming language acts as a communication medium between the programmer and the computer.

2. Problem-Solving Perspective
A programming language provides tools and constructs for solving computational problems.

3. Formal System Perspective
A programming language is a mathematically defined system governed by precise syntactic and semantic rules.


### 1.3 Evolution of Programming Languages
Programming languages have evolved significantly since the early days of computing.

First Generation Languages (1GL) Machine Language Example: 10110000 01100001

Characteristics:

- Machine dependent
- Difficult to understand
- Fast execution

Second Generation Languages (2GL) Assembly Language Example:

MOV AX, 5 ADD AX, 2

Characteristics:

- Symbolic instructions
- Requires assembler
- Hardware dependent

Third Generation Languages (3GL) Examples:

- C++
- Java
- Python
- JavaScript
Characteristics:

- High-level abstraction
- Portable
- Easier development

Fourth Generation Languages (4GL) Examples:

- Prolog
- AI-oriented languages
Characteristics:

- Logic-based
- Knowledge representation
- Artificial intelligence applications


### 1.4 Goals of Programming Language Design
Every programming language is developed with specific objectives in mind. The major design goals include:

1. Readability
Readability refers to the ease with which programs can be understood. A language with high readability allows programmers to easily understand code written by others. Factors affecting readability include:

- Simplicity
- Consistency
- Clear syntax
- Meaningful keywords
Example: Python if score >= 50: print("Pass")

This code is generally easier to read due to its simple structure.

2. Writability
Writability refers to the ease with which programmers can create programs. A language with high writability provides powerful constructs that reduce development effort. Example: Python numbers = [1,2,3,4,5]

compared with more verbose implementations in lower-level languages.

3. Reliability
Reliability refers to the ability of a program to perform according to its specification under various conditions. A reliable language minimizes errors through:

- Strong type checking

- Exception handling
- Restricted operations
Example: C++ int age = 25;

The compiler checks type consistency before execution.

4. Maintainability
Maintainability refers to the ease with which software can be modified, corrected, or extended. Maintainable programs typically exhibit:

- Modular design
- Clear documentation
- Consistent coding standards

5. Efficiency
Efficiency refers to the effective utilization of system resources such as:

- CPU time
- Memory
- Storage
C++ is often preferred for performance-critical applications because it provides low-level control over system resources.


### 1.5 Syntax and Semantics
Every programming language consists of two fundamental components:

Syntax Syntax refers to the grammatical rules governing how program statements are written. It specifies the legal structure of programs.

Example: Python Correct: x = 10

Incorrect: = x 10

The second statement violates Python syntax rules.

Semantics Semantics refers to the meaning associated with syntactically correct statements. Example: x = 10 + 20

Syntax determines that the statement is correctly written. Semantics determines that the operation means adding 10 and 20 and storing the result in x. Thus:

- Syntax determines structure.
- Semantics determines meaning.


### 1.6 Language Specification
A language specification is a formal document describing all aspects of a programming language. It defines:

- Syntax
- Semantics
- Data types
- Operators
- Control structures
- Libraries

- Runtime behaviour
Examples include:

- Python Language Reference
- ECMAScript Specification (JavaScript)
- ISO C++ Standard
The language specification serves as the authoritative reference for language implementation and usage.


### 1.7 Grammars and Notation
Programming languages are formally described using grammars. A grammar specifies how valid program constructs can be formed. The most common notation is the Backus-Naur Form (BNF). Example: <assignment> ::= <identifier> = <expression>

Meaning: An assignment statement consists of:

- An identifier
- An assignment operator
- An expression
Example: x = y + z

This statement satisfies the grammar rule above.


### 1.8 Principles of Language Definition
Several important principles guide language definition.

Principle 1: Formal Rules Govern Every Language Programming languages are not arbitrary collections of symbols.

Every language follows precisely defined rules governing:

- Syntax
- Semantics
- Execution
Without these rules, compilers and interpreters would be unable to process programs consistently.

Principle 2: Simplicity versus Expressiveness Language designers constantly balance simplicity and expressive power. Simple languages: Advantages:

- Easier learning
- Improved readability
Disadvantages:

- Limited abstraction
Expressive languages: Advantages:

- Powerful constructs
- Reduced code size
Disadvantages:

- Increased complexity

Principle 3: Efficiency versus Safety Languages often balance performance and safety. C++ emphasizes performance. Python emphasizes programmer productivity and safety. This trade-off influences language adoption in different application domains.


### 1.9 Comparative Study of Python, JavaScript, and C++
The following comparison highlights how the three selected languages implement language definition structures.

Principle            Python      JavaScript      C++ Block Structure      Indentation Braces          Braces Typing Style         Dynamic     Dynamic         Static Compilation Model Interpreted    JIT/Interpreted Compiled Complexity           Low         Medium          High Memory Control       Automatic   Automatic       Manual/Automatic Readability          Very High   High            Moderate Runtime Speed        Moderate    Moderate        High


### 1.10 Illustrative Example
Python age = 20

if age >= 18: print("Adult")

JavaScript let age = 20;

if(age >= 18){ console.log("Adult"); }

C++
#include <iostream>
using namespace std;

int main(){ int age = 20;

if(age >= 18){ cout << "Adult"; }

return 0; }

Observation: All three programs implement the same logic. However, differences exist in:

- Syntax
- Type systems
- Block structures
- Execution models
These differences reflect distinct language design philosophies.


### Summary
This module introduced the concept of programming languages and examined the structural principles that govern their definition. The discussion covered programming language evolution, language design goals, syntax and semantics, language specifications, grammars, and key design trade-offs. Python, JavaScript, and C++ were used as representative examples to demonstrate how different programming languages implement these principles while pursuing different design objectives.
