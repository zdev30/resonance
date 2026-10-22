import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from "next/server";
// export default clerkMiddleware();



export default clerkMiddleware(async (auth, req) => {
    // Important: This is not an auth guarantee, only
    // a performance optimization for signed-out users.
    const { userId, orgId } = await auth();
    const pathname = req.nextUrl.pathname
    if (pathname === '/' || pathname.startsWith('/')) {
        const { isAuthenticated, redirectToSignIn } = await auth()

        if (!isAuthenticated) return redirectToSignIn()
    }

    if (pathname === '/sign-in' || pathname.startsWith('/sign-in/')) {
        return NextResponse.next();
    }

    if (pathname === '/sign-up' || pathname.startsWith('/sign-up/')) {
        return NextResponse.next();
    }

    // Protect non-public routes
    if (!userId) {
        await auth.protect();
    }

    // Allow org selection page
    if (pathname === '/org-selection' || pathname.startsWith('/org-selection/')) {
        return NextResponse.next();
    }

    // For all protected routes, ensure org is selected
    if (userId && !orgId) {
        const orgSelection = new URL("/org-selection", req.url);
        return NextResponse.redirect(orgSelection);
    }


    return NextResponse.next();

    // if (pathname === '/dashboard' || pathname.startsWith('/dashboard/')) {
    //     const { isAuthenticated, redirectToSignIn } = await auth()

    //     if (!isAuthenticated) return redirectToSignIn()
    // }
})

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for Clerk's auto-proxy path
        '/__clerk/:path*',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};