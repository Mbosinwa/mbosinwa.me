#!/usr/bin/env node
// Generator for the /postgrad-notes/ section of mbosinwa.dev.
//
// Converts self-authored markdown study materials to site-styled HTML and
// sanitizes + re-renders the exam-prep volumes (HTML -> PDF via Chrome headless).
//
// To add a new semester or programme: add its metadata to PROGRAMMES below
// (srcDir pointing at the local source folder), then run:
//   node tools/build-postgrad-notes.mjs
//
// Publishing rules (do not relax without the owner's say-so):
//   - self-authored materials only: no scan photos, no lecturers' source
//     documents, no past exam paper photos or verbatim transcriptions,
//     no assignments
//   - lecturer names, exam venues and invigilators are stripped everywhere
//   - all links and asset references are absolute paths
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const OUT = new URL('../postgrad-notes/', import.meta.url).pathname;
const SITE = 'https://mbosinwa.dev';
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const GTAG = `<script async src="https://www.googletagmanager.com/gtag/js?id=G-P6GF5HF40L"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-P6GF5HF40L');
    </script>`;

const THEME_SCRIPT = `<script>
      (function () {
        const body = document.body;
        const saved = localStorage.getItem('theme');
        body.setAttribute('data-theme', saved === 'dark' ? 'dark' : 'light');
        const btn = document.getElementById('theme-toggle');
        function icon() { btn.textContent = body.getAttribute('data-theme') === 'dark' ? '☀' : '☾'; }
        icon();
        btn.addEventListener('click', function () {
          const next = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
          body.setAttribute('data-theme', next);
          localStorage.setItem('theme', next);
          icon();
        });
      })();
    </script>`;

const LECTURER_NAMES = [
  // semester 2
  'Dr. S. T. Whyte', 'Dr. Whyte',
  'Dr. G. Oraye', 'Dr. Oraye',
  'Dr. C. M. Abiye-Suku', 'Dr. Abiye-Suku',
  'Dr. I. Oriji', 'Dr. Oriji',
  'Dr. G. O. Jaja', 'Dr. Jaja',
  'Prof. D. Matthias', 'Prof. Matthias',
  // semester 1
  'Dr. I.B. Cookey', 'Dr. Cookey',
  'Dr. H. Okwu', 'Dr. Okwu',
  'Dr. Friday Orji', 'Dr. Orji',
  'Dr. Fortune Deedam', 'Dr. Deedam',
  'Dr. E.O Bennett', 'Dr. Bennett',
  'Dr. E.E Omaegbu', 'Dr. Omaegbu',
  'Dr. Saturday', // full word "Saturday" alone is a weekday — never bare-replace
  // NOTE: "Dr. Sarah Joe" is the tutor app's AI persona, not a lecturer — handled separately in sanitize()
];

const PROGRAMMES = [
  {
    slug: 'pgd',
    name: 'PGD Computer Science',
    school: 'Rivers State University',
    blurb: 'Postgraduate Diploma in Computer Science at Rivers State University, Port Harcourt.',
    semesters: [
      {
        slug: 'semester-1',
        name: 'First Semester',
        year: '2025/26',
        srcDir: '/Users/mbosinwa/bmad-uni/apps/xaraunitutor/_bmad-output/_university-tutor-courses',
        courses: [
          {
            slug: 'cms-701-operating-systems',
            code: 'CMS 701',
            dir: 'operating-systems',
            title: 'Operating Systems',
            blurb: 'Operating system fundamentals — OS types, kernels and system calls, processes and schedulers, multithreading, CPU scheduling and synchronization.',
            pages: [
              { src: 'materials/01-course-outline.md', out: 'course-outline.html', title: 'Course Outline', group: 'Notes', desc: 'The official course outline.' },
              { src: 'materials/02-lecture-notes-os-types-kernels-system-calls.md', out: 'notes-1.html', title: 'Notes I — OS Types, Kernels & System Calls', group: 'Notes', desc: 'What an operating system is, OS types, kernel architectures and system calls.' },
              { src: 'materials/03-lecture-notes-process-state-pcb-schedulers.md', out: 'notes-2.html', title: 'Notes II — Processes, PCB & Schedulers', group: 'Notes', desc: 'Process states, the process control block, and long/short/medium-term schedulers.' },
              { src: 'materials/04-lecture-notes-multithreading-cpu-scheduling-synchronization.md', out: 'notes-3.html', title: 'Notes III — Multithreading, CPU Scheduling & Synchronization', group: 'Notes', desc: 'Threads, CPU scheduling algorithms and process synchronization.' },
              { src: 'knowledge-map.md', out: 'knowledge-map.html', title: 'Knowledge Map', group: 'Study Aids', desc: 'Topic and concept map of the whole course, with relationships and entry points.' },
            ],
          },
          {
            slug: 'cms-703-data-communication-and-networks',
            code: 'CMS 703',
            dir: 'data-communication-and-networks',
            title: 'Data Communication & Networks',
            blurb: 'Data transmission fundamentals, communication system components, networking and the OSI model.',
            pages: [
              { src: 'materials/cms703-course-outline.md', out: 'course-outline.html', title: 'Course Outline', group: 'Notes', desc: 'The official course outline.' },
              { src: 'materials/cms703-lecture-notes-dr-saturday.md', out: 'notes.html', title: 'Lecture Notes', group: 'Notes', desc: 'Full class notes — data communication components, transmission, networking and the OSI model.' },
              { src: 'knowledge-map.md', out: 'knowledge-map.html', title: 'Knowledge Map', group: 'Study Aids', desc: 'Topic and concept map of the whole course, with relationships and entry points.' },
            ],
            downloads: [
              { base: 'CMS703-Cheat-Sheet', title: 'Cheat Sheet', desc: 'One-look revision sheet for the whole course.', srcHtml: 'cms703-cheatsheet-slides.html' },
            ],
          },
          {
            slug: 'cms-705-programming-languages',
            code: 'CMS 705',
            dir: 'programming-languages',
            title: 'Programming Languages',
            blurb: 'Programming language concepts — language structure, paradigms, syntax and semantics, translators and language design.',
            pages: [
              { src: 'materials/course-outline.md', out: 'course-outline.html', title: 'Course Outline', group: 'Notes', desc: 'The official course outline.' },
              { src: 'materials/programming_lang.md', out: 'notes-1.html', title: 'Lecture Notes — Part I', group: 'Notes', desc: 'First part of the class notes.' },
              { src: 'materials/programming_lang2.md', out: 'notes-2.html', title: 'Lecture Notes — Part II', group: 'Notes', desc: 'Second part of the class notes.' },
              { src: 'knowledge-map.md', out: 'knowledge-map.html', title: 'Knowledge Map', group: 'Study Aids', desc: 'Topic and concept map of the whole course, with relationships and entry points.' },
            ],
            downloads: [
              { base: 'CMS705-Cheatsheet', title: 'Cheat Sheet', desc: 'One-look revision sheet for the whole course.', srcHtml: 'cms705-cheatsheet.html' },
            ],
          },
          {
            slug: 'cms-707-artificial-intelligence',
            code: 'CMS 707',
            dir: 'artificial-intelligence',
            title: 'Artificial Intelligence',
            blurb: 'Problem-solving and search, knowledge representation, probabilistic reasoning, machine learning, NLP, expert systems, fuzzy logic and genetic algorithms.',
            pages: [
              { src: 'materials/cms707-ai-course-outline.md', out: 'course-outline.html', title: 'Course Outline', group: 'Notes', desc: 'The official course outline.' },
              { src: 'materials/cms707-full-class-notes-dr-friday-orji.md', out: 'notes.html', title: 'Full Class Notes', group: 'Notes', desc: 'Complete lecture notes for the course.' },
              { src: 'materials/cms707-class-jottings-problem-solving.md', out: 'jottings.html', title: 'Class Jottings — Problem Solving', group: 'Notes', desc: 'In-class jottings on problem solving and state space search.' },
              { src: 'knowledge-map.md', out: 'knowledge-map.html', title: 'Knowledge Map', group: 'Study Aids', desc: 'Topic and concept map of the whole course, with relationships and entry points.' },
              { src: 'links.md', out: 'resources.html', title: 'Further Resources', group: 'Study Aids', desc: 'Curated external links for going deeper.' },
            ],
            downloads: [
              { base: 'CMS707-Exam-Practice-Questions', title: 'Exam Practice Questions', desc: 'Practice questions in exam format.', srcPdf: 'cms707_exam_practice_questions.pdf' },
            ],
          },
          {
            slug: 'cms-709-compiler-construction',
            code: 'CMS 709',
            dir: 'compiler-construction',
            title: 'Compiler Construction',
            blurb: 'Compiler phases with a deep dive into lexical analysis — tokens, patterns, finite automata and scanner design.',
            pages: [
              { src: 'materials/lexical-analysis-lecture-notes.md', out: 'notes.html', title: 'Lexical Analysis — Lecture Notes', group: 'Notes', desc: 'Tokens, patterns and lexemes, finite automata and scanner design.' },
              { src: 'knowledge-map.md', out: 'knowledge-map.html', title: 'Knowledge Map', group: 'Study Aids', desc: 'Topic and concept map of the whole course, with relationships and entry points.' },
            ],
          },
          {
            slug: 'cms-711-system-analysis-and-design',
            code: 'CMS 711',
            dir: 'system-analysis-and-design',
            title: 'System Analysis & Design',
            blurb: 'The system development life cycle, system analysis, and interface design.',
            pages: [
              { src: 'materials/course-outline.md', out: 'course-outline.html', title: 'Course Outline', group: 'Notes', desc: 'The official course outline.' },
              { src: 'materials/SDLC_Lecture_Notes.md', out: 'sdlc-notes.html', title: 'System Development Life Cycle', group: 'Notes', desc: 'SDLC phases, models and deliverables.' },
              { src: 'materials/SYSTEM_ANALYSIS.md', out: 'system-analysis-notes.html', title: 'System Analysis', group: 'Notes', desc: 'System analysis concepts and techniques.' },
              { src: 'materials/System_Design_Interface_Design.md', out: 'interface-design-notes.html', title: 'System Design & Interface Design', group: 'Notes', desc: 'Design of systems and user interfaces.' },
              { src: 'knowledge-map.md', out: 'knowledge-map.html', title: 'Knowledge Map', group: 'Study Aids', desc: 'Topic and concept map of the whole course, with relationships and entry points.' },
            ],
          },
        ],
      },
      {
        slug: 'semester-2',
        name: 'Second Semester',
        year: '2026',
        srcDir: '/Users/mbosinwa/Downloads/schoolwork/semester-2',
        courses: [
          {
            slug: 'cms-702-data-structures-and-algorithms',
            code: 'CMS 702',
            dir: 'CMS-702-Data-Structures-and-Algorithms',
            title: 'Data Structures & Algorithms',
            blurb: 'Algorithms and asymptotic analysis, arrays, stacks, queues, linked lists, hashing, binary search trees and graphs.',
            pages: [
              { src: 'notes/CMS-702-lecture-notes.md', out: 'notes.html', title: 'Lecture Notes', group: 'Notes', desc: 'Full transcription of 16 pages of class notes — algorithms, asymptotic analysis, core data structures, hashing and BSTs.' },
              { src: 'course-outline.md', out: 'course-outline.html', title: 'Course Outline & Coverage', group: 'Notes', desc: 'The official course outline with a topic-by-topic check of what the class notes cover.' },
              { src: 'exam-prep/01-cheatsheet.md', out: 'cheatsheet.html', title: 'Exam Cheatsheet', group: 'Exam Prep', desc: 'Definitions, lists and diagrams to memorise, worded for direct recall.' },
              { src: 'exam-prep/02-syllabus-gaps.md', out: 'syllabus-gaps.html', title: 'Syllabus Gap Notes', group: 'Exam Prep', desc: 'Outline topics the class notes skip — graphs, sorting mechanics, stack vs heap — covered short and exam-shaped.' },
              { src: 'exam-prep/03-practice-questions.md', out: 'practice-questions.html', title: 'Practice Questions', group: 'Exam Prep', desc: '35 questions with answers, in exam format.' },
              { src: 'exam-prep/04-past-questions-solved.md', out: 'past-questions-solved.html', title: 'Past Questions — Solved', group: 'Exam Prep', desc: 'Five past questions answered at full length, with model structure notes.' },
            ],
            volumes: [
              { base: 'CMS-702-Study-Guide', title: 'Study Guide (Vol. I)', desc: 'Cheatsheet and study guide built from the class notes.' },
              { base: 'CMS-702-Drill-Pack', title: 'Drill Pack (Vol. II)', desc: 'Mock paper, answer plans, worked drills and a walk-in sheet.' },
              { base: 'CMS-702-Note-Coverage', title: 'Note Coverage (Vol. III)', desc: 'Topics the notes name but never develop, worked in full.' },
            ],
          },
          {
            slug: 'cms-704-computer-architecture',
            code: 'CMS 704',
            dir: 'CMS-704-Computer-Architecture',
            title: 'Computer Architecture',
            blurb: 'Processor organisation, memory hierarchy, cache and locality, performance, and signed/unsigned number representation.',
            pages: [
              { src: 'notes/CMS-704-lecture-notes.md', out: 'notes.html', title: 'Lecture Notes', group: 'Notes', desc: 'Transcription of 14 pages of class notes.' },
              { src: 'notes/CMS-704-extra-notes.md', out: 'extra-notes.html', title: 'Extra Notes', group: 'Notes', desc: 'Memory hierarchy, cache, locality, performance, and signed number representation.' },
            ],
            volumes: [
              { base: 'CMS-704-Study-Guide', title: 'Study Guide (Vol. I)', desc: 'Cheatsheet and study guide from the class notes.' },
              { base: 'CMS-704-Drill-Pack', title: 'Drill Pack (Vol. II)', desc: 'Mock paper, model answers, worked drills and a walk-in sheet.' },
              { base: 'CMS-704-Note-Coverage', title: 'Note Coverage (Vol. III)', desc: 'Assignments answered, faint classworks reconstructed, untaught outline topics covered.' },
            ],
          },
          {
            slug: 'cms-706-database-systems',
            code: 'CMS 706',
            dir: 'CMS-706-Database-Systems',
            title: 'Database Systems',
            blurb: 'ER modelling, relational design, SQL, normalization, query processing and distributed databases.',
            pages: [
              { src: 'notes/CMS-706-lecture-notes.md', out: 'notes.html', title: 'Lecture Notes', group: 'Notes', desc: 'Transcription of all 29 pages of class notes.' },
            ],
            volumes: [
              { base: 'CMS-706-Study-Guide', title: 'Study Guide (Vol. I)', desc: 'Cheatsheet and study guide from the class notes.' },
              { base: 'CMS-706-Drill-Pack', title: 'Drill Pack (Vol. II)', desc: 'Mock paper, answer plans, SQL drills, recall exercises and a walk-in sheet.' },
              { base: 'CMS-706-Note-Coverage', title: 'Note Coverage (Vol. III)', desc: 'ER diagrams, query processing, division queries, normalization and distributed databases.' },
            ],
          },
          {
            slug: 'cms-708-structured-programming',
            code: 'CMS 708',
            dir: 'CMS-708-Structured-Programming',
            title: 'Structured Programming',
            blurb: 'Structured programming in C++ — modularity, control structures, functions, arrays and standard programs.',
            pages: [
              { src: 'notes/PGD-structured-programming-notes.md', out: 'notes.html', title: 'Course Notes', group: 'Notes', desc: 'Full course notes with 22 C++ code listings.' },
            ],
            volumes: [
              { base: 'CMS-708-Study-Guide', title: 'Study Guide (Vol. I)', desc: 'Cheatsheet and study guide, every listing re-indented.' },
              { base: 'CMS-708-Drill-Pack', title: 'Drill Pack (Vol. II)', desc: '23 practice exercises solved, trace and error drills, and a mock paper.' },
              { base: 'CMS-708-Note-Coverage', title: 'Note Coverage (Vol. III)', desc: 'Pseudocode and flowcharts, the structured programming theorem, error types, arrays, storage classes and 12 standard programs.' },
            ],
          },
          {
            slug: 'cms-710-principles-of-programming-languages',
            code: 'CMS 710',
            dir: 'CMS-710-Principles-of-Programming-Languages',
            title: 'Principles of Programming Languages',
            blurb: 'Language definition, syntax and semantics, data types, binding and scoping, parameter passing and paradigms.',
            pages: [
              { src: 'notes/module-1.md', out: 'module-1.html', title: 'Module 1 — Language Definition Structure', group: 'Notes', desc: 'Programming language goals, syntax vs semantics, grammars and language specification.' },
              { src: 'notes/module-2.md', out: 'module-2.html', title: 'Module 2 — Data Types and Structures', group: 'Notes', desc: 'Primitive and composite types, user-defined types, type systems and data abstraction.' },
              { src: 'notes/module-3.md', out: 'module-3.html', title: 'Module 3 — Basic Data Types, Lists and Trees', group: 'Notes', desc: 'Review of basic data types including lists and trees.' },
              { src: 'notes/module-4.md', out: 'module-4.html', title: 'Module 4 — Control Structure and Data Flow', group: 'Notes', desc: 'Control structures, data flow, and evaluation.' },
            ],
            volumes: [
              { base: 'CMS-710-Study-Guide', title: 'Study Guide (Vol. I)', desc: 'All four modules with comparison tables and code reconstructed.' },
              { base: 'CMS-710-Drill-Pack', title: 'Drill Pack (Vol. II)', desc: 'Test questions answered at full length, course comparisons, mock paper and walk-in sheet.' },
              { base: 'CMS-710-Note-Coverage', title: 'Note Coverage (Vol. III)', desc: 'Binding times, scoping, parameter-passing models, paradigms, compilation phases, grammars and semantics.' },
            ],
          },
        ],
      },
    ],
  },
];

// --- sanitization -----------------------------------------------------------

function sanitize(md, course) {
  // strip YAML frontmatter
  md = md.replace(/^---\n[\s\S]*?\n---\n/, '');

  let lines = md.split('\n');

  lines = lines.filter((line) => {
    const t = line.trim();
    // metadata lines with exam logistics / lecturer identity
    if (/^\*\*(Lecturers?|Exam|Venue|Units)\b/.test(t) && /(Dr\.|Prof\.|\d{2}\/\d{2}\/\d{4}|SC 28-30)/.test(t)) return false;
    if (/^\*\*Lecturers?( \/ Invigilators?)?:?\*\*/.test(t)) return false;
    if (/^\*\*Exam:?/.test(t)) return false;
    if (/SC 28-30/.test(t)) return false;
    if (/Invigilator/.test(t)) return false;
    if (/^>?\s*\*?\*?Lecturers?\b.*:/.test(t) && /(Dr\.|Prof\.)/.test(t)) return false;
    if (/For use by Dr\. Sarah Joe/.test(t)) return false;
    // blockquote lines pointing at unpublished scans/sources or capture-order maps
    if (/^>.*(scans?\/|scans\b|Capture order|capture order|extra-\d\d|source\/)/.test(t)) return false;
    if (/^>.*(→p\.\d)/.test(t)) return false;
    return true;
  });

  let text = lines.join('\n');

  // staff emails
  text = text.replace(/\s*\(?[\w.+-]+@ust\.edu\.ng\)?/g, '');

  // lecturer names -> neutral
  for (const name of LECTURER_NAMES) {
    text = text.split(name).join('the lecturer');
  }
  text = text.replace(/(^|[.!?]\s+|\n)the lecturer/g, (m, p1) => p1 + 'The lecturer');
  text = text.replace(/the lecturer \/ the lecturer/g, 'the lecturers');

  // self-addressed phrasing -> first person
  text = text.replace(/Your Handwritten Notes/g, 'My Handwritten Notes');
  text = text.replace(/your own notes/g, 'my own notes');
  text = text.replace(/your notes/g, 'my notes');

  // internal links to published pages
  const linkMap = {
    'cms-702-data-structures-and-algorithms': [
      [/`(\.\.\/)?notes\/CMS-702-lecture-notes\.md`/g, '[the lecture notes](notes.html)'],
      [/`(\.\.\/)?course-outline\.md`/g, '[the course outline](course-outline.html)'],
      [/`(\.\.\/)?(exam-prep\/)?04-past-questions-solved\.md`/g, '[the solved past questions](past-questions-solved.html)'],
      [/`(\.\.\/)?(exam-prep\/)?03-practice-questions\.md`/g, '[the practice questions](practice-questions.html)'],
      [/`(\.\.\/)?(exam-prep\/)?02-syllabus-gaps\.md`/g, '[the syllabus gap notes](syllabus-gaps.html)'],
      [/`(\.\.\/)?(exam-prep\/)?01-cheatsheet\.md`/g, '[the cheatsheet](cheatsheet.html)'],
    ],
    'cms-707-artificial-intelligence': [
      [/`?cms707-full-class-notes-dr-friday-orji\.md`?/g, '[the full class notes](notes.html)'],
      [/`?cms707-class-jottings-problem-solving\.md`?/g, '[the class jottings](jottings.html)'],
      [/`?cms707-ai-course-outline\.md`?/g, '[the course outline](course-outline.html)'],
    ],
    'cms-704-computer-architecture': [
      [/`(\.\.\/)?(notes\/)?CMS-704-extra-notes\.md`/g, '[the extra notes](extra-notes.html)'],
      [/`(\.\.\/)?(notes\/)?CMS-704-lecture-notes\.md`/g, '[the lecture notes](notes.html)'],
    ],
  }[course.slug] || [];
  for (const [re, repl] of linkMap) text = text.replace(re, repl);

  // leftover references to unpublished material
  text = text.replace(/\s*\(transcribed from `[^`]+`\)/g, '');
  text = text.replace(/`(\.\.\/)?scans\/[^`]*`/g, 'the original scans');
  text = text.replace(/`(\.\.\/)?source\/[^`]*`/g, 'the original source document');

  return text;
}

function sanitizeVolumeHtml(html) {
  let t = html;
  // cover-line segments: "· Dr. X ..." / "· exam Monday 03 August 2026, 11:00–14:00" / "· SC 28-30"
  t = t.replace(/\s*·\s*(Dr\.|Prof\.)[^·<]*/g, '');
  t = t.replace(/\s*·\s*exam [A-Z][a-z]+day \d{1,2} [A-Za-z]+ \d{4}[^·<]*/g, '');
  t = t.replace(/\s*·\s*SC 28-30/g, '');
  t = t.replace(/SC 28-30/g, 'the exam hall');
  // prose mentions ("Saturday" deliberately absent from the bare-surname list — it's a weekday)
  t = t.replace(/\s*\(?[\w.+-]+@ust\.edu\.ng\)?/g, '');
  for (const name of LECTURER_NAMES) t = t.split(name).join('the lecturer');
  t = t.replace(/\b(Whyte|Oraye|Abiye-Suku|Oriji|Jaja|Matthias|Cookey|Okwu|Orji|Deedam|Bennett|Omaegbu)'s/g, "the lecturer's");
  t = t.replace(/\b(Whyte|Oraye|Abiye-Suku|Oriji|Jaja|Matthias|Cookey|Okwu|Orji|Deedam|Bennett|Omaegbu)\b/g, 'the lecturer');
  t = t.replace(/the lecturer (&amp;|&) the lecturer/g, 'the lecturers');
  t = t.replace(/Invigilator\s*/g, '');
  return t;
}

// --- templates --------------------------------------------------------------

function head({ title, desc, canonical }) {
  return `<meta charset="UTF-8">
    ${GTAG}
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${desc}">
    <meta name="author" content="Mbosinwa Awunor">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${canonical}">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/postgrad-notes/postgrad-notes.css">`;
}

const NAVBAR = `<nav class="navbar">
        <div class="nav-content">
            <a href="/" class="nav-brand">MA</a>
            <div class="nav-right">
                <a href="/" class="nav-link">Home</a>
                <a href="/postgrad-notes/" class="nav-link">Postgrad Notes</a>
                <button id="theme-toggle" class="theme-toggle-nav" aria-label="Toggle theme">☾</button>
            </div>
        </div>
    </nav>`;

const FOOTER_NOTE = `<footer class="section-footer">
            <p>All materials in this section were written by <a href="/">Mbosinwa Awunor</a> during postgraduate study at Rivers State University. Free to use for your own study — a link back is appreciated.</p>
        </footer>`;

function page({ title, desc, canonical, body }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    ${head({ title, desc, canonical })}
</head>
<body>
    ${NAVBAR}
    <main class="container">
${body}
        ${FOOTER_NOTE}
    </main>
    ${THEME_SCRIPT}
</body>
</html>
`;
}

const crumb = (parts) => `<p class="breadcrumb">${parts.map(([label, href]) => (href ? `<a href="${href}">${label}</a>` : label)).join(' / ')}</p>`;

function docPage(prog, sem, course, pg, bodyHtml) {
  const base = `/postgrad-notes/${prog.slug}/${sem.slug}/${course.slug}`;
  return page({
    title: `${course.code} ${pg.title} — Postgrad Notes — Mbosinwa Awunor`,
    desc: `${course.code} ${course.title}: ${pg.desc}`,
    canonical: `${SITE}${base}/${pg.out}`,
    body: `        ${crumb([['Postgrad Notes', '/postgrad-notes/'], [prog.name, `/postgrad-notes/${prog.slug}/`], [sem.name, `/postgrad-notes/${prog.slug}/${sem.slug}/`], [`${course.code} ${course.title}`, `${base}/`], [pg.title]])}
        <article class="doc">
${bodyHtml}
        </article>`,
  });
}

function coursePage(prog, sem, course) {
  const base = `/postgrad-notes/${prog.slug}/${sem.slug}/${course.slug}`;
  const groups = {};
  for (const p of course.pages) (groups[p.group] ||= []).push(p);

  let sections = '';
  for (const [group, pages] of Object.entries(groups)) {
    sections += `
        <section class="material-group">
            <h2>${group}</h2>
            <div class="material-list">
${pages.map((p) => `                <div class="material-item">
                    <h3><a href="${base}/${p.out}">${p.title}</a></h3>
                    <p>${p.desc}</p>
                    <div class="material-links"><a href="${base}/${p.out}">Read online</a></div>
                </div>`).join('\n')}
            </div>
        </section>`;
  }

  if (course.volumes?.length) {
    sections += `
        <section class="material-group">
            <h2>Study Guides (PDF)</h2>
            <div class="material-list">
${course.volumes.map((v) => `                <div class="material-item">
                    <h3>${v.title}</h3>
                    <p>${v.desc}</p>
                    <div class="material-links"><a class="pdf" href="${base}/${v.base}.pdf">PDF</a><a href="${base}/${v.base}.html">HTML</a></div>
                </div>`).join('\n')}
            </div>
        </section>`;
  }

  if (course.downloads?.length) {
    sections += `
        <section class="material-group">
            <h2>Downloads</h2>
            <div class="material-list">
${course.downloads.map((d) => `                <div class="material-item">
                    <h3>${d.title}</h3>
                    <p>${d.desc}</p>
                    <div class="material-links"><a class="pdf" href="${base}/${d.base}.pdf">PDF</a>${d.srcHtml ? `<a href="${base}/${d.base}.html">HTML</a>` : ''}</div>
                </div>`).join('\n')}
            </div>
        </section>`;
  }

  return page({
    title: `${course.code} — ${course.title} — Postgrad Notes — Mbosinwa Awunor`,
    desc: `${course.title} study materials: ${course.blurb}`,
    canonical: `${SITE}${base}/`,
    body: `        ${crumb([['Postgrad Notes', '/postgrad-notes/'], [prog.name, `/postgrad-notes/${prog.slug}/`], [sem.name, `/postgrad-notes/${prog.slug}/${sem.slug}/`], [`${course.code} ${course.title}`]])}
        <header class="page-header">
            <span class="kicker">${course.code} · ${prog.name}</span>
            <h1>${course.title}</h1>
            <p class="lede">${course.blurb}</p>
        </header>${sections}`,
  });
}

function semesterPage(prog, sem) {
  const cards = sem.courses.map((c) => {
    const count = c.pages.length + (c.volumes?.length || 0) + (c.downloads?.length || 0);
    return `            <a class="course-card" href="/postgrad-notes/${prog.slug}/${sem.slug}/${c.slug}/">
                <span class="code">${c.code}</span>
                <h2>${c.title}</h2>
                <p>${c.blurb}</p>
                <span class="count">${count} materials →</span>
            </a>`;
  }).join('\n');

  return page({
    title: `${sem.name} — ${prog.name} — Postgrad Notes — Mbosinwa Awunor`,
    desc: `${sem.name} study materials from my ${prog.name} at ${prog.school}: lecture notes, cheatsheets, practice questions and exam study guides.`,
    canonical: `${SITE}/postgrad-notes/${prog.slug}/${sem.slug}/`,
    body: `        ${crumb([['Postgrad Notes', '/postgrad-notes/'], [prog.name, `/postgrad-notes/${prog.slug}/`], [sem.name]])}
        <header class="page-header">
            <span class="kicker">${prog.name} · ${sem.name} · ${sem.year}</span>
            <h1>${sem.name} — Study Materials</h1>
            <p class="lede">Lecture notes, cheatsheets, study aids and exam-prep materials for the ${sem.name.toLowerCase()} of my ${prog.name}. All self-authored, all free to use.</p>
        </header>
        <div class="card-grid">
${cards}
        </div>`,
  });
}

function programmePage(prog) {
  const cards = prog.semesters.map((s) => {
    const count = s.courses.length;
    return `            <a class="course-card" href="/postgrad-notes/${prog.slug}/${s.slug}/">
                <span class="code">${s.year}</span>
                <h2>${s.name}</h2>
                <p>${count} courses — lecture notes, cheatsheets, practice questions and exam study guides.</p>
                <span class="count">${count} courses →</span>
            </a>`;
  }).join('\n');

  return page({
    title: `${prog.name} — Postgrad Notes — Mbosinwa Awunor`,
    desc: `Study materials from my ${prog.name} at ${prog.school}, organised by semester.`,
    canonical: `${SITE}/postgrad-notes/${prog.slug}/`,
    body: `        ${crumb([['Postgrad Notes', '/postgrad-notes/'], [prog.name]])}
        <header class="page-header">
            <span class="kicker">${prog.school}</span>
            <h1>${prog.name}</h1>
            <p class="lede">${prog.blurb}</p>
        </header>
        <div class="card-grid">
${cards}
        </div>`,
  });
}

function landingPage() {
  const cards = PROGRAMMES.map((p) => {
    const semCount = p.semesters.length;
    const courseCount = p.semesters.reduce((n, s) => n + s.courses.length, 0);
    return `            <a class="course-card" href="/postgrad-notes/${p.slug}/">
                <span class="code">${p.school}</span>
                <h2>${p.name}</h2>
                <p>${p.blurb}</p>
                <span class="count">${semCount} semester${semCount === 1 ? '' : 's'} · ${courseCount} courses →</span>
            </a>`;
  }).join('\n');

  return page({
    title: 'Postgrad Notes — Postgraduate Study Materials — Mbosinwa Awunor',
    desc: 'Free study materials from my postgraduate studies in Computer Science at Rivers State University: transcribed lecture notes, cheatsheets, practice questions and exam study guides.',
    canonical: `${SITE}/postgrad-notes/`,
    body: `        <header class="page-header">
            <span class="kicker">Study Materials</span>
            <h1>Postgrad Notes</h1>
            <p class="lede">Notes and study materials from my postgraduate journey in Computer Science — PGD, then MSc, then PhD. Transcribed lecture notes, cheatsheets, practice questions and multi-volume exam study guides, organised by programme and semester. All self-authored, all free to use.</p>
        </header>
        <div class="card-grid">
${cards}
        </div>`,
  });
}

// --- build ------------------------------------------------------------------

for (const prog of PROGRAMMES) {
  for (const sem of prog.semesters) {
    for (const course of sem.courses) {
      const dir = join(OUT, prog.slug, sem.slug, course.slug);
      mkdirSync(dir, { recursive: true });

      for (const pg of course.pages) {
        const raw = readFileSync(join(sem.srcDir, course.dir, pg.src), 'utf8');
        const clean = sanitize(raw, course);
        const html = execFileSync('pandoc', ['-f', 'gfm', '-t', 'html5'], { input: clean, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
        writeFileSync(join(dir, pg.out), docPage(prog, sem, course, pg, html));
        console.log(`built ${prog.slug}/${sem.slug}/${course.slug}/${pg.out}`);
      }

      for (const d of course.downloads || []) {
        if (d.srcHtml) {
          const raw = readFileSync(join(sem.srcDir, course.dir, d.srcHtml), 'utf8');
          const outHtml = join(dir, `${d.base}.html`);
          writeFileSync(outHtml, sanitizeVolumeHtml(raw));
          execFileSync(CHROME, [
            '--headless=new', '--disable-gpu', '--no-pdf-header-footer',
            `--print-to-pdf=${join(dir, `${d.base}.pdf`)}`, outHtml,
          ], { stdio: 'pipe' });
          console.log(`sanitized + rendered ${prog.slug}/${sem.slug}/${course.slug}/${d.base}.{html,pdf}`);
        } else if (d.srcPdf) {
          // pre-verified clean of lecturer names — copied as-is
          writeFileSync(join(dir, `${d.base}.pdf`), readFileSync(join(sem.srcDir, course.dir, d.srcPdf)));
          console.log(`copied ${prog.slug}/${sem.slug}/${course.slug}/${d.base}.pdf`);
        }
      }

      for (const v of course.volumes || []) {
        const raw = readFileSync(join(sem.srcDir, course.dir, 'exam-prep', `${v.base}.html`), 'utf8');
        const outHtml = join(dir, `${v.base}.html`);
        writeFileSync(outHtml, sanitizeVolumeHtml(raw));
        execFileSync(CHROME, [
          '--headless=new', '--disable-gpu', '--no-pdf-header-footer',
          `--print-to-pdf=${join(dir, `${v.base}.pdf`)}`, outHtml,
        ], { stdio: 'pipe' });
        console.log(`sanitized + rendered ${prog.slug}/${sem.slug}/${course.slug}/${v.base}.{html,pdf}`);
      }

      writeFileSync(join(dir, 'index.html'), coursePage(prog, sem, course));
    }
    writeFileSync(join(OUT, prog.slug, sem.slug, 'index.html'), semesterPage(prog, sem));
    console.log(`built ${prog.slug}/${sem.slug}/index.html`);
  }
  writeFileSync(join(OUT, prog.slug, 'index.html'), programmePage(prog));
  console.log(`built ${prog.slug}/index.html`);
}

writeFileSync(join(OUT, 'index.html'), landingPage());
console.log('built index.html');
