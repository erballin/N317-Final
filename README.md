# Code Documentation Bot

#### Group Members: Apollo B. | Onesti B. | Haven H. | Pierce I.

---

**Project Topic:** AI-Enhanced Documentation

---

**Project Goal / Problem Statement**

Writing and updating the documentation of codebases takes a significant amount of time from developers. Missing comments, outdated information, and inconsistent formatting are factors that can lead to frustration, confusion, and poor credibility. The goal of our project is to simplify this process by developing a platform that will automatically generate readable and well-organized, documentation based on pasted code snippets.

Our application will be built using Next.js, showing in-class concepts such as state management, routing, reusable components, and built-in error handling. Users will simply paste code snippets, and our system will generate organized documentation that contains class descriptions, parameter lists, return value summaries, and markdown formatting.

The use of our project will cut down on the time and work it takes to write documentation, while still making sure it is accurate and consistent.

**Expected Output / Demo Idea**

Our demo will show a user pasting code and receiving AI-generated documentation in a clean, formatted layout.

---

### Core Features

**Home Page**

- Clean landing screen with a call to action button.
- “Generate” > Leads to Code Input Page

**Code Input Page**

- Text are for code input
- Button to generate documentation

**Documentation Output Page**

- Rendered documentation

### Mockup Description

- Nav Bar: Home | Generate | About
- Main Input Card: Large code box + “Generate” button
- Output Card: Documentation view
- Footer: Small Links to GitHub / About

---

### Roles of Group Members

- Onesti Brookins - Frontend UI/UX Lead

  - Builds core page layouts and styling
  - Creates reusable components (buttons, layout wrappers, input cards)

- Apollo - Routing & State Management Lead

  - Implements Next.js routing for home > input > output
  - Manages global state for code input/output

- Pierce - AI Processing & Documentation

  - Builds function that sends code to the documentation generator API
  - Handles formatting, markdown rendering, and error cases

- Haven Hamelin - Component Architecture & Error Handling
  - Creates error pages, loading states, and fallback UI.
  - Guarantee components follow clean architecture principles.

### Everyone will collaborate on the deliverables

- Proposal Paper
- Coding
- PPT
