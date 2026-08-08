# CMS 702 — Data Structures and Computer Algorithms

**Programme:** PGD Computer Science, Rivers State University
**Units:** 3

> Transcribed from handwritten class notes (16 pages), lecture dated 04/05/2026.
> `[?]` marks text that was unclear in the scan; `[note: …]` marks a correction I am confident of.

---

## 1. Algorithms

An **algorithm** is a step-by-step procedure to solve a specific problem. It is a set of commands or instructions to solve a specific problem.

### Types of Algorithms

1. **Brute Force Algorithm** — tries all possible solutions to solve a specific problem.
2. **Recursive Algorithm** — a method that breaks a problem into smaller sub-problems and repeatedly breaks the problem until it is able to solve it.
3. **Encryption Algorithm** — utilises cryptographic techniques to transform data into a secure, readable form. Ensures confidentiality, privacy, digital communication and translation.
4. **Backtracking Algorithm** — uses trial-and-error techniques to explore potential solutions.
5. **Search Algorithm** — designed to find a specific target within a data search (dataset), enabling effective retrieval of information.
6. **Sort Algorithm** — aims at arranging elements in a specific order.
7. Divide and Rule (Divide and Conquer) Algorithm
8. Greedy Algorithm
9. Dynamic Programming Algorithm
10. Randomized Algorithm

---

## 2. Asymptotic Analysis

Refers to computing the running time of any piece of code or operation in a mathematical unit of computation. Its operation is computed in terms of a function **f(n)**. Also referred to as the method of describing the **limiting behaviour**.

This is the time required by the algorithm, and it falls under three types:

1. **Worst Case** — the maximum time required by an algorithm. Most likely the case used when analysing an algorithm.
2. **Best Case** — the minimum time it will take an algorithm to perform its complete execution.
3. **Average Case** — the average time an algorithm will take to complete execution.

### Asymptotic Notations

| Notation | Name | Bound described |
|---|---|---|
| **O** | Big O | Upper bound (worst case) |
| **Θ** | Theta | Tight bound (upper *and* lower) |
| **Ω** | Omega | Lower bound (best case) |

**Big O notation** — measures the performance or complexity of an algorithm. Refers to the **upper bound** of the growth rate of a function. E.g. if the function `g(x)` grows no faster than `f(x)`, then `g` is said to be a member of `O`.

Growth-rate ordering drawn in class (time vs. input size):

```
O(1)  <  O(log n)  <  O(n)  <  O(n²)
```

**Θ notation** — the tighter notation. Used to express **both** the upper bound and the lower bound of an algorithm's running time; the running time is sandwiched between `k₁·n` and `k₂·n` for all `n ≥ n₀`.

**Ω (Omega) notation** — expresses only the **best case** time complexity, i.e. the least amount of time an algorithm needs to reach completion. `f(n) = Ω g(n)` when `f(x)` stays at or above `c·g(n)` for `n ≥ n₀`.

### Upper and Average Complexity Bound

- **Average complexity** considers the expected performance of an algorithm given that all possible inputs of a certain size assume a certain distribution of input.
- **Upper complexity bound** provides a guarantee of the algorithm's performance in the worst-case scenario. This helps to ensure the algorithm won't perform unexpectedly poorly under any circumstances.

---

## 3. Complexity Classes

These classes categorize algorithms based on their worst-case time or space complexity.

| # | Class | Behaviour | Example |
|---|---|---|---|
| 1 | **Constant Time — O(1)** | Executes a fixed amount of time regardless of the volume of data | Array index access |
| 2 | **Logarithmic Time — O(log n)** | Divides the problem size into half at each step | Binary search |
| 3 | **Linear Time — O(n)** | Time directly proportional to the size of the input | Single loop / linear search |
| 4 | **Quadratic Time — O(n²)** | Time proportional to the square of the input size | Nested loops |
| 5 | **Exponential Time — O(2ⁿ)** | Complexity grows rapidly with the size of the input | Naïve recursion |

---

## 4. Sorting and Searching

### Sort Algorithms

Sorting is one of the most-studied concepts in computer science. The idea is to arrange the items of a list in a specific order.

```
Unsorted Array:  9  1  3  2  7  4
      ↓ sort
Sorted Array:    1  2  3  4  7  9
```

**Types of sort algorithms**
1. Merge Sort
2. Quick Sort
3. Bucket Sort
4. Heap Sort
5. Counting Sort

### Search Algorithms

**Binary Search** operates on a **sorted** dataset and performs a very efficient search.
Time complexity: **O(log n)**.
Idea: repeatedly divide in half the portion of the list that could contain the item, until narrowed down to one possible item.

---

## 5. Hashing

**Hashing** means lookup. It is the most widely used technique to find aggregate data by *key* or *id*. The data structure is called a **hash map** or **hash table**. It can also be thought of as mapping a large set of arbitrary data to a tabular index using a **hash function**.

Hashing is a method of representing dictionaries for large datasets. It allows **lookup, update and retrieval operations to occur in constant time**. The transformation of a key to its corresponding value is done using a hash function; the value obtained from the hash function is called the **hash code**.

### Components of Hashing

1. **Key** — any string or integer used as input to the hash function. A technique that determines an index or location for storing an item in a data structure.
2. **Hash Function** — receives the input key and returns the index of an element in an array called the Hash Table.
3. **Hash Table** — a data structure that maps keys to values using a special function (the hash function), storing data in an associative manner in an array where each data value has its own unique index.

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

### Worked Example 1

Suppose we have a set of strings `{"ab", "cd", "efg"}` and we want to store them in a table or array.

Letter values: `a=1, b=2, c=3, d=4, e=5, f=6, g=7`

```
ab  = a + b     = 1 + 2     = 3
cd  = c + d     = 3 + 4     = 7
efg = e + f + g = 5 + 6 + 7 = 18
```

Index positions as drawn in class (7-slot table):

```
index:   0     1     2     3     4     5     6
       ┌────┬─────┬────┬─────┬────┬────┬────┐
       │ cd │     │ ab │ efg │    │    │    │
       └────┴─────┴────┴─────┴────┴────┴────┘
```

[note: the standard rule is `index = sum mod table_size`; with size 7 that gives ab→3, cd→0, efg→4. Check the board copy in the original scans for the exact slot the lecturer used.]

**Assignment (from page 5):** Consider an array as a map where the key is the index and the value is the value at that index. Find the value at `A[i]`, where `A` is the location and `i` is the integer.

### Properties of a Good Hash Function

A hash function that maps every item into its own unique slot is known as a **perfect hash function**. A good hash function should:

1. Be efficiently computable
2. Uniformly distribute the keys
3. Minimize collision
4. Have a low load factor

### Collision

A **collision** occurs when `h(x) = h(y)` — two different keys map to the same hash value. Hash collisions can be intentionally created for many hash algorithms.

**Collision handling:**
1. **Separate chaining** — each cell of the hash table points to a linked list of records.
2. **Open addressing** — all the elements are stored in the hash table itself.

### Load Factor

```
load factor = (number of items the hash table contains) / (size of the hash table)
```

---

## 6. Dynamic Programming

A method of solving a complex problem by breaking it down into smaller units or sub-programs.

---

## 7. Data Structures

A **data structure** is a data organization, management and storage format that enables efficient access and modification. It can also be described as a collection of data values, the relationships among them, and the functions or operations that can be applied to the data.

### Types of Data Structures

1. **Inbuilt (primitive) data types** — integer, float, boolean
2. **Derived data types** — Stack, Queue, List, Array, etc.
3. **Complex data types** — used to store large data, e.g. linked list, tree, graph

### Basic Operations in Data Structures

1. Traversal
2. Searching
3. Sorting
4. Merging
5. Insertion
6. Deletion

### Representation of Data Types

**Array**

```
Name: Int Array(10)          Elements: {35, 33, 42, 10, 14, 19, 27, 44, 26, 31}
        ↑     ↑
      Type   Size
```

**Linked List**

```
[Head] → [Data items|•] → [Data items|•] → [Data items|•] → NULL
            Node              Node              Node
```

### Types of Arrays

1. **Fixed-size arrays** — cannot be altered; indexes are numbered.
2. **Dynamic-size arrays** — can be altered/changed. Can be one-, two- or three-dimensional.

### Types of Linked List

1. Simple (singly) linked list
2. Complex (doubly) linked list
3. Circular linked list

**Deleting a value in a linked list:** locate the target node, then redirect the previous node's pointer past the target so it points to the target's next node.

```
Head → [A|•] → [TARGET|•] → [C|•] → NULL
          └──────────────────↗   (pointer bypasses the target node)
```

---

## 8. Stacks

A **stack** is an abstract data type commonly used in most programming languages. Named "stack" because it behaves like a real-world stack, e.g. a stack of pizza, a pile of plates. A real-world stack allows operations at one end only, and at one time.

- Implements **LIFO** — Last In, First Out.
- Insertion is called **PUSH**; removal is called **POP**.
- Can be implemented by means of arrays, pointers, linked lists and structures.
- Can be fixed-size or dynamic in sizing.

```
        PUSH ↓   ↑ POP
       ┌──────────────┐
       │ ▓▓▓▓▓▓▓▓▓▓▓▓ │   LIFO
       │ ▓▓▓▓▓▓▓▓▓▓▓▓ │
       └──────────────┘
            STACK
```

---

## 9. Queues

A **queue** is an abstract data structure similar to the stack. Unlike the stack, the queue is open at **both ends**. It follows **FIFO** methodology (First In, First Out).

Two operations:
- **Enqueue()** — Add / Insert
- **Dequeue()** — Remove

---

## 10. Trees

A **tree** is a hierarchical, **non-linear** data structure. It is simple to understand due to its visual representation. This hierarchical structure is used in computer science as an abstract data type for various applications like data storage. In data science it is used to build predictive models, as it can handle a large amount of data. A tree represents **nodes connected by edges**.

### Properties of a Tree

1. The tree has one node called the **root**. Everything originates from that node, thus it has no parent.
2. Each node has one parent only, and can have multiple children.
3. Each node is connected to its children via an **edge**.

### Tree Terminologies

| Term | Meaning |
|---|---|
| **Path** [written "Root" on page 8] | Represents the sequence of nodes along the edges of the tree |
| **Root** | The node at the top of the tree. There is only one root per tree |
| **Parent** | Any node except the root has one edge upward to a node called its parent |
| **Child** | The node below a given node, connected by its edge downward |
| **Leaf** | A node that does not have any child node |
| **Sub-tree** | Represents the descendants of a node |
| **Traversing** | Passing through nodes in a specific order |
| **Levels** | The generation of a node. If the root is at level 0, its child is at level 1, its grandchild at level 2, its great-grandchild at level 3 |
| **Keys** | A key represents the value of a node, on which a search operation is carried out |

### What is a node?

A node is an entity that contains a **key or value** and **pointers to its child nodes**.

- The last node of each path is a **leaf node** (external node) and contains no link/pointer to a child node.
- A node that has at least one child node is an **internal node**.
- The **edge** is the link between any two nodes.

### Height, Depth, Degree

- **Root** — the topmost node of a tree.
- **Height of a node** — the number of edges from that node down to the deepest leaf (longest downward path).
- **Depth of a node** — the number of edges from the root to that node.
- **Height of the tree** — the longest path, in edges, to a leaf node.
- **Degree of a node** — the total number of branches at that node.
- **Forest** — a collection of disjoint trees.

**Worked example (page 11): find the depth and height of this tree**

```
            10
           /  \
          5    8
         / \  / \
        2   3 7  9
       /
      1
```

| Node | Depth (d) | Height (h) |
|---|---|---|
| 10 | 0 | 3 |
| 5  | 1 | 2 |
| 2  | 2 | 1 |
| 1  | 3 | 0 |

---

## 11. Types of Trees

The type of tree depends on the number of children a node has.

### 1. General Tree
A tree in which there is **no restriction** on the number of children a node has. E.g. a family tree (like a folder structure).

### 2. Binary Tree
Every node can have **at most two children** — left and right.

Binary trees are further divided into:

**(a) Full Binary Tree** — every node in the tree has either **0 or 2** children.

**(b) Perfect Binary Tree** — every internal node has exactly 2 children and all the leaf nodes are at the same level.

```
l = 2^h          n = 2^(h+1) − 1
```
where `n` = number of nodes, `h` = height of the tree, `l` = number of leaf nodes.

**(c) Complete Binary Tree** — like a full binary tree but with a few differences: every level must be completely filled, all leaf elements must lean towards the left, and the last leaf element might not have a right sibling.

```
        1
       / \
      2   3
     / \  /
    4  5 6
```

---

## 12. Binary Search Tree (BST)

A **BST** is a binary tree with the binary-search property:

> The value of the left node is **less than** its parent, and the value of the right node is **greater than** its parent.

BSTs are used for searching and sorting algorithms.

A BST is a node-based binary tree data structure used to store and manage data in a **sorted** manner. Its advantage: it bridges the gap between the fast lookup of a sorted array and the flexible modification of a linked list.

### Properties of a BST

Every node in the tree must strictly follow these rules:

1. Every node in the **left sub-tree** contains a value **strictly less** than the parent node's value.
2. Every node in the **right sub-tree** contains a value **strictly greater** than the parent node's value.
3. **Recursive application** — the left and right sub-trees must themselves be valid binary search trees.
4. **No duplicates** — standard BST implementations contain unique keys, to maintain a properly structured ordering.

### Worked example: build a BST from (37, 21, 13, 40, 36, 50)

```
          37
         /  \
       21    40
      /     /  \
    13    36    50
```

---

## 13. In-order Successor in a BST

> The in-order successor of a given node `K` is the node with the **smallest value greater than** the value of node `K` in the BST. If no such node exists, a value of **−1** is returned.


```
      2
     / \
    1   3
```
∴ in-order successor of `K` = **3**


```
      3
     /
    2
   /
  1
```
∴ in-order successor of `K` = **−1**

**Assignment (page 13):** `root = [20, 8, 22, 4, 12, N, N, N, N, 10, 14]`, `K = 8`

```
          20
         /  \
        8    22
       / \
      4   12
         /  \
       10    14
```
∴ answer = **10**

---

## 14. In-order Predecessor in a BST

Given a BST, the task is to find the in-order predecessor of a given target key. The **in-order predecessor** of a node is the **previous node in the in-order traversal** of the BST. It is **null** for the first node in the in-order traversal.


```
          20
         /  \
        8    22
       / \
      4   12
         /  \
       10    14
```

- in-order predecessor of **8** is **4**
- in-order predecessor of **10** is **8**
- in-order predecessor of **14** is **12**

---

## 15. BST Traversal

| Traversal | Order | Shorthand |
|---|---|---|
| **In-order** | Left → Root → Right | L-Root-R |
| **Pre-order** | Root → Left → Right | Root-L-R |
| **Post-order** | Left → Right → Root | L-R-Root |


```
In-order    = B, D, A, G, E, C, H, F, I
Pre-order   = A, B, D, C, E, G, F, H, I
Post-order  = D, B, G, E, H, I, F, C, A
```

[note: the tree diagram on page 14 is faint — re-check the original scans against these three sequences before using them as a memorised answer.]

---

## 16. Constructing a BST from Traversals

### From Pre-order + In-order

**Method:** From the pre-order sequence, the **first element is the root**. Find that root in the in-order sequence; everything to its **left** in the in-order belongs to the left sub-tree and everything to its **right** belongs to the right sub-tree. Recurse on each side to construct the tree.

**Worked example (page 15)**

```
Pre-order = 1, 2, 4, 8, 9, 10, 11, 5, 3, 6, 7      (root = 1)
In-order  = 8, 4, 10, 9, 11, 2, 5, 1, 6, 3, 7
```

Resulting tree:

```
              1
            /   \
           2      3
          / \    / \
         4   5  6   7
        / \
       8   9
          /  \
        10    11
```

A second construction exercise is worked on page 15 — the digits are hard to read in the scan, see the original scans.

### From Pre-order + Post-order

**Worked example (page 16)**

```
Pre-order  = F, B, A, D, C, E, G, I, H      [Root, Left, Right]
Post-order = A, C, E, D, B, H, I, G, F      [Left, Right, Root]
```

Both reconstructions give the same tree:

```
            F
          /   \
         B     G
        / \      \
       A   D      I
          / \    /
         C   E  H
```

---

## Assignments recorded in these notes

1. **Page 5** — Consider an array as a map where the key is the index and the value is the value at that index; find the value at `A[i]` where `A` is the location and `i` is the integer.
2. **Page 13** — In-order successor: `root = [20, 8, 22, 4, 12, N, N, N, N, 10, 14]`, `K = 8`. (Answer worked in class: **10**.)

---

*End of transcription — 16 pages.*
