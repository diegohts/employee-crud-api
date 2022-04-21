/**
 * File: app.js
 * Description: Arquivo responsavel por fazer a conexao com o arquivo 'server.js'
 * Date: 20/04/2022
 * Author: Diego Henrique 
 */

// import express from "express";
// import cors from 'cors';
// import { index } from './routes/index';
// import { employeeRoute } from './routes/employee.routes';

const express = require('express');
const cors = require('cors');

const app = express();

// ==> Rotas da API (Employee):
const index = require('./routes/index');
const employeeRoute = require('./routes/employee.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
app.use('/api/', employeeRoute);

module.exports = app;

// export default app;
