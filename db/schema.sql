--Create the `burgers_db`.
  -- * Switch to or use the `burgers_db`.
  -- * Create a `burgers` table with these fields:
  --   * **id**: an auto incrementing int that serves as the primary key.
  --   * **burger_name**: a string.
  --   * **devoured**: a boolean.

-- drops data base if already exists
DROP DATABASE IF EXISTS burgers_db;
-- creats database
CREATE DATABASE burgers_db;
-- uses database
USE burgers_db;

-- creates table

        CREATE TABLE burgers
(
    id INT AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR (100),
    devoured BOOL NOT NULL,
    
);