import { OrganizationList } from '@clerk/nextjs'

export default function OrgSelectionPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-background">

            {/* <OrganizationList
            afterCreateOrganizationUrl="/organization/:slug"
            afterSelectPersonalUrl="/user/:id"
            afterSelectOrganizationUrl="/organization/:slug"
        /> */}
            <OrganizationList
                afterCreateOrganizationUrl="/"

                afterSelectOrganizationUrl="/"
                appearance={{
                    elements: {
                        rootBox: "mx-auto",
                        card: "shadow-lg"
                    }
                }}
            />
        </div>
    )
}