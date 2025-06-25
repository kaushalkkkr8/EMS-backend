const express= require("express");
const { getAllProjects, createProject, getProjectById } = require("../Controller/projectController");
const createProjectValidation = require("../Middleware/projectValidation");
const router = express.Router();


router.get("/",  getAllProjects);

router.post("/",createProjectValidation,  createProject);

router.get("/:id",  getProjectById);

module.exports = router;