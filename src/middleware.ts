import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('REQ:', request.url);
  return NextResponse.redirect(new URL('https://github.com/prosany'));

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/:path*'],
};
