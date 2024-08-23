const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

const connector = mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const setupDatabase = async () => {
  try {
      const connection = await mysql.createConnection({
          host: process.env.DATABASE_HOST,
          user: process.env.DATABASE_USER,
          password: process.env.DATABASE_PASSWORD,
      });

      await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DATABASE_NAME}`);
      console.log("Database created or already exists");

      await connection.changeUser({ database: process.env.DATABASE_NAME });

      await connection.query(`CREATE TABLE IF NOT EXISTS schools (
          id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          address VARCHAR(255) NOT NULL,
          latitude FLOAT NOT NULL,
          longitude FLOAT NOT NULL
      )`);
      console.log("Table created or already exists");

      await connection.end(); // Close the initial connection
  } catch (err) {
      console.error("Database setup error:", err.message);
  }
};



module.exports ={ connector, setupDatabase}; 
