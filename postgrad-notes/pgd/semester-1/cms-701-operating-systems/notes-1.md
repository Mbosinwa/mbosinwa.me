# CMS 701: Operating Systems Lecture Notes
## OS Types, Kernels & System Calls

---

## What is an Operating System?

An **operating system** is the main software that makes the computer or mobile device work. It acts as a bridge between the user and the computer hardware. However, it is also the interface between the computer hardware and the user. E.g. Windows, Linux, Unix, Mac OS and Android.

---

## Types of Operating Systems

### Batch Operating System

It is designed to handle large groups of similar jobs efficiently. The user doesn't interact with the computer directly; instead, jobs are grouped by an operator. The jobs are queued and executed one after the other without user instruction during the process.

**Advantages**
1. There is minimal idle time.
2. The system has the ability to handle repetitive or similar tasks efficiently.
3. It can handle high volumes of jobs at once.

**Disadvantages**
1. Inefficient CPU utilization.
2. Time between the job submission and the output can be high as all jobs are processed sequentially.
3. There is an increase in response time.
4. There is no realtime feedback.

---

### Multiprogramming Operating System

Programs run in the memory at the same time. The CPU switches between programs, utilizing its resources more effectively and improving overall system performance.

**Advantages**
1. There is better CPU utilization.
2. It reduces the CPU idle time and improves the system efficiency.

**Disadvantages**
1. Complex memory management.
2. There is a risk of deadlock.
3. There is no guaranteed fast user response.

---

### Time Sharing (Multi-User) Operating System

In time sharing, the system allows multiple people at different terminals to use a single CPU at the same time. The OS switches between users so rapidly that each user feels like they have the entire machine to themselves.

**Advantages**
1. Multiple users interact with the system at the same time.
2. It maximizes resource utilization by allowing multiple users to share resources.
3. It reduces response time.

**Disadvantages**
1. There is a security issue.
2. Resource competition.

---

### Network Operating System

It provides necessary services to manage networked computers, allowing them to communicate and share resources.

**Advantages**
1. Users can manage resources from a central server.
2. Sharing of files and devices across the network is easy.
3. Various devices can connect and work together smoothly.

**Disadvantages**
1. It is dependent on network.
2. There is an increase in security threats.
3. Managing network and resources can be resource intensive.

---

### Real-Time Operating System

It is designed for systems that require rapid response time and high reliability, often used in embedded systems.

**Advantages**
1. Optimized for specific task with minimal overhead.
2. It guarantees minimal response time for principal tasks.
3. Efficiency, optimized for performance and resource use.

**Disadvantages**
- Debugging challenges, timing issues can be tricky to deal with.
- May require specialized hardware and resource constraints.
- Limited flexibility, tailored for specific applications.

---

## Kernels in Operating System

A **kernel** is the core part of an Operating System. It acts as a bridge between software applications and the hardware of a computer.

The kernel manages system resources, such as the CPU, memory and devices, ensuring everything works together smoothly and efficiently.

It handles tasks like running programs, accessing files, and connecting to devices like printers and keyboards.

An operating system includes the kernel as its core but also provides a user interface, file system management, network services, and various utility applications that enable the user to interact with the system:

- It facilitates communication between hardware and user applications.
- Ensures efficient and secure multitasking.
- Manages system stability and prevents unauthorized resource access.

---

## Types of Kernels

### 1. Monolithic Kernel

A monolithic kernel is a single large program that contains all the core functions of the operating system, including device drivers, file system management, and system calls.

> **Scenario (Technical):** Imagine a server running a Linux distribution with a monolithic kernel. When an application needs to read a file from disk, the system calls are processed directly within the kernel space. This allows for high performance as data flows quickly between hardware and software without the overhead of switching contexts.

> **Analogy, Small Startup Company:** Everyone sits in one big room. If the CEO needs a file, they just shout across the room. Communication is instant and fast because there are no walls. **The Problem:** If one employee gets the flu (a bug in a driver), they are so close to everyone else that they might infect the whole office, causing the entire company to stop working.

**Advantages**
- **High Performance:** Direct access to hardware reduces overhead.
- **Rich Functionality:** Supports a wide range of features and device drivers directly.

**Disadvantages**
- **Complexity in Development:** Difficult to maintain and debug due to its size and complexity.
- **Crash Vulnerability:** A single bug in the kernel can crash the whole OS, affecting stability.

---

### 2. Microkernel

A microkernel takes the opposite approach. It keeps only the absolute essentials in the kernel space (like basic process scheduling). Everything else, drivers, file systems, is moved to the **User Space**.

> **Scenario (Technical):** Consider a real-time operating system (RTOS) for embedded devices, such as a smart thermostat. The microkernel only handles basic tasks like process scheduling and inter-process communication. When the thermostat needs to adjust the temperature based on user inputs, the application running in user space communicates with the microkernel, ensuring the system remains responsive and stable.

> **Analogy, Large Government Agency:** Every department is in a separate building. If you want to move a file from one department to another, you have to send a formal letter (called **Inter-Process Communication or IPC**). **The Benefit:** If the "Department of Parks" burns down (a driver crashes), the rest of the government keeps running perfectly fine. **The Downside:** Sending letters between buildings takes a lot of time compared to shouting across a room.

**Advantages**
- **Stability:** Fewer components in the kernel reduce the risk of system crashes.
- **Modularity:** Easier to update or replace services without affecting the core kernel.

**Disadvantages**
- **Performance Overhead:** Communication between user space and kernel space can introduce latency.
- **Limited Functionality:** May require additional components to be loaded in user space, potentially affecting performance.

---

### 3. Hybrid Kernel

A hybrid kernel is a "best of both worlds" approach. It looks like a microkernel (modular) but runs most things in kernel space to keep the speed of a monolithic kernel. Hybrid kernels combine aspects of both monolithic and microkernel architectures, containing essential services in the kernel along with some user-space services.

> **Analogy, Modern Open-Plan Office with Glass Cubicles:** Employees have their own protected spaces (modular), but the walls are made of glass so they can still talk to each other very quickly without leaving the room.

> **Scenario (Technical):** An OS like Windows uses a hybrid kernel. When you run software that requires network communication, the networking functions are included in the kernel for efficient data handling. However, components like file systems are managed in user space, providing flexibility and modularity.

**Advantages**
- Good balance of speed and modularity.
- **Balanced Performance and Stability:** Offers the efficiency of monolithic kernels while retaining the modularity of microkernels.
- **Flexibility:** Can customize various components based on user needs or specific hardware.

**Disadvantages**
- Still carries some of the risks of a monolithic kernel (if a core component fails, the system might still go down).
- **Complex Architecture:** Can inherit the complexities of both kernel types, making development and debugging more challenging.
- **Potential Maintenance Overhead:** Increased number of components can complicate updates and maintenance.


---

### 4. Exokernel

Exokernels are unique because they don't try to manage resources for you. Instead, they give the application **direct access to the hardware** and let the application decide how to use it.

> **Analogy, Self-Service Warehouse:** Instead of asking a clerk (the kernel) to go find a box for you, the warehouse gives you the keys and a map. You go get exactly what you need, how you want it.

**Advantages**
- Maximum efficiency for specialized apps.

**Disadvantages**
- Each application has to be much more complex because it has to manage its own hardware.

---

### 5. Nanokernel

A nanokernel is an extreme version of a microkernel. It is incredibly tiny, essentially just enough code to handle hardware interrupts and nothing else.

> **Analogy, Remote Control:** It doesn't need to manage files, users, or complex networking. It just needs to know: "Did the user press a button? Okay, send a signal."

> **Scenario (Technical):** Consider an IoT device like a smart light bulb. A nanokernel might handle only the absolute necessities, like scheduling tasks and managing interrupts. All other functionalities, such as communication protocols or application logic, would run as user-space applications. This simplicity helps in reducing power consumption, crucial for battery-operated devices.

**Advantages**
- Tiny memory footprint; perfect for embedded systems.
- **Efficiency in Resource Use:** Extremely lightweight, consuming minimal resources.

**Disadvantages**
- Too simple for general-purpose computers like laptops.
- **Lack of Functionality:** Requires many user-space services, which can complicate development.
- **Performance Trade-offs:** Potentially slower communication between user space and kernel.

---

## System Calls

A **system call** is a request made by a program to the kernel of the operating system to perform a task that the program cannot perform directly.

> **Note:** Programs run in **user mode**. The kernel runs in **kernel mode**. A system call is the bridge between user mode and kernel mode.

System calls are a fundamental mechanism that allows programs to request services from the OS's kernel. They serve as the bridge between user applications and the hardware, enabling programs to perform low-level operations without needing direct access to hardware resources.

### How a System Call Works

```
Application (User Mode)
  → Makes a system call request
  → Transfers control to kernel
Kernel (Kernel Mode)
  → Verifies permissions & validates request
  → Accesses hardware resource
  → Returns result to application
Back in User Mode
```

> **Bank Teller Analogy:**
> - **The Application (You):** You walk into a bank (The OS). You want to withdraw money (access the hard drive).
> - **The Restriction:** You aren't allowed to walk behind the counter and grab cash from the vault yourself.
> - **The System Call:** You fill out a withdrawal slip (the system call) and hand it to the teller (the kernel).
> - **The Execution:** The teller checks your ID, verifies your balance, walks to the vault, grabs the cash, and brings it back to you.
> - **The Return:** The teller hands you the money. You are now back in "User Mode."

---

## Types of System Calls

### 1. Process Control

These calls handle starting, stopping, and managing programs.

**Common calls:** `fork()` (create a new process), `wait()`, `exit()`

### 2. File Management

| Call | Description |
|------|-------------|
| `open()` | Opens a file for reading or writing |
| `read()` | Reads data from a file |
| `write()` | Writes data to a file |
| `close()` | Closes a previously opened file |

### 3. Device Management

**Common calls:** `ioctl()`, `request()`, `release()`, `read()`, `write()`

### 4. Information Maintenance

**Common calls:** `get_time()`, `set_time()`, `get_process_attributes()`

### 5. Communication

**Common calls:** `pipe()`, `socket()`, `send()`, `recv()`

### 6. Memory Management

**Common calls:** `mmap()`, `brk()`, `malloc()`

### Advantages of System Calls

1. **Abstraction:** Simplified interface for complex operations.
2. **Security:** Controlled access to hardware; prevents unauthorized operations.
3. **Portability:** Applications can run on various platforms.

---

## Basic Concepts in Operating Systems

### Process

A **process** is a program in execution, including the program code, current activity and state information.

### Attributes / Components of a Process

1. **Process ID (PID):** Unique identifier for each process.
2. **Process States:** Current state, running, waiting, or ready.
3. **Priority and CPU Scheduling Information:** Helps OS decide which process runs next.
4. **File Descriptor:** Information about open files and network connections.
5. **I/O Information:** Input/output devices the process is using.
6. **Accounting Information:** CPU time used and other resource usage data.
7. **Memory Management Information:** Details about the memory space allocated to the process.

---

## Context Switch in Operating System

**Context switching** is the process by which the OS saves the state of a running process and loads the state of another process so that multiple processes can share the CPU effectively.

### Context Switching Triggers

1. **Multitasking (Time Quantum Expiration):** The OS assigns each process a tiny slice of time (Time Quantum). When it expires, a context switch occurs.
2. **Interrupt Handling (Hardware Trigger):** An interrupt is a signal that requires immediate OS attention.
3. **Kernel / User Mode Switch:** When the OS switches between kernel mode and user mode.

> **Note:** Overhead, if triggers happen too frequently, the system spends more time switching than running.

---

## Process Creation

**Process creation** is the mechanism by which the OS builds a new process.

- The creating process is called the **Parent process**.
- The newly created processes are called the **Child processes**.
- Each process is identified by a **unique process identifier (PID)**.

### Resource Allocation Models
1. **Direct Allocation:** Child obtains resources directly from the OS.
2. **Resource Sharing:** Child shares resources with the parent.

### Execution Models
1. **Concurrent Execution:** Parent continues executing along with the child.
2. **Wait for Child:** Parent waits until children terminate.

### Address Space Models
1. **Duplicate Process:** Child is an exact copy of the parent.
2. **New Program:** Child has a completely new program.

---

## Thread Management

A **thread** is the smallest unit of execution within a process. A thread (also called a **lightweight process**) is a unit of CPU utilization. It has a **program counter**, **registers**, and a **stack**.

### Characteristics of Thread
1. Threads within the same process share memory space.
2. They can communicate directly with each other.
3. They have their own stack and register state.
4. They are lightweight compared to a full process.

### Components of Thread
1. **Stack Space:** Stores local variables, functions, and return addresses.
2. **The Register:** Holds temporary data and intermediate results.
3. **Program Counter:** Tracks the current instruction being executed.

---

## Types of Thread

### User Level Thread
Managed by user level libraries, not directly by the OS.

**Advantages:** Fast to create; can run on any OS; application-specific scheduling.
**Disadvantages:** Most system calls are blocking; cannot take advantage of multiprocessing.

### Kernel Level Thread
Managed directly by the OS kernel.

**Advantages:** Can schedule multiple threads on multiple processors; if one thread blocks, others can run.
**Disadvantages:** Slower to create; mode switch required for control transfer.

### Advantages of Threads
1. Minimizes switching time.
2. Provides concurrency within a process.
3. Efficient communication.
4. More economical to create than processes.
