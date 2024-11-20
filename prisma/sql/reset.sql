-- Deletes the database user
DROP USER 'next-starter-user'@'localhost';

-- Delete the database
DROP DATABASE `next-starter-db`;

-- Shows users privileges
SHOW GRANTS FOR 'next-starter-user'@'localhost';
-- or for server
SHOW GRANTS FOR 'next-starter-user'@'%';

-- Shows all tables for the database
SHOW TABLES FROM `next-starter-db`;

-- Shows all users
SELECT User FROM mysql.user;

-- Shows all databases
SHOW DATABASES;