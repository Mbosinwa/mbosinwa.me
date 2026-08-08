# CMS 702 — Syllabus Topics NOT in My Handwritten Notes

These topics appear on the official course outline ([the course outline](course-outline.html)) but are missing or only named in the class notes. Standard textbook material, kept short and exam-shaped. **Source: standard DSA material, not the lecturer's notes** — the wording in my notes always wins if they differ.

---

## 1. Graphs & Their Representation ← biggest gap

A **graph** `G = (V, E)` is a non-linear data structure consisting of a set of **vertices** (nodes) `V` and a set of **edges** `E` connecting pairs of vertices.

**Types**
- **Undirected** — edges have no direction; (A,B) = (B,A).
- **Directed (digraph)** — edges have direction; A→B ≠ B→A.
- **Weighted** — each edge carries a cost/weight.
- **Cyclic / Acyclic** — contains a cycle or not. A tree is a connected acyclic graph.

**Two standard representations**

| | Adjacency Matrix | Adjacency List |
|---|---|---|
| Structure | V×V matrix, `M[i][j] = 1` if edge i→j | Array of V lists; each list holds a vertex's neighbours |
| Space | O(V²) | O(V + E) |
| Check edge (u,v) | O(1) | O(degree of u) |
| List all neighbours | O(V) | O(degree) |
| Best for | Dense graphs | Sparse graphs |

Example — undirected graph with vertices A,B,C and edges AB, BC:

```
Adjacency Matrix        Adjacency List
    A  B  C             A → B
A [ 0  1  0 ]           B → A, C
B [ 1  0  1 ]           C → B
C [ 0  1  0 ]
```

**Graph traversals**
- **BFS (Breadth-First Search)** — uses a **queue**; visits level by level. O(V + E).
- **DFS (Depth-First Search)** — uses a **stack** (or recursion); goes as deep as possible first. O(V + E).

Note the link to my notes: BFS = queue = FIFO; DFS = stack = LIFO.

---

## 2. Sorting Algorithm Mechanics

Your notes name five sorts but don't give mechanics or complexity. Learn this table.

| Algorithm | How it works | Best | Average | Worst | Space | Stable |
|---|---|---|---|---|---|---|
| **Bubble** | Repeatedly swap adjacent out-of-order pairs | O(n) | O(n²) | O(n²) | O(1) | Yes |
| **Selection** | Repeatedly pick the minimum and place it at the front | O(n²) | O(n²) | O(n²) | O(1) | No |
| **Insertion** | Insert each element into its place in the sorted prefix | O(n) | O(n²) | O(n²) | O(1) | Yes |
| **Merge** | Divide list in half, sort each half, merge them | O(n log n) | O(n log n) | O(n log n) | O(n) | Yes |
| **Quick** | Pick a pivot, partition around it, recurse on each side | O(n log n) | O(n log n) | O(n²) | O(log n) | No |
| **Heap** | Build a max-heap, repeatedly extract the max | O(n log n) | O(n log n) | O(n log n) | O(1) | No |
| **Counting** | Count occurrences of each key, rebuild in order | O(n+k) | O(n+k) | O(n+k) | O(k) | Yes |
| **Bucket** | Scatter into buckets, sort each bucket, concatenate | O(n+k) | O(n+k) | O(n²) | O(n) | Yes |

**Merge sort** is divide-and-conquer; **quick sort** is also divide-and-conquer but its worst case O(n²) occurs when the pivot is always the smallest/largest element (e.g. already-sorted input with a first-element pivot).

**Counting and bucket sort are not comparison sorts** — this is how they beat the O(n log n) comparison lower bound.

---

## 3. Sequential (Linear) Search vs Binary Search

| | Sequential Search | Binary Search |
|---|---|---|
| Requires sorted data | No | **Yes** |
| Method | Check each element from first to last | Compare with middle, discard half, repeat |
| Best case | O(1) | O(1) |
| Worst case | O(n) | O(log n) |
| Works on | Arrays, linked lists | Arrays (needs random access) |

---

## 4. Time–Space Tradeoff

Named on the outline; state it as: *an algorithm can often be made faster by using more memory, or made to use less memory at the cost of running longer.*

Examples to cite:
- A **hash table** spends O(n) extra space to turn an O(n) search into O(1) — space bought speed.
- **Merge sort** uses O(n) extra space to guarantee O(n log n); **quick sort** uses O(log n) space but risks O(n²).
- **Counting sort** uses an O(k) count array to avoid comparisons.
- **Memoization** in dynamic programming stores sub-results to avoid recomputation.

---

## 5. Recursive Algorithms

A **recursive algorithm** solves a problem by calling itself on smaller sub-problems.

Every recursion needs:
1. A **base case** — the condition that stops the recursion.
2. A **recursive case** — the call on a smaller input, moving toward the base case.

```
factorial(n):
    if n <= 1:  return 1        # base case
    else:       return n * factorial(n - 1)   # recursive case
```

- Each call consumes a **stack frame** on the call stack → recursion depth costs O(depth) space.
- Missing/incorrect base case → **stack overflow** (infinite recursion).
- **Recursion vs iteration:** recursion is shorter and natural for trees/divide-and-conquer; iteration avoids call-stack overhead.

---

## 6. Stack Allocation vs Heap Allocation (Run-time Storage Management)

| | Stack | Heap |
|---|---|---|
| What lives there | Local variables, function parameters, return addresses | Dynamically allocated objects |
| Allocated by | Compiler, automatically on function call | Programmer at run time (`malloc`/`new`) |
| Freed by | Automatically on function return | Programmer (`free`/`delete`) or garbage collector |
| Size | Fixed, small | Large, grows at run time |
| Speed | Very fast (move stack pointer) | Slower (search for a free block) |
| Order | LIFO | Any order |
| Failure mode | Stack overflow | Memory leak / fragmentation |

**Run-time storage management** is the system's job of allocating memory as a program runs and reclaiming it afterwards — via the stack for call frames, the heap for dynamic data, plus **garbage collection** (automatic reclamation of unreachable objects) or manual deallocation.

**Don't confuse:** the *stack* (memory region) with the *stack ADT* (LIFO data structure), and the *heap* (memory region) with the *heap* data structure (the tree used by heap sort). Exam questions like to test this.

---

## 7. Strings and String Processing

- A **string** is an array/sequence of characters, usually terminated by a null character `\0` in C-style implementations.
- Common operations: length, concatenation, substring, comparison, search (pattern matching), reverse.
- **Naïve pattern matching** is O(n·m); **KMP** improves it to O(n + m) by pre-computing a prefix table.
- Strings are the standard input to a **hash function** (see the "ab / cd / efg" example in my notes).

---

## 8. Records / Structures

A **record** (struct) is a composite data type grouping fields of possibly different types under one name — e.g. a `Student` record with `name` (string), `matric_no` (int), `cgpa` (float). Contrast with an **array**, which holds many elements of the **same** type. Records are the building block of a **node** (data field + pointer field).

---

## 9. Numerical Algorithms

Algorithms operating on numeric data, where **precision and error** matter as much as speed. Examples worth naming:
- **Euclid's algorithm** for GCD.
- **Newton–Raphson** method for finding roots.
- **Fast exponentiation** (exponentiation by squaring) — O(log n).
- **Sieve of Eratosthenes** for primes — O(n log log n).
- **Matrix multiplication** — naïve O(n³).

Key issue to mention: **floating-point round-off error** accumulates, so numerical algorithms are judged on numerical stability, not just complexity.
