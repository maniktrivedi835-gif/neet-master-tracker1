# API Overview

The project includes two API surfaces:

- Next.js route handlers for UI-adjacent features: `/api/ai/analyze` and `/api/prediction`.
- Express service in `apps/api` for dashboard data, planning, mock tests, and AI analysis.

## Express Routes

- `GET /health`: service health check.
- `GET /progress/dashboard`: current dashboard summary.
- `GET /planner/today`: daily plan.
- `POST /planner/reschedule`: auto-reschedule missed tasks.
- `GET /tests`: mock test list.
- `POST /ai/analyze`: AI performance insights.

## Authentication

The web app includes Clerk middleware. Set these environment variables:

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`

If Clerk keys are not present, the demo dashboard remains accessible for local preview.

## AI

Set `OPENAI_API_KEY` for live recommendations. Without it, the app returns safe sample insights.
