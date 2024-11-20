import { GetSession } from "@lib/auth";
import { redirect } from "next/navigation";
import LogoutClient from "@comps/client/Logout";
import Card from "@comps/server/Card";

export default async function ProfilePage() {
    const session = await GetSession();
    if (!session) {
        redirect("/login");
    }

    return (
        <Card className="space-y-3">
            <h1 className="text-xl font-bold">Profile</h1>
            <div>
                <div>{session.user.name}</div>
                <div>{session.user.email}</div>
                <div>{session.user.emailVerified}</div>
                <div>{session.user.image}</div>
            </div>
            <div className="flex items-center justify-center">
                <LogoutClient variant="outline" />
            </div>
        </Card>
    );
}
