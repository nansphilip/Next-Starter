import Prisma from "@lib/prisma";
import { fruitData, userData } from "./data";

export const fixtures = async () => {
    try {
        // User table
        for (const { name, email, emailVerified, image, role, password } of userData) {
            const createdUser = await Prisma.user.create({
                data: {
                    name,
                    email,
                    emailVerified,
                    image,
                    role,
                    Account: {
                        create: {
                            providerId: "credential",
                            accountId: "user-id",
                            password,
                        },
                    },
                },
                include: {
                    Account: true,
                },
            });

            await Prisma.account.update({
                where: {
                    id: createdUser.Account[0].id,
                },
                data: {
                    providerId: createdUser.Account[0].providerId,
                    accountId: createdUser.id,
                    password: createdUser.Account[0].password,
                },
            });
        }

        for (const { name } of fruitData) {
            await Prisma.fruit.create({
                data: {
                    name,
                },
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
