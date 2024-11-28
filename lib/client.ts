import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    baseURL: process.env.BETTER_AUTH_URL,
});

export const {
    signIn,
    signUp,
    signOut,
    useSession,
    updateUser,
    changeEmail,
    listSessions,
    revokeSession,
    revokeOtherSessions,
    revokeSessions,
} = authClient;

/**
 * Type for the session data
 */
export type BetterSessionClient = ReturnType<typeof useSession>;

/**
 * Type for the session list
 */
export type SessionList = {
    id: string;
    userId: string;
    expiresAt: Date;
    ipAddress: string | null | undefined;
    userAgent: string | null | undefined;
};
