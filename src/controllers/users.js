const e = require("express");
const pool = require("../db");

class UsersController {
  async getUsers(req, response) {
    try {
      await pool.query('SELECT * FROM usuario;', function (e, res) {
        if (e) throw e;
        response.status(200).json(res.rows)
      });
    } catch (e) {
      response.status(400).json(e)
    }
  }

  async getUser(req, response) {
    try {
      const { id } = req.params;
      await pool.query('SELECT * FROM usuario WHERE cedula = $1;', [id], function (e, res) {
        if (e) throw e;
        response.status(200).json(res.rows[0])
      });
    } catch (e) {
      response.status(400).json(e)
    }
  }

  async createUser(req, response) {
    try {
      const {
        cedula,
        idCarrera,
        isAdmin,
        rol,
        nombre,
        apellido,
        email,
        clave,
        telefono,
      } = req.body;
      await pool.query('INSERT INTO usuario (cedula, id_carrera, is_admin, rol, nombre, apellido, email, clave, telefono) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9);',
        [cedula, idCarrera, isAdmin, rol, nombre, apellido, email, clave, telefono],
        function (e, res) {
          if (e) throw e;
          response.status(200).json('Usuario creado')
        });
    } catch (e) {
      response.status(400).json(e)
    }
  }


  async updateUser(req, response) {
    try {
      const { id } = req.params;
      const {
        idCarrera,
        isAdmin,
        rol,
        nombre,
        apellido,
        email,
        clave,
        telefono,
      } = req.body;
      await pool.query('UPDATE usuario SET id_carrera=$1, is_admin=$2, rol=$3, nombre=$4, apellido=$5, email=$6, clave=$7, telefono=$8 WHERE cedula=$9',
        [idCarrera, isAdmin, rol, nombre, apellido, email, clave, telefono, id],
        function (e, res) {
          if (e) throw e;
          response.status(200).json('Usuario actualizado')
        });
    } catch (e) {
      response.status(400).json(e)
    }
  }

  async deleteUser(req, response) {
    try {
      const { id } = req.params;
      await pool.query('DELETE FROM usuario WHERE cedula = $1;', [id], function (e, res) {
        if (e) throw e;
        response.status(200).json('Usuario borrado')
      });
    } catch (e) {
      response.status(400).json(e)
    }
  }
}

module.exports = new UsersController()
