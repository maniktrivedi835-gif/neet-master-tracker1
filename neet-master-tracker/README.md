# NEET Master Tracker

NEET Master Tracker is a modern, mobile-first preparation platform for NEET UG aspirants. It combines planning, study tracking, mock analysis, revision scheduling, PYQ progress, AI coaching, score prediction, notes, resources, habits, and analytics in one dashboard.

## Stack

- Frontend: Next.js, React, TypeScript, Tailwind CSS, shadcn-style UI primitives
- Backend: Node.js, Express
- Database: PostgreSQL with Prisma
- Authentication: Clerk-ready middleware
- Charts: Recharts
- AI: OpenAI API
- Storage: Supabase Storage-ready schema and docs
- Notifications: Firebase Cloud Messaging-ready docs
- Offline: PWA manifest and service worker

## Project Structure

```text
apps/
  web/        Next.js application
  api/        Express API
packages/
  database/   Prisma schema
docs/
  api.md
  deployment.md
```

## Local Setup

```bash
npm install
cp .env.example .env
npm run db:generate
npm run dev:web
npm run dev:api
```

The web app runs on `http://localhost:3000`.
The API runs on `http://localhost:4000`.

## Included Pages

- Student dashboard
- Daily study planner with drag-and-drop ordering
- Subject and chapter tracker
- Study session planning and Pomodoro flow
- Mock test management
- Mistake notebook
- Revision tracker with calendar
- PYQ tracker
- AI study coach
- Notes management
- Resource library
- Study analytics
- Mock test analytics
- Subject analytics
- Revision analytics
- Consistency analytics
- Score prediction analytics

## Database Coverage

The Prisma schema models users, subjects, chapters, chapter progress, study tasks, study sessions, mock tests, mistakes, revisions, PYQ progress, habits, notes, resources, score predictions, and notifications.

## Production Notes

Before launching to thousands of students:

- Connect real Clerk or Firebase Auth.
- Run Prisma migrations against managed PostgreSQL.
- Enable Supabase Storage bucket policies.
- Add FCM web push credentials.
- Add rate limiting to AI endpoints.
- Replace seed UI data with database-backed loaders.
- Add end-to-end tests for critical planning, revision, and mock workflows.
