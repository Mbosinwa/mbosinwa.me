# CMS 704 — Lecturer's Extra Notes


> Two distinct sets:

---

## 1. Memory hierarchy (handwritten p.1–3)

```
        ▲  increase in            ┌──────────┐  Level 0   CPU registers
        │  cost per bit          ╱ Level 1   ╲            Cache memory (SRAMs)
        │                       ╱  Level 2    ╲           Main memory (DRAMs)
        │  increase in         ╱   Level 3     ╲          Magnetic disk (disk storage)
        ▼  capacity &         ╱    Level 4      ╲         Optical disk
           access time       ╱     Level 5       ╲        Magnetic tape
                            └─────────────────────┘
```

A computer's **memory hierarchy** is an **organizational pyramid that categorizes data storage based on speed, cost and capacity**. It ensures the processor can access frequently used data at lightning-fast speeds without sacrificing the massive storage capacity needed to hold a user's entire library of files and applications. The hierarchy **bridges the gap** between ultra-fast, expensive and limited CPU registers and the slow, cheap and massive capacity of hard drives.

### The five levels

| # | Level | Speed | Capacity | Purpose |
|---|---|---|---|---|
| 1 | **CPU registers** | Extremely fast (sub-nanosecond, direct CPU clock cycle) | Tiny (measured in bytes, e.g. 16 to 64 bits) | Directly built inside the CPU core to hold the exact data or instructions being executed in the current cycle |
| 2 | **Cache memory (L1, L2, L3)** | Very fast (often utilizes static RAM, SRAM) | Small to moderate (kilobytes to megabytes) | Acts as a **buffer** between the CPU registers and slower system RAM. The CPU relies on the principles of locality (both spatial and temporal) to preload frequently and recently accessed data into the cache for quicker retrieval |
| 3 | **Main memory (RAM)** | Moderate | Moderate to large (gigabytes, e.g. 16 GB to 64 GB) | The primary working memory for the operating system and running applications. Data is temporarily housed here for the CPU to fetch and process |
| 4 | **Secondary storage** (external / auxiliary memory) | Slow (measured in milliseconds) | Massive (terabytes) | **Non-volatile** storage — SSDs and HDDs. It retains data even when the computer is powered down and acts as a long-term repository for files, operating systems and programs |
| 5 | **Tertiary storage** (optical) | Very slow | Infinite (scalable) | Used for offline, archival and backup data, including magnetic tape libraries or optical disks |

> **Moving up the pyramid** results in higher cost per bit, faster access times and smaller storage capacity. **Moving down the pyramid** results in lower cost per bit, slower access times and much larger capacities. **The main goal of this architecture is to create the illusion that the entire massive storage pool is as fast as the topmost level.**

---

## 2. Cache memory (handwritten p.3–4)

**Cache memory** is a **high-speed, volatile hardware component situated between the CPU and the main memory (RAM)**. Its primary function is to **store temporary copies of frequently accessed data and instructions** so the processor can retrieve them instantly, significantly **reducing processing latency and improving system performance**.

Cache memory operates on the **principle of locality of reference**, assuming that programs will repeatedly access the same data or instructions.

1. **Cache hit** — when the CPU needs data, it checks the cache first. If the data is found, it is retrieved almost instantly (in nanoseconds).
2. **Cache miss** — if the requested data isn't in the cache, the CPU must fetch it from the slower RAM. The data is then copied into the cache for future use.

### Levels of cache

CPU caches are divided into different levels (L1, L2, L3) based on **size, speed and proximity to the processor core**.

| Level | Location | Size | Speed |
|---|---|---|---|
| **L1 cache** | Directly on the CPU core | Smallest — typically **2 KB to 64 KB per core** | **Fastest** |
| **L2 cache** | Inside or immediately outside the core | **256 KB to 512 KB** | Acts as a bridge for the L1 cache |
| **L3 cache** | Shared among all cores | **1 MB to 8 MB or higher** | Largest but **slowest** of the CPU caches; feeds into the L2 cache |

### Other types of caching

While cache memory usually refers to physical CPU cache, caching technology is used in various other computing forms:

1. **Disk / file cache** — used by operating systems to store recently read files or disk data in system RAM for quicker opening.
2. **Browser cache** — web browsers store images, scripts and webpage data on local storage to load pages faster during subsequent visits.

---

## 3. Cache memory mapping and write policies (handwritten p.5–6)

**Cache memory mapping** describes the different configurations:

1. **Direct mapped cache** — has each block mapped to **exactly one** cache memory location.
2. **Fully associative cache mapping** — similar to direct mapping in structure, but enables a memory block to be mapped to **any** cache location rather than to a pre-specified cache memory location.
3. **Set associative cache mapping** — a **compromise** between direct mapping and fully associative mapping, in which each block is mapped to a **subset** of cache locations. It is sometimes called **N-way set associative mapping**, which provides for a location in main memory to be cached to any of `N` locations in the L1 cache.

### Data writing policies

The two main techniques when writing into cache memory are:

| Policy | How it works | Consequence |
|---|---|---|
| **Write-through** | Data is written to **both the cache and main memory at the same time** | More writing needs to happen, which causes **latency upfront**, but memory stays consistent |
| **Write-back** | Data is only written to the **cache initially**; it may then be written to main memory, but this does not need to happen and does not inhibit the interaction from taking place | Operations may be **more efficient**, but data may not be consistent between main memory and the cache |

> The way data is written to the cache impacts **data consistency and efficiency**.

---

## 4. Locality of reference (handwritten p.6–7)

**Locality of reference** (or the **principle of locality**) is a concept in computer science describing a **program's tendency to repeatedly access the same memory locations, or nearby ones, over a short period**. It is the **foundation for cache memory design**, allowing CPUs to fetch frequently used data ahead of time and dramatically increasing system speed.

### Types of locality

1. **Temporal locality (locality in time)** — if a specific memory location is accessed, it is **highly likely to be accessed again in the near future**.
   *Example:* a loop or a counter in programming — the CPU continuously accesses the same variables and instructions within that short time frame.

2. **Spatial locality (locality in space)** — if a specific memory location is accessed, **nearby memory locations are also likely to be accessed soon**.
   *Example:* arrays or sequential data structures — when the processor loads data from main memory to the cache, it brings in a **block of adjacent data** in anticipation of the next request.

### Other forms of locality

i. **Sequential locality**  ii. **Branch locality**

---

## 5. Performance (handwritten p.7–8)

In computer architecture, **performance measures how quickly and efficiently a computer system executes a given workload or program**. It is primarily defined by **speed** (how fast a task completes) and **throughput** (how much work is done in a given time).

### Two core metrics

1. **Response time (execution time)** — the total time required to complete a **single task** from start to finish.
2. **Throughput (bandwidth)** — the total amount of work completed **per unit of time** (e.g. number of instructions or programs executed per second).

### The Iron Law of Processor Performance

CPU performance is governed by the **CPU performance equation**, which breaks execution time down into **three critical factors**:

```
CPU Time  =  Instruction Count  ×  CPI  ×  Clock Cycle Time
```

| Factor | Definition | Determined by |
|---|---|---|
| **Instruction Count (IC)** | The total number of instructions executed in a program | The software **compiler** and the **instruction set architecture (ISA)** |
| **Cycles Per Instruction (CPI)** | The average number of clock cycles the processor takes to execute one instruction | The **hardware design** and **pipeline efficiency** |
| **Clock Cycle Time** | The duration of a single hardware clock tick — the **inverse of clock frequency**, like 3.0 GHz | **Semiconductor technology** and hardware engineering |

### Quantitative measurement

Performance is mathematically defined as the **reciprocal of execution time**:

```
Performance = 1 / Execution Time
```

To compare two systems (Machine A and Machine B), the **relative performance** is:

```
Relative Performance = Performance A / Performance B = Execution Time B / Execution Time A
```

### Other performance indicators

i. **MIPS** — Million Instructions Per Second
ii. **FLOPS** — Floating Point Operations Per Second

---

## 6. Unsigned and signed numbers (textbook §8.7)

### 8.7 Unsigned and signed numbers

All of the number systems presented in the prior sections were **positive**. We also need a mechanism to indicate **negative** numbers. When looking at negative numbers we only focus on the mapping between **decimal and binary**, since octal and hexadecimal are just another representation of a binary number.

In decimal we use the negative **sign** in front of a number to indicate that it is negative (e.g. `-34₁₀`). In binary this notation works fine on paper (e.g. `-1010₂`), but we need a mechanism that can be implemented in **real circuitry**. In a real digital circuit, the circuits can only deal with 0s and 1s — **there is no "−" in a digital circuit**. Since we only have 0s and 1s in the hardware, we use a **bit to represent whether a number is positive or negative**. This is referred to as the **sign bit**.

- If a binary number is not going to have any negative values, it is called an **unsigned number** and can only represent positive numbers.
- If a binary number is going to allow negative numbers, it is called a **signed number**.

> It is important to always keep track of the type of number being used, as **the same bit values can represent very different numbers** depending on the coding mechanism used.

### 8.7.1 Unsigned numbers

An **unsigned number** is one that does not allow negative numbers. The number of bits is **fixed and stated up front**; we use `n` for the number of bits. For an 8-bit number we say "this is an 8-bit unsigned number".

```
Number of unique codes in an n-bit unsigned number  =  2ⁿ
Range of an n-bit UNSIGNED number                   =  0  …  2ⁿ − 1
```

For an 8-bit number that is `2⁸ = 256` unique codes, `0000 0000₂` to `1111 1111₂`.

For `n = 4`, the range runs from `+0₁₀ (0000₂)` to `+15₁₀ (1111₂)`. Note that while the number has **16 unique codes**, the **highest decimal value it can represent is 15** — because one of the codes represents `0₁₀`. This is why the highest decimal value is given by `2ⁿ − 1`.

### 8.7.2 Signed binary number representation

In computing, **signed number representations are required to encode negative numbers** in binary number systems. In mathematics, negative numbers in any base are represented by prefixing them with a minus sign; in computer hardware, numbers are represented **only as sequences of bits, without extra symbols**.

```
0000 0000 0000 0000 0000 0000 0011 1011
▲                                      ▲
Most significant bit (MSB)             Least significant bit (LSB)
```

The representation of a signed binary number could be done in any of the following ways:

1. **Signed magnitude**
2. **One's complement**
3. **Two's complement**

#### 8.7.2.1 Signed magnitude

In the sign-magnitude method a number is represented in its binary form, and the **MSB (the left-most digit) represents the sign**:
- a **"1"** in the MSB position denotes a **negative** number
- a **"0"** denotes a **positive** number

The remaining `n − 1` bits are preserved and represent the **magnitude** of the number.

```
(+3) = 0011  ⇒  (−3) = 1011
(+7) = 0111  ⇒  (−7) = 1111
(+0) = 0000  ⇒  (−0) = 1000
```

```
56₁₀  = 0111000₂
Change the first digit from 0 to 1:
−56₁₀ = 1111000₂
```

```
127₁₀  = 01111111₂
−127₁₀ = 11111111₂
```

#### 8.7.2.2 One's complement

In the one's-complement form the **MSB represents the sign**. The remaining bits are **inverted for negative numbers only**; positive numbers are represented the same way as in the sign-magnitude method.

```
(+3) = 0011  ⇒  (−3) = 1100
(+7) = 0111  ⇒  (−7) = 1000
(+0) = 0000  ⇒  (−0) = 1111
```

```
56₁₀  = 0111000₂
Negate every bit:
−56₁₀ = 1000111₂
```

```
127₁₀  = 01111111₂
−127₁₀ = 10000000₂
```

#### 8.7.2.3 Two's complement

In the two's-complement method the negative numbers are **inverted and augmented by one**. The **MSB is the sign bit**. Positive numbers are the same as in the sign-magnitude method.

```
(+3) = 0011  ⇒  (−3) = 1101
(+7) = 0111  ⇒  (−7) = 1001
(+0) = 0000  ⇒  (−0) = 0000
```

```
56₁₀ = 0111000₂
Negate:      1000111
Add 1:       1000111
           +       1
           ─────────
             1001000

−56₁₀ = 1001000₂
```

---

*End of extra-notes transcription — 8 handwritten pages + textbook §8.7.*
