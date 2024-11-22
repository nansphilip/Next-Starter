# Next Starter

Next Starter is a fully auth-ready application.

## Project installation

- Make sure you already had installed:

  - Git
  - Node JS
  - PNPM
  - MySQL

- Install project dependencies

  ```bash
  pnpm install
  ```

- Creates a database user and a password

  ```sql
  CREATE USER 'next-starter-user'@'localhost' IDENTIFIED BY 'next-starter-password';
  ```

  - Allows user to connect to database

  ```sql
  GRANT ALL PRIVILEGES ON *.* TO 'next-starter-user'@'localhost';
  ```

- Add an `.env` file at the root of the project, with the following variables

  - Database connection ([Prisma Docs](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases/connect-your-database-typescript-mysql))

  ```js
  DATABASE_URL=mysql://next-starter-user:next-starter-password@localhost:3306/next-starter-db
  ```

  - Session secret ([Better Auth Docs](https://www.better-auth.com/docs/installation))

  ```js
  BETTER_AUTH_SECRET=session-encryption-key
  BETTER_AUTH_URL=http://localhost:3000
  ```

  - Plunk private key ([Plunk Docs](https://docs.useplunk.com/getting-started/introduction))

  ```js
  PLUNK_API_KEY=plunk-private-key
  ```

- Generate the Prisma client

  ```bash
  pnpm dlx prisma generate
  ```

- Run Prisma database migrations

  ```bash
  pnpm dlx prisma migrate dev --name initial-migration
  ```

- Insert fixtures

  ```bash
  pnpm run fixtures
  ```

- If needed you can reload or reset

  ```bash
  pnpm run reload
  ```
  
  ```bash
  pnpm run reset
  ```

- Run server project

  ```bash
  pnpm run dev
  ```

- (optional)

  Clear your `localhost:3000` browser cookies is you have an error

## Fixtures

There is three types of users.

| Email                         | Password   | User type |
| ----------------------------- | ---------- | --------- |
| alice.dupont@example.com      | User1234!  | User      |
| gabriel.rousseau@example.com  | Modo1234!  | Modo      |
| isabelle.petit@example.com    | Admin1234! | Admin     |

# Deployment

## Init

```bash
pnpm install && pnpm dlx prisma generate && pnpm dlx prisma migrate deploy && pnpm run reload
```

## Build

```bash
pnpm run build
```

## Start

```bash
pnpm run start
```