import Prisma from "@lib/prisma";
import { userData, accountData } from "./data";

export const fixtures = async () => {
    try {
        // User table
        for (const { id, name, email, emailVerified, image, role, restricted } of userData) {
            await Prisma.user.create({
                data: { id, name, email, emailVerified, image, role, restricted },
            });
        }

        // Account table
        for (const { id, accountId, providerId, userId, password } of accountData) {
            await Prisma.account.create({
                data: { id, accountId, providerId, userId, password },
            });
        }
 

        return true;
    } catch (error) {
        console.error("An error occurred ->", error);
        return false;
    }
};

export const reset = async () => {
    try {
        await Prisma.session.deleteMany({});
        await Prisma.account.deleteMany({});
        await Prisma.user.deleteMany({});

        return true;
    } catch (error) {
        console.error("An error occurred ->", error);
        return false;
    }
};
