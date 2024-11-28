import Prisma from "@lib/prisma";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { headers } from "next/headers";
import { SendEmail } from "./plunk";

const baseUrl = process.env.BETTER_AUTH_URL;

export const auth = betterAuth({
    database: prismaAdapter(Prisma, {
        provider: "mysql",
    }),
    emailAndPassword: {
        enabled: true,
    },
    emailVerification: {
        sendOnSignUp: true,
        autoSignInAfterVerification: true,
        sendVerificationEmail: async ({ user, token }) => {
            const callbackURL = "/profile";
            const urlToken =
                baseUrl +
                "/api/auth/verify-email?token=" +
                token +
                "&callbackURL=" +
                baseUrl +
                callbackURL;

            // Send email template
            await SendEmail({
                subject: "Welcome! Let's verify your email.",
                email: user.email,
                url: urlToken,
            });
        },
    },
    user: {
        changeEmail: {
            enabled: true,
            sendChangeEmailVerification: async ({ newEmail, token }) => {
                const callbackURL = "/profile";
                const urlToken =
                    baseUrl +
                    "/api/auth/verify-email?token=" +
                    token +
                    "&callbackURL=" +
                    baseUrl +
                    callbackURL;

                // Send email template
                await SendEmail({
                    subject: "Hey! Let's verify your new email.",
                    email: newEmail,
                    url: urlToken,
                });
            },
        },
    },
    session: {
        expiresIn: 60 * 30,
        updateAge: 60 * 5,
        // cookieCache: {
        //     enabled: true,
        //     maxAge: 60 * 5
        // }
    },
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
