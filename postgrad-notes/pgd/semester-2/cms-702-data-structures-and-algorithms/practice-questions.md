# CMS 702: Practice Questions

Built from the emphasis in the lecturer's notes (worked examples repeated in class are the likeliest exam questions). Try each before reading the answer.

---

## Section A: Definitions (short answer)

1. Define an algorithm and list any **five** types of algorithms.
2. What is asymptotic analysis? State the three cases it considers.
3. Differentiate between Big O, Θ and Ω notation.
4. Define hashing. List the three components of hashing.
5. What is a collision in hashing, and state two methods of handling it.
6. Define a load factor.
7. Differentiate between a stack and a queue.
8. Define a tree. State three properties of a tree.
9. Differentiate between the height and the depth of a node.
10. State the binary search tree property.

<details><summary>Answers</summary>

1. A step-by-step procedure / set of commands to solve a specific problem. Any five of: brute force, recursive, encryption, backtracking, search, sort, divide and conquer, greedy, dynamic programming, randomized.
2. Computing the running time of a piece of code in a mathematical unit of computation, expressed as f(n), describing limiting behaviour. Cases: worst, best, average.
3. Big O = upper bound (worst case); Θ = tight bound, both upper and lower; Ω = lower bound (best case).
4. Hashing means lookup, the most widely used technique to find aggregate data by key or id. Components: key, hash function, hash table.
5. A collision occurs when h(x) = h(y), two different keys map to the same hash value. Handled by separate chaining or open addressing.
6. Number of items the hash table contains ÷ size of the hash table.
7. A stack is open at one end only and follows LIFO (PUSH/POP); a queue is open at both ends and follows FIFO (Enqueue/Dequeue).
8. A non-linear hierarchical data structure of nodes connected by edges. Properties: one root node with no parent; each node has one parent but may have many children; each node connects to its children via an edge.
9. Depth = number of edges from the root down to the node. Height = number of edges from the node down to its deepest leaf.
10. The value of the left node is less than its parent; the value of the right node is greater than its parent.

</details>

---

## Section B: Complexity

11. List the five complexity classes covered in class, with an example of each.
12. Arrange in increasing order of growth: O(n²), O(1), O(2ⁿ), O(log n), O(n).
13. What is the time complexity of binary search, and what condition must the data satisfy?
14. A nested loop over n elements has what complexity? Justify.

<details><summary>Answers</summary>

11. O(1) constant, fixed time regardless of data volume; O(log n) logarithmic, halves the problem each step, e.g. binary search; O(n) linear, time proportional to input size; O(n²) quadratic, nested loops; O(2ⁿ) exponential, grows rapidly with input size, e.g. naïve recursion.
12. O(1) < O(log n) < O(n) < O(n²) < O(2ⁿ).
13. O(log n); the dataset must be **sorted**.
14. O(n²), the inner loop runs n times for each of the n outer iterations, giving n × n operations.

</details>

---

## Section C: Hashing (worked-example style)

15. Given the strings `{"ab", "cd", "efg"}` with a=1, b=2 … g=7, compute the hash index of each in a table of size 7 and show the resulting table.
16. State four properties of a good hash function.
17. A hash table of size 10 holds 7 items. Compute the load factor.

<details><summary>Answers</summary>

15. ab = 1+2 = 3 → 3 mod 7 = index 3; cd = 3+4 = 7 → 7 mod 7 = index 0; efg = 5+6+7 = 18 → 18 mod 7 = index 4.
    ```
    index: 0    1  2  3    4    5  6
          [cd] [ ][ ][ab] [efg][ ][ ]
    ```
16. Efficiently computable; uniformly distributes the keys; minimizes collision; low load factor.
17. 7 / 10 = **0.7**.

</details>

---

## Section D: Trees & BST (highest-yield section)

18. For the tree below, state the depth and height of nodes 10, 5, 2 and 1.

```
            10
           /  \
          5    8
         / \  / \
        2   3 7  9
       /
      1
```

19. Construct a BST from the values **37, 21, 13, 40, 36, 50**.
20. Give the in-order, pre-order and post-order traversal of the BST you built in Q19.
21. For the tree below, find the in-order successor of 8 and the in-order predecessor of 14.

```
          20
         /  \
        8    22
       / \
      4   12
         /  \
       10    14
```

22. What is returned when the in-order successor does not exist?
23. Construct a binary tree from `Pre-order = 1, 2, 4, 8, 9, 10, 11, 5, 3, 6, 7` and `In-order = 8, 4, 10, 9, 11, 2, 5, 1, 6, 3, 7`.
24. Differentiate between a full, a perfect and a complete binary tree.
25. A perfect binary tree has height 3. How many leaf nodes and how many total nodes does it have?

<details><summary>Answers</summary>

18. 10: d=0, h=3 · 5: d=1, h=2 · 2: d=2, h=1 · 1: d=3, h=0.
19.
    ```
              37
             /  \
           21    40
          /     /  \
        13    36    50
    ```
20. In-order: 13, 21, 36, 37, 40, 50 (sorted, always true for a BST). Pre-order: 37, 21, 13, 40, 36, 50. Post-order: 13, 21, 36, 50, 40, 37.
21. In-order traversal = 4, 8, 10, 12, 14, 20, 22. Successor of 8 = **10**; predecessor of 14 = **12**.
22. **−1** is returned. (The in-order predecessor of the first node is **null**.)
23.
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
24. Full, every node has 0 or 2 children. Perfect, every internal node has exactly 2 children **and** all leaves are on the same level. Complete, every level completely filled, leaves lean left, and the last leaf may lack a right sibling.
25. l = 2^h = 2³ = **8 leaves**; n = 2^(h+1) − 1 = 2⁴ − 1 = **15 nodes**.

</details>

---

## Section E: Data structures generally

26. Define a data structure and state the three categories of data types.
27. List six basic operations performed on data structures.
28. List the three types of linked list.
29. Explain, with a diagram, how a node is deleted from a singly linked list.
30. Differentiate between a fixed-size array and a dynamic array.

<details><summary>Answers</summary>

26. A data organization, management and storage format enabling efficient access and modification, a collection of data values, the relationships among them, and the operations applicable to them. Categories: inbuilt/primitive (integer, float, boolean); derived (stack, queue, list, array); complex (linked list, tree, graph).
27. Traversal, searching, sorting, merging, insertion, deletion.
28. Simple (singly), complex (doubly), circular.
29. Locate the target node, then set the previous node's pointer to the target's next node, bypassing it: `Head → [A|•] → [TARGET|•] → [C|•]` becomes `Head → [A|•] ──────────────→ [C|•]`.
30. Fixed-size arrays cannot be altered and have numbered indexes; dynamic arrays can be altered/resized and may be one-, two- or three-dimensional.

</details>

---

## Section F: Likely "gap" questions (from the outline, not the notes, see [the syllabus gap notes](syllabus-gaps.html))

31. Define a graph and describe its two standard representations.
32. Compare BFS and DFS, naming the data structure each uses.
33. Compare merge sort and quick sort in terms of method and worst-case complexity.
34. Explain the time–space tradeoff with one example.
35. Differentiate between stack allocation and heap allocation.

<details><summary>Answers, see [the syllabus gap notes](syllabus-gaps.html) for full detail</summary>

31. G = (V, E): a set of vertices and a set of edges connecting them. Adjacency matrix, V×V, O(V²) space, O(1) edge check, best for dense graphs. Adjacency list, array of neighbour lists, O(V + E) space, best for sparse graphs.
32. BFS uses a **queue** (FIFO) and visits level by level; DFS uses a **stack** (LIFO) or recursion and goes as deep as possible first. Both O(V + E).
33. Merge sort divides in half, sorts each half and merges; guaranteed O(n log n), needs O(n) extra space. Quick sort partitions around a pivot and recurses; O(n log n) average but **O(n²) worst case** when the pivot is always the smallest/largest element.
34. More memory can buy speed, and vice versa, e.g. a hash table spends O(n) extra space to make search O(1) instead of O(n).
35. Stack: automatic, LIFO, fast, holds local variables and call frames, fixed small size, fails by overflow. Heap: manual/dynamic, any order, slower, holds dynamically allocated objects, large, fails by leak or fragmentation.

</details>
