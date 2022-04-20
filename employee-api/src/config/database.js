/**
 * File: config/database.js
 * Description: Arquivo responsavel pelas 'connectionStrings' (Cosmos DB & PostgreSQL)
 * Date: 20/04/2022
 * Author: Diego Henrique 
 */

const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// Conexão  com a base de dados

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('error', (error, client) => {
  console.log('Unexpected error on idle client', error);
  process.exit(-1);
});

pool.on('connect', () => {
  console.log('Base de dados conectado com sucesso!');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};