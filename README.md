# SkillSync
# Competitive Skill Ranking Platform

## Group Project Members

**Developed by:**
- **Kasinath V**
- **B. Dinesh**

---

## Project Overview

SkillSync is an AI-inspired competitive gaming skill ranking platform developed as an academic group project.

The platform simulates a modern esports ranking ecosystem where players can:

- create player sessions
- login securely with human verification
- access competitive matchmaking
- explore esports titles
- receive competitive rankings
- communicate with administrators
- be monitored through an admin analytics dashboard

The project combines modern frontend development, backend server architecture, authentication systems, interactive UI design, and AI-inspired ranking concepts.

---

# ELOX AI

SkillSync introduces:

## **ELOX AI**

ELOX AI is the conceptual gameplay intelligence engine behind SkillSync.

Purpose:

ELOX AI is designed to simulate analysis of:

- gameplay consistency
- competitive performance
- player accuracy
- skill progression
- ranking metrics
- decision-making quality

Concept Statement:

> **ELOX AI evaluates gameplay performance and competitive metrics to determine a player’s true competitive rank.**

This creates a future-ready concept similar to real esports competitive ranking systems.

---
# Folder Structure
```text
SkillSync/
│
├── index.html
├── games.html
├── about.html
├── leaderboard.html
├── admin.html
├── login.html
├── contact.html
│
├── style.css
├── script.js
├── server.js
│
├── package.json
├── package-lock.json
│
└── README.md
```

# Features

## User Authentication

Users can:

- login with username
- use simulated social login
- complete Google reCAPTCHA verification

Authentication features:

- login validation
- human verification
- session persistence
- navbar username display
- automatic redirect after login

---

## Admin Authentication

Protected administrative dashboard access.
## Admin Features

- Admin-only access protection
- Hidden admin navigation for normal users
- Session-based access control

---

## Matchmaking System

Interactive competitive matchmaking simulation featuring:

- player metric input
- matchmaking popup
- loading animations
- automatic redirect to games dashboard

Simulated metrics:

- player identity
- win rate
- K/D ratio
- consistency score

---

## Games Dashboard

Premium esports game interface featuring:

- VALORANT
- Counter Strike 2
- Apex Legends
- Fortnite
- League of Legends
- DOTA 2

Features:

- interactive game cards
- premium hover animations
- category filtering
- search functionality
- launch simulation
- competitive loading effects

---

## Contact Messaging System

Users can send messages through the contact page.

Stored information:

- sender name
- sender email
- message content
- timestamp

Messages are displayed inside:

**Admin Dashboard → Inbox**

---

## Admin Dashboard

Includes:

### User Management
- registered users
- dynamic rank assignment
- editable ranks

Supported ranks:

- ROOKIE
- GOLD
- DIAMOND
- MASTER
- TITAN

### Login Analytics
Tracks:

- total users
- total logins
- authentication history
- timestamps

### Inbox System
Displays:

- user messages
- sender details
- timestamps

---

# Technologies Used

## Frontend

### HTML5
Used for:

- page structure
- forms
- layouts
- navigation

### CSS3
Used for:

- styling
- responsive layouts
- animations

### JavaScript (Vanilla JS)
Used for:

- authentication logic
- admin protection
- matchmaking logic
- animations
- dashboard logic
- contact messaging
- session handling

---

## Backend

### Node.js
Used as backend runtime environment for:

- local server hosting
- backend structure foundation
- future API scalability

### Express.js
Used as backend framework for:

- server setup
- routing
- application hosting

---

## Storage

### Browser localStorage
Used for prototype persistence.

Stores:

- user sessions
- login history
- registered users
- admin state
- contact messages

---

## External Libraries / APIs

### Google reCAPTCHA API
Used for:

- human verification
- bot prevention
- secure login simulation

### Font Awesome
Used for:

- icons
- interface visuals
- UI enhancement

### VanillaTilt.js
Used for:

- 3D hover interactions
- premium animations
- motion effects

---

# Important Implementation Highlights

Key systems implemented:

- frontend authentication logic
- admin route protection
- user session persistence
- contact-to-admin messaging
- matchmaking simulation
- dynamic rank management
- analytics dashboard
- interactive UI animations
- API integration
- Node.js backend hosting

---

# Project Architecture

SkillSync follows a layered architecture.

## Frontend Layer
Handles:

- user interface
- interactions
- animations
- navigation
- form handling

Technologies:

- HTML
- CSS
- JavaScript

---

## Backend Layer
Handles:

- server hosting
- routing
- backend extensibility

Technologies:

- Node.js
- Express.js

---

## Storage Layer
Handles:

- temporary persistence
- user state management

Technology:

- localStorage

Demo credentials:

```txt
Username: admin
Password: admin123
