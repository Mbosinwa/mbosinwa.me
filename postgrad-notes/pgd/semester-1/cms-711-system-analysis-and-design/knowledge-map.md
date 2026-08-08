
# Knowledge Map: System Analysis & Design (CMS711)

> Generated: 2026-04-02 | Topics: 9 | Concepts: 28 | Relationships: 21

---

## Course Overview

System Analysis & Design (CMS711) covers the full lifecycle of information system development, from understanding what a system is, through gathering requirements, designing the system architecture, and building user interfaces. The course equips students with the analytical tools (DFD, ERD, flowcharts) and methodological frameworks (Waterfall, Agile, RAD, Spiral) needed to plan, build, and maintain information systems. It bridges business problem identification with technical solution design.

---

## Concept Hierarchy

```
System Analysis & Design (CMS711)
│
├── 1. Overview of Systems & Components                    [8 concepts]
│   ├── Definition & Nature of Systems
│   │   ├── Key Concepts: System, Systema (Greek origin), Organized relationship
│   │   └── Central: SYSTEM
│   ├── System Components
│   │   ├── Key Concepts: Input, Process, Output, Feedback, Control, Environment, Boundary, Interface
│   │   └── Central: INPUT → PROCESS → OUTPUT loop
│   ├── Types of Systems
│   │   └── Key Concepts: Open System, Closed System, Manual System, Automated System
│   └── Information Systems
│       └── Key Concepts: Hardware, Software, People, Data, Network
│
├── 2. Introduction to System Analysis & Design           [3 concepts]
│   ├── Purpose of SA&D
│   │   └── Key Concepts: Problem solving, System development, Business needs
│   └── The System Analyst
│       └── Key Concepts: System Analyst, Bridge role, Business ↔ Technology
│
├── 3. System Development Life Cycle (SDLC)              [6 concepts]
│   ├── SDLC Fundamentals
│   │   ├── Key Concepts: SDLC, Gradual refinement, Deliverable
│   │   └── Central: SDLC
│   ├── Four Phases
│   │   └── Key Concepts: Planning, Analysis, Design, Implementation
│   ├── Seven Steps
│   │   └── Key Concepts: Project Planning, Requirements & Analysis, Design,
│   │       Coding, Testing, Deployment, Maintenance
│   └── Phase Deliverables
│       └── Key Concepts: Project Charter, SRS, Design Documents, Source Code,
│           Test Plans, Deployed System, Maintenance Reports
│
├── 4. System Development Methodologies                   [7 concepts]
│   ├── Methodology Categories
│   │   └── Key Concepts: Process-Centred, Data-Centred, Object-Oriented
│   └── SDLC Models
│       ├── Key Concepts: Waterfall, V-Model, RAD, Iterative, Spiral, Agile
│       └── Central: WATERFALL (most foundational); AGILE (most current)
│
├── 5. Requirements Gathering                             [5 concepts]
│   ├── What is a Requirement
│   │   └── Key Concepts: Requirement, Business Requirements, System Requirements
│   ├── Types of Requirements
│   │   ├── Key Concepts: Functional Requirements, Non-Functional Requirements
│   │   └── Central: FUNCTIONAL REQUIREMENTS
│   └── Gathering Techniques
│       └── Key Concepts: Interviews, Questionnaires, JAD/RAP, Brainstorming, Workshops
│
├── 6. System Design                                      [5 concepts]
│   ├── What is System Design
│   │   └── Key Concepts: System Design, Logical Model (Analysis), Physical Model (Design)
│   ├── Design Approaches
│   │   └── Key Concepts: General/Preliminary Approach, Structured/Detailed Approach
│   ├── Design Goals
│   │   └── Key Concepts: Effective, Reliable, Maintainable
│   └── Design Tools
│       └── Key Concepts: Flowcharts, DFD, ERD, Architectural Diagrams, IPO Specifications
│
├── 7. Interface, Input & Output Design                   [8 concepts]
│   ├── User Interface
│   │   ├── Key Concepts: User Interface, Navigation Mechanism, Input Mechanism, Output Mechanism
│   │   └── Central: USER INTERFACE
│   ├── UI Design Principles
│   │   └── Key Concepts: Layout, Content Awareness, Aesthetics, UX, Consistency, Minimal Effort
│   ├── Screen Design Types
│   │   └── Key Concepts: Menu Display, Dialogue Display, Data Entry Display
│   ├── UI Evolution
│   │   └── Key Concepts: CLI → PCUI → HCI → GUI
│   ├── Control Functions
│   │   └── Key Concepts: Text Box, Number Box, Selection Box, Check Box, Radio Buttons, Drop Down
│   ├── Data Validation
│   │   └── Key Concepts: Presence Check, Range Check, Length Check, Type Check, Format Check,
│   │       Consistency Check, Database Check
│   ├── Data Verification
│   │   └── Key Concepts: Proof Reading, Double-Entry Verification
│   └── Output Design
│       └── Key Concepts: On-Screen Reports, Printed Reports, Detail/Summary/Exception Reports
│
├── 8. Tools & Techniques for System Development          [4 concepts]
│   └── Key Concepts: DFD, ERD, Flowcharts, Process Flow Diagrams, Database Design
│       └── ⚠️ NOTE: These tools are referenced but not yet demonstrated in materials
│
└── 9. Security and Maintenance                           [2 concepts]
    └── Key Concepts: Bug Fixing, System Updates, Performance Tuning, Enhancement Specifications
        └── ⚠️ CRITICAL GAP: No dedicated security content in current materials
```

---

## Key Relationships

### Hierarchical (Is-a / Part-of)

- **Input, Process, Output, Feedback, Control, Environment, Boundary, Interface** are all part-of a **System**
- **Hardware, Software, People, Data, Network** are components of an **Information System**
- **Planning, Analysis, Design, Implementation** are the four phases of **SDLC**
- **Waterfall, V-Model, RAD, Iterative, Spiral, Agile** are all types of **SDLC Methodology**
- **Navigation, Input, Output Mechanism** are parts of a **User Interface**
- **Functional Requirements** and **Non-Functional Requirements** are types of **Requirements**
- **V-Model** is-an-extension-of **Waterfall Model**

### Causal / Enables

- Understanding **Systems & Components** enables understanding **SDLC**
- Understanding **SDLC** enables understanding **Methodologies**
- **Functional Requirements** flow directly into → **Functional, Structural & Behavioural Models**
- Understanding **Requirements** enables **System Design**
- Understanding **System Design** enables **Interface Design**
- **Analysis Phase (What?)** produces Logical Model → feeds into → **Design Phase (How?)**

### Dependency (Requires / Prerequisite)

- **System Design** requires **Requirements Gathering** as prerequisite
- **Interface Design** requires **System Design** as prerequisite
- **Business Requirements** must be gathered before they evolve into **System Requirements**
- **Data Verification** complements and depends on **Data Validation**
- Prerequisite chain: **Systems Fundamentals → SDLC → Requirements → System Design → Interface Design**

### Contrast (Contrasts-with)

- **Waterfall** (linear, rigid) contrasts with **Agile** (iterative, flexible)
- **Functional Requirements** (what the system does) contrasts with **Non-Functional Requirements** (how the system behaves)
- **Analysis Phase** (What?) contrasts with **Design Phase** (How?)
- **Open System** (interacts with environment) contrasts with **Closed System** (self-contained)
- **Data Validation** (checks sensibility) contrasts with **Data Verification** (confirms correctness)
- **Business Requirements** (analyst perspective) contrasts with **System Requirements** (technical perspective)
- **General Design Approach** (features + costs) contrasts with **Structured Design Approach** (detailed blueprint)

---

## Central Concepts

These are the most connected concepts, master these first:

| Concept | Connections | Why Central |
|---------|-------------|-------------|
| **SDLC** | 8 | The backbone of the entire course, all methodologies, phases, deliverables, and analyst roles connect through it |
| **System** | 7 | The foundational definition everything else builds on, components, types, IS all derive from it |
| **Requirements** | 6 | The pivot between business needs and technical design, functional vs non-functional split drives the whole design phase |
| **System Design** | 5 | Bridges requirements analysis to implementation, determines interface, input, output, database |
| **User Interface** | 5 | The visible output of system design, connects UI principles, screen design, validation, verification, controls |
| **System Analyst** | 4 | The human centre of the SDLC, bridges business problems and technology solutions across all phases |

---

## Prerequisite Learning Path

Recommended study order based on concept dependencies:

1. **Systems & Components**: foundational vocabulary; everything else uses these terms
2. **Information Systems**: specialisation of systems relevant to the course domain
3. **Introduction to SA&D + System Analyst role**: sets context and purpose for the discipline
4. **SDLC, Phases & Steps**: the process framework all methodologies implement
5. **SDLC Methodologies & Models**: how the framework is applied in different contexts (Waterfall, Agile, RAD, Spiral)
6. **Requirements Gathering**: first major phase deliverable; functional vs non-functional
7. **System Design**: translating requirements into blueprints
8. **Interface, Input & Output Design**: detailed design of the human-facing layer
9. **Tools & Techniques**: DFD, ERD, Flowcharts applied across design phases
10. **Security & Maintenance**: post-deployment concerns *(materials pending)*

---

## Definitions Quick Reference

| Term | Definition (brief) |
|------|-------------------|
| System | Organized collection of components working together toward a common goal |
| SDLC | Structured process for designing, building, and delivering information systems |
| Requirement | A statement of what a system must do or what characteristics it must have |
| Functional Requirement | What the system must do, user/business needs |
| Non-Functional Requirement | How the system must behave, performance, reliability, security properties |
| System Design | The process of planning how to build a system (the "How" after analysis answers "What") |
| Deliverable | A specific document or file produced at the completion of an SDLC phase |
| Waterfall Model | Linear sequential SDLC model; each phase completes before the next begins |
| Agile | Iterative SDLC methodology using sprints; adaptive to changing requirements |
| RAD | Rapid Application Development, iterative prototyping with minimal up-front planning |
| V-Model | Extension of Waterfall with matched testing phases for each development stage |
| Spiral Model | Iterative model combining development with structured risk assessment |
| Methodology | A formalized approach to implementing the SDLC |
| System Analyst | Professional bridging business problems and technology solutions |
| User Interface | The part of the system users interact with, "to the user, the interface IS the system" |
| Legacy System | Outdated computing system (hardware/software/formats) requiring integration consideration |
| Data Validation | Checks that data entered is sensible (correct type, format, range) |
| Data Verification | Confirms data entered matches the intended value (proof reading or double-entry) |
| Feedback | System output information used to adjust the process or input |
| Information System | System that manages and processes data to produce useful organizational information |

---

## Tutor Reference Notes

*For use during learning sessions on CMS711:*

- **Best Socratic entry point:** Start with "What is a system? Give me a real-world example from your life.", this activates prior knowledge and leads naturally into components, types, and SDLC.
- **Most common misconceptions:**
  - Confusing *validation* (is the data sensible?) with *verification* (is it the right value?)
  - Treating SDLC phases as strictly waterfall by default, students often don't realise all models implement the same phases differently
  - Confusing *functional* (what the system does) with *non-functional* (how it performs) requirements
- **Concepts students typically conflate:**
  - Functional Requirements ↔ Non-Functional Requirements
  - Data Validation ↔ Data Verification
  - Analysis Phase ↔ Design Phase (both produce documents, students mix up deliverables)
  - Business Requirements ↔ System Requirements
  - SDLC phases (4) ↔ SDLC steps (7)
- **Mbosinwa's context:** Strong software engineering background, use analogies to product development (sprints, APIs, deployment pipelines) when explaining SDLC models. He will grasp Agile/DevOps quickly; lean in on the formal academic framing of concepts he already knows practically.
- **Material gaps to flag during tutoring:** Security & Maintenance, System Modelling (DFD/ERD), System Analyst roles/types, do not test on these until materials are onboarded.
