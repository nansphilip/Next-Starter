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
            <div className="space-y-2">
                <div>
                    <div className="text-xs font-bold">Name</div>
                    <div className="text-sm text-gray-700">{session.user.name}</div>
                </div>
                <div>
                    <div className="text-xs font-bold">Email</div>
                    <div className="text-sm text-gray-700">{session.user.email}</div>
                </div>
                <div>
                    <div className="text-xs font-bold">Verified</div>
                    <div className="text-sm text-gray-700">{session.user.emailVerified ? "Yes" : "No"}</div>
                </div>
                <div>
                    <div className="text-xs font-bold">Image</div>
                    <div className="text-sm text-gray-700">{session.user.image ?? "Null"}</div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <LogoutClient variant="outline" />
            </div>
        </Card>
    );
}
