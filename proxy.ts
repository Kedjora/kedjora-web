import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { routing } from '@/i18n/routing';

const handleI18nRouting = createMiddleware(routing);

/**
 * Proxy function for handling internationalization routing
 * This replaces the deprecated middleware.ts convention in Next.js 16+
 */
export function proxy(request: NextRequest) {
  return handleI18nRouting(request);
}

export const config = {
  // Match all pathnames except for
  // - API routes
  // - _next (Next.js internals)
  // - _vercel (Vercel internals)
  // - Static files (images, fonts, etc.)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)',],
};

