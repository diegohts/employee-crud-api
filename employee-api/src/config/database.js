/**
 * File: config/database.js
 * Description: Arquivo responsavel pelas 'connectionStrings' (Cosmos DB & PostgreSQL)
 * Date: 20/04/2022
 * Author: Diego Henrique 
 */

const { Pool, Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// Conexão  com a base de dados

const Pool = new Pool({
  connectionString: process.env.DATABASE_URL
});
