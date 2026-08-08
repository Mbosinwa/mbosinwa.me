# CMS 701: Operating Systems Lecture Notes
## Multithreading, CPU Scheduling Algorithms & Process Synchronization

---

## What is Multithreading?

**Multithreading** is a technique where a process is divided into smaller execution units called **threads** that run concurrently. It allows a single process to have multiple threads running simultaneously, different parts of a program can run at the same time, improving efficiency and responsiveness.

---

## Application Examples

- **Web Browser:** Each tab can be a separate thread.
- **MS Word:** One thread for formatting text, another for keyboard inputs.
- **VLC Media Player:** One thread for opening the player, one for playing, another for playlist management.
- **Banking System:** Multiple users perform transfers, payments, deposits simultaneously without waiting for each other.

---

## Multithreading vs. Multitasking vs. Multiprocessing

| Feature | Multithreading | Multitasking | Multiprocessing |
|---------|---------------|--------------|-----------------|
| **Definition** | Multiple threads within a single process, sharing memory. | Multiple tasks/processes on a single CPU. | Multiple processes on multiple CPUs/cores. |
| **Communication** | Threads share data easily. | Processes use IPC mechanisms. | Processes on separate CPUs; minimal direct communication. |
| **Efficiency** | Best for tasks sharing data within same memory space. | Suitable for loosely related tasks. | Ideal for compute-intensive tasks. |
| **Weight** | Most lightweight (shared memory). | Slightly heavier (separate process memory). | Heaviest (requires more hardware). |
| **Vulnerabilities** | Race conditions, deadlocks. | Synchronization issues. | Better isolation; fewer data sharing issues. |

---

## Multithreading Models in OS

Defines how **User Threads** (managed by application libraries) map to **Kernel Threads** (managed by OS kernel).

### 1. Many-to-Many Model

Multiple user threads multiplex to same or fewer kernel threads.

- If a user thread is blocked, other user threads can be scheduled to another kernel thread.
- Considered the best multithreading model.

```
User Threads: UT1, UT2, UT3, UT4, UT5
Kernel Threads: KT1, KT2, KT3
UT1, UT2 → KT1 | UT3, UT4 → KT2 | UT5 → KT3
```

> **Scenario:** 100 user threads handle server requests; OS maps them to 10 kernel threads. Some run in parallel, others wait without blocking the system.

### 2. Many-to-One Model

Many user threads mapped to **one** kernel thread. Thread management in user space.

- When any thread makes a blocking system call, the **entire process blocks**.
- Only one thread can access the kernel at a time; no true parallelism on multiprocessors.

> Thread management is done at user level, so it is efficient, but no multiprocessor advantage.

### 3. One-to-One Model

One user thread maps to one kernel thread.

- More concurrency than Many-to-One.
- Another thread can run when one blocks.
- Supports true parallel execution on multiprocessors.
- **Disadvantage:** Creating a user thread requires creating a kernel thread (heavier).
- **Examples:** OS/2, Windows NT, Windows 2000.

---

## Summary: User-Level vs. Kernel-Level Threads

| | User-Level Threads | Kernel-Level Threads |
|---|---|---|
| **Speed** | Faster to create and manage | Slower to create and manage |
| **Implementation** | Thread library at user level | OS kernel support |
| **Portability** | Generic; runs on any OS | Specific to the OS |
| **Multiprocessing** | Cannot exploit multiprocessors | Can run on multiple processors |

---

## Summary: Process vs. Thread

| | Process | Thread |
|---|---|---|
| **Weight** | Heavyweight | Lightweight |
| **Switching** | Requires OS interface | No kernel interrupt needed |
| **Resources** | Own memory and file resources | Shares open files and child processes |
| **Blocking** | If blocked, no other process runs | If one thread blocks, others can run |
| **Resource Usage** | More resources | Fewer resources |
| **Isolation** | Independent | Threads can modify each other's stack |

---

## Common Issues in Multithreading

1. **Race Conditions:** Multiple threads accessing shared data simultaneously → unpredictable results.
2. **Deadlocks:** Two or more threads waiting forever for each other's resources.
3. **Starvation:** A thread never gets CPU time due to scheduling priorities.

**Solutions:** Mutexes, semaphores, condition variables; careful design to avoid circular waits.

---

## CPU Scheduling

**CPU scheduling** is the OS activity of deciding which ready process or thread should run on the CPU next. The CPU can only handle one task at a time, but many tasks need processing.

> **Analogy:** The scheduler is a traffic controller at a busy intersection, deciding which "car" gets the green light.

### Importance
1. Ensures efficient CPU utilization.
2. Improves system performance.
3. Provides fairness among processes.
4. Reduces waiting and response time.

---

## Preemptive vs. Non-Preemptive Scheduling

### Non-Preemptive
Once a process starts, it holds the CPU until it finishes or voluntarily waits for I/O.

**Advantages:** Simple; no context switch overhead; predictable.
**Disadvantages:** Poor response time; long waiting times; not suitable for interactive systems.

### Preemptive
OS can interrupt a running process to give CPU to a higher-priority task. Standard for modern multitasking.

**Advantages:** Better responsiveness; suitable for interactive systems; ensures fairness.
**Disadvantages:** More overhead (frequent context switching); complex to implement.

---

## CPU Scheduling Terminologies

1. **Arrival Time:** When the process arrives in the ready queue.
2. **Completion Time:** When the process completes execution.
3. **Burst Time:** Time required by a process for CPU execution.
4. **Turnaround Time:** `Completion Time − Arrival Time`
5. **Waiting Time:** `Turnaround Time − Burst Time`

---

## Scheduling Algorithms

### 1. First-Come, First-Served (FCFS)

FIFO queue; the first process to arrive gets CPU first.

> **Scenario:** Students lining up to use a printer.

**Advantages:** Simple; easy to implement.
**Disadvantages:** Long waiting time; **"Convoy Effect"**: short jobs wait behind long ones.

---

### 2. Shortest Job First (SJF)

Process with the shortest burst time is selected first.

> **Scenario:** At a café, customers with small orders are served before large orders.

**Advantages:** Minimum average waiting time.
**Disadvantages:** Hard to predict burst time; long jobs may suffer **Starvation**.

---

### 3. Priority Scheduling

Each process has a priority number; highest priority gets CPU first.

> **Scenario:** Hospital emergency patients treated before regular patients.

**Advantages:** Important tasks handled quickly.
**Disadvantages:** Low-priority processes may starve.
**Fix:** **Aging**: gradually increasing priority of long-waiting processes.

---

### 4. Round Robin (RR)

Each process gets a **Time Quantum** (10–100ms); if not done, goes to back of queue. Designed for time-sharing systems.

> **Scenario:** Students taking turns on a shared computer, 5 minutes each.

**Advantages:** Fair; good for time-sharing.
**Disadvantages:** Too many context switches; performance depends on time quantum size.
> If quantum too large → becomes FCFS. If too small → context switch overhead dominates.

---

### 5. Multilevel Queue Scheduling

Ready queue partitioned into separate queues by process type (e.g., Foreground vs. Background). Each queue has its own scheduling algorithm.

> **Scenario:** In school, teachers, senior students, and juniors have different service queues.

**Advantages:** Organized process handling.
**Disadvantages:** Rigid structure; possible starvation.

---

### 6. Multilevel Feedback Queue Scheduling

Like Multilevel Queue but processes can **move between queues** based on behavior.

> **Scenario:** A student who takes too long in the fast service queue is moved to a slower queue.

**Advantages:** Flexible; prevents starvation.
**Disadvantages:** Complex to implement.

---

## Process Synchronization

**Process synchronization** is the coordination of multiple cooperating processes to ensure controlled access to shared resources, preventing race conditions and other problems.

> **Race Condition:** Occurs when two or more processes access and modify the same shared data simultaneously, and the final outcome depends on execution order.

---

## Critical Section

The **Critical Section** is a segment of code where a process accesses shared resources. Only one process should be allowed in the critical section at a time.

### Requirements for a Synchronization Solution

1. **Mutual Exclusion:** If Process A is in critical section, no other process can enter.
2. **Progress:** If no process is in the critical section, the decision of who goes next cannot be postponed indefinitely.
3. **Bounded Waiting:** A limit on how many times others can "cut in line" before a waiting process is granted access.

### Bank Account Scenario (Race Condition)

> Balance = ₦10,000 | Process A withdraws ₦7,000 | Process B withdraws ₦5,000
>
> **Without sync:** Both read ₦10,000 → A updates → ₦3,000 → B updates → ₦5,000. **Incorrect result.**
>
> **With sync:** A enters critical section → updates to ₦3,000 → B waits → B executes → insufficient funds. **Correct result.**

---

## Process Synchronization Problems

1. **Race Condition:** Multiple processes in critical section differ in execution order → incorrect results.
2. **Deadlocks:** Processes stuck waiting for each other's resources (circular dependency).
   > Process A holds Resource 1, waits for Resource 2. Process B holds Resource 2, waits for Resource 1. Both stuck forever.
3. **Starvation:** A process is denied access indefinitely due to consistent priority of others.
4. **Data Inconsistencies:** Multiple processes simultaneously updating shared data → corrupted state.

---

## Synchronization Mechanisms

### 1. Mutual Exclusion
Locks, semaphores, and similar primitives ensure only one process accesses a shared resource at a time.

### 2. Semaphores
Synchronization objects maintaining a count; allow or restrict resource access.
- **Binary semaphore:** 0 or 1 (like a lock).
- **Counting semaphore:** Allows multiple accesses up to a limit.

> **Scenario:** Only 3 computers available, semaphore ensures only 3 users access them at once.

### 3. Monitors
Higher-level constructs encapsulating shared data and procedures. Ensure only one process executes within the monitor at a time.

### 4. Condition Variables
Primitives used with locks/monitors. Processes wait on a condition variable until another process signals that the condition is met.

---

## Advantages and Disadvantages of Process Synchronization

**Advantages**
- Prevents data inconsistency.
- Avoids race conditions.
- Ensures system reliability.
- Supports safe multitasking.

**Disadvantages**
- Adds complexity.
- May cause deadlock or starvation if poorly implemented.
- Slight performance overhead.
