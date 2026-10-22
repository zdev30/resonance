'use client'
import { Button } from "@/components/ui/button";

import { toast } from "sonner"
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

// import { requireOrganization } from "@/lib/auth";

// export default async function Home() {
//   const { userId, orgId } = await requireOrganization();
//   return (
//     <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background">
//       <h1>Welcome to Resonance</h1>
//       <div className="flex items-center gap-4">
//         <OrganizationSwitcher />
//         <UserButton />
//       </div>
//     </div>
//   );

// }


// import { auth } from '@clerk/nextjs/server'

// export default async function Home() {
//   await auth.protect()
//   return (
//     <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background">
//       <h1>Welcome to Resonance</h1>
//       <div className="flex items-center gap-4">
//         <OrganizationSwitcher />
//         <UserButton />
//       </div>
//     </div>
//   );
// }


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background">
      <h1>Welcome to Resonance</h1>
      <div className="flex items-center gap-4">
        <OrganizationSwitcher />
        <UserButton />
      </div>
    </div>
  );
}
