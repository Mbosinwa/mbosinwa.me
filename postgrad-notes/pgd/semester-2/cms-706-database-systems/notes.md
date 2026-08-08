# CMS 706: Database Systems

**Programme:** PGD Computer Science, Rivers State University

> Transcribed from handwritten class notes (29 pages), lectures dated 12/05/2026 and 19/05/2026.
> `[?]` marks unclear text; `[note: …]` marks a correction I am confident of.

---

# PART A: DATA AND INFORMATION MANAGEMENT

## 1. Introduction to data and information management (p.1)

Course opening topics: definition of data and information · information management concept · role of data in data science · overview of the data lifecycle.

### What is data?

**Data** refers to raw facts, figures or symbols about people, things, events or processes that can be collected, measured and analysed. It is **raw and unprocessed** facts or figures, text, symbols, images etc., and **has no meaning on its own**.

*Example:* `25°C` or `28°F`; a person's age = 25; a product price.

### Data by nature

| Type | Definition | Examples |
|---|---|---|
| **Quantitative** | Numeric information that can be **measured** | Weight, height, sales figures, temperature readings |
| **Qualitative** | Descriptive information expressing **characteristics or attributes** | Customer feedback, colour of a car, satisfaction level |

### Data by structure

**Structured · unstructured · semi-structured** (see p.8).

### Difference between data as a raw fact and information

Data as a raw fact and information are **fundamentally different in their purpose**. Data is the **raw material**: unprocessed and awaiting meaning, while information is the **interpreted result**.

- **Data** refers to the binary digital encoded (0, 1) values measured in bits, bytes and gigabytes, used for transmitting voice, video, text or a network.
- **Information** is **processed and organized data that is meaningful and useful**. It helps in decision making. *E.g. "Mary scored 25 marks in January."* It is **structured, organized and active**.

---

## 2. Information management concept (p.2)

**Information management (IM)** is the process of **collecting, storing, organizing and managing information efficiently**.

### Core components of information management

1. **Data collection**: gathering raw data from sources (forms, sensors, logs)
2. **Data storage**: saving data in databases, cloud or files
3. **Data organization**: structuring data into tables, categories or format
4. **Data processing**: converting raw data into useful information
5. **Data retrieval**: accessing stored data when needed
6. **Data security**: protecting stored data from unauthorized access

### Objectives of information management

1. Improved decision making
2. Ensure data accuracy and consistency
3. Enhance efficiency
4. Support business operation

### Real-world examples

1. Banking system managing transactions
2. Hospital system managing patients' records
3. E-commerce platforms tracking orders

---

## 3. Role of data in data science (p.2–3)

**Data science** is a **multi-disciplinary field that uses data, algorithms and scientific methods/tools to extract insight and knowledge** from structured, semi-structured and unstructured datasets. It actively combines **computer science, statistics and machine learning** to collect, clean, analyse and visualize data to solve problems, make predictions and guide decision-making in various fields.

### Importance of data

1. **Data is the foundation of data science.**
2. **Without data, analysis is impossible.** The process of data science also involves solving problems, exploring and analysing data, building models and communicating findings to stakeholders.

### How data is used in data science

1. **Data is collected**: from databases, APIs, sensors etc.
2. **Data cleaning**: removing errors, duplicates, spaces etc.
3. **Data analysis**: finding patterns and trends
4. **Model building**: predictive models, e.g. machine learning
5. **Decision making**: business insights and strategies


---

## 4. Data lifecycle (p.3–4)

The **data lifecycle** refers to the **stages data goes through from creation to deletion**.

> **Key insight: better data leads to better decisions.**

### The eight stages

1. **Data creation**: generation from sources (users / systems)
2. **Data collection**: gathering the data
3. **Data storage**: saving data in databases or the cloud
4. **Data processing**: cleaning and transforming data
5. **Data analysis**
6. **Data distribution**
7. **Data archiving**: storing data
8. **Data deletion**

### Importance of the data lifecycle

1. Ensures data quality
2. Improves data quality and usefulness
3. Supports compliance and security

### Use cases of data science

| Sector | Use |
|---|---|
| **Healthcare** | Patient records, disease prediction |
| **Banking** | Fraud detection, transaction tracking |
| **E-commerce** | Product recommendation, customer behaviour analysis |
| **Education** | Student performance prediction, online learning analytics |
| **Transportation** | Traffic prediction, ride sharing |

---

## 5. Information storage and retrieval (p.4, dated 19/05/2026)

**Metadata** is **data about data**: structured information that **describes, explains, locates or otherwise makes it easier to retrieve, use or manage an information resource**. Metadata helps data efficiency, and helps information be stored and retrieved quickly when it is needed.

### Key goals of information storage

1. Store data securely
2. Retrieve data efficiently
3. Ensure accuracy and consistency
4. Support decision making

---

## 6. Data storage methods (p.5)

### A. File-based storage

A system where **data is stored in separate files**: e.g. text files, spreadsheets.

**Characteristics:** data stored in flat files (`.txt`, `.csv`) · each file is independent · no central control.

| Advantages | Disadvantages |
|---|---|
| 1. Simple to use | 1. Data redundancy (duplication) |
| 2. Low cost | 2. Data inconsistency |
| 3. Suitable for small systems | 3. Difficult data sharing |
| | 4. Poor security |
| | 5. No relationship between data, e.g. a student record stored in an Excel file |

### B. Database system (DBMS)

A **structured system where data is stored in tables and managed by a DBMS**.

**Characteristics:** centralized data storage · data organized in tables (rows / columns) · supports relationships (keys).

| Advantages | Disadvantages |
|---|---|
| 1. Reduces redundancy | 1. Very expensive |
| 2. Better data integrity | 2. Requires an expert / system administrator |
| 3. Improved security | 3. Complex to manage |
| 4. Easy data retrieval | |
| 5. Multi-user access | |

---

## 7. Information retrieval system (p.6)

An **information retrieval system (IRS)** is a system that **searches and retrieves relevant information from stored data**: e.g. a table or record. **Examples:** search engines, library catalogue systems, e-commerce search.

### Components of an IRS

1. Data collection
2. Indexing system
3. Query processor
4. Search engine
5. User interface

### Retrieval process

1. User enters query
2. System searches index data
3. Matches result
4. Returns relevant information

### Types of retrieval

1. **Exact match**: database query
2. **Best match**: search engines

### Indexing basics

**Indexing** is a **technique used to speed up data retrieval by creating a reference (index) to data**: like the index in a book, which helps find the query faster.

**Types of indexing**

| Type | Based on | Note |
|---|---|---|
| **Primary index** | The primary key | Unique values |
| **Secondary index** | Non-key attributes | May have duplicates |
| **Clustered index** | Data stored in order |, |
| **Non-clustered index** | A separate structure pointing to data |, |

**Benefits of indexing:** faster search · improved query performance.
**Limitations of indexing:** takes extra storage · slows down data updates.

---

## 8. Information capture and representation (p.7–8)

This refers to the **process of collecting data from various sources and organizing them in a format that computers can store, analyse and process effectively**.

### Data collection techniques

**A. Manual data collection**: data collected by humans without automation, e.g. surveys and questionnaires, paper forms, interviews, observation.

| Advantages | Disadvantages |
|---|---|
| Low cost and simple · flexible | Time consuming · prone to human error · difficult to scale |

**B. Sensor-based data collection**: data collected automatically using devices (sensors), e.g. thermometers, temperature sensors, biometric scanners, Internet of Things (IoT), GPS devices.

| Advantages | Disadvantages |
|---|---|
| Real-time data · high accuracy · automation | Expensive · requires maintenance · may produce large data volumes |

**C. API-based data collection**: **API = Application Program Interface**. Data is collected from external systems using APIs, e.g. weather API, social media API (Facebook), payment gateways.

| Advantages | Disadvantages |
|---|---|
| Fast and automated · access to large datasets · real-time updates | Requires programming knowledge · API limits / restrictions · depends on external systems |

### Data formats

| Format | Definition | Characteristics | Examples |
|---|---|---|---|
| **Structured** | Data organized in a **fixed format**, usually in tables | Rows and columns · easy to store and query · highly organized (name, id, age) | Student records, SQL tables, Excel spreadsheets |
| **Semi-structured** | Data that **does not follow strict tables but has some structure** | Flexible structure · uses tags or key-value pairs | JSON, XML, email |
| **Unstructured** | Data with **no predefined format or structure** | Difficult to analyse · large in volume · requires advanced tools (AI, NLP) | Images, videos, audio files, social media posts |

```json
{ "Name": "John", "Age": 20 }        ← semi-structured (JSON)
```

---

## 9. Data representation models (p.9)

A **data representation model** defines **how data is organized and structured logically in a system**.

| # | Model | Description | Advantages | Disadvantages |
|---|---|---|---|---|
| 1 | **Hierarchical** | Data organized in a **tree-like structure**; parent → child relationship | Simple structure, fast access | Rigid; difficult to modify |
| 2 | **Network** | Data organized as a **graph**; allows multiple relationships | Handles multiple relationships | Complex structure |
| 3 | **Relational** | Data stored in **tables** using **keys** to establish relations | Simple and widely used; easy querying (SQL) | Less flexible for complex data |
| 4 | **Object oriented** | Data stored as **objects** (like programming) | Handles complex data | Complex implementation |
| 5 | **Semi-structured** | A flexible model using formats like **JSON and XML** | Adaptable; used in modern web systems |, |

```
Hierarchical example:        Relational example:
      Father, Mother        Student(MatNo, Name)
       /    |    \           Student(PG No, Name)
     Son  Daughter Child

Company → Department → Employee
```

---

## 10. Information management applications (p.10–12)

**Real-world application:** healthcare, sensors collect patient vitals, stored as structured data used for diagnosis · e-commerce, APIs collect customer data, stored in databases, used for recommending orders · transportation, GPS sensors track locations · real-time data processing.

**Information management application** refers to the **actual use of data and information systems to support operations, decision making and strategic goals across different industries**.

### A. Healthcare

- **Types of data collected:** patient records (name, age, history) · medical images (X-ray, MRI) · lab results · vital signs (heart rate, blood pressure)
- **Applications used:** electronic health records (EHR), centralized patient data storage · clinical decision support systems (CDSS), help doctors diagnose disease · telemedicine, remote consultations · health monitoring systems, wearable devices tracking health
- **Benefits:** improved patient care · faster diagnosis · reduced errors
- **Challenges:** data privacy concerns · high system cost · integration issues

### B. Finance

- **Types of data collected:** transaction records · customer profiles · credit history · market data (stock monitoring)
- **Applications used:** online banking systems · fraud detection systems · risk management systems · automated trading systems
- **Benefits:** secure transactions · real-time processing · better financial decisions
- **Challenges:** cyber security, threats and regulatory compliance

### C. Logistics

- **Types of data collected:** shipment details · inventory levels · delivery routes · GPS tracking
- **Applications used:** supply chain management systems · inventory management systems · route optimization systems · warehouse management systems
- **Benefits:** efficient delivery · reduced cost · real-time tracking
- **Challenges:** data integration · system complexity

### D. Social media

- **Types of data collected:** user profiles (text, likes, comments) · behavioural data · multimedia content
- **Applications used:** recommendation systems · targeted advertising · content moderation · trend analysis
- **Benefits:** personalized user experience · increased engagement · business insight
- **Challenges:** privacy issues · misinformation · data overload

---

## 11. Data-driven decision making (p.13–14)

**Case studies:** healthcare, patient records automation · fraud detection, analysing patterns, flagging unusual activities · logistics, optimizing shipping routes · recommendation, following programs always visited (Netflix), suggesting content for user engagement.

**Data-driven decision making (DDDM)** is the **process of making decisions based on data analysis rather than on intuition**.

### Steps in DDDM

1. Data collection
2. Data processing
3. Data analysis
4. Interpretation
5. Decision making
6. Prediction


| Advantages of DDDM | Challenges of DDDM |
|---|---|
| More accurate decisions | Poor data quality |
| Reduced risks | Lack of skills |
| Better performance | Data overload |

**Real-world applications:** healthcare, to diagnose disease · finance, used to approve loans · logistics, used to optimize routes · recommendation, recommend content based on user data (feedback).

---

## 12. Analysis, indexing and retrieval (p.14–16)

This focuses on **how data is searched, organized and efficiently accessed in modern systems and databases**.

### Searching techniques

**1. Linear search (sequential search)**: a method of searching where **all elements are checked one after the other until the target is found**.

*How it works:* start from the first record → compare each value with the target → stop when found or when the end is reached.

*Example:* search for 25 in `{10, 15, 25, 30}` → check 10, then 15, then 25 → stop.

| Advantages | Disadvantages |
|---|---|
| Simple to implement · works on unsorted data | Slow for large datasets · poor time complexity |

**2. Index search**: a search method that **uses an index to locate data quickly without scanning all records**. *Analogy:* using a book's reference to find a topic quickly, e.g. a textbook.

*How it works:* search the index → locate the pointer/reference → retrieve the actual data.

| Advantages | Disadvantages |
|---|---|
| Much faster than linear search · efficient for large data | Requires extra storage · index maintenance overhead |

### Indexing structures

**Indexing** is a process of **creating a data structure that improves search speed**.

**1. B-tree indexing**: a **balanced tree structure** used in databases to store **sorted data** for fast searching, insertion and deletion.

- **Structure:** nodes contain **multiple keys**
- **Balance:** **all leaf nodes are at the same level**

```
        [20]
       /    \
    [10]   [30, 40]
```

*How it works:* divide data into nodes → search by traversing tree levels.

| Advantages | Disadvantages |
|---|---|
| Efficient for large datasets · balanced structure gives consistent performance · supports range queries | Complex structure · requires maintenance |

**2. Hashing**: uses a **hash function to map a key to a specific location in memory**, e.g. `Hash(25) → Address 5`.

| Advantages | Disadvantages |
|---|---|
| Very fast look-up · good time complexity | **Collision**: two keys mapped to the same location · **not suitable for range queries** |

---

## 13. Querying data efficiently (p.16–18)

**Efficient querying** involves writing queries that **retrieve data quickly with minimal resource usage**.

### The class table: `StudentDB`

| S/N | Name | MatNo | Age | Dept | Sex |
|---|---|---|---|---|---|
| 1 | John | 2025/PGD/001 | 22 | Agric Sc | M |
| 2 | Ada | 2025/PGD/002 | 24 | Economics | F |
| 3 | Rueben | 2025/PGD/003 | 30 | Maths | M |
| 4 | Eze | 2025/PGD/004 | 32 | Computer Sc | M |
| 5 | Obuchi | 2025/PGD/005 | 21 | Law | F |

```sql
SELECT Name FROM StudentDB WHERE Age >= 30;
```

**Result:** Rueben (30, Maths) and Eze (32, Computer Sc).

### Techniques for efficient queries

1. **Use an index**: speeds up the `WHERE` condition
2. **Avoid `SELECT *`**, retrieve only the needed columns
3. **Use the `WHERE` keyword properly**: filter data properly
4. **Use the `JOIN` keyword efficiently**: e.g. Table 1 `(Name, MatricNo, Age, Dept, Sex)` joined to Table 2 `(State, LGA)` gives `(Name, MatNo, Age, Dept, Sex, State, LGA)`
5. **Limit results**: `SELECT * FROM Table1 WHERE LGA is Gokana`
6. **Use aggregation carefully**: `SELECT COUNT(*) FROM Table1`

### Query optimization concept

The **query optimizer chooses the best execution plan**:
(i) by reducing disk access · (ii) by reducing CPU usage · (iii) it also uses indexes and statistics.


```sql
SELECT * FROM Table1;
SELECT Name FROM Table1 WHERE Age > 20;
```

**Real-world applications:** e-commerce, fast product search using indices · banking, quick transaction retrieval · social media, searching users.

---

## 14. Privacy, integrity and security (p.18–20)

These are **core principles in information management that ensure data is protected, accurate and used properly (responsibly)**.

**Information privacy** refers to the **right of individuals or organizations to control how their data is collected, used and shared**.

### Key principles of privacy

1. **Consent**: data should be collected with user permission
2. **Purpose limitation**: data used only for its intended purpose
3. **Data minimization**: collect only necessary data
4. **Transparency**: inform users how data is used
5. **Accountability**: organizations are responsible for data protection

### Types of data

1. Personal data (name, age etc.) 2. Financial data (bank details) 3. Health records 4. Biometric data 5. Academic data

### Privacy risks

1. Identity theft 2. Data misuse 3. Unauthorized access

### Examples of privacy regulations

1. **GDPR** (Europe) 2. **HIPAA** (healthcare) 3. **Local data protection laws** (laws concerning data in Nigeria)

### Data protection techniques

1. **Encryption**: the process of converting data into an unreadable format.
   `plain text: Hello → encrypted: x592@H`
   **Types:** symmetric and asymmetric encryption.
2. **Access control**: restricting who can view or modify data, e.g. banks.
   **Types:** (i) role-based access control (ii) user authentication (password / biometrics)
3. **Backup and recovery**: regular backups prevent data loss; recovery systems restore data after failure
4. **Data masking**: hiding sensitive data, e.g. `xxx 1234`
5. **Firewalls and antivirus**: protect against unauthorized access and malware (malicious software)

### Security threats

| Threat | Description |
|---|---|
| **Malware** | Viruses, worms and ransomware |
| **Phishing** | Fake emails to steal information |
| **Unauthorized access** | Hackers accessing systems |
| **SQL injection** | Malicious SQL commands |
| **Data breaches** | Exposure of sensitive data |

### Security controls

| Control | Purpose |
|---|---|
| **Authentication** | Verify user identity |
| **Authorization** | Define what users can access |
| **Encryption** | Protect stored and transmitted data |
| **Firewalls** | Block unauthorized network access |
| **Monitoring and auditing** | Track system activities |
| **Update and patching** | Fix system vulnerabilities |

**Application:** health sector · banking · social media.

---

# PART B: DATABASE SYSTEMS

## 15. What is a database? (p.21)

Given four related tables, Table 1 `(Age, Name, Mat-No)`, Table 2 `(LGA, State)`, Table 3 `(Religion, Country)`, Table 4 `(PA, Sex, Height)`, the schema separates a collection of tables **which are related together because there are some common attributes existing in a selected pair of the tables**. Because of those attributes, we can **combine the data of two or more tables together to get the complete data of each student**.

> A **database** is a **collection of interrelated data stored together with controlled redundancy to serve one or more applications in an optimal fashion**. It is organized in such a way that a computer program can quickly select desired pieces of data (information), e.g. an electronic filing system.

It can also be defined as a **collection of information that is organized, easily accessible, managed and updated**, or as an **integrated, self-describing collection of related data**.

### Data consists of four elements / components

| Component | Meaning |
|---|---|
| **1. Data** | Any computer representation of a stored logical entity; discrete pieces of information usually formatted in a special way |
| **2. Relationship** | Represents a correspondence between various elements |
| **3. Constraints** | Predicates that define the correct state of the database |
| **4. Schema** | Describes the organization of and relationship between the database (the design of the database) |

---

## 16. Database Management System (p.22)

> A **DBMS** is a **collection of related data and software programs that are used to define, construct, maintain and manipulate data in a database**. In other words, the DBMS enables you to **store, modify and extract** data from the database, e.g. SQL, Access, Oracle, Power BI.

### The DBMS is made up of

a. the **database**  b. the **DBMS**  c. the **application program** (what the user interacts with)

> The **primary goal of the DBMS is to provide a way/mechanism where data can be stored and information retrieved from the database.** The management of a database is important because of the existence of some rules and regulations; it is important to maintain the database, e.g. a banking system.

```
 ┌──────────────────────────────────────────┐
 │ DBS                                      │
 │   ┌─────────────────────┐                │
 User → │ Application Process │               │
 │   └─────────┬───────────┘                │
 │   ┌─────────▼───────────┐   ┌────────┐   │
 │   │ Transaction Processing│─▶│ DB      │  │
 │   │ Data Management      │  │ metadata│  │
 │   └──────────────────────┘  └────────┘   │
 └──────────────────────────────────────────┘
```

---

## 17. History of DBMS: limitations of the file-based system (p.23)

The **file-based system (FBS)** was developed in response to the needs of industry for **more efficient data access**. However it has limitations:

1. **Segregation and isolation of data**: when data is isolated in separate files, it is more difficult to access data that should be available. This difficulty is compounded if we require data from more than two files.
2. **Duplication of data**: owing to the **decentralization** approach taken by each department, the FBS can encourage the **uncontrolled duplication** of data, and duplication is wasteful.
3. **Data dependency**: the **physical structure and storage** of data files and records are **defined in the application code**; this means that changes in an existing structure are difficult to make.

### Applications of a database

1. Purchasing from the supermarket 2. Using credit cards 3. Booking a vacation with a travel agent 4. Computerized library system 5. Using the internet 6. Taking out insurance 7. Renting a video

### Assignment (p.23)

1. Difference between **database administrator, manager and user**
2. **Data vs datum, data dictionary, metadata, data warehouse / data mart, data persistence**
3. **The generations of database management systems**

---

## 18. Services of the DBMS (p.24)

**1. Transaction management.** A **transaction is a sequence of actions that represent a logical unit of work**: e.g. it reads a record, deletes one and modifies a set of records. A transaction transforms the database from one state to another. When the DBMS does a **`COMMIT`**, the changes made by the transaction are made **permanent**. If you don't want the changes to be permanent, you do a **`ROLLBACK`**: the transaction returns to its original state.

**2. Concurrency control** is the DBMS activity of **coordinating the actions of database manipulation processes that operate concurrently**, that access shared data and can potentially interfere with one another. Its goal is to **allow concurrency while maintaining the consistency of the shared data**.

**3. Recovery management** ensures that an **aborted or failed transaction does not create an adverse effect** on the database or on other transactions, i.e. it must ensure the database is **returned to a consistent state** after a transaction fails or aborts.

**4. Security management** refers to the **protection of data against unauthorized access**. The security mechanism ensures that **only authorized users or administrators have access** to the database.

**5. Language interface.** The DBMS provides support languages used for the **definition and manipulation** of data in the database. Data structures are created using the **data definition language**; manipulation is done using the **data manipulation commands**.

**6. Storage management** provides a mechanism for the management of **permanent storage** of the data. The **internal schema** defines how data shall be stored by the storage management mechanism, and the storage manager **interfaces with the operating system** to access the physical storage.

**7. Data catalog management (p.25).** The **data catalog** is a system database that contains **descriptive information about the database (metadata)**: information about data, relationships, constraints and the entire schema. It organizes these features into a **unified database**, and the data catalog **can be queried to get information about the structure of the database**.

---

## 19. Models / types of DBMS (p.25–27)

> The **structure of the data determines the usefulness of the data**, as data is inserted, retrieved or deleted from the system or database.

### Relationships: the Book / Distributor example

Consider the relationship between **Book** and **Distributor**. There are several ways to depict it:

```
Book ──────── Distributor          1 : 1   given a book, the distributor is determined
Book ──n───1─ Distributor          n : 1   what books does the distributor supply?
Book ──n───n─ Distributor          n : n   combines both views; readable from either side
```

### The systematic development of database models

A variety of database models were popular in the **1960s and 70s**. The **relational model is the current favoured model**, while **object-oriented and structured models are slowly emerging** and point the way to the future.

> A **database model is an organizing principle that specifies a particular mechanism for data storage and retrieval.** The primary difference between the different database models lies in the **methods of expressing relationships and constraints among the data elements**.

### Database models consist of

1. Hierarchical model 2. Network model 3. Relational model 4. Object oriented model
Others: 5. Object relational model 6. Deductive model

**1. Hierarchical model**: organizes data elements as **tabular rows, one for each instance of an entity**. E.g. an organizational structure: at the top is the **general manager (GM)**, under him departments such as inventory and supply, and **Accounts**, which have managers for each department.

```
   Sales Mgr   Treasury Mgr   Supply Mgr   Accounts Mgr
       └────────────┴──────────────┴────────────┘
                     Departments
```

Many of the limitations and shortcomings of the hierarchical model result from its **overly restrictive view of relationships**.

| Advantages | Disadvantages |
|---|---|
| 1. It is simple | 1. Implementation complexity |
| 2. It has data security and integrity | 2. Database management problems |
| 3. It is efficient (not complicated) | 3. Lack of structural independence |
| | 4. Programming complexity |
| | 5. Implementation limitation |

**2. Network model**: **replaces the hierarchical tree with a graph**, allowing more general connections among the nodes. The main difference between the hierarchical and network model is its **many-to-many (n-n) relationship**: it allows **records to have more than one parent**.

| Advantages | Disadvantages |
|---|---|
| 1. Conceptual simplicity | 1. System complexity |
| 2. Capability to handle more relationship types | 2. Absence of structural independence |
| 3. Ease of data access | |
| 4. Data integrity and independence | |
| 5. Database standards | |

**3. Relational model**: **stores data in the form of a table**. Relational models are **powerful because they require few assumptions** about how data is related or how it will be extracted from the database. As a result, **the same database can be viewed in different ways**. Another feature is that **a single database can be spread across several tables**. It uses tables to organize data elements: **each table corresponds to an application entity and each row represents an instance of that entity**.

### Assignment (p.27)

1. Draw the typical database architecture
2. Explain the components of database architecture
3. Explain the types of database architecture

---

## 20. Database architecture (p.28)

> **Database architecture** is basically **how the database is structured**: i.e. how data flows between the parts of the database. It is the **blueprint for storing, managing and accessing data efficiently**.

### Three main architectural levels: the ANSI/SPARC model

Used in most RDBMS like Postgres, MySQL and Oracle.

| Level | What it is |
|---|---|
| **1. External / View level** | The **area or angle the users see**: e.g. views, reports, app interfaces. The user **cannot see the whole database**. Complexity is hidden, though security is added. |
| **2. Conceptual / Logical level** | This is **DBMS independent**. The **DBA works here**. It includes the **"what"**: tables, relationships, constraints and schemas. |
| **3. Internal / Physical level** | Takes care of **how data is stored**: i.e. in files, indices, data blocks, partitions, on disks / SSD. |

### Types of database architecture

1. **Client–server architecture**
2. **Three (3)-tier architecture**

---

## 21. Database independence (p.28–29)

> **Logical data independence** is the ability to **change the conceptual (logical) schema without changing the external schema or application program**.


**The class `Customers` table**

| S/N | Name | Address | Location | Item_Ordered |
|---|---|---|---|---|
| 001 | Effiong Okon | No. 5 Odili Road, PH | Rivers | Rechargeable fan |
| 002 | Aja Ine John | No. 25 Effiong Drive | Delta | Hot plate |
| 003 | Reuben Mark | Eneva, PH | Isiokpo | Refrigerator |
| 004 | Jennifer Charles | Isialangwa | Anambra | MP3 speaker |
| 005 | Abrahim Tador | Anuchukwu | Enugu | Mobile phone |

> **Physical data independence** is the ability to **change the physical storage scheme without changing the conceptual/logical scheme**.


---

## 22. Database query languages (p.29)

> These are the **languages we use to talk to the database**: i.e. to ask for data, change data and manage the DB **without writing code**. Most query languages are split into sub-languages:

| # | Category | Full name | What you do | Example keywords |
|---|---|---|---|---|
| 1 | **DQL** | Data Query Language | **Read** data | `SELECT` |
| 2 | **DML** | Data Manipulation Language | **Change** data | `INSERT`, `UPDATE`, `DELETE` |
| 3 | **DDL** | Data Definition Language | **Define** structure | `CREATE`, `ALTER`, `DROP` |
| 4 | **DCL / TCL** | Data Control / Transaction Control Language | **Permission and transaction** | `GRANT`, `REVOKE`, `COMMIT`, `ROLLBACK` |

### Core SQL: `SELECT`

```sql
SELECT Name, Price
FROM Products
WHERE Category = 'iphones'
ORDER BY Price DESC
LIMIT 10;
```

### Core DML: `INSERT` and `UPDATE`

```sql
INSERT INTO Users (Name, Email) VALUES ('Ada', 'ada@gmail.com');

UPDATE Products SET Price = Price * 1.1 WHERE Category = 'iphone';
```

---

## Assignments recorded in these notes

1. **Page 23**: difference between database administrator, manager and user; data vs datum, data dictionary, metadata, data warehouse / data mart, data persistence; the generations of DBMS.
2. **Page 27**: draw the typical database architecture; explain its components; explain the types of database architecture.

---

*End of transcription, 29 pages.*
