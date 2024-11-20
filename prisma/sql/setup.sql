-- Creates an user and a password
CREATE USER 'next-starter-user'@'localhost' IDENTIFIED BY 'next-starter-password';

-- Allows user to connect to database
GRANT ALL PRIVILEGES ON *.* TO 'next-starter-user'@'localhost';
