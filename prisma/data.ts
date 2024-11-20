export interface UserFixtures {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    image: string | null;
    role: "USER" | "MODO" | "ADMIN";
    restricted: boolean;
}

export const userData: UserFixtures[] = [
    {
        id: "user1-id",
        name: "Alice Dupont",
        email: "alice.dupont@example.com",
        emailVerified: true,
        image: null,
        role: "USER",
        restricted: false,
    },
    {
        id: "user2-id",
        name: "Bob Martin",
        email: "bob.martin@example.com",
        emailVerified: true,
        image: null,
        role: "USER",
        restricted: false,
    },
    {
        id: "user3-id",
        name: "Chloé Bernard",
        email: "chloe.bernard@example.com",
        emailVerified: true,
        image: null,
        role: "USER",
        restricted: true,
    },
    {
        id: "user4-id",
        name: "David Lambert",
        email: "david.lambert@example.com",
        emailVerified: true,
        image: null,
        role: "USER",
        restricted: false,
    },
    {
        id: "user5-id",
        name: "Emma Leroy",
        email: "emma.leroy@example.com",
        emailVerified: true,
        image: null,
        role: "USER",
        restricted: false,
    },
    {
        id: "user6-id",
        name: "François Moreau",
        email: "francois.moreau@example.com",
        emailVerified: true,
        image: null,
        role: "USER",
        restricted: true,
    },
    {
        id: "modo1-id",
        name: "Gabriel Rousseau",
        email: "gabriel.rousseau@example.com",
        emailVerified: true,
        image: null,
        role: "MODO",
        restricted: false,
    },
    {
        id: "modo2-id",
        name: "Hélène Fournier",
        email: "helene.fournier@example.com",
        emailVerified: true,
        image: null,
        role: "MODO",
        restricted: false,
    },
    {
        id: "admin1-id",
        name: "Isabelle Petit",
        email: "isabelle.petit@example.com",
        emailVerified: true,
        image: null,
        role: "ADMIN",
        restricted: false,
    },
    {
        id: "admin2-id",
        name: "Jean Dubois",
        email: "jean.dubois@example.com",
        emailVerified: true,
        image: null,
        role: "ADMIN",
        restricted: false,
    },
];

export interface AccountFixtures {
    id: string;
    accountId: string;
    providerId: string;
    userId: string;
    password: string | null;
}

export const accountData: AccountFixtures[] = [
    {
        id: "account-user1-id",
        accountId: "user1-id",
        providerId: "credential",
        userId: "user1-id",
        password:
            "eb3841a40d9eca2bbc5314408aa2d9b5:3af534f79d7a7c59a7d2de8bcb246fe81c232ca80315c3eb563e37f34c8bb9fe9ca3ad456ccb0d303c815cf239cc7bebfe33352ee664e490bda95ceafd2fc9e7",
    },
    {
        id: "account-user2-id",
        accountId: "user2-id",
        providerId: "credential",
        userId: "user2-id",
        password:
            "eb3841a40d9eca2bbc5314408aa2d9b5:3af534f79d7a7c59a7d2de8bcb246fe81c232ca80315c3eb563e37f34c8bb9fe9ca3ad456ccb0d303c815cf239cc7bebfe33352ee664e490bda95ceafd2fc9e7",
    },
    {
        id: "account-user3-id",
        accountId: "user3-id",
        providerId: "credential",
        userId: "user3-id",
        password:
            "eb3841a40d9eca2bbc5314408aa2d9b5:3af534f79d7a7c59a7d2de8bcb246fe81c232ca80315c3eb563e37f34c8bb9fe9ca3ad456ccb0d303c815cf239cc7bebfe33352ee664e490bda95ceafd2fc9e7",
    },
    {
        id: "account-user4-id",
        accountId: "user4-id",
        providerId: "credential",
        userId: "user4-id",
        password:
            "eb3841a40d9eca2bbc5314408aa2d9b5:3af534f79d7a7c59a7d2de8bcb246fe81c232ca80315c3eb563e37f34c8bb9fe9ca3ad456ccb0d303c815cf239cc7bebfe33352ee664e490bda95ceafd2fc9e7",
    },
    {
        id: "account-user5-id",
        accountId: "user5-id",
        providerId: "credential",
        userId: "user5-id",
        password:
            "eb3841a40d9eca2bbc5314408aa2d9b5:3af534f79d7a7c59a7d2de8bcb246fe81c232ca80315c3eb563e37f34c8bb9fe9ca3ad456ccb0d303c815cf239cc7bebfe33352ee664e490bda95ceafd2fc9e7",
    },
    {
        id: "account-user6-id",
        accountId: "user6-id",
        providerId: "credential",
        userId: "user6-id",
        password:
            "eb3841a40d9eca2bbc5314408aa2d9b5:3af534f79d7a7c59a7d2de8bcb246fe81c232ca80315c3eb563e37f34c8bb9fe9ca3ad456ccb0d303c815cf239cc7bebfe33352ee664e490bda95ceafd2fc9e7",
    },
    {
        id: "account-modo1-id",
        accountId: "modo1-id",
        providerId: "credential",
        userId: "modo1-id",
        password:
            "1e466a9ea4625667b0afa37f37fb606f:6a004e13b58523fa9258b26607895bb15c28845cf4a216691572cd4cf4e5e518c516f525786cc4a0abce76ac68745c32258e998e8ad721ea6c6aefe8e263f4ef",
    },
    {
        id: "account-modo2-id",
        accountId: "modo2-id",
        providerId: "credential",
        userId: "modo2-id",
        password:
            "1e466a9ea4625667b0afa37f37fb606f:6a004e13b58523fa9258b26607895bb15c28845cf4a216691572cd4cf4e5e518c516f525786cc4a0abce76ac68745c32258e998e8ad721ea6c6aefe8e263f4ef",
    },
    {
        id: "account-admin1-id",
        accountId: "admin1-id",
        providerId: "credential",
        userId: "admin1-id",
        password:
            "572a76ee988aa5655d9365074f38bb4d:8d68bcf63ab0ab080794b4d2a4d66316c120913c81193d1a87be02f832aa0dc3cae646c87726953b78138ebac4a01014c13b2be6b85416e1341877d8f3c07844",
    },
    {
        id: "account-admin2-id",
        accountId: "admin2-id",
        providerId: "credential",
        userId: "admin2-id",
        password:
            "572a76ee988aa5655d9365074f38bb4d:8d68bcf63ab0ab080794b4d2a4d66316c120913c81193d1a87be02f832aa0dc3cae646c87726953b78138ebac4a01014c13b2be6b85416e1341877d8f3c07844",
    },
];
