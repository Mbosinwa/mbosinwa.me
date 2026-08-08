# CMS 708 — Structured Programming


> original indentation was lost in the source document, so the C++ snippets are flat.

---

## Module 1: Introduction to Structured Programming


### Concept of Structured Programming vs. Unstructured Programming

Programming has evolved significantly over the decades, and one of the most important milestones in this evolution is the shift from *unstructured* to *structured* programming. Unstructured programming, often associated with early languages like BASIC or assembly, relied heavily on the use of '**goto' statements** and sequential execution. While it allowed programmers to develop code quickly, it often resulted in "spaghetti code"—programs that are tangled, difficult to read, and even harder to maintain. In such programs, the flow of control jumps unpredictably, making debugging and modification a nightmare.

Structured programming emerged as a response to these challenges. It emphasizes the use of 'clear control structures' such as sequence, selection (if/else, switch), and iteration (loops). Instead of arbitrary jumps, structured programming enforces logical flow and modular design. This approach makes programs easier to understand, test, and extend. The philosophy is simple: break down a complex problem into smaller, manageable parts, and solve each part systematically.

In the early days of programming, developers often relied on **unstructured code** that used 'goto' statements to jump around the program. This approach worked for small tasks but quickly became unmanageable for larger projects. Imagine a traffic system where cars could suddenly teleport to random roads without rules—that's what unstructured programming feels like.

Unstructured Program Example **(**using **'**goto'**):**

Shown below is a C++ code illustrating the use of Goto statements.

```cpp
#include <iostream>
using namespace std;
int main() {
int x = 0;
start:
cout << "Enter a number (0 to quit): ";
cin >> x;
if (x != 0) {
cout << "You entered: " << x << endl;
goto start; // jumps back to start
}
cout << "Program ended." << endl;
return 0;
}
```

This program works, but the use of 'goto' makes the flow harder to follow. If the program grows larger, debugging becomes chaotic.

Structured Program Example **(**using loops**):**

```cpp
#include <iostream>
using namespace std;
int main() {
int x;
do {
cout << "Enter a number (0 to quit): ";
cin >> x;
if (x != 0) {
cout << "You entered: " << x << endl;
}
} while (x != 0);
cout << "Program ended." << endl;
return 0;
}
```

In the code shown above, the do-while loop provides a clear, predictable structure. The program is easier to read, maintain, and extend.

In essence, structured programming replaces chaos with order, ensuring that programs are not only functional but also maintainable in the long run.


### Importance of Modularity and Readability

The two key pillars of structured programming are 'modularity' and 'readability'.

**Modularity** refers to dividing a program into independent units or modules, such as functions or procedures. Each module performs a specific task and can be developed, tested, and reused independently. This reduces redundancy and enhances collaboration, as different programmers can work on separate modules without interfering with each other.

**Readability** ensures that code is understandable not only to the original author but also to others who may need to maintain or extend it later. Readable code uses meaningful variable names, consistent indentation, and clear documentation. It avoids unnecessary complexity and follows logical patterns that mirror human reasoning.

Together, modularity and readability make programming a disciplined activity rather than a chaotic one. They transform code into a form of communication— not just between the programmer and the computer, but also between programmers themselves. In academic and professional settings, these qualities are indispensable, as they ensure that software can evolve gracefully over time.

In real-world software development, teams often work on large projects like banking systems, hospital management software, or even video games. Without modularity, the codebase becomes overwhelming. Modularity allows developers to break problems into smaller, reusable functions.

Let us consider the following C++ code illustrations:


### Example: Without Modularity

```cpp
#include <iostream>
using namespace std;
int main() {
int a, b;
cout << "Enter two numbers: ";
cin >> a >> b;
cout << "Sum: " << a + b << endl;
cout << "Difference: " << a - b << endl;
cout << "Product: " << a * b << endl;
cout << "Quotient: " << a / b << endl;
return 0;
}
```

The above code looks good and runnable, but everything is crammed into **main ()**. If we want to reuse the arithmetic operations elsewhere, we'd have to rewrite them.


### Example: With Modularity

```cpp
#include <iostream>
using namespace std;
int add(int x, int y) { return x + y; }
int subtract(int x, int y) { return x - y; }
int multiply(int x, int y) { return x * y; }
double divide(int x, int y) { return (double)x / y; }
int main() {
int a, b;
cout << "Enter two numbers: ";
cin >> a >> b;
cout << "Sum: " << add(a, b) << endl;
cout << "Difference: " << subtract(a, b) << endl;
cout << "Product: " << multiply(a, b) << endl;
cout << "Quotient: " << divide(a, b) << endl;
return 0;
}
```


### Overview of C++ as a Structured Programming Language

C++ is often celebrated as a 'multi-paradigm' language, supporting both structured and object-oriented programming. At its core, however, C++ provides all the tools necessary for structured programming.

- It offers **control structures** like 'if', 'switch', 'for', 'while', and 'do-while' loops, which enforce logical flow.

- It supports **functions**, enabling modular design and code reuse. Functions in C++ can be parameterised, recursive, and organised into libraries, making them powerful building blocks.

- C++ also provides 'strong typing' and 'data abstraction', which help programmers manage complexity and avoid errors.

While C++ is widely known for its object-oriented features such as classes and inheritance, its foundation lies in structured programming principles. In fact, mastering structured programming in C++ is essential before moving on to more advanced paradigms. By learning to write clean, modular, and readable structured programs, students build the discipline and mindset required for tackling larger software projects.

C++ supports structured programming through its 'control structures', 'functions', and 'strong typing'. For example, let us consider a real-world scenario like a student grading system, where structured programming principles help ensure clarity.


```cpp
#include <iostream>
using namespace std;
string grade(int score) {
if (score >= 70) return "A";
else if (score >= 60) return "B";
else if (score >= 50) return "C";
else if (score >= 45) return "D";
else return "F";
}
int main() {
int score;
cout << "Enter student score: ";
cin >> score;
cout << "Grade: " << grade(score) << endl;
return 0;
}
```


## Module 2: C++ Fundamentals


### Syntax, Variables, and Data Types

C++ syntax defines the rules for writing valid programs. Just as grammar governs language, syntax governs programming. Every C++ program begins with a main() function, which acts as the entry point. Statements end with semicolons, and blocks of code are enclosed in curly braces {}.

Variables are named storage locations in memory that hold data. They must be declared with a data type, which specifies the kind of values they can store. C++ is a strongly typed language, meaning variables must be declared before use, and type mismatches often result in errors.


### Common Data Types in C++:

- int – integers (whole numbers)

- float – single-precision decimal numbers

- double – double-precision decimal numbers

- char – single characters

- bool – true/false values

- string – text (requires <string> library)


### Example: Declaring Variables

```cpp
#include <iostream>
#include <string>
using namespace std;
int main() {
```

int age = 20; // integer

double salary = 45000; // floating-point number

char grade = 'A'; // character

bool isEmployed = true; // boolean

string name = "Ada"; // string

```cpp
cout << "Name: " << name << ", Age: " << age << endl;
return 0;
}
```

The above code snippet shows how different data types can represent real-world information like a person's profile.


### Input/Output Operations

```cpp
Input and output (I/O) operations are essential for interacting with users. In C++, the iostream library provides 'cin' for input and 'cout' for output. These operations make programs dynamic, allowing users to provide data in real time instead of hardcoding values.
Example: Simple I/O
#include <iostream>
using namespace std;
int main() {
int number;
cout << "Enter a number: "; // output prompt
cin >> number; // input from user
cout << "You entered: " << number << endl;
return 0;
}
```

Here, the program asks the user for input and then displays it back. This interaction, as shown above, forms the foundation of most real-world applications like ATM systems, where users input PINs and receive outputs like 'account balances', etc.


### Operators and Expressions

Operators are symbols that perform operations on variables and values. Expressions combine variables, constants, and operators to produce results. C++ supports several categories of operators:

- **Arithmetic Operators**: +, -, *, /, %

- **Relational Operators**: ==, !=, <, >, <=, >=

- **Logical Operators**: && (AND), \|\| (OR), ! (NOT)

- **Assignment Operators**: =, +=, -=, *=, /=

- **Increment/Decrement Operators**: ++, --


### Example: Operators in Action

```cpp
#include <iostream>
using namespace std;
int main() {
int a = 10, b = 3;
cout << "Arithmetic: " << endl;
cout << "a + b = " << a + b << endl;
cout << "a % b = " << a % b << endl;
cout << "\nRelational: " << endl;
cout << "a > b? " << (a > b) << endl;
cout << "\nLogical: " << endl;
cout << "(a > 5 && b < 5)? " << (a > 5 && b < 5) << endl;
return 0;
}
```

This program demonstrates arithmetic, relational, and logical operators. In real-world terms, operators are used in decision-making systems—for example, checking if a student's score is greater than 50 to determine if they passed.


### Putting It All Together: A Real-World Example

Imagine a simple payroll system where the program calculates an employee's net salary after tax deductions.

```cpp
#include <iostream>
using namespace std;
int main() {
string name;
double grossSalary, taxRate, netSalary;
cout << "Enter employee name: ";
cin >> name;
cout << "Enter gross salary: ";
cin >> grossSalary;
cout << "Enter tax rate (%): ";
cin >> taxRate;
netSalary = grossSalary - (grossSalary * taxRate / 100);
cout << "\nEmployee: " << name << endl;
cout << "Net Salary: " << netSalary << endl;
return 0;
}
```

This example integrates variables, data types, input/output, and operators into a practical application. We see how fundamental concepts directly apply to real-world problems.


### Practice Exercises – Module 2: C++ Fundamentals

- **Exercise 1:** Write a program that declares variables for a student's name, age, and GPA. Print them neatly in a sentence like: *"Student Ada is 20 years old with a GPA of 3.5."*

- **Exercise 2:** Declare variables of different data types (int, double, char, bool) and display their values. Try changing the values and re-running the program.

<!-- -->

- **Exercise 3:** Write a program that asks the user for their favorite color and food, then prints: *"Your favorite color is blue and your favorite food is pizza."*

- **Exercise 4:** Create a program that takes two numbers as input and prints their sum, difference, product, and quotient.

<!-- -->

- **Exercise 5:** Write a program that asks the user for their age and checks if they are eligible to vote (age ≥ 18). Print either *"You can vote"* or *"You are too young to vote."*

- **Exercise 6:** Create a program that calculates the area of a rectangle. The user should input the length and width, and the program should output the area.

- **Exercise 7:** Write a program that asks the user for a number and prints whether it is even or odd using the modulus operator %.


## Module 3: Control Structures


### Conditional Statements (if, switch)

Conditional statements allow programs to make decisions based on certain conditions. They are the backbone of logic in programming.

- if **statement**: Executes a block of code if a condition is true.

- if-else **statement**: Provides an alternative block if the condition is false.

- switch **statement**: Useful when multiple possible values of a variable need to be checked.


```cpp
#include <iostream>
using namespace std;
int main() {
int score;
cout << "Enter student score: ";
cin >> score;
if (score >= 70) cout << "Grade: A" << endl;
else if (score >= 60) cout << "Grade: B" << endl;
else if (score >= 50) cout << "Grade: C" << endl;
else cout << "Grade: F" << endl;
return 0;
}
Example: Using 'switch' for menu selection
#include <iostream>
using namespace std;
int main() {
int choice;
cout << "Menu:\n1. Add\n2. Subtract\n3. Multiply\n4. Divide\n";
cout << "Enter choice: ";
cin >> choice;
switch(choice) {
case 1: cout << "You chose Addition." << endl; break;
case 2: cout << "You chose Subtraction." << endl; break;
case 3: cout << "You chose Multiplication." << endl; break;
case 4: cout << "You chose Division." << endl; break;
default: cout << "Invalid choice." << endl;
}
return 0;
}
```


### Iterative Constructs ('for', 'while', 'do-while'):

Iteration allows repetition of tasks without rewriting code. Iterations can be implemented as:

- a 'for' loop: Best when the number of iterations is known.

- a 'while' loop: Executes as long as a condition remains true.

- Or a 'do-while' loop: Similar to 'while', but guarantees at least one execution.


### Example: Using for loop to print numbers

```cpp
#include <iostream>
using namespace std;
int main() {
for (int i = 1; i <= 5; i++) {
cout << "Number: " << i << endl;
}
return 0;
}
Example: Using while loop for password check
#include <iostream>
using namespace std;
int main() {
string password;
cout << "Enter password: ";
cin >> password;
while (password != "secret") {
cout << "Wrong password! Try again: ";
cin >> password;
}
cout << "Access granted!" << endl;
return 0;
}
Example: Using do-while loop for repeated input
#include <iostream>
using namespace std;
int main() {
int num;
do {
cout << "Enter a positive number (0 to quit): ";
cin >> num;
if (num > 0) cout << "You entered: " << num << endl;
} while (num != 0);
return 0;
}
```


### Nested Control Structures

Control structures can be combined or nested to handle complex logic. For example, a loop may contain an if statement, or an if statement may contain another loop.


### Example: Nested for loops for multiplication table

```cpp
#include <iostream>
using namespace std;
int main() {
for (int i = 1; i <= 3; i++) {
for (int j = 1; j <= 3; j++) {
cout << i << " x " << j << " = " << i * j << endl;
}
cout << endl;
}
return 0;
}
```


### Operators and Expressions in Control Structures

Operators are often used inside conditions to evaluate logic. Relational (<, >, ==) and logical (&&, \|\|, !) operators are especially important.


### Example: Checking eligibility with operators

```cpp
#include <iostream>
using namespace std;
int main() {
int age;
bool hasID;
cout << "Enter age: ";
cin >> age;
cout << "Do you have an ID? (1 for yes, 0 for no): ";
cin >> hasID;
if (age >= 18 && hasID) {
cout << "You are eligible to vote." << endl;
} else {
cout << "You are not eligible to vote." << endl;
}
return 0;
}
```


### Practice Exercises – Module 3: Control Structures

1.  Write a program that asks the user for a temperature and prints whether it is *cold*, *warm*, or *hot*.

2.  Create a program that uses a switch statement to simulate a simple ATM menu (Check Balance, Deposit, Withdraw).

<!-- -->

3.  Write a program using a for loop to print the first 10 square numbers.

4.  Create a while loop program that keeps asking the user for a password until they enter the correct one.

5.  Write a do-while loop program that keeps asking for numbers and prints their sum until the user enters 0.

<!-- -->

6.  Write a program that prints a multiplication table from 1 to 5 using nested for loops.

7.  Create a program that asks for a student's score and then uses nested if statements to determine both grade and whether the student passed or failed.

<!-- -->

8.  Build a simple login system:

    - Ask the user for a username and password.

    - Allow up to 3 attempts using a loop.

    - If correct, print *"Login successful"*. Otherwise, print *"Access denied"*.


## Module 4: Functions and Modular Programming


### Function Definition and Invocation

```cpp
A function is a block of code designed to perform a specific task. Functions help break down complex problems into smaller, manageable parts, making programs easier to understand, test, and maintain. In C++, a function must be defined with a return type, a name, and parameters (if any). Once defined, it can be invoked (called) from main() or other functions.
Example: Function to calculate area of a rectangle
#include <iostream>
using namespace std;
double area(double length, double width) {
return length * width;
}
int main() {
double l = 5.0, w = 3.0;
cout << "Area: " << area(l, w) << endl;
return 0;
}
```

In the preceding example, the function 'area()' is defined once and can be reused multiple times, demonstrating modularity.


### Parameter Passing (By Value, By Reference)

Functions often require inputs, called **parameters**. In C++, parameters can be passed in two ways:

- **By Value**: A copy of the variable is passed. Changes inside the function do not affect the original variable.

- **By Reference**: The actual variable is passed using &. Changes inside the function affect the original variable.


### Example: By Value

```cpp
#include <iostream>
using namespace std;
void incrementByValue(int x) {
x++;
cout << "Inside function: " << x << endl;
}
int main() {
int num = 10;
incrementByValue(num);
cout << "Outside function: " << num << endl;
return 0;
}
```

The output, from the above code segment, shows that the original variable remains unchanged.


### Example: By Reference

```cpp
#include <iostream>
using namespace std;
void incrementByReference(int &x) {
x++;
cout << "Inside function: " << x << endl;
}
int main() {
int num = 10;
incrementByReference(num);
cout << "Outside function: " << num << endl;
return 0;
}
```

In the above example, the original variable is modified because it was passed by reference.


### Scope and Lifetime of Variables

The **scope** of a variable refers to where it can be accessed in a program.

- **Local variables**: Declared inside a function; ccessible only within that function.

- **Global variables**: Declared outside all functions; accessible throughout the program.

The **lifetime** of a variable refers to how long it exists in memory. Local variables exist only while the function runs, while global variables exist for the entire program execution.


### Example: Scope Demonstration

```cpp
#include <iostream>
using namespace std;
int globalVar = 100; // global variable
void showLocal() {
int localVar = 50; // local variable
cout << "Local variable: " << localVar << endl;
cout << "Global variable: " << globalVar << endl;
}
int main() {
showLocal();
cout << "Global variable in main: " << globalVar << endl;
// cout << localVar; // ERROR: localVar not accessible here
return 0;
}
```

This example shows how local and global variables differ in scope.


### Recursion

Recursion occurs when a function calls itself to solve a problem. It is particularly useful for problems that can be broken down into smaller, similar subproblems, such as factorial calculation or Fibonacci sequence generation.


### Example: Factorial using recursion

```cpp
#include <iostream>
using namespace std;
int factorial(int n) {
if (n == 0) return 1; // base case
else return n * factorial(n - 1); // recursive call
}
int main() {
int num = 5;
cout << "Factorial of " << num << " is " << factorial(num) << endl;
return 0;
}
```

Recursion is powerful but must be used carefully to avoid infinite loops or excessive memory usage.


### Practice Exercises – Module 4: Functions and Modular Programming


### Function Definition and Invocation

1.  Write a function that calculates the square of a number and call it from main().

2.  Create a function that converts Celsius to Fahrenheit and test it with different values.


### Parameter Passing

3.  Write a program that demonstrates passing by value and by reference using a function that doubles a number.

4.  Create a function that swaps two numbers using pass-by-reference.


### Scope and Lifetime

5.  Write a program with a global variable and a local variable of the same name. Print both to show the difference.

6.  Create a program that uses a static local variable inside a function to count how many times the function has been called.


### Recursion

7.  Write a recursive function to calculate the sum of numbers from 1 to n.

8.  Create a recursive function to generate the Fibonacci sequence up to n terms.


### Modularisation

Modularisation is the process of breaking a large program into smaller, independent units called **modules**. Each module performs a specific task and can be developed, tested, and maintained separately. This approach mirrors how we solve problems in everyday life: instead of tackling everything at once, we divide tasks into manageable parts.

**Illustration:** Imagine planning a wedding. Instead of one person handling everything, responsibilities are divided into modules: catering, decoration, music, photography, and guest management. Each team focuses on its module, and when combined, the wedding runs smoothly.

In programming, modularisation ensures that:

- Code is **reusable** (a function written once can be used in multiple places).

- Programs are **easier to debug** (errors are isolated within modules).

- Teams can **collaborate** (different programmers work on different modules).

Example in C++:

```cpp
#include <iostream>
using namespace std;
double add(double a, double b) { return a + b; }
double subtract(double a, double b) { return a - b; }
int main() {
double x = 10, y = 5;
cout << "Sum: " << add(x, y) << endl;
cout << "Difference: " << subtract(x, y) << endl;
return 0;
}
```

Here, the program is modularised into separate functions for addition and subtraction.


### Top-Down Program Design

Top-down design starts with the **big picture** and progressively breaks it down into smaller details. The programmer begins by defining the overall problem, then divides it into subproblems, and finally implements each subproblem as a module.

**Illustration:** Think of building a house. The architect first designs the overall structure (rooms, floors, layout). Then, each part is broken down: plumbing, electrical wiring, roofing, and painting. The focus is on the **overall design first**, then the details.

In programming, top-down design emphasizes **stepwise refinement**: starting with a high-level algorithm and refining it into detailed functions.

Example in C++:

```cpp
#include <iostream>
using namespace std;
// High-level function
void manageStudent() {
cout << "Managing student records..." << endl;
// Refined into smaller tasks
cout << "1. Add student\n2. Delete student\n3. View student\n";
}
int main() {
manageStudent(); // Start with the big picture
return 0;
}
```

Here, the program begins with the broad task "manage student records," which can later be refined into smaller functions like addStudent(), deleteStudent(), and viewStudent().


### Bottom-Up Program Design

Bottom-up design takes the opposite approach. It starts with the **smallest building blocks** (functions, modules) and gradually integrates them into larger systems. Programmers first implement reusable components, then combine them to solve bigger problems.

**Illustration:** Imagine assembling a car. Engineers first design small components like the engine, tires, and seats. Once these modules are ready, they are integrated into the complete car. The focus is on **details first**, then the overall system.

In programming, bottom-up design emphasizes **reusability**: building small, tested modules that can be combined into larger applications.

Example in C++:

```cpp
#include <iostream>
using namespace std;
// Small building blocks
double add(double a, double b) { return a + b; }
double multiply(double a, double b) { return a * b; }
// Larger system built from modules
void calculate() {
double x = 4, y = 2;
cout << "Sum: " << add(x, y) << endl;
cout << "Product: " << multiply(x, y) << endl;
}
int main() {
calculate(); // Integrates smaller modules into a bigger system
return 0;
}
Example in C++:
#include <iostream>
using namespace std;
// Small building blocks
double add(double a, double b) { return a + b; }
double multiply(double a, double b) { return a * b; }
// Larger system built from modules
void calculate() {
double x = 4, y = 2;
cout << "Sum: " << add(x, y) << endl;
cout << "Product: " << multiply(x, y) << endl;
}
int main() {
calculate(); // Integrates smaller modules into a bigger system
return 0;
}
```

Here, the program starts with small functions (add, multiply) and then integrates them into a larger function (calculate).


### Comparison of Top-Down vs Bottom-Up

| **Aspect** | **Top-Down Design** | **Bottom-Up Design** |
|----|----|----|
| **Starting Point** | Big picture (overall problem) | Small modules (building blocks) |
| **Focus** | Stepwise refinement | Reusability of components |
| **Example (Real Life)** | Architect designing a house | Engineer assembling car parts |
| **Programming Approach** | Define main tasks, then refine | Build small functions, then integrate |

Both approaches are valuable. In practice, programmers often use a **hybrid approach**, combining top-down planning with bottom-up implementation to balance clarity and reusability.
