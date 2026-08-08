# CMS 701: Operating Systems Lecture Notes
## Process State, Process Control Block & Schedulers

---

## Process State in Operating Systems

A process in an operating system passes through multiple states as it begins execution, waits for resources, gets scheduled, runs, and eventually finishes.

---

## The Two-State Model

A process is either actively using the CPU or waiting until it gets a chance to run.

### States
- **Running:** The process is currently using the CPU.
- **Not Running:** The process is not using the CPU, waiting for input, resources, or simply paused.

### How It Works
1. A newly created process starts in the **Not Running** state.
2. The **dispatcher** checks if the CPU is free.
3. If available, the dispatcher loads the process onto the CPU (**Running** state).
4. The **scheduler** selects which process runs next.

---

## The Five-State Model

Expands the two-state model by separating processes waiting for CPU time from those waiting for an external event.

### The Five States
- **New:** Process just created; PCB is prepared.
- **Ready:** Loaded into memory; waiting for CPU.
- **Running:** CPU is currently executing this process (only one at a time on single-CPU).
- **Blocked/Waiting:** Cannot continue; waiting for I/O or data input.
- **Exit/Terminate:** Completed or stopped; OS removes it from memory.

### Transitions
```
[New] → Admit → [Ready] → Dispatch → [Running]
[Running] → Time-out → [Ready]
[Running] → Event Wait → [Blocked]
[Blocked] → Event Occurs → [Ready]
[Running] → Release → [Exit]
```

---

## The Seven-State Model

### The Seven States
- **New:** Program in secondary memory; OS prepares PCB before loading into main memory.
- **Ready:** Loaded into main memory; waiting in the ready queue.
- **Running:** CPU executing the process's instructions.
- **Blocked/Waiting:** Waiting for I/O, user input, or locked resource.
- **Terminated:** Completed; OS deletes PCB and frees resources.
- **Suspend Ready:** Ready process swapped out to secondary storage due to memory shortage.
- **Suspend Blocked:** Blocked process swapped out to secondary storage.

### Additional Transitions
```
[Ready] → Suspend → [Suspend Ready] → Activate → [Ready]
[Blocked] → Suspend → [Suspend Blocked]
[Suspend Blocked] → Event Occurs → [Suspend Ready]
[Suspend Blocked] → Activate → [Blocked]
```

---

## Movement of a Process From One State to Another

| Transition | Description |
|---|---|
| **New → Ready** | Process created, resources allocated, loaded into main memory. |
| **Ready → Running** | Scheduler assigns CPU to the process. |
| **Running → Blocked** | Process waits for I/O, user input, or system call. |
| **Blocked → Ready** | Event completes or resource becomes available. |
| **Running → Ready** | OS preempts the process (higher-priority process arrives). |
| **Running → Terminated** | Process completes or is forcefully stopped. |
| **Blocked → Terminated** | Process waiting for event is aborted or killed. |

---

## Process Scheduler in Operating Systems

A **process scheduler** is the part of the OS responsible for deciding which process in the ready queue should execute on the CPU next.

The process scheduler ensures:
- Fair CPU allocation
- Efficient system performance
- Reduced waiting time
- Smooth multitasking

---

## Types of Schedulers

### Long-Term Scheduler
Decides which new processes enter the ready state; controls the **degree of multiprogramming**.

> **Scenario:** When you double-click a game icon, this scheduler decides if the system has enough memory to start the process.

### Short-Term Scheduler
Selects the next process from the ready queue to run on the CPU; works very frequently.

> **Scenario:** While typing, this scheduler flicks the CPU back and forth between your keyboard, music player, and Wi-Fi.

### Medium-Term Scheduler
Handles **swapping**: suspends processes and moves them between main memory and secondary storage.

> **Scenario:** A browser not used in three hours gets "frozen" and moved to disk to free memory for an active game.

---

## Scheduling Algorithms (Summary)

| Algorithm | How It Works | Analogy |
|-----------|-------------|---------|
| **First-Come, First-Served (FCFS)** | First process to arrive gets CPU until done. | Grocery store checkout line. |
| **Shortest Job First (SJF)** | CPU picks the shortest task first. | Doing 2-minute homework before a 2-hour essay. |
| **Round Robin (RR)** | Each process gets a time slice; if not done, goes to back of queue. | Teacher giving each student 1 minute per question. |
| **Priority Scheduling** | High-priority tasks run first. | Ambulance getting through traffic before regular cars. |

### Preemptive vs. Non-Preemptive Scheduling
- **Non-Preemptive:** Once a process gets the CPU, it keeps it until finished or waiting for I/O.
- **Preemptive:** OS can interrupt a running process for a higher-priority one. (Windows, Linux, macOS are preemptive.)

---

## Process Control Block (PCB)

A **Process Control Block (PCB)** is a data structure maintained by the OS containing all information needed to manage a process.

> The PCB acts as the OS's **record file or identity card** for each process. Without it, the OS cannot track, schedule, or manage a process.

---

## Anatomy of the PCB

### 1. Process Identification Information

| Component | Description |
|-----------|-------------|
| **Process ID (PID)** | Unique number assigned to each process. |
| **Parent Process ID (PPID)** | Identifies the process that created it. |
| **User ID** | Identifies the user who started the process. |

### 2. Process State Information

| State | Meaning |
|-------|---------|
| **New** | Process is being created |
| **Ready** | Waiting for CPU |
| **Running** | Currently executing |
| **Waiting/Blocked** | Waiting for I/O |
| **Terminated** | Execution completed |

### 3. Program Counter (PC)

Contains the address of the **next instruction to be executed**.

> **Scenario:** If on line 50 when the OS pauses you, the PCB saves "Line 51." When the process returns, the CPU knows exactly where to resume.

### 4. CPU Registers

Temporary data needed by the CPU: Accumulator, Index registers, Stack pointer, Program status word.

- **Storage:** During Context Switch, physical register values are copied into the PCB.
- **Restore:** When process runs again, values are copied back from PCB to CPU hardware.

### 5. Memory Management Information

- **Page Tables / Segment Tables:** Map virtual addresses to physical addresses.
- **Base and Limit Registers:** Starting memory address and length of allocated memory block.

### 6. Process Scheduling Information

- **Process State:** Current state (Running, Ready, Waiting).
- **Priority:** Numerical value, higher priority processes get more CPU time.
- **Accounting Information:** CPU time used, waiting time, nice value (Unix/Linux).

### 7. I/O and File Information

- **List of Open Files:** Table of pointers to open file table entries.
- **List of Open Devices:** Hardware devices the process is currently using.

---

## Real-World PCB Examples

Each Chrome tab is a separate process. If Tab A plays YouTube, its PCB tracks the network and sound card connections. The PCB keeps track of buffered video seconds even when the tab is deprioritized.

When a program finishes but its PCB isn't deleted (parent didn't check child exit status), the child's PCB stays in memory. This is a **Zombie Process**: no CPU usage, but occupies a slot in the OS process table.
