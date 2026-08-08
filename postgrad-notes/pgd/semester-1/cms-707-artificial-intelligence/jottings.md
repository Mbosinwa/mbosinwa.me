# CMS 707: Class Jottings: Problem Solving & State Space Representation
*(Partial class jottings, superseded by full class notes: [the full class notes](notes.html))*

## Key Concepts Introduced

- Artificial Intelligence
- Problem Solving
- State Space Representation
- AI Agent, Rational Agent

---

## Classic AI Problems

### 1. Water Jug Problem

**Setup:**
- Given two jugs: a 4-gallon jug and a 3-gallon jug
- Neither jug has measuring markers
- A tap is available to fill jugs with water

**Goal:** Get exactly 2 gallons of water into the 4-gallon jug

### 2. Farmer, Lion, Goat, and Yam Problem

**Setup:**
- A farmer has 3 items: Lion, Goat, and Yam
- The farmer needs to cross a river using a boat
- Constraints:
  - If the farmer leaves the Lion and Goat alone → Lion eats the Goat
  - If the farmer leaves the Goat and Yam alone → Goat eats the Yam

**Goal:** Get all items safely across the river

**State Space Representation:**
- Letters: F = Farmer, L = Lion, G = Goat, Y = Yam
- Bar `|` represents the river
- Initial state: `FLGY|` (all on one bank)
- Goal state: `|FLGY` (all on the other bank)
