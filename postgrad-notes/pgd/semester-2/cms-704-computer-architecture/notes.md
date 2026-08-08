# CMS 704 — Computer Architecture

**Programme:** PGD Computer Science, Rivers State University
**Units:** 3

> Transcribed from handwritten class notes (14 pages), lecture dated 12/05/2026.
> `[?]` marks text unclear in the scan; `[note: …]` marks a correction I verified by calculation.

---

## Course outline (page 1, dated 12/05/2026)

> Fundamental building blocks, logic expression minimization, and design — sum of product terms, register transfer notations, physical considerations. Data representation and number bases, fixed and floating point systems, representation, memory systems organization and architecture. Memory systems, general characteristics of memory operation (technology — magnetic recording, semiconductor memory, complex devices, magnetic bubbles), memory addressing, memory hierarchy, virtual memory. Control systems, hardware control, micro-programmed control, asynchronous control, I/O bus control.

---

## 1. Computer Architecture

**Computer architecture** (also known as **Instruction Set Architecture, ISA**) is the set of rules, methods and procedures that define the **functionality, organization and implementation** of a computer system as seen by the machine-language programmer or compiler writer. It is the **contract between software and hardware** — a specification that remains constant across different implementations of the same architecture.

### Computer architecture specifies the following

1. **The instruction set** — the collection of operations (ADD, SUB, LOAD, etc.) that the processor can execute.
2. **Data types and size** — e.g. 8-bit byte, 16-bit word, 32-bit double word, etc.
3. **Register set** — the number, names and functions of programmer-visible registers.
4. **Addressing modes** — how instructions specify memory addresses (immediate, direct, indirect, indexed).
5. **Memory addressing model** — byte addressable or word addressable, etc.
6. **Interrupt and exception handling** — how the processor responds to external events or internal faults.
7. **Input/output model** — memory-mapped I/O or special I/O instructions.

A software compiled for a given architecture, e.g. **x86-64**, will run correctly on **any processor that implements that architecture**, regardless of the internal implementation details. Computer architecture therefore defines the **abstract interface between hardware and software** — the machine's behaviour as observed by a program executing on it, independent of the underlying micro-architecture.

---

## 2. Computer Organization (page 2)

**Computer organization** refers to the **actual implementation** of a computer architecture. It is concerned with **how the functional units are constructed, interconnected and controlled** to realize the architecture specified, and with the engineering decisions that affect **cost/performance, power consumption and physical size**.

### Organization specifies

1. **Data path design** — the layout and width of buses, the number of ALUs, the register file/write ports.
2. **Control unit implementation** — hard-wired control vs micro-programmed control; control-signal generator logic.
3. **Pipelining structure** — number of pipeline stages, hazard handling.
4. **Memory hierarchy implementation** — cache size (L1, L2, L3), cache associativity, replacement policy, translation lookaside buffer (TLB) size.
5. **Clock frequency and voltage scaling** — how fast the circuit runs and at what power cost.
6. **Parallelism mechanisms** — superscalar issue width (e.g. 3 instructions per cycle), out-of-order execution windows, simultaneous multi-threading (SMT).
7. **Physical implementation** — transistor technology, chip area / thermal design power (TDP).

---

## 3. Fundamental building blocks and logic design (pages 2–4)

**Logic gates** are the fundamental building blocks in digital circuits (digital electronics). A logic gate is a **device that performs a boolean function** — a logical operation performed on one or more binary inputs that produces a single binary output.

### The three (3) primary gates

**1. AND** — `A·B`. For an AND gate, the output is **1 if and only if both inputs are 1**, else 0.

```
A ──┐
    │AND├── A·B
B ──┘
```

**2. OR** — `A+B`. For an OR gate, the output is **0 if both inputs are 0**, else 1.

**3. NOT** — `A → A'`. This gives the **opposite of the input**.

```
A ──▷o── A'        A | A'
                   --+---
                   0 | 1
                   1 | 0
```

### Master truth table for two inputs

| A | B | A·B | A+B | (A·B)' | (A+B)' |
|---|---|-----|-----|--------|--------|
| 0 | 0 | 0   | 0   | 1      | 1      |
| 0 | 1 | 0   | 1   | 1      | 0      |
| 1 | 0 | 0   | 1   | 1      | 0      |
| 1 | 1 | 1   | 1   | 0      | 0      |

### Step by step to draw a truth table

- If two inputs, it is **2² (2 power 2) = 4 rows**
- If three inputs, it is **2³ (2 power 3) = 8 rows**
- If one input, it is **2¹ (2 power 1) = 2 rows**

*(If only one input, the NOT gate is suitable.)*

**Classwork:** given the inputs A, B and C, draw a truth table for `A·B·C` and `A+B+C` — 8 rows.

### The derived gates (page 4)

**4. NAND gate (Not AND)** — `C = (A·B)'`

**5. NOR gate (Not OR)** — `C = (A+B)'`

**6. XOR gate (Exclusive OR)** — the exclusive OR gives an **output of 1 where the inputs are different**.

| A | B | Y |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

```
Y = A'B + AB'
```

**7. XNOR gate (Exclusive NOR)** — output equal to **1 only when the inputs are the same**.

---

## 4. Boolean Algebra (page 5)

| Law | AND form | OR form |
|---|---|---|
| **Identity** | `A·1 = A` | `A+0 = A` |
| **Null** | `A·0 = 0` | `A+1 = 1` |
| **Idempotent** | `A·A = A` | `A+A = A` |
| **Complement** | `A·A' = 0` | `A+A' = 1` |
| **Absorption** | `A·(A+B) = A` | `A+A·B = A` |
| **Distributive** | `A·(B+C) = (A·B)+(A·C)` | `A+(B·C) = (A+B)(A+C)` |
| **De Morgan** | `A'·B' = (A+B)'` | `A'+B' = (A·B)'` |

**NB (from the notes):** the **identity element of A is 1** (input). To prove that `A·1 = A`, use the truth table.

> ★ Anywhere you see a 1 or a 0 in the head of the column, it will be 1 (true) all through or 0 (false) all through the column.

---

## 5. Logic Expression Minimization (page 5)

It **simplifies boolean equations to reduce the hardware required** for digital circuits. It cuts production cost, minimizes heat generation and improves speed.

### Key: why minimization matters

1. **Hardware efficiency** — uses fewer logic gates and interconnections.
2. **Improved performance** — it minimizes propagation delay, resulting in faster circuit operation.
3. **Cost and power** — lower power consumption and smaller silicon chip footprint.

### Common minimization techniques (page 6)

1. **Boolean algebra** — applying mathematical laws to factor out and eliminate terms algebraically.
2. **Karnaugh maps (K-map)** — a visual, graphical matrix method used to simplify expressions with up to 4–6 variables. Groupings are made in **powers of 2ⁿ** (2, 4, 6, 8 …) to find the minimal sum of products.
3. **Quine–McCluskey algorithm** — a tabular algorithmic method used for expressions with a large number of variables, or for computer-aided design.

**SOP** = Sum of Products.

---

## 6. Majority vote circuit (page 6)

A **majority vote circuit** is a digital circuit where the **majority input determines the output**. Look at inputs A, B and C: it chooses A if 1 and A' if 0, and the same for B and C.

| A | B | C | F |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 | ★
| 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 1 | ★
| 1 | 1 | 0 | 1 | ★
| 1 | 1 | 1 | 1 | ★

```
F = A'BC + AB'C + ABC' + ABC
```

**Groupings**

```
1 and 4  ⇒  A'BC + ABC  ⇒  BC(A'+A) = BC
3 and 4  ⇒  ABC' + ABC  ⇒  AB(C'+C) = AB
2 and 4  ⇒  AB'C + ABC  ⇒  AC(B'+B) = AC
```

```
∴ F = BC + AB + AC
```

---

## 7. Classwork minimizations (page 7)

**Classwork 1**

```
F = A'BC' + AB'C' + AB'C + ABC          [?] the four starred rows are faint in the scan
Groupings:  1 and 2 ⇒ BC'(A'+A) = BC'
            2 and 3 ⇒ AB'(C'+C) = AB'
            2 and 4 ⇒ AC(B'+B)  = AC
∴ F = BC' + AB' + AC
```

**Classwork 2**

```
X = A'B'C' + A'B'C + AB'C + ABC         [?] terms partly illegible
Groupings:  1 and 2 ⇒ A'B'(C'+C) = A'B'
            2 and 3 ⇒ B'C(A'+A)  = B'C
            2 and 4 ⇒ AC
∴ X = A'B' + A'C + B'C                  [?] the recorded answer reads "AB' + A'C + B'C"
```

> [note: both classworks are recorded with faint groupings. The **method** is certain and matches the majority-vote worked example above — pair two minterms that differ in exactly one variable, factor that variable out using `X + X' = 1`. Re-derive from the truth table in the exam rather than relying on these two lines.]

---

## 8. Karnaugh maps (page 8)

Truth table with the decimal output column, then the K-map with A down the side and BC across the top:

```
        BC
    A \  00  01  11  10
      0 | 0   1   3   2 |     ← cell numbers (decimal output)
      1 | 4   5   7   6 |
```

Group the **1s in powers of 2**, then read off the product term each group leaves unchanged.

```
∴ F = AB' + BC'
```

> [note: **cancel the changing parameter** — inside a group, the variable that changes across the cells drops out and the variables that stay constant form the product term.]

---

## 9. Register Transfer Language (RTL) (pages 8–9)

**RTL** is a **symbolic notation used in computer architecture to describe the internal organization, data flow and execution of micro-operations between hardware registers**. It bridges the gap between high-level architectural design and concrete logic-gate implementation, allowing engineers to concisely map out how data moves through a CPU during each clock cycle.

### Syntax and symbols

| Symbol | Meaning |
|---|---|
| **Capital letters** | Denote specific hardware registers, such as `R1`, `R2`, `PC` or `MAR` |
| **Arrow (←)** | Indicates a **unidirectional transfer** of information from the source on the right to the destination on the left |
| **Parenthesis ( )** | Specify a distinct sub-part or individual bits of a register, such as `R1(0-7)` for the lower 8 bits |
| **Colon (:)** | Terminates a **control function**, indicating that the operation only executes if the preceding condition is true |
| **Comma (,)** | Separates **multiple micro-operations that execute simultaneously** during a single clock cycle |

### Micro-operations

**Micro-operations** are elementary operations performed on data in CPU registers during a clock pulse — **arithmetic, logic and shift** operations.

### Types of micro-operations

1. **Register transfer operations** — move binary data from one processor register to another **without modifying** the data.
   `R2 ← R1` (n = number of bits)
2. **Arithmetic micro-operations** — perform numeric operations such as addition, subtraction, increment etc. on the data stored inside the registers.
   `R3 ← R1 + R2`
3. **Logic micro-operations** — execute **bitwise** operations (AND, OR, XOR or NOT) to manipulate bits independently within the register.
   `R ← R1 ∧ R2`
4. **Control function** — boolean conditions that dictate **when** a transfer occurs.
   `P: R2 ← R1` means if the control signal `P = 1`, the transfer happens.

### Bus notation

```
Bus ← R1     means R1 drives the system bus
R2  ← Bus    means R2 latches data from the bus
```


```
if (K = 1) then R2 ← R1                      →   K: R2 ← R1

if (K = 1) then R2 ← R1 else R2 ← R4         →   K:  R2 ← R1
                                                 K': R2 ← R4

if (Z = 1 AND C = 0) then PC ← PC + 1        →   Z·C': PC ← PC + 1
```

> ★ The **PC keeps track of the next instruction** to be fetched by the CPU from memory — the **fetch/execute cycle**: Fetch → PC, Decode → CU, Execute.

---

## 10. Data representation and number bases (page 10)

**Assignment (page 10):** what is the difference between a **number** and a **digit**?

### Positional system

| Base | Name | Digits |
|---|---|---|
| **10** | Decimal / denary | 0,1,2,3,4,5,6,7,8,9 |
| **8** | Octal | 0,1,2,3,4,5,6,7 |
| **2** | Binary | 0,1 |
| **16** | Hexadecimal | 0–9, A, B, C, D, E, F (A=10 … F=15) |

```
Base 10:  4832  = 4000 + 800 + 30 + 2
                = 4×10³ + 8×10² + 3×10¹ + 2×10⁰

Base 8:   21673₈ = 2×8⁴ + 1×8³ + 6×8² + 7×8¹ + 3×8⁰

Base 2:   10111001₂ = 1×2⁷ + 0×2⁶ + 1×2⁵ + 1×2⁴ + 1×2³ + 0×2² + 0×2¹ + 1×2⁰

Base 16:  ABCDEF → e.g. C×16³ + F×16² + E×16¹ + C×16⁰
```

---

## 11. Conversions (pages 11–12)

### Base 10 to other bases — successive division

```
4832 to base 2  →  1001011100000₂
4832 to base 8  →  11340₈
4832 to base 16 →  12E0₁₆
```

### Other bases to base 10 — positional expansion

```
1001011100000₂ = 1×2¹² + 1×2⁹ + 1×2⁷ + 1×2⁶ + 1×2⁵
               = 4096 + 512 + 128 + 64 + 32
               = 4832

11340.0012₈ = 1×8⁴ + 1×8³ + 3×8² + 4×8¹ + 0×8⁰ + 0×8⁻¹ + 0×8⁻² + 1×8⁻³ + 2×8⁻⁴
            = 4096 + 512 + 192 + 32 + 1/512 + 2/4096
            = 4832.0024414062 5
```

### Fractional conversion — repeated multiplication

```
Convert 4832.0024414062 5 to base 8 = 11340.0012₈

0.0024414062 5 × 8 = 0.01953125   → 0
0.01953125     × 8 = 0.15625      → 0
0.15625        × 8 = 1.25         → 1
0.25           × 8 = 2.0          → 2      ∴ .0012₈
```

### Interrelated base conversion

**Relationship between base 8 and base 2 — `8 = 2³`, so the ratio is 3 : 1.**

| Base 8 | Base 2 |
|---|---|
| 0 | 000 |
| 1 | 001 |
| 2 | 010 |
| 3 | 011 |
| 4 | 100 |
| 5 | 101 |
| 6 | 110 |
| 7 | 111 |

```
4362₈ = 100 011 110 010 = 100011110010₂
1001011100000₂ → group in 3s from the right → 1 001 011 100 000 → 11340₈
```

**Relationship between base 2 and base 16 — `16 = 2⁴`, so the ratio is 4 : 1** (page 13).

| Base 16 | Base 2 | Base 16 | Base 2 |
|---|---|---|---|
| 0 | 0000 | 8 | 1000 |
| 1 | 0001 | 9 | 1001 |
| 2 | 0010 | A | 1010 |
| 3 | 0011 | B | 1011 |
| 4 | 0100 | C | 1100 |
| 5 | 0101 | D | 1101 |
| 6 | 0110 | E | 1110 |
| 7 | 0111 | F | 1111 |

```
1001011100000₂ → group in 4s from the right → 0001 0010 1110 0000 → 12E0₁₆
```

### Binary addition rules (page 12)

```
0 + 0 = 0
0 + 1 = 1
1 + 0 = 1
1 + 1 = 10      (0 carry 1)
1 + 1 + 1 = 11  (1 carry 1)
```

Worked in class:

```
  10111₂
+ 11101₂
─────────
 110100₂        [note: 23 + 29 = 52 ✓]
```

---

## 12. Octal arithmetic (page 14)

> In adding to base 8 you add all the values and divide, keeping the remainder, after checking how many 8s are in that number.

**Subtraction**

```
  246₈
- 127₈
───────
  117₈          [note: 166 − 87 = 79 = 117₈ ✓]
```

**Addition** — `[?]` the operands are partly illegible; the recorded answer is `514₈`.
*(If the operands are 265₈ + 227₈ then 181 + 151 = 332 = 514₈ ✓, which fits the recorded answer.)*

**Multiplication**

```
    336₈
  × 227₈
─────────
   3022        ← 336₈ × 7₈   (222 × 7 = 1554 = 3022₈)
   674         ← 336₈ × 2₈, shifted
+ 674          ← 336₈ × 2₈, shifted twice
─────────
 101362₈       [note: 222 × 151 = 33522 = 101362₈ ✓ verified]
```

---

## 13. Signed and unsigned bits (page 14)

Covered in the lecturer's extra notes — see [the extra notes](extra-notes.html) §5.

**Assignment (page 14):** the relationship between hexadecimal and computer storage, and encoding schemes.

**Types of encoding schemes:**
1. **BCD** — Binary Coded Decimal
2. **EBCDIC** — Extended Binary Coded Decimal Interchange Code
3. **ASCII**

---

## Assignments recorded in these notes

1. **Page 3** — Given the inputs A, B and C, draw a truth table for `A·B·C` and `A+B+C`.
2. **Page 10** — What is the difference between a **number** and a **digit**?
3. **Page 14** — The relationship between hexadecimal and computer storage; encoding schemes.

---

*End of transcription — 14 pages.*
