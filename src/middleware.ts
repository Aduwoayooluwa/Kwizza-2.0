import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

//const isQuizRoute = createRouteMatcher(['/quiz(.*)']);
// const isLeaderBoardRoute = createRouteMatcher(['/leaderboard(.*)']);
// const isResultRoute = createRouteMatcher(['/results(.*)']);
// const isAdminRoute = createRouteMatcher(['/admin(.*)']);

export default clerkMiddleware((auth, req) => {
  // Restrict admin route to users with specific role
  // if (isAdminRoute(req)) auth().protect({ role: 'org:admin' });

  // Restrict dashboard routes to signed in users
  //if (isQuizRoute(req)) auth().protect();
  // if (isLeaderBoardRoute(req)) auth().protect();
  // if (isResultRoute(req)) auth().protect();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};