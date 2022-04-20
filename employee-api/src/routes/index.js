/**
 * File: routes/index.js
 * Description: Arquivo responsavel pela chamada da API na aplicacao no lado do Backend
 * Date: 20/04/2022
 * Author: Diego Henrique 
 */

// import { Router } from 'express'; 
const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Seja bem vindo(a) a API Node.js + PostgreSQL + Azure',
    version: '1.0.0'
  });
});

module.exports = router;