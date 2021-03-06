const ClassesController = require("../../controllers/classes")
const express = require("express");
const router = express.Router();


// Crear nueva materia

router.post("/class", ClassesController.createClass);

// Obtener materias 

router.get("/class", ClassesController.getClasses);

// Obtener materia 

router.get("/class/:id", ClassesController.getClass);

// Obtener materias de un usuario 

router.get("/classes/user/:id", ClassesController.getClassesFromUserId);

// Actualizar materia  

router.put("/class/:id", ClassesController.updateClass);

// Eliminar materia 

router.delete("/class/:id", ClassesController.deleteClass);

module.exports = router;