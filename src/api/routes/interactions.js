const InteractionsController = require("../../controllers/interactions")
const express = require("express");
const router = express.Router();


// Crear nueva interaccion 

router.post("/interaction", InteractionsController.createInteraction);

// Obtener interacciones 

router.get("/interactions", InteractionsController.getInteractions);

//Obtener interaccion

router.get("/interaction/:id", InteractionsController.getInteraction);

//Obtener interaccion por id del profesor

router.get("/interactions/teacher/:id", InteractionsController.getInteractionsFromTeacherId);

// Actualizar interaccion  

router.put("/interaction/:id", InteractionsController.updateInteraction);

// Eliminar interaccion 

router.delete("/interaction/:id", InteractionsController.deleteInteraction);

module.exports = router;