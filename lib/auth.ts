import Prisma from "@lib/prisma";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { headers } from "next/headers";

export const auth = betterAuth({
    database: prismaAdapter(Prisma, {
        provider: "mysql",
    }),
    emailAndPassword: {
        enabled: true,
    },
    session: {
        expiresIn: 60 * 30,
        updateAge: 60 * 5
    }
});

const { api } = auth;
const { getSession: getSessionThroughApi } = api;

/**
 * Get the session from server side
 */
export const GetSession = async () => {
    const session = await getSessionThroughApi({
        headers: await headers(),
    });
    return session;
};

/**
 * Type for the session data
 */
export type BetterSessionServer = Awaited<ReturnType<typeof GetSession>>;
