
# Knowledge Map: Operating Systems (CMS701)

> Generated: 2026-04-02 | Topics: 7 | Concepts: 45+ | Relationships: 39

---

## Course Overview

Operating Systems (CMS701) covers the fundamental principles of how an OS manages hardware and software resources. The course progresses from OS architecture (kernels, system calls) through process and thread management, CPU scheduling algorithms, multithreading models, and concludes with process synchronization — the mechanisms that keep concurrent processes safe and consistent. Two topics from the outline (Spooling, Mechanisms & Policies) are not yet covered in available lecture notes.

---

## Concept Hierarchy

```
Operating Systems (CMS701)
│
├── 1. Introduction to Operating Systems          [7 concepts]
│   ├── Definition & Role
│   │   ├── Key Concepts: Operating System, OS-as-bridge (user ↔ hardware)
│   │   └── Central: Operating System
│   └── Types of Operating Systems
│       ├── Key Concepts: Batch OS, Multiprogramming OS, Time-Sharing OS
│       │                  Network OS, Real-Time OS
│       └── Central: Time-Sharing OS (most relevant to modern systems)
│
├── 2. OS Structures                              [12 concepts]
│   ├── Kernel Architecture
│   │   ├── Key Concepts: Kernel, Monolithic Kernel, Microkernel,
│   │   │                  Hybrid Kernel, Exokernel, Nanokernel
│   │   └── Central: Kernel ★
│   ├── System Calls
│   │   ├── Key Concepts: System Call, Process Control (fork/wait/exit),
│   │   │                  File Management (open/read/write/close),
│   │   │                  Device Management (ioctl), Information Maintenance,
│   │   │                  Communication (pipe/socket), Memory Management (mmap)
│   │   └── Central: System Call ★
│   └── ⚠ Pending Topics
│       └── Spooling, System Programs, Mechanisms & Policies
│
├── 3. Process Management                         [15 concepts]
│   ├── Process Definition & Attributes
│   │   ├── Key Concepts: Process, PID, Process Attributes (7 components)
│   │   └── Central: Process ★
│   ├── Process Creation
│   │   ├── Key Concepts: Parent Process, Child Process, fork(),
│   │   │                  Resource Allocation (Direct/Shared),
│   │   │                  Execution Models (Concurrent/Wait)
│   │   └── Central: fork()
│   ├── Context Switching
│   │   ├── Key Concepts: Context Switch, Dispatcher, Time Quantum, Overhead
│   │   └── Central: Context Switch ★
│   ├── Process State Models
│   │   ├── Key Concepts: Two-State Model, Five-State Model, Seven-State Model
│   │   │                  Running, Ready, Blocked/Waiting, New, Terminated,
│   │   │                  Suspend Ready, Suspend Blocked
│   │   └── Central: Five-State Model (most commonly examined)
│   └── Process Control Block (PCB)
│       ├── Key Concepts: PCB, PID, PPID, Program Counter, CPU Registers,
│       │                  Memory Management Info, Scheduling Info,
│       │                  I/O & File Info, Zombie Process
│       └── Central: PCB ★
│
├── 4. CPU Scheduling                             [12 concepts]
│   ├── Schedulers
│   │   ├── Key Concepts: Long-Term Scheduler (degree of multiprogramming),
│   │   │                  Short-Term Scheduler (ready queue),
│   │   │                  Medium-Term Scheduler (swapping)
│   │   └── Central: Short-Term Scheduler
│   ├── Preemptive vs. Non-Preemptive
│   │   ├── Key Concepts: Preemptive Scheduling, Non-Preemptive Scheduling
│   │   └── Central: Preemptive Scheduling
│   ├── Scheduling Terminologies
│   │   └── Key Concepts: Arrival Time, Burst Time, Completion Time,
│   │                      Turnaround Time, Waiting Time
│   └── Scheduling Algorithms
│       ├── Key Concepts: FCFS (Convoy Effect), SJF (Starvation risk),
│       │                  Priority Scheduling (Aging fix), Round Robin (Time Quantum),
│       │                  Multilevel Queue, Multilevel Feedback Queue
│       └── Central: Round Robin (dominant in modern OS)
│
├── 5. Thread Management                          [8 concepts]
│   ├── Thread Definition
│   │   ├── Key Concepts: Thread, Lightweight Process
│   │   └── Central: Thread ★
│   ├── Thread Components
│   │   └── Key Concepts: Stack Space, Register Set, Program Counter
│   └── Types of Threads
│       ├── Key Concepts: User-Level Thread, Kernel-Level Thread
│       └── Central: Kernel-Level Thread (more powerful; OS-managed)
│
├── 6. Multithreading                             [8 concepts]
│   ├── Multithreading Models
│   │   ├── Key Concepts: Many-to-Many Model ★ (best),
│   │   │                  Many-to-One Model, One-to-One Model
│   │   └── Central: Many-to-Many Model
│   ├── Multithreading vs. Multitasking vs. Multiprocessing
│   │   └── Key Concepts: Multithreading, Multitasking, Multiprocessing
│   └── Common Issues
│       └── Key Concepts: Race Condition, Deadlock, Starvation
│
└── 7. Process Synchronization                   [9 concepts]
    ├── Critical Section Problem
    │   ├── Key Concepts: Critical Section, Race Condition
    │   └── Central: Critical Section ★
    ├── Synchronization Requirements
    │   └── Key Concepts: Mutual Exclusion, Progress, Bounded Waiting
    ├── Synchronization Mechanisms
    │   ├── Key Concepts: Semaphore (Binary/Counting), Monitor,
    │   │                  Condition Variable, Mutex
    │   └── Central: Semaphore ★
    └── Synchronization Problems
        └── Key Concepts: Deadlock, Starvation, Data Inconsistency
```

---

## Key Relationships

### Hierarchical (Is-a / Part-of)

- **Kernel** is the core component of **Operating System**
- **Thread** is a lightweight version of **Process**
- **Monolithic Kernel** is a type of **Kernel** (all-in-one, fast, fragile)
- **Microkernel** is a type of **Kernel** (minimal, stable, slower IPC)
- **Hybrid Kernel** is a type of **Kernel** (balances both)
- **Exokernel / Nanokernel** are extreme minimal types of **Kernel**
- **User-Level Thread** is a type of **Thread** (app-managed)
- **Kernel-Level Thread** is a type of **Thread** (OS-managed)
- **Semaphore** is a type of **Synchronization Mechanism**
- **Monitor** is a type of **Synchronization Mechanism**
- **PCB** is a data structure that is part of **Process Management**
- **Program Counter** is a field of **PCB**
- **CPU Registers** are fields of **PCB**
- **PID** is an identifier field of **PCB**

### Causal (Causes / Enables)

- **Race Condition** causes **Data Inconsistency**
- **Circular Resource Wait** causes **Deadlock**
- **Priority bias** causes **Starvation**
- **FCFS with long jobs first** causes **Convoy Effect**
- **SJF with continuous short arrivals** causes **Starvation** for long jobs
- **Mutual Exclusion** enables safe **Critical Section** access
- **Semaphore** enables **Mutual Exclusion**
- **Aging** enables prevention of **Starvation**
- **Context Switch** enables **Multitasking** (CPU sharing)
- **Process Scheduling** enables **Multiprogramming**

### Dependency (Requires / Prerequisite)

- **System Call** requires **Kernel** to execute
- **Context Switch** requires **PCB** to save/restore state
- **CPU Scheduling** requires understanding of **Process States** (Ready Queue)
- **Round Robin** performance depends on **Time Quantum** size
- **Multithreading Models** depend on understanding **Thread Types**
- **Synchronization Mechanisms** depend on understanding **Race Conditions**

### Contrast (Contrasts-with)

- **Monolithic Kernel** vs **Microkernel** — performance vs. stability/modularity
- **Preemptive** vs **Non-Preemptive** Scheduling — OS control vs. process control
- **User-Level Thread** vs **Kernel-Level Thread** — speed vs. multiprocessor power
- **Many-to-One** vs **One-to-One** Model — efficiency vs. true parallelism
- **Process** vs **Thread** — heavyweight/isolated vs. lightweight/shared

---

## Central Concepts

These are the most connected concepts in the course — master these first:

| Concept | Connections | Why Central |
|---------|-------------|-------------|
| **Process** | 8 | Foundation of all process management, scheduling, synchronization, and threading |
| **Kernel** | 7 | Core OS component; all system calls, thread management, and hardware access pass through it |
| **PCB (Process Control Block)** | 6 | The OS's complete record of a process; essential for context switching and scheduling |
| **Context Switch** | 6 | The mechanism that makes multitasking possible; connects PCB, schedulers, and CPU |
| **CPU Scheduling** | 6 | Governs all 6 scheduling algorithms and 3 scheduler types; directly affects performance |
| **Thread** | 5 | Lightweight execution unit; central to multithreading models and synchronization issues |
| **Deadlock** | 4 | Connects synchronization failures, resource management, and starvation |

---

## Prerequisite Learning Path

Recommended study order based on concept dependencies:

```
1. Operating System Basics (definition, types)
        ↓
2. Kernel Architecture (monolithic → microkernel → hybrid)
        ↓
3. System Calls (how user mode requests kernel services)
        ↓
4. Process Fundamentals (definition, attributes, creation)
        ↓
5. Process State Models (2-state → 5-state → 7-state)
        ↓
6. Process Control Block — PCB (what data the OS tracks)
        ↓
7. Context Switching (how the OS switches between processes)
        ↓
8. Process Schedulers (Long-Term, Short-Term, Medium-Term)
        ↓
9. CPU Scheduling Algorithms (FCFS → SJF → Priority → RR → Multilevel)
        ↓
10. Thread Management (what threads are, types, components)
        ↓
11. Multithreading & Models (Many-to-Many, Many-to-One, One-to-One)
        ↓
12. Race Conditions & Critical Section (why synchronization is needed)
        ↓
13. Process Synchronization Mechanisms (semaphores, monitors, mutexes)
```

---

## Definitions Quick Reference

| Term | Definition (brief) |
|------|-------------------|
| **Operating System** | Software bridge between user and hardware; manages all resources |
| **Kernel** | Core OS component bridging applications and hardware |
| **Monolithic Kernel** | Single large program with all OS functions; fast but fragile |
| **Microkernel** | Minimal kernel; drivers/services in user space; stable but slower |
| **Hybrid Kernel** | Combines monolithic speed with microkernel modularity (e.g., Windows NT) |
| **System Call** | Program's request to kernel for privileged operations; bridges user/kernel mode |
| **Process** | A program in execution with its own code, state, and resources |
| **PID** | Unique numeric identifier assigned to each process by the OS |
| **PCB** | OS data structure holding all info to manage a process |
| **Context Switch** | OS saving one process's state and loading another's to share CPU |
| **Program Counter** | Register holding address of the next instruction to execute |
| **Thread** | Smallest execution unit within a process; shares memory with siblings |
| **User-Level Thread** | Thread managed by app library; fast but no multiprocessor advantage |
| **Kernel-Level Thread** | Thread managed by OS; slower but true parallelism on multiprocessors |
| **Multithreading** | Single process running multiple concurrent threads |
| **Many-to-Many Model** | Multiple user threads mapped to equal or fewer kernel threads (best model) |
| **One-to-One Model** | Each user thread mapped to its own kernel thread; true parallelism |
| **CPU Scheduling** | OS mechanism deciding which process/thread runs on CPU next |
| **Preemptive Scheduling** | OS can interrupt a running process for a higher-priority one |
| **Time Quantum** | Fixed CPU time slice per process in Round Robin scheduling |
| **Turnaround Time** | Completion Time − Arrival Time |
| **Waiting Time** | Turnaround Time − Burst Time |
| **FCFS** | First-Come, First-Served; simple but causes convoy effect |
| **SJF** | Shortest Job First; optimal avg wait time but risks starvation |
| **Round Robin** | Fair time-slice scheduling; performance depends on quantum size |
| **Aging** | Gradually increasing waiting process priority to prevent starvation |
| **Critical Section** | Code segment accessing shared resources; one process at a time only |
| **Race Condition** | Simultaneous shared-data access leading to unpredictable results |
| **Mutual Exclusion** | Guarantee only one process is in the critical section at a time |
| **Deadlock** | Two+ processes in circular wait for each other's resources; all stuck |
| **Starvation** | Process perpetually denied resource/CPU due to others' priority |
| **Semaphore** | Sync object using count to allow/block resource access |
| **Monitor** | High-level construct ensuring only one process executes shared code at a time |
| **Zombie Process** | Finished process whose PCB still exists (parent hasn't read exit status) |
| **Convoy Effect** | FCFS problem: short processes stuck behind a long one |
| **Spooling** | ⚠ Pending — not yet covered in available lecture notes |

---

## Tutor Reference Notes

*For use during learning sessions:*

- **Best entry-point concept:** Start with *Process* — it anchors topics 3 through 7 and gives Mbosinwa (a software engineer) an immediately relatable mental model (every app he has built runs as processes).

- **Most common misconceptions in this course:**
  1. Confusing *context switch* with *process switch* — a context switch is the mechanism; a process switch is the event that triggers it.
  2. Thinking *multithreading* = *multiprocessing* — threads share memory; processes do not.
  3. Assuming *Shortest Job First* is always best — it causes starvation in practice.
  4. Thinking *deadlock* and *starvation* are the same — deadlock is a circular wait (no one proceeds); starvation is unfair scheduling (one never proceeds).

- **Concepts students typically conflate:**
  - **Deadlock** vs **Starvation** — both mean a process never runs, but deadlock is a circular dependency; starvation is a scheduling fairness failure.
  - **Preemptive** vs **Non-Preemptive** — easy to mix up which is "interruptible."
  - **User-Level Thread** vs **Kernel-Level Thread** — both are threads; difference is *who manages them*.
  - **Many-to-One** vs **One-to-One** — the naming is intuitive but the trade-offs (efficiency vs. parallelism) are what matter.
  - **PCB** vs **Process** — PCB is the *record* of a process, not the process itself.
  - **Short-Term Scheduler** vs **Dispatcher** — scheduler *decides*; dispatcher *executes* the switch.

- **⚠ Coverage gaps to flag during tutoring:**
  - Spooling, System Programs, Mechanisms & Policies not yet in lecture notes — flag if exam questions arise on these.
