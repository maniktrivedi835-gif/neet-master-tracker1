import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/", "/api(.*)"]);

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request) && process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    await auth.protect();
  }
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"]
};
