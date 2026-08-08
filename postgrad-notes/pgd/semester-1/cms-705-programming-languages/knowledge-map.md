
# Knowledge Map: Programming Languages (CMS705)

> Generated: 2026-04-01 | Topics: 5 | Concepts: 45+ | Relationships: 28

---

## Course Overview

CMS705 Programming Languages examines how programming languages are designed, defined, and implemented — from the linguistic foundations that describe their structure, to the runtime mechanisms that execute them. The course spans language theory (syntax, semantics, pragmatics), data representation (types and data structures), program control (control structures and data flow), and language processing (lexical analysis, parsing, interpretation, and compilation). It provides the theoretical grounding behind every programming language a software engineer uses in practice.

---

## Concept Hierarchy

```
Programming Languages (CMS705)
│
├── 1. Language Definition Structure                          [12 concepts]
│   ├── What is a Language?
│   │   ├── Key Concepts: Language, Formal System, Phoneme
│   │   └── Central: Language (root of everything)
│   ├── Language Structure (system of systems)
│   │   ├── Phonology      → study of sound/token patterns
│   │   ├── Morphology     → how tokens/words are formed
│   │   ├── Syntax         → rules for arrangement ★ CENTRAL
│   │   ├── Semantics      → meaning of programs
│   │   └── Pragmatics     → context and practical usage
│   ├── Language Definition Semantics
│   │   ├── Static Semantics  → compile-time rules ★ CENTRAL
│   │   └── Dynamic Semantics → runtime behaviour ★ CENTRAL
│   └── Types of Language (Levels of Abstraction)
│       ├── Machine Language    → binary, CPU-direct
│       ├── Assembly Language   → mnemonics, assembler-translated
│       ├── Middle-level Language → C; hardware + structure
│       └── High-level Language → Python, Java, C++; human-readable
│
├── 2. Data Types and Structure                               [18 concepts]
│   ├── Primitive Data Types
│   │   ├── Key Concepts: int, float, char, bool, void
│   │   └── Note: fixed size, stored directly in memory (stack)
│   ├── Non-Primitive Data Types
│   │   ├── Key Concepts: String, Array, Struct, Class, Pointer, Enum
│   │   └── Note: dynamic size, reference-based, heap-allocated
│   ├── Memory Model
│   │   ├── Stack Memory  → LIFO; local variables; automatic
│   │   └── Heap Memory   → dynamic allocation; new/delete
│   ├── Linear Data Structures
│   │   ├── Array         → contiguous, fixed-size, same type
│   │   ├── Linked List   → nodes + pointers; dynamic; singly/doubly/circular
│   │   ├── Stack         → LIFO; push/pop
│   │   └── Queue         → FIFO; enqueue/dequeue
│   ├── Non-linear Data Structures
│   │   ├── Tree          → hierarchical; root/parent/child/leaf
│   │   │   ├── Binary Tree, BST, AVL Tree, B-Tree
│   │   ├── Graph         → vertices + edges; directed/undirected
│   │   ├── Heap          → max-heap / min-heap
│   │   ├── Hash Table    → key-value; fast lookup
│   │   └── Trie          → string tree; autocomplete/spellcheck
│   └── Control Structures                                    ★ CENTRAL
│       ├── Sequential    → top-to-bottom; default
│       ├── Selection     → if, if-else, else-if, switch
│       ├── Iteration     → for, while, do-while, for-each
│       └── Jump          → break, continue, return, goto
│
├── 3. Runtime Considerations                                 [8 concepts]
│   ├── Implementation Methods
│   │   ├── Assembly      → assembly → machine code
│   │   ├── Compilation   → whole program → executable ★ CENTRAL
│   │   ├── Interpretation → line-by-line at runtime ★ CENTRAL
│   │   └── JIT           → bytecode → machine code on demand ★ CENTRAL
│   ├── Data Flow in Memory
│   │   ├── Stack         → local/primary; function call data
│   │   └── Heap          → global/dynamic; new/delete
│   └── Core Structural Elements
│       ├── Variables     → named memory locations
│       ├── Functions     → reusable blocks; parameters + return values
│       └── Comments      → non-executable; human-readable
│
├── 4. Interpretative Language                                [5 concepts]
│   ├── Interpretation    → translate + execute line by line (Python, JS)
│   ├── Compiler          → translates entire source; faster execution
│   ├── Interpreter       → no pre-compilation; portable; slower
│   ├── JIT Compilation   → hybrid; compile on demand at runtime
│   └── JVM / Bytecode    → Java's intermediate representation
│
└── 5. Lexical Analysis and Parsing                           [8 concepts]
    ├── Phonology         → token-level; smallest units (keywords, identifiers)
    ├── Morphology        → token formation rules (how identifiers are built)
    ├── Syntax / Parsing  → grammar rules; well-formed programs
    ├── Tokens            → atomic units of a program (keywords, operators, literals)
    ├── Identifiers       → programmer-named elements (variables, functions, classes)
    ├── Readability       → clarity of syntax design
    ├── Writability       → ease of writing correct code
    └── Reliability       → syntax's ability to prevent errors
```

---

## Key Relationships

### Hierarchical (Is-a / Part-of)
- Phonology, Morphology, Syntax, Semantics, Pragmatics are all **components of** Language Structure
- Static Semantics and Dynamic Semantics are **components of** Language Definition Semantics
- Machine Language < Assembly Language < Middle-level Language < High-level Language *(abstraction hierarchy)*
- Sequential, Conditional, Iterative, Procedural Data Flow are **types of** Data Flow (by execution)
- Explicit and Implicit Data Flow are **types of** Data Flow (by visibility)
- Linear Data Structures include: Array, Linked List, Stack, Queue
- Non-linear Data Structures include: Tree, Graph, Heap, Hash Table, Trie

### Causal / Enables
- Understanding **Phonology → Morphology → Syntax** enables full Lexical Analysis and Parsing
- Understanding **Language Definition** enables understanding **Implementation Methods**
- Understanding **Primitive Types** enables understanding **Non-Primitive Types**
- **Control Structures** determine the direction and behaviour of **Data Flow**
- **Compilation / Interpretation / JIT** enable programs to run on hardware

### Dependency (Requires)
- **Prerequisite Chain 1:** Phonology → Morphology → Syntax → Semantics
  *(understand tokens before grammar, grammar before meaning)*
- **Prerequisite Chain 2:** Primitive Data Types → Non-Primitive Data Types
  *(primitives are the building blocks of complex types)*
- **Prerequisite Chain 3:** Language Definition Structure → Implementation Methods → Runtime Behaviour
  *(theory of languages before how they are run)*

### Contrast (Contrasts-with)
- **Compilation** vs **Interpretation**: Compilation translates the whole program up-front; Interpretation translates and executes line by line at runtime
- **Static Semantics** vs **Dynamic Semantics**: Static = compile-time checks; Dynamic = runtime behaviour
- **Explicit Data Flow** vs **Implicit Data Flow**: Explicit = visible in code via parameters/returns; Implicit = hidden through global/shared variables
- **Stack Memory** vs **Heap Memory**: Stack = automatic, LIFO, local; Heap = manual, dynamic, global
- **Linear** vs **Non-linear** Data Structures: Linear = single-level, sequential; Non-linear = multi-level, hierarchical

---

## Central Concepts

These are the most connected concepts in the course — master these first:

| Concept | Connections | Why Central |
|---------|-------------|-------------|
| **Syntax** | 5 | Core of language structure, lexical analysis, parsing, readability/writability — appears in every topic |
| **Data Flow** | 6 | Ties together control structures, memory, functions, runtime — underpins all of computer science |
| **Control Structures** | 5 | Directly determines how data flows; connects selection, iteration, jump, and sequential logic |
| **Compilation vs Interpretation** | 5 | Core of runtime considerations and interpretative language topics; determines execution model |
| **Static vs Dynamic Semantics** | 4 | Bridges language definition theory with runtime behaviour; essential for understanding type systems |
| **Primitive vs Non-Primitive Types** | 4 | Foundation of all data representation; prerequisite for data structures |

---

## Prerequisite Learning Path

Recommended study order based on dependencies:

1. **What is a Language?** — establish the conceptual foundation
2. **Language Structure** (Phonology, Morphology, Syntax, Semantics, Pragmatics) — understand the components
3. **Static vs Dynamic Semantics** — understand how languages are precisely defined
4. **Types of Language** (Machine → Assembly → Middle → High-level) — understand abstraction levels
5. **Lexical Analysis and Parsing** — apply Phonology, Morphology, Syntax to language processing
6. **Primitive Data Types** — foundation of all data representation
7. **Non-Primitive Data Types** — built from primitives; adds complexity
8. **Stack and Heap Memory** — understand how data is stored at runtime
9. **Linear Data Structures** (Array, Linked List, Stack, Queue) — sequential organisation
10. **Non-linear Data Structures** (Tree, Graph, Heap) — hierarchical and complex organisation
11. **Control Structures** — how programs direct execution flow
12. **Data Flow** (Sequential, Conditional, Iterative, Procedural) — how data moves through programs
13. **Explicit vs Implicit Data Flow** — visibility and traceability of data movement
14. **Implementation Methods** (Assembly, Compilation, Interpretation) — translating programs to machine code
15. **JIT Compilation and Interpretative Languages** — hybrid execution models; Java/JVM

---

## Definitions Quick Reference

| Term | Definition (brief) |
|------|-------------------|
| Language | Formal system of symbols and rules for communicating instructions to a computer |
| Phonology | Study of smallest units (tokens/phonemes) in a language |
| Morphology | Study of how tokens/words are formed from root elements |
| Syntax | Rules governing how tokens are arranged into valid programs |
| Semantics | The meaning of programs — what they actually do |
| Pragmatics | Practical usage of a language; readability, writability, efficiency |
| Static Semantics | Compile-time checks — type compatibility, variable declarations |
| Dynamic Semantics | Runtime behaviour — how values are computed and change during execution |
| Data Type | Classification of what kind of data a variable holds and what operations are allowed |
| Primitive Type | Built-in, fixed-size type (int, float, char, bool, void) |
| Non-Primitive Type | Complex, reference-based type built from primitives (String, Array, Class) |
| Stack Memory | LIFO region of RAM; stores local variables and function call data |
| Heap Memory | Dynamic memory region; used for runtime allocation (new/delete) |
| Data Structure | A method of organising data for efficient access and manipulation |
| Control Structure | Mechanism that determines the order of statement execution |
| Data Flow | Movement, transformation, and usage of data within a program during execution |
| Explicit Data Flow | Data movement clearly visible in code via parameters and returns |
| Implicit Data Flow | Data movement through global/shared variables; hidden and hard to trace |
| Compilation | Whole-program translation to machine code by a compiler |
| Interpretation | Line-by-line translation and execution by an interpreter at runtime |
| JIT Compilation | Hybrid: bytecode compiled to machine code on-demand at runtime (e.g. Java/JVM) |
| Token | Atomic unit of a program (keyword, identifier, operator, literal) |
| Identifier | Programmer-defined name for a variable, function, class, or module |

---

## Tutor Reference Notes


- **Best entry-point concept:** Start with *Language Structure* (Phonology → Morphology → Syntax) — it unifies linguistics and programming language theory and is the backbone of topics 1 and 5
- **Most common misconceptions:**
  - Confusing *Syntax errors* (Static Semantics) with *Logic errors* (Dynamic Semantics)
  - Thinking *Interpretation* is always slower than *Compilation* — JIT narrows this gap significantly
  - Conflating *Stack (data structure)* with *Stack Memory* — same LIFO principle, different contexts
  - Assuming *Non-primitive types* are always on the Heap — compiler/language dependent
- **Concepts students typically conflate:**
  - Static Semantics ↔ Dynamic Semantics
  - Stack (data structure) ↔ Stack Memory
  - Compilation ↔ JIT Compilation
  - Explicit Data Flow ↔ Implicit Data Flow
  - Middle-level Language ↔ Low-level Language
- **Mbosinwa's context:** Strong software engineering background — connect theoretical concepts to practical tools he already uses (e.g. JIT → JVM in Java, Heap → `new`/`delete` in C++, Syntax → compiler errors he's seen). Over-explain by default; he will say if he needs less detail.
