/**
 * File: server.js
 * Description: Arquivo responsavel por toda a configuracao e execucao do Backend ('Employee')
 * Date: 20/04/2022
 * Author: Diego Henrique 
 */

//import { app } from './src/app';
const app = require('./src/app');

const PORT = process.env.port || 3000;

app.listen(PORT, () => {
  console.log('Aplicação sendo executada na porta:', PORT);
});

