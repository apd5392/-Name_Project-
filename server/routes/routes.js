const { Router } = require("express");
const router = Router();
const controllers = require("../controllers/controller");

router.get("/", controllers.getObjects); //quick away to access getObjects from controller folder
router.get("/objects/:id", controllers.getObjectById);

router.post("/objects", controllers.createObject);

router.put("/objects/:id", controllers.updateObject);
