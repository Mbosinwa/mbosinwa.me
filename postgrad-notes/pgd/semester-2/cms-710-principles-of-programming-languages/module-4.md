# CMS 710: Principles of Programming Languages


## Module 4: Control Structure and Data Flow

### Learning Objectives
At the end of this module, students should be able to:
1. Explain the concept of control structures in programming languages.
2. Differentiate between sequential, selection, iteration, and recursive control
structures.
3. Describe scope rules and their significance in program execution.
4. Explain different parameter-passing mechanisms used by programming languages.
5. Analyze how data flows through a program during execution.
6. Compare control flow constructs in Python, JavaScript, and C++.
7. Evaluate how control structures influence readability, maintainability, and program
reliability.
8. Discuss the differences between imperative and functional approaches to program
control.


### 4.1 Introduction
Programs do not simply consist of data and operations; they also require mechanisms that determine the order in which operations are executed. These mechanisms are known as control structures. Control structures are fundamental elements of programming languages because they govern the flow of execution and determine how decisions are made, how repetition occurs, and how functions interact within a program. Without control structures, programs would execute instructions strictly in the order they appear, making it impossible to implement decision-making processes, loops, or complex algorithms. The design of control structures significantly influences:

- Program readability
- Software reliability
- Maintainability
- Execution efficiency

Different programming languages provide different abstractions for controlling program execution.


### 4.2 What is Control Flow?
Control flow refers to the order in which statements, instructions, or function calls are executed in a program. Control flow determines:

- Which instruction executes next.
- Under what conditions execution changes direction.
- How repetition occurs.
- How data moves through program components.
Control flow is often represented using flowcharts, control-flow graphs, or execution traces.


### 4.3 Principles of Control Structures
Several fundamental principles guide the design of control structures.

Principle 1: Program Behaviour is Determined by Control Structures Control structures define the logical behaviour of a program. The same data and operations may produce different results depending on the sequence and conditions under which they execute.

Principle 2: Simplicity Improves Readability Simple control structures are generally easier to understand and maintain. Languages such as Python emphasize readability through simplified control constructs.

Principle 3: Abstraction Reduces Complexity Programming languages provide higher-level abstractions that hide low-level control details.

Examples include:

- foreach loops
- iterators
- generators
- recursive functions


### 4.4 Sequential Execution
Sequential execution is the simplest form of control flow. Statements are executed one after another in the order they appear.


### Example
Python ```python id=“7a2b4c” x = 10 y = 20 z = x + y print(z)

Execution order:

```text id="f8g6r3"
1. x = 10
2. y = 20
3. z = x + y
4. print(z)

Characteristics
- Simple
- Predictable
- Easy to understand
However, sequential execution alone cannot support decision-making or repetition.


### 4.5 Selection Structures
Selection structures allow a program to choose among alternative execution paths based on specified conditions. This enables decision making.

Types of Selection Single Selection Execute a statement if a condition is true.

Double Selection Choose between two alternatives.

Multiple Selection Choose among several alternatives.

Python Example ```python id=“p3q8t2” score = 65 if score >= 50: print(“Pass”)

---


## JavaScript Example

```javascript id="m7x5k9" if(score >= 50){ console.log("Pass"); }

C++ Example cpp id="n6c1y8" if(score >= 50){              cout << "Pass"; }

If-Else Structure Python python id="b5j2f7" if score >= 50:       print("Pass") else:   print("Fail")

Switch Statement JavaScript ```javascript id=“h9d4e6” switch(day){ case 1: console.log("Monday"); break;

case 2: console.log("Tuesday"); break;

default: console.log("Invalid Day");

}

---


## Advantages

- Supports decision making
- Improves flexibility
- Enhances program intelligence

---


# 4.6 Iteration Structures

Iteration allows a set of instructions to execute repeatedly until a specified condition is satisfied.

Iteration is commonly referred to as looping.

---


## Types of Loops


### For Loop

Used when the number of repetitions is known.


### While Loop

Used when repetitions depend on a condition.


### Do-While Loop

Executes at least once before testing the condition.

---


# For Loop Example

Python

```python id="d8t1r5" for i in range(5): print(i)

JavaScript ```javascript id=“v7u2m4” for(let i = 0; i < 5; i++){ console.log(i);

}

---

C++

```cpp id="r4n8w6" for(int i = 0; i < 5; i++){

cout << i;

}

While Loop Example Python ```python id=“k5s9f2” count = 1 while count <= 5: print(count) count += 1

---


## Advantages of Iteration

- Reduces code duplication
- Improves efficiency
- Simplifies repetitive tasks

---


# 4.7 Recursion

Recursion is a control mechanism in which a function calls itself to solve a problem.

A recursive solution typically consists of:


### Base Case

Terminates recursion.


### Recursive Case

Calls itself with a smaller problem.

---


## Example: Factorial

Mathematically:

```text id="y8x6q1" n! = n × (n−1)!

Python Example ```python id=“g2c4m9” def factorial(n):

if n == 1: return 1

return n * factorial(n - 1)

---


## JavaScript Example

```javascript id="u4f7j2" function factorial(n){

if(n === 1){ return 1; }

return n * factorial(n - 1); }

C++ Example ```cpp id=“c3k8r1” int factorial(int n){ if(n == 1) return 1;

return n * factorial(n - 1);

}

---


## Advantages

- Elegant solutions
- Natural representation of hierarchical structures
- Useful for trees and graphs

---


## Disadvantages

- Higher memory consumption
- Risk of stack overflow
- Often slower than iteration

---


# 4.8 Scope Rules

Scope determines where a variable can be accessed within a program.

Scope is a fundamental concept because it controls variable visibility and lifetime.

---


# Types of Scope


## Global Scope

Accessible throughout the program.

Python

```python id="a4n7p8" x = 10

Local Scope Accessible only within a function or block. Python ```python id=“e9v3t1” def test(): y = 20

print(y)

---


## Block Scope

Variables exist only inside specific blocks.

JavaScript

```javascript id="w2s6m5" if(true){

let age = 20;

}

Outside the block: javascript id="t7y4r9" console.log(age);

Produces an error.

Importance of Scope
- Prevents naming conflicts
- Enhances security
- Improves maintainability
- Supports modular design


### 4.9 Variable Lifetime
Variable lifetime refers to the period during which a variable exists in memory. A variable’s lifetime depends on:

- Scope
- Storage allocation method
- Program execution state
Examples:

- Global variables typically exist throughout execution.
- Local variables exist only while functions execute.


### 4.10 Parameter Passing Mechanisms
Functions often require data from other parts of a program. Programming languages provide mechanisms for passing arguments to functions.

Pass-by-Value A copy of the argument is passed. Changes inside the function do not affect the original variable.

C++ Example ```cpp id=“l5r7u3” void increment(int x){ x++;

}

---


# Pass-by-Reference

The function receives a reference to the original variable.

Changes affect the original variable.

---


## C++ Example

```cpp id="z8d1f4" void increment(int &x){

x++;

}

Python Parameter Passing Python uses an approach often described as:

Pass-by-Object-Reference Objects are passed by reference to object values.


### Example
```python id=“n2v6c8” def modify(lst): lst.append(100)

The original list is modified.

---


# 4.11 Data Flow Mechanisms

Data flow refers to how information moves through a program.

Data can flow:

- Between variables
- Between functions
- Between modules
- Between program components

---


# Input Process Output Model

Most programs follow:

```text id="b8q2f5" Input → Processing → Output


### Example
```python id=“x1m9w4” number = int(input()) square = number * number print(square)

Data flows from:

```text id="s4j8r2" User Input ↓

Variable ↓ Processing ↓ Output


### 4.12 Functional and Imperative Control Flow
Programming languages often support different control philosophies.

Imperative Control Flow Focuses on describing how tasks should be performed. Examples:

- C++
- JavaScript
- Python


### Example
```python id=“h7u4w9” total = 0 for number in numbers: total += number

---


# Functional Control Flow

Focuses on describing what should be computed.

---


## Example

Python

```python id="m8c3t6" total = sum(numbers)

The implementation details are hidden.

Advantages
- Simpler code
- Improved abstraction
- Reduced side effects


### 4.13 Structured Programming
Structured programming is a programming paradigm that emphasizes:

- Sequence
- Selection
- Iteration
while avoiding uncontrolled jumps such as excessive use of GOTO statements.

Benefits Improved Readability Programs become easier to understand.

Improved Reliability Errors become easier to identify.

Easier Maintenance Program modifications become simpler.


### 4.14 Comparative Study of Python, JavaScript, and C++
Feature                             Python      JavaScript C++ Readability                         Very High   High      Moderate

Feature                         Python       JavaScript C++ Block Structure                 Indentation Braces       Braces Recursion Support               Excellent    Excellent   Excellent Functional Features             Moderate     High        Moderate Performance                     Moderate     Moderate    High Parameter Passing Complexity Low             Moderate    High


### 4.15 Language Design Perspective
Control structures reveal many differences in language philosophy. Python emphasizes:

- Simplicity
- Readability
- Reduced syntax
JavaScript emphasizes:

- Flexibility
- Event-driven programming
- Functional constructs
C++ emphasizes:

- Performance
- Explicit control
- System-level programming
These differences demonstrate how language designers balance readability, abstraction, flexibility, and efficiency.


### Summary
This module examined the mechanisms that control program execution and data movement within software systems. The discussion covered sequential execution, selection, iteration, recursion, scope rules, parameter-passing mechanisms, and data flow. The module also explored structured programming and compared imperative and functional control approaches. Python, JavaScript, and C++ were used to demonstrate

how different programming languages implement control abstractions while pursuing different design goals.
