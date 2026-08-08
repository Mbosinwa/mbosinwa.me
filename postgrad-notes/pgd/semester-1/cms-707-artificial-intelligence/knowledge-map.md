
# Knowledge Map: Artificial Intelligence (CMS707)

> Generated: 2026-04-02 | Topics: 13 | Concepts: 34 | Relationships: 31

---

## Course Overview

CMS707 covers the theory and practice of Artificial Intelligence — from the foundational question of what intelligence is, through problem-solving via state space search, to knowledge representation using predicate logic and probabilistic reasoning. The course then extends to advanced application areas including machine learning, NLP, expert systems, fuzzy logic, and genetic algorithms. It is grounded in the AIMA (Russell & Norvig) framework and closely follows the lecturer's lecture series.

---

## Concept Hierarchy

```
Artificial Intelligence (CMS707)
│
├── PART I: Problem-Solving and Search
│   │
│   ├── 1. Introduction to AI                          [5 concepts]
│   │   ├── Key Concepts: Intelligence, Artificial Intelligence, Mundane Tasks, Formal Tasks, Turing Test
│   │   ├── Central: Artificial Intelligence
│   │   └── Note: Mundane tasks (perception, speech) are harder to compute than formal tasks (chess, logic)
│   │
│   ├── 2. AI Agents and Rational Agents               [6 concepts]
│   │   ├── Key Concepts: Agent, Rational Agent, Percept Sequence, Agent Function, Agent Program, Performance Measure
│   │   ├── Central: Rational Agent
│   │   └── Note: Agent Function (abstract math) → implemented by → Agent Program (concrete code)
│   │
│   ├── 3. Problem-Solving and Search                  [10 concepts]
│   │   ├── Key Concepts: State Space Representation, BFS, DFS, Iterative Deepening Search,
│   │   │                 Best-First Search, A* Search, Heuristic, Water Jug Problem, Farmer Problem
│   │   ├── Central: State Space Search, BFS/DFS
│   │   └── 4-step method: Define → Analyse → Isolate/Represent → Choose technique
│   │
│   └── 4. Heuristic Search Techniques                 [3 concepts]
│       ├── Key Concepts: Heuristic, Informed Search, Uninformed Search
│       └── Best-First = hybrid of BFS completeness + DFS memory efficiency
│
├── PART II: Knowledge Representation and Reasoning
│   │
│   ├── 5. Knowledge Representation                    [5 concepts]
│   │   ├── Key Concepts: Natural Language KR, Simple Relational KR, Inferential KR,
│   │   │                 Hallucination, Facts vs Representations
│   │   └── Central: Inferential KR (supports inheritance + logical inference)
│   │
│   ├── 6. Predicate Logic                             [6 concepts]
│   │   ├── Key Concepts: Predicate Logic, Quantifiers (∀/∃), Constants/Variables/Predicates,
│   │   │                 Inference Rules, Resolution, Forward/Backward Chaining
│   │   ├── Central: Predicate Logic
│   │   └── Example: Marcus/Caesar — 8 axioms → logical inference chain
│   │
│   ├── 7. Probabilistic Reasoning                     [3 concepts]
│   │   ├── Key Concepts: Uncertainty, Bayesian Reasoning, Bayesian Networks
│   │   └── Requires: Predicate Logic as prerequisite
│   │
│   └── 8. Semantic Nets                               [3 concepts]
│       └── Key Concepts: Semantic Networks, Frames, Scripts
│
└── PART III: Advanced Topics and Application Areas
    │
    ├── 9. Learning                                     [6 concepts]
    │   └── Supervised Learning, Unsupervised Learning, Reinforcement Learning,
    │       Decision Trees, Neural Networks, Deep Learning
    │
    ├── 10. Natural Language Processing                 [4 concepts]
    │   └── Speech Recognition, Machine Translation, Question Answering (Watson), Language Models
    │
    ├── 11. Expert Systems                              [2 concepts]
    │   └── Knowledge-Based Systems, Inference Engines
    │
    ├── 12. Fuzzy Logic Systems                         [2 concepts]
    │   └── Fuzzy Sets, Fuzzy Inference
    │
    └── 13. Genetic Algorithms                          [2 concepts]
        └── Selection, Crossover, Mutation
```

---

## Key Relationships

### Hierarchical (Is-a / Part-of)
- Deep Learning is a type of Machine Learning
- Reinforcement Learning is a type of Machine Learning
- Supervised Learning is a type of Machine Learning
- Bayesian Reasoning is a type of Probabilistic Reasoning
- Semantic Nets is a type of Knowledge Representation
- Genetic Algorithm is a type of Evolutionary / Optimisation technique
- Agent Program is the concrete implementation of Agent Function

### Causal / Enables
- Percept Sequence determines Agent behaviour
- Performance Measure evaluates Rational Agent
- Understanding State Space Representation enables Problem-Solving and Search
- Predicate Logic enables Knowledge Representation
- Predicate Logic is used in Inference (resolution, chaining)
- Predicate Logic is used to express Inferential Knowledge
- Neural Networks are the basis of Deep Learning
- Perception enables Action in Robotics
- Natural Language maps to Internal Representation (via KR)
- NLP is an application of Knowledge Representation + Learning

### Dependency / Prerequisite
- Agent Function is implemented by Agent Program
- A* Search uses Heuristic + path cost
- Expert Systems depend on Knowledge Representation + Inference
- Heuristic Search is an improvement of Uninformed Search

### Contrast (Contrasts-with)
- Fuzzy Logic contrasts with Classical Boolean Logic
- DFS uses less memory than BFS (but risks getting trapped)
- Mundane Tasks are harder to represent than Formal Tasks
- Simple Relational KR has weaker inference than Inferential KR

### Combines / Synthesises
- Iterative Deepening Search combines advantages of BFS + DFS
- Best-First Search combines advantages of BFS + DFS
- Rational Agent is defined by Maximally achieving predefined goals

### Solves
- State Space Search solves Water Jug Problem
- Constraint-based State Space Search solves Farmer Problem
- Minimax is used in Adversarial Search / Game Playing
- Alpha-Beta Pruning optimises Minimax Search

---

## Central Concepts

These are the most connected concepts in the course — master these first:

| Concept | Connections | Why Central |
|---------|-------------|-------------|
| Predicate Logic | 4 | Enables KR, used in inference, expresses inferential KR, bridges natural language and reasoning |
| Rational Agent | 4 | Defined by goal maximisation, evaluated by performance measure, acts on percept sequence, foundation of all AI system design |
| State Space Search | 4 | Foundation of problem-solving, solves classic problems, prerequisite for BFS/DFS/A*, underpins all search algorithms |
| BFS / DFS | 5 | Combined by Iterative Deepening and Best-First, contrasted by memory/completeness trade-offs, basis of all uninformed search |
| Machine Learning | 3 | Basis of Deep Learning, Reinforcement Learning, and Supervised Learning — connects to NLP, Robotics, Expert Systems |
| Knowledge Representation | 5 | Subsumes Natural Language, Relational, Inferential KR; enables Expert Systems; tied to NLP and Predicate Logic |

---

## Prerequisite Learning Path

Recommended study order based on concept dependencies:

1. **Intelligence & AI** — What is AI? What counts as intelligent behaviour?
2. **Mundane vs Formal Tasks** — Why mundane tasks are computationally harder
3. **Agents & Rational Agents** — Percept Sequence, Agent Function, Performance Measure
4. **State Space Representation** — Foundation of all problem-solving
5. **Uninformed Search (BFS, DFS)** — How to navigate state spaces
6. **Informed Search (Heuristic, Best-First, A*)** — Smarter navigation
7. **Iterative Deepening** — Combining BFS completeness + DFS memory
8. **Knowledge Representation (Natural Language → Relational → Inferential)** — Moving from data to reasoning
9. **Predicate Logic** — Formal language for inference; Marcus/Caesar worked example
10. **Probabilistic Reasoning & Bayesian Networks** — Handling uncertainty
11. **Semantic Nets** — Graph-based KR
12. **Machine Learning** (Supervised → Unsupervised → Reinforcement → Neural Networks → Deep Learning)
13. **Application Areas** (NLP, Expert Systems, Fuzzy Logic, Genetic Algorithms, Robotics)

---

## Definitions Quick Reference

| Term | Definition (brief) |
|------|-------------------|
| Intelligence | Capacity to think and comprehend the world — involving knowledge, experience and understanding |
| Artificial Intelligence | Field of building systems that act rationally to maximally achieve predefined goals |
| Agent | Entity that perceives its environment via sensors and acts via actuators; persists and adapts |
| Rational Agent | Agent that acts to achieve the best/expected outcome, judged by a performance measure |
| Percept Sequence | Complete history of everything an agent has ever perceived |
| Agent Function | Abstract mapping from percept sequence to action |
| Agent Program | Concrete implementation of the agent function |
| Performance Measure | Criterion capturing best/expected outcome for a rational agent |
| State Space | Set of all possible states in a problem, connected by operators |
| BFS | Breadth-First Search — FIFO queue, explores level by level, complete and optimal |
| DFS | Depth-First Search — LIFO stack, memory efficient, may get trapped |
| Iterative Deepening | DFS with increasing depth limit; BFS completeness + DFS memory |
| Best-First Search | Heuristic-guided search combining BFS and DFS advantages |
| A* Search | Informed search using f(n) = g(n) + h(n); optimal if heuristic admissible |
| Heuristic | Problem-specific knowledge estimating cost/distance to goal |
| Knowledge Representation | Mapping of real-world facts into a formalism that can be manipulated |
| Predicate Logic | Formal system with quantifiers (∀, ∃), predicates, constants, variables |
| Hallucination (AI) | Representation of facts that may not exist; absence of self-aware grounding |
| Bayesian Reasoning | Probabilistic inference using prior knowledge and conditional probabilities |
| Fuzzy Logic | Truth values between 0 and 1; handles vagueness and degrees of truth |
| Genetic Algorithm | Evolutionary optimisation via selection, crossover, and mutation |
| Turing Test | Benchmark: can a machine converse indistinguishably from a human? |

---

## Tutor Reference Notes

_For use by the tutor agent during learning sessions with Mbosinwa:_

- **Best Socratic entry point:** Start with "What makes a task difficult for a computer?" — bridges Mundane vs Formal Tasks and leads naturally into State Space Search
- **Most common misconceptions:**
  - Conflating *Agent Function* (abstract) with *Agent Program* (concrete)
  - Thinking BFS is always better than DFS — each has specific advantages
  - Believing Rational Agent = "smart agent" rather than "goal-maximising agent"
  - Confusing Iterative Deepening with repeated BFS
  - Thinking Predicate Logic is just maths — it's a KR tool for real-world facts
- **Concepts students typically conflate:**
  - BFS (Breadth-First) vs Best-First Search — different algorithms, confusingly named
  - Agent Function vs Agent Program
  - Percept vs Percept Sequence
  - Inferential KR vs Predicate Logic (the latter is a *form* of the former)
  - Supervised vs Reinforcement Learning
- **Mbosinwa context:** Strong engineering background, rusty on theory. Use real-world analogies. Over-explain — he will say when to stop.
- **Exercises available:** Session 1 (5 questions on AI theory/philosophy) and Session 2 (2 problem formulation tasks including Missionaries & Cannibals)
