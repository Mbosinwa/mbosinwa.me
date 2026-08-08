# CMS 702: Past Question Study Guide (Solved)


Five past questions with full model answers, written at the length a 3-hour paper expects. Every answer traces back to the lecturer's own notes, section references in [the lecture notes](notes.html) are given so you can check the wording.

**Read this first:** all five questions are pure bookwork, definitions, lists and one diagram each. No calculation, no tree construction. That tells you what this examiner rewards: **defined terms, numbered lists, one example per term, one diagram.** Answer in that shape every time.

---

## Question 1: Define asymptotic algorithm and state the 3 asymptotic notations with a diagram

*(Notes §2)*

### Definition

**Asymptotic analysis** refers to computing the running time of any piece of code or operation in a mathematical unit of computation. Its operation is expressed in terms of a function **f(n)**, where `n` is the size of the input. It is also referred to as the method of describing the **limiting behaviour** of an algorithm, that is, how the algorithm behaves as the input size grows towards infinity, rather than how long it takes on one particular machine.

Asymptotic analysis is used because the actual running time of an algorithm depends on the hardware, the compiler and the programming language used. By ignoring machine-dependent constants and concentrating on the rate of growth, asymptotic analysis gives a measure of efficiency that holds for any machine.

The time required by an algorithm falls under **three cases**:

1. **Worst case**: the maximum time required by an algorithm. This is the case most commonly used when analysing an algorithm, because it guarantees the algorithm will never take longer.
2. **Best case**: the minimum time an algorithm will take to perform its complete execution.
3. **Average case**: the average time an algorithm will take to complete execution, assuming all inputs of a given size follow a certain distribution.

### The three asymptotic notations

| Notation | Name | Bound described | Case it measures |
|---|---|---|---|
| **O** | Big O | **Upper** bound | Worst case |
| **Θ** | Theta | **Tight** bound (upper *and* lower) | Average / exact case |
| **Ω** | Omega | **Lower** bound | Best case |

**1. Big O notation (O)**: used to measure the performance or complexity of an algorithm. It refers to the **upper bound** of the growth rate of a function. If a function `g(x)` grows no faster than `f(x)`, then `g` is said to be a member of `O(f(x))`. Big O tells us the algorithm will **never be slower** than the stated bound.

Formally: `f(n) = O(g(n))` if there exist positive constants `c` and `n₀` such that `0 ≤ f(n) ≤ c·g(n)` for all `n ≥ n₀`.

**2. Theta notation (Θ)**: the **tighter** notation. It is used to express **both** the upper bound and the lower bound of an algorithm's running time. The running time is sandwiched between `k₁·g(n)` and `k₂·g(n)` for all `n ≥ n₀`. Θ is the most precise of the three, because it says the algorithm is *neither faster nor slower* than the stated growth rate.

Formally: `f(n) = Θ(g(n))` if `0 ≤ k₁·g(n) ≤ f(n) ≤ k₂·g(n)` for all `n ≥ n₀`.

**3. Omega notation (Ω)**: used to express only the **best case** time complexity, i.e. the **least** amount of time an algorithm needs to reach completion. It describes the **lower bound**: the algorithm will **never be faster** than this.

Formally: `f(n) = Ω(g(n))` if `0 ≤ c·g(n) ≤ f(n)` for all `n ≥ n₀`.

### Diagram: draw all three

Draw the axes once (running time on the vertical axis, input size `n` on the horizontal axis) and mark `n₀` on each.

```
   Big O, UPPER bound            Θ, TIGHT bound              Ω, LOWER bound
   f(n) = O(g(n))                 f(n) = Θ(g(n))               f(n) = Ω(g(n))

 time │        c·g(n)           time │      k₂·g(n)          time │     f(n)
      │        ╱                     │      ╱                     │     ╱
      │      ╱   ╱ f(n)              │    ╱ ╱ f(n)                │   ╱ ╱
      │    ╱  ╱                      │  ╱ ╱ ╱                     │ ╱ ╱
      │  ╱ ╱                         │╱ ╱ ╱  k₁·g(n)              │╱ ╱   c·g(n)
      │╱╱                            │ ╱╱                         │╱
      └──────┬──────── n             └────┬────────── n           └───┬─────── n
            n₀                           n₀                          n₀
  f(n) stays BELOW c·g(n)        f(n) trapped BETWEEN         f(n) stays ABOVE c·g(n)
  for all n ≥ n₀                 k₁·g(n) and k₂·g(n)          for all n ≥ n₀
```

If you only have time for one diagram, draw the **growth-rate curves** the lecturer put on the board, which show why the classes are ranked as they are:

```
 time │  O(2ⁿ)  O(n²)
      │    │     │      ╱ O(n)
      │    │    ╱     ╱
      │    │  ╱     ╱        ╭──── O(log n)
      │    │╱    ╱      ╭────╯
      │   ╱╱  ╱   ╭─────╯
      │ ╱╱ ╱╭─────╯      ──────────── O(1)
      └────────────────────────────── input size (n)

        O(1) < O(log n) < O(n) < O(n²) < O(2ⁿ)
```

---

## Question 2: Define the following, with examples

### (a) Sort Algorithm

*(Notes §4)*

A **sort algorithm** is an algorithm that aims at **arranging the elements of a list in a specific order**: usually ascending or descending numerical order, or lexicographic (alphabetical) order. Sorting is one of the most studied concepts in computer science, because a sorted collection makes other operations, most importantly searching, far more efficient.

```
Unsorted Array:  9   1   3   2   7   4
                     ↓  sort
Sorted Array:    1   2   3   4   7   9
```


| Sort algorithm | How it works | Average complexity |
|---|---|---|
| **Merge sort** | Divides the list in half, sorts each half, then merges the two sorted halves | O(n log n) |
| **Quick sort** | Picks a pivot, partitions the list around it, recurses on both sides | O(n log n), worst O(n²) |
| **Bucket sort** | Scatters elements into buckets, sorts each bucket, then concatenates | O(n + k) |
| **Heap sort** | Builds a max-heap, then repeatedly extracts the maximum | O(n log n) |
| **Counting sort** | Counts the occurrences of each key and rebuilds the list in order | O(n + k) |

*(Others worth naming: bubble sort, selection sort and insertion sort, all O(n²).)*

### (b) Search Algorithm

*(Notes §1, §4)*

A **search algorithm** is an algorithm designed to **find a specific target within a dataset**, enabling effective retrieval of information. It answers the question "is this item present, and if so, where?"


**1. Sequential (linear) search**: checks each element of the list one after another, from the first to the last, until the target is found or the list is exhausted.
- Does **not** require the data to be sorted.
- Best case O(1) (item is first), worst case **O(n)**.

**2. Binary search**: operates on a **sorted** dataset and performs a very efficient search. The idea is to repeatedly **divide in half** the portion of the list that could contain the item, until we narrow it down to one possible item. It compares the target with the middle element: if the target is smaller it searches the left half, if larger it searches the right half.
- **Requires sorted data.**
- Time complexity **O(log n)**.

Worked illustration, searching for 7 in `1 2 3 4 7 9`:
```
Step 1:  1  2  3 [4] 7  9      middle = 4, 7 > 4 → discard the left half
Step 2:              7 [9]     middle = 9, 7 < 9 → discard the right half
Step 3:             [7]        found
```

**3. Binary Search Tree search**: exploits the BST property (left child less than parent, right child greater) to discard half the tree at every node. O(log n) on a balanced tree.

### (c) Dynamic Programming

*(Notes §6)*

**Dynamic programming (DP)** is a method of solving a **complex problem by breaking it down into smaller units or sub-problems**, solving each sub-problem once, and storing its result so that it does not have to be recomputed when the same sub-problem arises again.

It applies to problems with two features:
1. **Overlapping sub-problems**: the same sub-problem is solved repeatedly.
2. **Optimal substructure**: the optimal solution of the whole problem can be built from the optimal solutions of its sub-problems.

DP differs from plain divide-and-conquer in that divide-and-conquer solves **independent** sub-problems, while dynamic programming **stores and reuses** the answers to overlapping ones. This is the time–space tradeoff: DP spends memory to save time.


```
fib(5) → fib(4) + fib(3)
         fib(3) + fib(2)   fib(2) + fib(1)     ← fib(3) and fib(2) computed twice
```

With dynamic programming the results are stored in a table and each value is computed once, reducing the cost to **O(n)**:

```
fib[0] = 0
fib[1] = 1
for i = 2 to n:
    fib[i] = fib[i-1] + fib[i-2]
```

**Other standard examples:** the knapsack problem, the longest common subsequence, matrix chain multiplication, and shortest-path algorithms such as Floyd–Warshall.

---

## Question 3: What is Hashing, Hash Function and Hash Table?

*(Notes §5)*

### Hashing

**Hashing** means **lookup**. It is the most widely used technique to find aggregate data by **key** or **id**. It can also be thought of as **mapping a large set of arbitrary data to a tabular index using a hash function**.

Hashing is a method of representing dictionaries for large datasets. Its central advantage is that it allows **lookup, update and retrieval operations to occur in constant time, O(1)**: instead of the O(n) needed to scan a list. The transformation of a key into its corresponding value is done using a hash function, and the value obtained from the hash function is called the **hash code**.

### The three components of hashing

**1. Key**: can be any string or integer used as the **input** to the hash function. It is the technique that determines the index or location for storing an item in a data structure.

**2. Hash Function**: the function that **receives the input key and returns the index** of an element in an array called the hash table. It performs the transformation from key to location.

**3. Hash Table**: a data structure that **maps keys to values** using a special function (the hash function), storing the data in an **associative manner** in an array where each data value has its own unique index.

### Diagram

```
   Keys                Hash Function            Buckets (Hash Table)
 ┌───────┐                                    ┌─────┬──────────┐
 │ Key_1 │──┐                                 │ Key │  Value   │
 ├───────┤  │        ┌───────────────┐        ├─────┼──────────┤
 │ Key_2 │──┼───────▶│ Hash Function │───────▶│  0  │ Value_1  │
 ├───────┤  │        └───────────────┘        │  1  │ Value_2  │
 │ Key_3 │──┘                                 │  2  │ Value_3  │
 └───────┘                                    │  3  │ Value_4  │
                                              └─────┴──────────┘
```

### Worked example (the one from class)

Store the strings `{"ab", "cd", "efg"}` in a table of size 7, with `a=1, b=2, c=3, d=4, e=5, f=6, g=7`:

```
ab  = a + b     = 1 + 2     =  3  →  3 mod 7 = index 3
cd  = c + d     = 3 + 4     =  7  →  7 mod 7 = index 0
efg = e + f + g = 5 + 6 + 7 = 18  → 18 mod 7 = index 4

index:   0     1     2     3     4     5     6
       ┌────┬─────┬─────┬────┬─────┬─────┬────┐
       │ cd │     │     │ ab │ efg │     │    │
       └────┴─────┴─────┴────┴─────┴─────┴────┘
```

### Supporting points to add for extra marks

**Properties of a good hash function**: a hash function that maps every item into its own unique slot is a **perfect hash function**. A good hash function should:
1. Be efficiently computable
2. Uniformly distribute the keys
3. Minimize collision
4. Have a low load factor

**Collision**: occurs when `h(x) = h(y)`, i.e. **two different keys map to the same hash value**. It is handled by:
- **Separate chaining**: each cell of the hash table points to a linked list of records.
- **Open addressing**: all the elements are stored in the hash table itself.

**Load factor**: `number of items the hash table contains ÷ size of the hash table`. A high load factor means more collisions and slower lookup.

---

## Question 4: State the importance of Data Structures

*(Notes §7)*

### Definition first

A **data structure** is a data organization, management and storage format that enables **efficient access and modification**. It can also be described as a collection of data values, the relationships among them, and the functions or operations that can be applied to the data.

### Importance of data structures

1. **Efficient access and retrieval of data.** The right data structure lets a program find an item quickly. Searching an unsorted list is O(n), a sorted array with binary search is O(log n), and a hash table is O(1). The data structure chosen, not the processor speed, decides this.

2. **Efficient use of memory.** Data structures determine how data is represented in memory. Static structures such as arrays reserve memory in advance, while dynamic structures such as linked lists allocate memory only as needed, avoiding waste.

3. **They make algorithms possible and efficient.** Every algorithm operates on some data structure, binary search needs a sorted array, BFS needs a queue, DFS needs a stack, heap sort needs a heap. A well-chosen data structure can reduce an algorithm from O(n²) to O(n log n).

4. **They model real-world relationships.** Trees model hierarchies (file systems, organisation charts, family trees), graphs model networks (roads, social networks, the internet), queues model waiting lines, and stacks model the undo function and function call handling.

5. **Reusability and abstraction.** A data structure defines an interface (an abstract data type) separately from its implementation, so the same stack or queue can be reused across many programs without rewriting it.

6. **They support the standard operations on data**: traversal, searching, sorting, merging, insertion and deletion, in an organised and predictable way.

7. **Program maintainability and readability.** Data organised in a proper structure produces cleaner, shorter and more understandable code that is easier to debug and extend.

8. **They enable the time–space tradeoff to be managed deliberately.** A hash table spends extra memory to make searching constant-time; a linked list spends extra memory on pointers to make insertion and deletion cheap. Choosing the structure is choosing where to spend the resource that matters least to the application.

9. **They are the foundation of larger systems.** Databases use B-trees and indexes, compilers use parse trees and symbol tables, operating systems use queues for scheduling, and artificial intelligence uses graphs and trees for search, all of which are data structures.

### Useful supporting list

**Types of data structures:**
- **Inbuilt (primitive) data types**: integer, float, boolean
- **Derived data types**: stack, queue, list, array
- **Complex data types**: used to store large data, e.g. linked list, tree, graph

**Basic operations:** traversal · searching · sorting · merging · insertion · deletion

---

## Question 5: Differences between a Queue and a Static Data Structure

*(Notes §7, §9)*

### Define both terms first

**A queue** is an abstract data structure that is **open at both ends** and follows the **FIFO** methodology, **First In, First Out**. The element inserted first is the element removed first, exactly like a real-world queue of people. It has two operations:
- **Enqueue()**: Add / Insert (at the rear)
- **Dequeue()**: Remove (from the front)

```
        Dequeue                              Enqueue
      (remove) ←── [ A ][ B ][ C ][ D ] ←── (insert)
                   front              rear
                        F I F O
```

**A static data structure** is a data structure whose **size is fixed at compile time** and cannot be changed while the program is running. Memory is allocated in advance (on the stack), and it remains the same throughout the lifetime of the program. The classic example is the **fixed-size array**, which, as the notes state, *cannot be altered and whose indexes are numbered*.

### The differences

| # | Basis | **Queue** | **Static Data Structure** |
|---|---|---|---|
| 1 | **What it is** | An abstract data type, defined by its *behaviour* (FIFO), not by how it is stored | A storage category, defined by *how memory is allocated*, i.e. fixed at compile time |
| 2 | **Size** | Logically unbounded; can grow and shrink as elements are enqueued and dequeued (when implemented with a linked list) | Fixed and declared in advance; cannot grow or shrink at run time |
| 3 | **Memory allocation** | Allocated dynamically at run time (heap) in a linked implementation | Allocated statically at compile time (stack) |
| 4 | **Access pattern** | Restricted, you may only insert at the **rear** and remove from the **front** | Random access, any element can be reached directly by its index, e.g. `A[i]`, in O(1) |
| 5 | **Order of operation** | Strictly **FIFO** | No ordering rule; the programmer accesses elements in any order |
| 6 | **Points of entry/exit** | Open at **both ends**: one for insertion, one for deletion | Every position is equally accessible; the concept of "ends" does not apply |
| 7 | **Operations** | Enqueue() and Dequeue() only | Insert, delete, traverse, search, update at any index, but the total capacity cannot change |
| 8 | **Memory efficiency** | Uses exactly as much memory as it currently holds | May waste memory if under-filled, or overflow if the declared size is too small |
| 9 | **Insertion/deletion cost** | O(1) at the designated end | Insertion or deletion in the middle costs O(n), because elements must be shifted |
| 10 | **Examples** | Printer queue, CPU scheduling, BFS traversal, call-centre waiting line, keyboard buffer | Fixed-size array, a record/struct, a fixed-size matrix |
| 11 | **Classification in the notes** | A **derived** data type | Describes how a data structure is stored; the array is the standard example |

### One-sentence answer if the examiner wants brevity

> A queue is an abstract data type defined by FIFO behaviour with restricted access at two ends and can grow dynamically at run time, whereas a static data structure is one whose size is fixed at compile time, whose memory is allocated in advance, and whose elements are randomly accessible by index.

### Careful: a note on this question

The comparison is not symmetrical: "queue" names a **specific ADT**, while "static data structure" names a **whole category** based on memory allocation. Say this in your answer, it shows you understand the classification and not only the memorised table. Then make the contrast concrete by comparing the **queue against the fixed-size array**, which is the standard static structure in the notes.

Note also that a queue *can itself be implemented on top of a static array* (a "circular queue" or "bounded queue"). In that case it inherits the fixed capacity and can suffer **overflow** when full. The FIFO *behaviour* is what makes it a queue; the array is only the storage underneath. Adding this sentence distinguishes a first-class answer from an average one.

### Related comparison the examiner may ask instead: Stack vs Queue

| Basis | **Stack** | **Queue** |
|---|---|---|
| Principle | LIFO, Last In, First Out | FIFO, First In, First Out |
| Open at | One end only | Both ends |
| Operations | PUSH (insert), POP (remove) | Enqueue() (insert), Dequeue() (remove) |
| Pointers used | One (top) | Two (front and rear) |
| Real-world analogy | A pile of plates, a stack of pizza | A queue of people at a counter |
| Used in | Recursion / function calls, undo, DFS | CPU scheduling, printer spooling, BFS |

---

## What these past questions tell you about the paper

1. **Every question is bookwork.** Definitions, lists, one example each, one diagram. No BST construction appeared here, but the lecturer spent the most board time on BSTs, so prepare both. Bookwork is the safe marks; the trees are the differentiator.
2. **Diagrams are explicitly requested** (Q1). Practise drawing the three asymptotic-bound sketches and the hashing key → function → bucket diagram until they take under a minute each.
3. **"Define X" always means: definition + example.** Never give a definition alone when the question says "with examples".
4. **Comparison questions want a table.** Q5 is answered fastest and most completely as a table with a "basis of comparison" column.
5. **Numbered lists earn marks per item.** Q4 is open-ended, write eight or nine points rather than three, since each valid point scores.

Cross-reference: [the cheatsheet](cheatsheet.html) for the memorisation lists · [the syllabus gap notes](syllabus-gaps.html) for graphs and sorting mechanics · [the practice questions](practice-questions.html) for 35 more questions.
