import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

// Routes that require authentication
const protectedRoutes = [
  '/profile',
  '/profile/edit',
  '/success-stories/new',
  '/glossary/new',
  '/tools/new',
];

// Routes that match patterns (e.g., /success-stories/123/edit)
const protectedPatterns = [
  /^\/success-stories\/\d+\/edit$/,
  /^\/glossary\/\d+\/edit$/,
  /^\/tools\/\d+\/edit$/,
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if route is protected
  const isProtectedRoute = protectedRoutes.includes(pathname) ||
    protectedPatterns.some(pattern => pattern.test(pathname));

  if (!isProtectedRoute) {
    return NextResponse.next();
  }

  // Get the token to check authentication
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // If not authenticated, redirect to sign-in
  if (!token) {
    const url = new URL('/signin', request.url);
    url.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(url);
  }

  // User is authenticated, allow access
  return NextResponse.next();
}

// Configure which routes use this middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
};
