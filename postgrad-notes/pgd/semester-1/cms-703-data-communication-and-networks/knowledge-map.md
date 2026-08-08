
# Knowledge Map: CMS 703 — Data Communication and Networks

> Generated: 2026-03-30 | Topics: 24 | Concepts: 54 | Relationships: 67

---

## Course Overview

This course covers the foundational principles of data communication and computer networking — from the five basic components of a communication system, through signal representation and Fourier analysis, to physical and wireless transmission media, network types and topologies, switching and routing techniques, and the OSI reference model. It also covers how data is encoded as bit patterns, how serial and parallel transmission work in practice, and how Fourier mathematics powers real-world technologies like OFDM in 5G and LTE.

---

## Concept Hierarchy

```
CMS 703: Data Communication and Networks
│
├── 1. Introduction to Data Communication                    [8 concepts]
│   ├── Definition & Core Components
│   │   ├── Key Concepts: Message, Sender, Receiver, Transmission Medium, Protocol
│   │   └── Central: Protocol (required for all communication to function)
│   ├── Data Representation Forms
│   │   ├── Text: bit patterns, Unicode (32-bit), ASCII (127 chars = Basic Latin)
│   │   ├── Images: pixel matrix, RGB and YCM colour models
│   │   ├── Audio: continuous signal → sampling → quantization → encoding
│   │   └── Video: analog or digital, encoding process
│   └── Fundamental Principles
│       └── Key Concepts: Delivery, Accuracy, Timeliness
│
├── 2. Fourier Analysis                                      [12 concepts]
│   ├── Fourier Series (Periodic Signals)
│   │   ├── Key Concepts: Periodic Signal, Fundamental Frequency (Ω), Harmonics
│   │   ├── Key Concepts: Dirichlet Conditions, Orthogonality, Period, Amplitude
│   │   ├── Formula: f(x) = a₀/2 + Σ[aₙcos(nπx/L) + bₙsin(nπx/L)]
│   │   ├── Worked: Square wave → only odd harmonics survive (even cancel out)
│   │   └── Central: bridges time domain ↔ frequency domain for periodic signals
│   ├── Fourier Transform (Non-periodic Signals)
│   │   ├── Forward: F(ω) = ∫f(t)e^{-iωt}dt
│   │   ├── Inverse: f(t) = (1/2π)∫F(ω)e^{iωt}dω
│   │   ├── Square Pulse: F(ω) = T·sinc(ωT/2) — wider pulse = narrower freq spread
│   │   ├── Worked: f(t)=e^{-at}u(t) → F(ω) = 1/(a+iω), a>0
│   │   └── Real-world: OFDM in 5G/LTE uses Fourier Transform for spectrum allocation
│   └── Related Transforms
│       ├── Laplace Transform — design tool for continuous-time systems
│       └── Z Transform — discrete-time equivalent of Laplace
│
├── 3. Data Transmission Modes                               [3 concepts]
│   ├── Simplex — unidirectional only (keyboard→PC, TV broadcast)
│   ├── Half-Duplex — bidirectional, one direction at a time (walkie-talkie, WiFi)
│   └── Full-Duplex — simultaneous bidirectional (telephone, live chat)
│
├── 4. Data Transmission Forms                               [2 concepts]
│   ├── Analog — continuous waveform
│   └── Digital — discrete 0/1 states
│
├── 5. Data Transmission Speed                               [2 concepts]
│   ├── Bandwidth — data transfer capacity per unit time
│   └── BPS (Bits Per Second) — rate of bit transmission
│
├── 6. Transmission Media                                    [9 concepts]
│   ├── Guided Media (physical path)
│   │   ├── Twisted Pair Wire — copper conductors twisted; STP and UTP types
│   │   │   └── Used in: telephone, 10Base-T and 100Base-T LANs
│   │   ├── Coaxial Cable — central copper core + insulated sheath + outer shield
│   │   │   └── Used in: cable TV, satellite, CCTV, analog/digital telephony
│   │   └── Fibre-Optic Cable — transmits light through glass/plastic core + cladding
│   │       ├── Advantages: high bandwidth, low attenuation (50km vs 5km repeaters),
│   │       │   immune to EM interference, corrosion-resistant, lightweight, hard to tap
│   │       ├── Disadvantages: expensive, fragile, requires expert installation
│   │       └── Used in: backbone networks, 100Base-FX, 1000Base-X, hybrid cable TV
│   └── Unguided Media (wireless)
│       ├── Radio Waves — 3 KHz to 1 GHz; omnidirectional; AM/FM radio, TV, paging
│       ├── Microwaves — 1 to 300 GHz; unidirectional (parabolic dish/horn antenna)
│       │   └── Line-of-sight; towers needed; restricted bands require regulatory approval
│       └── Infrared — 300 GHz to 400 THz; short-distance; cannot penetrate walls
│           └── Used in: remote controls, night vision, missile guidance, gas detectors
│
├── 7. Computer Networks                                     [7 concepts]
│   ├── Network Types (by scope)
│   │   ├── LAN — Local Area Network (office, home)
│   │   ├── MAN — Metropolitan Area Network (city, large campus)
│   │   └── WAN — Wide Area Network (global, e.g. Internet)
│   └── Network Topologies
│       ├── Bus — all nodes share single backbone cable
│       ├── Star — all nodes connect to central hub/switch; most common
│       ├── Ring — closed loop; sequential transmission
│       └── Mesh — every node interconnected; most redundant
│
├── 8. Switching Techniques                                  [2 concepts]
│   ├── Circuit Switching — dedicated physical path for full connection duration
│   │   └── Example: PTCL telephone network; reliable but wastes idle bandwidth
│   └── Packet Switching — data split into independently routed packets
│       └── Example: Internet; efficient; Central concept for modern networking
│
├── 9. Routing Techniques                                    [2 concepts]
│   ├── Source Routing — full path specified by source node
│   └── Hop-by-Hop Routing — each node forwards to the next
│
├── 10. Communication Protocols & OSI Model                  [10 concepts]
│    ├── Protocol Functions
│    │   └── Packet size, numbering, error control, security, routing
│    ├── Standards Organisations (ISO, IEEE, etc.)
│    └── OSI Model — 7 layers (ISO, 1984)           ← CENTRAL
│        ├── Layer 1: Physical — bit stream, hardware, NIC
│        ├── Layer 2: Data Link — frames, physical addressing
│        ├── Layer 3: Network — routing, logical addressing
│        ├── Layer 4: Transport — end-to-end delivery, flow control  ← Central
│        ├── Layer 5: Session — dialogue/session management
│        ├── Layer 6: Presentation — encryption, compression, syntax
│        └── Layer 7: Application — user interface and network services
│
├── 11. Modulation, Multiplexing & Channel Topics            [5 concepts]
│    ├── Modulation / Demodulation — encoding info onto a carrier signal
│    ├── TDM — Time Division Multiplexing
│    ├── FDM — Frequency Division Multiplexing
│    ├── FCM — Frequency Code Multiplexing
│    └── Noise, Distortion, Channel Characteristics
│
├── 12. Serial vs Parallel Data Transmission                 [6 concepts]
│    ├── Serial Transmission
│    │   ├── One bit at a time, single channel; reliable over long distances
│    │   ├── Less signal distortion; widely used in USB, Ethernet, RS-232
│    │   └── Embedded/SCADA: RS-232, RS-485, SPI, DNP3
│    └── Parallel Transmission
│        ├── Multiple bits simultaneously, multiple channels; fast but short-distance
│        └── Used in: CPU data bus, internal memory transfer, printer connections
│
├── 13. Asynchronous vs Synchronous Transmission             [6 concepts]
│    ├── Asynchronous
│    │   ├── Character-framed with Start + Stop bits; optional Parity bit
│    │   ├── No shared clock; synchronization per character
│    │   ├── Frame: [Start | D0 D1 D2 D3 D4 D5 D6 D7 | Parity | Stop]
│    │   └── Apps: RS-232, keyboard/mouse, dial-up modems
│    └── Synchronous
│        ├── Block/frame-based; clock-synchronized; no Start/Stop overhead
│        ├── Error detection: CRC or checksum
│        ├── Frame: [Sync | Sync | Data Data Data Data Data Data]
│        └── Apps: Ethernet, broadband, digital telephony, satellite
│
└── 14. Bandwidth Allocation & Real-World Applications       [3 concepts]
     ├── Signal Modelling — represent digital data as square pulses
     ├── Fourier Transform of Square Pulse → Sinc spectrum
     │   └── Identifies dominant frequencies, bandwidth needed, interference zones
     └── OFDM (Orthogonal Frequency Division Multiplexing)
         └── Core technology in 5G and LTE — allocates frequency bands per FT principles
```

---

## Key Relationships

### Hierarchical (Is-a / Part-of)
- `Protocol` is a required component of every `Data Communication System`
- `Guided Media` and `Unguided Media` are types of `Transmission Media`
- `Twisted Pair`, `Coaxial Cable`, `Fibre-Optic` are types of `Guided Media`
- `Radio Waves`, `Microwaves`, `Infrared` are types of `Unguided Media`
- `LAN`, `MAN`, `WAN` are types of `Computer Network`
- `Bus`, `Star`, `Ring`, `Mesh` are types of `Network Topology`
- `OSI Model` consists of 7 layers (Physical → Application)
- `Circuit Switching` and `Packet Switching` are types of `Switching Technique`
- `Serial Transmission` and `Parallel Transmission` are types of `Data Transmission`
- `Asynchronous` and `Synchronous` are types of `Transmission Mode (timing)`
- `Unicode` contains `ASCII` as a subset (Basic Latin, 127 characters)
- `RGB` and `YCM` are methods for `representing colour images as bit patterns`
- `Pixel` is the unit element of `digital image representation`
- `OFDM` is an application of `Fourier Transform` in wireless networks

### Causal (Causes / Enables)
- `Full-Duplex` enables simultaneous bidirectional communication
- `Packet Switching` enables Internet-scale networking
- `Fibre-Optic Cable` enables high-capacity, long-distance, interference-immune transmission
- `Fourier Transform` enables `Bandwidth Allocation` and `OFDM` design
- `Protocol` enables devices to communicate meaningfully even when connected
- `Quantization + Encoding` enables continuous audio/video to be transmitted digitally
- `Odd harmonics` (only) survive Fourier Series decomposition of a square wave

### Dependency (Requires)
- `Fourier Transform` requires understanding of `Fourier Series` first
- `OFDM` requires understanding of `Fourier Transform` and `Bandwidth` first
- `Asynchronous/Synchronous Transmission` requires understanding of `Serial Transmission` first
- `OSI Model layers` require understanding of lower layers first (bottom-up learning)
- `Routing` requires `Switching` as conceptual prerequisite
- `Multiplexing` requires understanding of `Transmission Modes` and `Bandwidth`

**Prerequisite Chains:**
1. `Data Communication Basics` → `Transmission Modes` → `Transmission Media` → `Network Types`
2. `Data Representation` → `Periodic Signals` → `Fourier Series` → `Fourier Transform` → `Bandwidth Allocation` → `OFDM/5G`
3. `Network Types` → `Topologies` → `Switching` → `Routing` → `Protocols` → `OSI Model`
4. `Serial vs Parallel Transmission` → `Asynchronous vs Synchronous Transmission`
5. `OSI Layer 1 (Physical)` → `Layer 2` → `Layer 3` → ... → `Layer 7 (Application)`

### Contrast (Contrasts-with)
- `Simplex` vs `Half-Duplex` vs `Full-Duplex` — direction and simultaneity of data flow
- `Analog` vs `Digital` — continuous waveform vs discrete 0/1 states
- `Circuit Switching` vs `Packet Switching` — dedicated path vs independent packets
- `Guided Media` vs `Unguided Media` — physical cable vs wireless broadcast
- `Fourier Series` vs `Fourier Transform` — periodic vs non-periodic signal analysis
- `Source Routing` vs `Hop-by-Hop Routing` — full path known upfront vs incremental forwarding
- `Serial Transmission` vs `Parallel Transmission` — one-bit-at-a-time vs multi-bit simultaneous
- `Asynchronous` vs `Synchronous Transmission` — character-framed vs block-framed, no clock vs shared clock
- `STP` vs `UTP` — shielded vs unshielded twisted pair
- `Radio Waves` vs `Microwaves` vs `Infrared` — frequency range and directionality differences

---

## Central Concepts

These are the most connected concepts — master these first:

| Concept | Connections | Why Central |
|---------|-------------|-------------|
| **Protocol** | 7 | Governs ALL communication; required by every network layer and device |
| **OSI Model** | 9 | Organises entire network architecture into 7 functional layers |
| **Transmission Media** | 7 | Parent of all physical and wireless communication channels |
| **Fourier Transform** | 6 | Bridges signal analysis (periodic + non-periodic) to real-world applications (OFDM) |
| **Packet Switching** | 5 | Foundation of the Internet and all modern data networks |
| **Serial Transmission** | 5 | Underpins long-distance comms, SCADA systems, USB, Ethernet, 4G/5G |
| **Transport Layer (L4)** | 4 | Bridges the network and application worlds; handles end-to-end delivery |

---

## Prerequisite Learning Path

Recommended study order based on dependencies:

1. **Introduction to Data Communication** — 5 components, data representation (text/image/audio/video), principles
2. **Data Transmission Modes** — simplex, half-duplex, full-duplex
3. **Data Transmission Forms** — analog vs digital
4. **Transmission Media** — guided (twisted pair, coaxial, fibre-optic) and unguided (radio, microwave, infrared)
5. **Serial vs Parallel Transmission** — how bits actually travel; advantages and trade-offs
6. **Asynchronous vs Synchronous Transmission** — timing and framing at character/block level
7. **Fourier Analysis** — signal representation; Fourier Series for periodic signals, Fourier Transform for non-periodic
8. **Bandwidth & Data Transmission Speed** — capacity, BPS, signal spectrum
9. **Bandwidth Allocation & OFDM** — real-world application of Fourier in 5G/LTE
10. **Computer Networks** — LAN/MAN/WAN, topologies (bus/star/ring/mesh)
11. **Switching Techniques** — circuit switching vs packet switching
12. **Routing Techniques** — source routing, hop-by-hop routing
13. **Communication Protocols & OSI Model** — 7 layers, functions per layer
14. **Modulation & Multiplexing** — encoding and combining signals (TDM, FDM)

---

## Definitions Quick Reference

| Term | Definition |
|------|-----------|
| Data Communication | Sharing information locally or remotely via a system of 5 components |
| Message | The information to be transmitted (text, image, audio, video, numbers) |
| Sender | The originating device that sends the data |
| Receiver | The destination device that receives the message |
| Transmission Medium | The physical path a message travels from sender to receiver |
| Protocol | A set of rules governing data communication; enables synchronization |
| Simplex | Unidirectional data flow only |
| Half-Duplex | Bidirectional but not simultaneous (walkie-talkie) |
| Full-Duplex | Simultaneous bidirectional communication (telephone) |
| Analog | Continuous waveform signal representation |
| Digital | Discrete 0/1 electrical state representation |
| Unicode | 32-bit global character encoding system; ASCII (127 chars) is a subset |
| Pixel | Smallest unit of a digital image; assigned a bit pattern |
| RGB / YCM | Methods for representing colour images as bit patterns |
| Quantization | Approximating sampled analog values with finite set → encoding as bit patterns |
| Twisted Pair | Copper conductors twisted together; STP (shielded) and UTP (unshielded) |
| Coaxial Cable | Central copper core + insulation + outer shielding; used in cable TV, CCTV |
| Fibre-Optic | Glass/plastic fibre transmitting data as light; high bandwidth, low attenuation |
| Radio Waves | 3 KHz–1 GHz; omnidirectional; AM/FM, TV, maritime radio |
| Microwaves | 1–300 GHz; unidirectional; line-of-sight; terrestrial and satellite links |
| Infrared | 300 GHz–400 THz; short-distance; cannot penetrate walls; remote controls |
| Bandwidth | Measure of data transfer capacity over a network per unit time |
| LAN | Local Area Network — limited geographic area (office, home) |
| MAN | Metropolitan Area Network — city or large campus |
| WAN | Wide Area Network — global interconnection |
| Star Topology | All nodes connect to a central hub/switch |
| Ring Topology | Nodes connected in a closed loop |
| Bus Topology | All nodes share a single backbone cable |
| Mesh Topology | Every node interconnected with every other |
| Circuit Switching | Dedicated physical path held for full connection duration |
| Packet Switching | Data split into independently routed packets; basis of Internet |
| Source Routing | Full path from source to destination specified by source node |
| Hop-by-Hop Routing | Each node passes data to the next along the path |
| OSI Model | 7-layer network reference model released by ISO in 1984 |
| Physical Layer | Layer 1 — hardware, bit stream transmission, NIC |
| Data Link Layer | Layer 2 — frames, physical addressing |
| Network Layer | Layer 3 — routing, logical addressing |
| Transport Layer | Layer 4 — end-to-end delivery, error control, flow control |
| Session Layer | Layer 5 — session and dialogue management |
| Presentation Layer | Layer 6 — encryption, compression, syntax translation |
| Application Layer | Layer 7 — user-facing network services |
| NIC | Network Interface Card — hardware connecting a device to a network |
| Serial Transmission | Data sent one bit at a time over a single channel; reliable long-distance |
| Parallel Transmission | Multiple bits sent simultaneously over multiple channels; fast, short-distance |
| Asynchronous Transmission | Character-framed with Start/Stop bits; no shared clock |
| Synchronous Transmission | Block/frame-based; clock-synchronized; CRC/checksum error detection |
| Fourier Series | Represents periodic signals as a sum of sinusoidal harmonics |
| Fourier Transform | Decomposes non-periodic signals from time domain to frequency domain |
| Harmonic | Frequency component at an integral multiple of the fundamental frequency |
| Dirichlet Conditions | Three conditions a periodic signal must meet for Fourier Series to exist |
| Orthogonality | Property of harmonics — each is independent of the others |
| OFDM | Orthogonal Frequency Division Multiplexing — core 5G/LTE technology using Fourier Transform |
| Modulation | Encoding information onto a carrier signal |
| Multiplexing | Combining multiple signals over a shared medium (TDM, FDM, FCM) |

---

## Tutor Reference Notes


- **Best entry-point concept:** Start with the 5 components of a data communication system (Message, Sender, Receiver, Transmission Medium, Protocol) — every other topic in this course builds from here.

- **Most common misconceptions:**
  - Confusing *half-duplex* with *simplex* — half-duplex CAN go both ways, just not simultaneously
  - Thinking *digital* is always better than *analog* — depends entirely on context and medium
  - Believing OSI layers are strict physical hardware boundaries — they are logical abstractions
  - Confusing *routing* with *switching* — switching connects within a network; routing connects networks
  - Thinking *serial* is always slower than *parallel* — not true over long distances (parallel suffers skew)
  - Confusing *asynchronous* with *half-duplex* — they describe different aspects (timing vs direction)
  - Thinking only even harmonics cancel in a square wave — it's the even harmonics that cancel, odd survive

- **Concepts students typically conflate:**
  - `Circuit Switching` ↔ `Packet Switching` (dedicated path vs shared packets)
  - `Fourier Series` ↔ `Fourier Transform` (periodic vs non-periodic signals)
  - `Serial Transmission` ↔ `Asynchronous Transmission` (physical method vs timing/framing method)
  - `Parallel Transmission` ↔ `Full-Duplex` (multi-wire vs simultaneous bidirectional)
  - `STP` ↔ `UTP` (shielded vs unshielded twisted pair)
  - `Half-Duplex` ↔ `Full-Duplex` (sequential vs simultaneous)
  - `LAN` ↔ `MAN` ↔ `WAN` (geographic scope differences)
  - `Source Routing` ↔ `Hop-by-Hop Routing` (who decides the path)
  - `Radio Waves` ↔ `Microwaves` (directionality: omni vs uni; frequency range)
  - `Asynchronous` ↔ `Synchronous` Transmission (character-framed vs block-framed)

- **Mbosinwa-specific notes:**
  - Has strong software/systems engineering background — use analogies to protocols (HTTP, TCP), buses (USB, SPI), and embedded systems (RS-232, RS-485) when explaining networking concepts
  - Over-explain by default; he will signal if something needs less detail
  - Fourier mathematics may need extra scaffolding — connect abstract formulas to concrete examples (square wave, OFDM, 5G) to build intuition
