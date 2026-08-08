# CMS 702: Exam Cheatsheet


Everything here comes straight from my own notes. Definitions are worded so you can write them almost verbatim.

> ⭐ **Confirmed by the past paper** ([the solved past questions](past-questions-solved.html)). Five questions came up, all bookwork:
> **Q1** asymptotic analysis + the 3 notations **with a diagram** · **Q2** define sort algorithm, search algorithm, dynamic programming **with examples** · **Q3** hashing, hash function, hash table · **Q4** importance of data structures · **Q5** queue vs static data structure.
> Sections **1, 2, 3, 7 and 10** below carry those answers. Learn them first, then the BST material, which the lecturer drilled hardest in class.

---

## 1. One-line definitions (write these word-for-word)

| Term | Definition to write |
|---|---|
| Algorithm | A step-by-step procedure, a set of commands or instructions, to solve a specific problem. |
| Asymptotic analysis | Computing the running time of a piece of code in a mathematical unit of computation, expressed as a function f(n); the method of describing limiting behaviour. |
| Big O | The **upper bound** of the growth rate of a function; measures worst-case performance. |
| Θ (Theta) | The **tight** bound, expresses upper *and* lower bound of the running time. |
| Ω (Omega) | The **lower bound**: expresses only the best-case running time. |
| Data structure | A data organization, management and storage format enabling efficient access and modification; a collection of data values, the relationships among them, and the operations applicable to them. |
| Hashing | Lookup, the most widely used technique to find aggregate data by key or id; stored in a hash map/hash table. |
| Hash function | Receives the input key and returns the index of an element in an array called the hash table. |
| Collision | Occurs when h(x) = h(y), two different keys map to the same hash value. |
| Load factor | Number of items in the hash table ÷ size of the hash table. |
| Stack | An abstract data type that implements LIFO; insert = PUSH, remove = POP; open at one end only. |
| Queue | An abstract data structure open at both ends; follows FIFO; insert = Enqueue(), remove = Dequeue(). |
| Tree | A non-linear hierarchical data structure consisting of nodes connected by edges. |
| Node | An entity containing a key/value plus pointers to its child nodes. |
| BST | A binary tree where the left node's value is less than its parent and the right node's value is greater than its parent. |
| Dynamic programming | Solving a complex problem by breaking it into smaller units/sub-problems. |

---

## 2. Numbered lists most likely to be asked

**Types of algorithms (10):** Brute force · Recursive · Encryption · Backtracking · Search · Sort · Divide and conquer · Greedy · Dynamic programming · Randomized

**Three cases in asymptotic analysis:** Worst · Best · Average

**Three asymptotic notations:** Big O (upper) · Θ (tight) · Ω (lower)

**Five complexity classes:** O(1) constant · O(log n) logarithmic · O(n) linear · O(n²) quadratic · O(2ⁿ) exponential

**Five sort algorithms in the notes:** Merge · Quick · Bucket · Heap · Counting

**Three components of hashing:** Key · Hash function · Hash table

**Four properties of a good hash function:** efficiently computable · uniformly distributes keys · minimizes collision · low load factor

**Two collision-handling methods:** Separate chaining (cell points to a linked list) · Open addressing (all elements stored in the table itself)

**Three types of data structure:** Inbuilt/primitive (int, float, boolean) · Derived (stack, queue, list, array) · Complex (linked list, tree, graph)

**Six basic operations:** Traversal · Searching · Sorting · Merging · Insertion · Deletion

**Three types of linked list:** Simple (singly) · Complex (doubly) · Circular

**Three properties of a tree:** one root with no parent · each node has one parent but may have many children · each node connects to its children via an edge

**Four properties of a BST:** left sub-tree strictly less · right sub-tree strictly greater · recursively true for sub-trees · no duplicates

---

## 3. Traversals: the three you must not mix up

| Traversal | Order |
|---|---|
| **In-order** | **L**eft → **Root** → **R**ight |
| **Pre-order** | **Root** → **L**eft → **R**ight |
| **Post-order** | **L**eft → **R**ight → **Root** |

Memory hook: the position of **Root** in the name = the position of Root in the visit order (pre = first, in = middle, post = last). Left always comes before Right.

Practise on this tree until it is automatic:

```
          20
         /  \
        8    22
       / \
      4   12
         /  \
       10    14
```

- In-order: `4, 8, 10, 12, 14, 20, 22`  ← always sorted for a BST
- Pre-order: `20, 8, 4, 12, 10, 14, 22`
- Post-order: `4, 10, 14, 12, 8, 22, 20`

**Key exam fact: the in-order traversal of a BST always comes out sorted ascending.**

---

## 4. Successor / Predecessor (the lecturer worked these twice: likely exam question)

- **In-order successor of K** = node with the *smallest value greater than* K. If none exists, return **−1**.
- **In-order predecessor of K** = the *previous* node in the in-order traversal. **Null** for the first node.

Fastest method under exam pressure: **write out the in-order traversal, then read off the neighbour.**

On the tree above (in-order = 4, 8, 10, 12, 14, 20, 22):
- successor of 8 = 10 · predecessor of 8 = 4
- successor of 14 = 20 · predecessor of 10 = 8
- successor of 22 = **−1** (largest) · predecessor of 4 = **null** (smallest)

---

## 5. Building a BST: two exam formats

### (a) From a list of values
Insert one at a time from the root, going left if smaller, right if larger.
`(37, 21, 13, 40, 36, 50)` →

```
          37
         /  \
       21    40
      /     /  \
    13    36    50
```

### (b) From two traversals

**Pre-order + In-order:** first element of pre-order = root → find it in in-order → everything left of it = left sub-tree, everything right = right sub-tree → recurse.

**Post-order + In-order:** *last* element of post-order = root → same splitting method.

Worked class example:
```
Pre-order = 1, 2, 4, 8, 9, 10, 11, 5, 3, 6, 7
In-order  = 8, 4, 10, 9, 11, 2, 5, 1, 6, 3, 7
```
Root = 1. In-order splits into left `8,4,10,9,11,2,5` and right `6,3,7`.

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

---

## 6. Height / Depth / Degree: the classic 5-mark question

- **Depth of a node** = number of edges from the **root down to** that node.
- **Height of a node** = number of edges from that node **down to the deepest leaf**.
- **Height of the tree** = height of the root.
- **Degree of a node** = number of branches at that node.
- **Leaf** = node with no children (height 0).
- **Level** = generation; root at level 0.

```
            10        d=0, h=3
           /  \
          5    8      5: d=1, h=2
         / \  / \
        2   3 7  9    2: d=2, h=1
       /
      1                1: d=3, h=0
```

Rule of thumb: **depth counts downward from the root, height counts upward from the leaves.**

---

## 7. Hashing worked example (page 5 format)

Store `{"ab", "cd", "efg"}` with `a=1 … g=7` in a 7-slot table.

```
ab  = 1 + 2     = 3     → index 3 mod 7 = 3
cd  = 3 + 4     = 7     → index 7 mod 7 = 0
efg = 5 + 6 + 7 = 18    → index 18 mod 7 = 4
```

Show the sum, then the modulo, then the slot. If two strings land on the same slot, say **collision** and name the fix: separate chaining or open addressing.

---

## 8. Tree types: one line each

- **General tree**: no restriction on number of children (e.g. family tree / folder structure).
- **Binary tree**: at most 2 children per node.
- **Full binary tree**: every node has **0 or 2** children.
- **Perfect binary tree**: every internal node has exactly 2 children **and** all leaves are at the same level. `l = 2^h`, `n = 2^(h+1) − 1`.
- **Complete binary tree**: every level completely filled, leaves lean left, last leaf may lack a right sibling.

---

## 9. Past-paper answers in compressed form ⭐

Full versions in [the solved past questions](past-questions-solved.html). This is the version to revise in the last hour.

**Formal definitions of the three notations** (write these under the diagram, they earn the top marks):
```
f(n) = O(g(n))  if  0 ≤ f(n) ≤ c·g(n)              for all n ≥ n₀     (upper)
f(n) = Θ(g(n))  if  0 ≤ k₁·g(n) ≤ f(n) ≤ k₂·g(n)   for all n ≥ n₀     (tight)
f(n) = Ω(g(n))  if  0 ≤ c·g(n) ≤ f(n)              for all n ≥ n₀     (lower)
```
Diagram shape: **O**: f(n) stays *below* c·g(n). **Θ**: f(n) *trapped between* k₁·g(n) and k₂·g(n). **Ω**: f(n) stays *above* c·g(n). Mark `n₀` on every sketch.

**Sequential search vs binary search** (the "with examples" part of the search question):

| | Sequential | Binary |
|---|---|---|
| Sorted data needed | No | **Yes** |
| Method | Check each element in turn | Compare with middle, discard half, repeat |
| Worst case | O(n) | **O(log n)** |

**Dynamic programming** = break a complex problem into smaller sub-problems, solve each once, **store the result and reuse it**. Needs *overlapping sub-problems* + *optimal substructure*. Differs from divide-and-conquer, which solves *independent* sub-problems. Example: Fibonacci, naïve recursion O(2ⁿ), with DP **O(n)**. Others: knapsack, longest common subsequence.

**Importance of data structures**: write 8 points, not 3 (marks are per point):
efficient access/retrieval · efficient memory use · they make algorithms efficient (BFS↔queue, DFS↔stack, binary search↔sorted array) · they model real-world relationships (trees=hierarchies, graphs=networks) · reusability and abstraction (ADT vs implementation) · they support the six standard operations · maintainable, readable code · they let you manage the time–space tradeoff deliberately · they underpin databases, compilers, operating systems and AI.

**Queue vs static data structure**: the trap is that these are *not the same kind of thing*: a queue is an **ADT defined by FIFO behaviour**; "static" is a **memory-allocation category** whose standard example is the fixed-size array. Say that, then compare queue against array:

| Basis | Queue | Static (fixed-size array) |
|---|---|---|
| Size | Grows/shrinks at run time | Fixed at compile time |
| Memory | Dynamic (heap) | Static (stack), allocated in advance |
| Access | Restricted, rear in, front out | Random access by index, O(1) |
| Order | Strictly FIFO | No ordering rule |
| Ends | Open at **both** ends | Concept does not apply |
| Operations | Enqueue(), Dequeue() | Insert/delete/search/update at any index |
| Waste | Uses only what it holds | May waste memory or overflow |

Bonus line worth a mark: *a queue can itself be built on a static array (a circular/bounded queue), inheriting a fixed capacity, FIFO behaviour is what makes it a queue, the array is only the storage underneath.*

**Stack vs Queue** (the likelier variant of Q5): LIFO vs FIFO · one end vs both ends · PUSH/POP vs Enqueue/Dequeue · one pointer (top) vs two (front, rear) · pile of plates vs queue of people · recursion & DFS vs scheduling & BFS.

---

## 10. Things you can lose easy marks on

1. Writing "O(n)" for the tight bound, it is **Θ**.
2. Saying a queue is open at one end, that's the **stack**. Queue is open at **both** ends.
3. Forgetting the **−1** answer when an in-order successor does not exist.
4. Swapping depth and height.
5. Binary search on an **unsorted** list, it requires a sorted dataset. Complexity **O(log n)**.
6. Forgetting that BST in-order traversal is sorted, it is the free sanity-check on any tree you draw.
