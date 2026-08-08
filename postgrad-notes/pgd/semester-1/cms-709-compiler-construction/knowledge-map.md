
# Knowledge Map: Compiler Construction

> Generated: 2026-04-02 | Topics: 8 | Concepts: 17 | Relationships: 19

---

## Course Overview

Compiler Construction (CMS709) covers the theory and practice of building a compiler, a program that translates source code into executable form. The course begins with **Lexical Analysis**, the first compiler phase, which converts raw character streams into structured tokens using formal language theory, finite automata, and transition diagrams. It establishes the foundational concepts of tokens, patterns, lexemes, regular expressions, and the formal Chomsky language hierarchy that underpin all subsequent compiler phases.

---

## Concept Hierarchy

```
Compiler Construction (CMS709)
├── 1. Lexical Analysis                              [6 concepts]
│   ├── Role: first phase of compiler
│   │   ├── Key Concepts: Token, Lexeme, Pattern, Symbol Table
│   │   └── Central: TOKEN ★
│   ├── LA ↔ Parser interaction (subroutine model)
│   │   └── Key Concepts: Lexical Analyser, Parser
│   └── Secondary tasks: comment removal, error line tracking
│
├── 2. Tokens, Patterns and Lexemes                 [5 concepts]
│   ├── Token, terminal symbol of grammar
│   │   └── Key Concepts: Keywords, Operators, Identifiers, Constants
│   ├── Pattern, regular expression rule
│   │   └── Key Concepts: Regular Expression ★
│   ├── Lexeme, actual matched character sequence
│   └── Token attributes → Symbol Table pointer ★
│
├── 3. Difficulties and Errors in LA                [2 concepts]
│   ├── Context-dependent keywords (FORTRAN examples)
│   ├── Lookahead requirements
│   └── Localized error detection (illegal symbols only)
│
├── 4. Specification and Recognition of Tokens      [4 concepts]
│   ├── Regular Definitions → LEX / FLEX ★
│   │   └── Key Concepts: Regular Expression, LEX/FLEX
│   ├── Transition Diagrams ★
│   │   └── Key Concepts: FSA, TD
│   └── Token Priority Rules
│       ├── Longest Match Rule ★
│       └── First-Listed Pattern Rule
│
├── 5. Formal Language Theory                       [3 concepts]
│   ├── Chomsky Hierarchy: Type 0–3
│   │   ├── Type 3: Regular Language (Finite Automaton)
│   │   ├── Type 2: Context-Free Language (Pushdown Automaton)
│   │   └── Type 1: Context-Sensitive Language
│   └── Alphabet (Σ), Σ*, language as subset of Σ*
│
├── 6. FSA and Transition Diagrams                  [5 concepts]
│   ├── FSA: accepts/rejects strings
│   ├── TD: reads until token found, returns it
│   │   ├── Dead State ★
│   │   └── Retraction (*)
│   ├── Scanner (FSA-based stage) ★
│   └── Evaluator (produces token value) ★
│
├── 7. Input Buffering                              [2 concepts]
│   ├── Two-half buffer, N-character reads
│   ├── Forward Pointer ★
│   └── Beginning Pointer
│
└── 8. Implementation of Lexical Analyser           [3 concepts]
    ├── Automatic: LEX/FLEX (easier, less efficient)
    ├── HLL by hand (more efficient)
    └── Low-level language (most efficient, hardest)
```

---

## Key Relationships

### Hierarchical (Is-a / Part-of)
- **Transition Diagram** is a variant of **FSA**
- **Scanner** is based on **FSA**
- **Lexical Analyser** is a subroutine of **Parser**
- **Context-Free Language** is a superset of **Regular Language**
- **Context-Sensitive Language** is a superset of **Context-Free Language**
- **Lexeme** is an instance of a **Token**

### Causal / Enables
- **Regular Expression** enables **Pattern** specification
- **Pattern** describes/classifies a **Token**
- **Scanner** feeds lexeme to **Evaluator**
- **Evaluator** produces a **Token** (type + value)
- **LEX/FLEX** generates a **Lexical Analyser**
- **Dead State** triggers token acceptance at last valid state
- **Forward Pointer** enables **Retraction**

### Dependency (Requires / Reads-Writes)
- **Lexical Analyser** reads from / writes to **Symbol Table**
- **Token** attribute depends on **Symbol Table** pointer
- **Lexical Analyser** depends on **Regular Expression** for specification
- Prerequisite chain: **Regular Expression → Pattern → Token → Symbol Table**
- Prerequisite chain: **FSA → Scanner → Evaluator → Token**

### Priority / Contrast
- **Longest Match Rule** takes priority over **First-Listed Pattern Rule**
- **FSA** (accepts/rejects) contrasts with **TD** (reads until token found)
- **Automatic LA** (LEX/FLEX) contrasts with **Hand-written LA** (efficiency vs ease)

---

## Central Concepts

These are the most connected concepts, master these first:

| Concept | Connections | Why Central |
|---------|-------------|-------------|
| **Token** | 4 | The fundamental output unit of LA; everything else produces, classifies, or attributes a token |
| **Lexical Analyser** | 4 | Orchestrates the entire first compiler phase; connects to parser, symbol table, and all sub-stages |
| **Regular Expression** | 3 | The formal language for specifying patterns; underpins both LEX tools and manual TD construction |
| **FSA / Transition Diagram** | 3 | The computational model that drives recognition; FSA is theory, TD is its practical implementation |
| **Symbol Table** | 3 | The shared data structure linking LA to the rest of the compiler; stores all token information |

---

## Prerequisite Learning Path

Recommended study order based on dependencies:

1. **Formal Language Theory**: understand alphabets, Σ*, and the Chomsky hierarchy (what kinds of languages exist)
2. **Regular Expressions**: the notation used to describe token patterns (Type 3 / Regular Languages)
3. **Tokens, Patterns, Lexemes**: the three core abstractions of lexical analysis
4. **FSA (Finite State Automata)**: the mathematical model for recognising regular languages
5. **Transition Diagrams**: practical FSA variant used to build lexers by hand
6. **Input Buffering**: how the lexer reads characters efficiently (forward pointer, retraction)
7. **Lexical Analysis**: the full LA phase combining all above into a working analyser
8. **Specification and Recognition of Tokens**: regular definitions, TD construction, keyword recognition, priority rules
9. **Implementation**: LEX/FLEX generators vs hand-written approaches

---

## Definitions Quick Reference

| Term | Definition (brief) |
|------|-------------------|
| Lexical Analysis | First compiler phase; converts character stream to token sequence |
| Token | A categorised unit (keyword, identifier, operator, etc.); terminal grammar symbol |
| Pattern | A regular expression rule describing all strings that form a particular token |
| Lexeme | The actual character sequence that matches a pattern, a concrete token instance |
| Symbol Table | Compiler data structure storing token info (lexeme, line number, type) |
| FSA | Finite State Automaton, mathematical model that accepts or rejects a string |
| Transition Diagram | FSA variant used for lexers; reads characters until it finds and returns a token |
| Dead State | Non-accepting state with no valid transitions; signals end of recognition |
| Retraction | Rolling back the forward pointer after scanning past the valid lexeme |
| Scanner | FSA-based LA stage that identifies token type and length |
| Evaluator | LA stage that processes lexeme characters to produce a token value |
| LEX / FLEX | Automatic lexical analyser generators from regular expression specifications |
| Regular Language | Language recognisable by FSA; described by regular expressions (Chomsky Type 3) |
| Context-Free Language | Language recognised by pushdown automaton; not regular (Chomsky Type 2) |
| Longest Match Rule | When multiple patterns match, take the longest lexeme |
| First-Listed Pattern Rule | When length is equal, the pattern listed first in specification wins |
| Chomsky Hierarchy | Type 0–3 classification of formal languages by generative power |

---

## Tutor Reference Notes

_For use during learning sessions on Compiler Construction:_

- **Best entry point for Socratic sessions:** Start with *"What problem is Lexical Analysis solving, and why can't the parser do it itself?"*, this opens up the LA/parser separation rationale and naturally leads into tokens.
- **Most common misconceptions:**
  - Students confuse **token** (the category) with **lexeme** (the actual string), always use a concrete example (e.g., `pi` is the lexeme; `identifier` is the token)
  - Students confuse **FSA** (theory: accepts/rejects) with **TD** (practice: finds and returns token), the key difference is what happens at accepting states
  - Students think ALL errors are caught by LA, reinforce that LA has a very localized view and cannot detect semantic errors
- **Concepts students typically conflate:**
  - Token vs Lexeme vs Pattern (the holy trinity, needs repeated examples)
  - FSA vs Transition Diagram (same structure, different behavior at accepting states)
  - Scanner vs Evaluator (both stages of LA, but distinct roles)
  - LEX/FLEX vs hand-written LA (trade-off: development speed vs runtime efficiency)
- **Mbosinwa context:** Strong software engineering background, relate FSA/TD to state machines in software design patterns; relate Symbol Table to hash maps/dictionaries; relate LEX to parser generator tools like ANTLR he may have encountered.
