import { auth } from "@/auth"

export default auth((req) => {
  // req.auth contains the session
})

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
