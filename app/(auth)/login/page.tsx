import Card from "@comps/server/Card";
import LoginClient from "./client";

export default function LoginPage() {
    return (
        <Card className="w-min space-y-4">
            <h1 className="text-center text-xl font-bold">Login</h1>
            <div className="text-wrap text-xs">Enter your personal informations to subscribe.</div>
            <LoginClient />
        </Card>
    );
}
