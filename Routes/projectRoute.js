const express = require("express");
const { getAllProjects, createProject, getProjectById, getProjectByEngineerId, updateProject, deleteProject } = require("../Controller/projectController");
const createProjectValidation = require("../Middleware/projectValidation");
const router = express.Router();

router.get("/", getAllProjects);

router.post("/", createProjectValidation, createProject);

router.get("/:id", getProjectById);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);
router.get("/engineer/:engineerId", getProjectByEngineerId);

module.exports = router;
