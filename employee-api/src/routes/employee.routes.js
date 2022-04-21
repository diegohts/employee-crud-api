/**
 * File: routes/employee.routes.js
 * Description: Arquivo responsavel pelas rotas da API
 * Date: 20/04/2022
 * Author: Diego Henrique 
 */

 const router = require('express-promise-router')();
 const employeeController = require('../controllers/employee.controller');
 
 // Definindo as rotas do CRUD - 'Employee'
 
 // Rota responsável por criar um novo 'Colaborador(a)': (POST): localhost:3000/api/employees
 router.post('/employees', employeeController.createEmployee);

 // Rota responsavel por listar todos os colaboradores: (GET): localhost:3000/api/employees
 router.get('/employees', employeeController.listAllEmployees); 

module.exports = router;


