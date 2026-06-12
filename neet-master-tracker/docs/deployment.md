# Deployment

## Frontend

Deploy `apps/web` to Vercel.

1. Set root directory to `apps/web`.
2. Add environment variables from `.env.example`.
3. Run build command: `npm run build`.

## Backend

Deploy `apps/api` to Render, Railway, Fly.io, or a Node-compatible platform.

1. Set build command: `npm run build`.
2. Set start command: `npm run start`.
3. Add `DATABASE_URL`, `OPENAI_API_KEY`, Supabase, Firebase, and Clerk keys.

## Database

Use PostgreSQL through Supabase, Neon, Railway, or RDS.

Run:

```bash
npm run db:generate
npm run db:migrate
```

## Storage

Supabase Storage should be used for handwritten notes, PDFs, and mistake screenshots.

Suggested buckets:

- `notes`
- `mistakes`
- `resources`

## Notifications

Firebase Cloud Messaging can send:

- Study reminders
- Revision alerts
- Mock test alerts
- Goal deadline nudges
