export { default } from "next-auth/middleware";

export const config = {
  /*
   * Match all request paths except for the ones starting with:
   * -  / (Landing page)
   * - api (API routes)
   * - _next/static (static files)
   * - _next/image (image optimization files)
   * - favicon.ico (favicon file)
   */
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)", "/"],
};
