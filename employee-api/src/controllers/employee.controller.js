/**
 * File: controllers/employee.controller.js
 * Description: Arquivo responsavel pela logica do CRUD (API-Employee)
 * Date: 20/04/2022
 * Author: Diego Henrique 
 */

const db = require('../config/database');

// Metodo responsavel por cadastrar um novo colaborador 
exports.createEmployee = async (req, res) => {
  const { name, job_role, salary, birth, employee_registration } = req.body;
  try {
    const { rows } = await db.query(
      "INSERT INTO employee (name, job_role, salary, birth, employee_registration) VALUES ($1, $2, $3, $4, $5)",
      [name, job_role, salary, birth, employee_registration]
    );
    res.status(201).send({
      message: "Employee added successfully!",
      body: {
        employee: { name, job_role, salary, birth, employee_registration },
      },
    });
  } catch (error) {
    console.error('createEmployee', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};

// Metodo responsavel por buscar todos os colaboradores
exports.listAllEmployees = async(req, res) => {
  const response = await db.query(
    "SELECT * FROM employee ORDER BY name ASC" 
  );
  res.status(200).send(response.rows);
};

// Metodo responsavel por buscar o colaborador pelo seu id
exports.findEmployeeById = async(req, res) => {
  const employeeId = req.params.id;
  const response = await db.query(
    "SELECT * FROM employee WHERE employee_id = $1",
    [employeeId]
  );
  res.status(200).send(response.rows);
};