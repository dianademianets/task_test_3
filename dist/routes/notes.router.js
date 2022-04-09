"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notesRouter = void 0;
const express_1 = require("express");
const notes_controller_1 = require("../controllers/notes.controller");
const notes_middleware_1 = require("../middleware/notes.middleware");
const router = (0, express_1.Router)();
router.post("/", notes_middleware_1.notesMiddleware.noteValidatorMiddleware, notes_controller_1.notesController.createNotes);
router.delete("/:noteId", notes_controller_1.notesController.deleteNotes);
router.patch("/:noteId", notes_controller_1.notesController.editNotes);
router.get("/:noteId", notes_controller_1.notesController.retrieveNotes);
router.get("/", notes_controller_1.notesController.getAll);
router.post("/stats", notes_controller_1.notesController.statisticNotes);
exports.notesRouter = router;
//# sourceMappingURL=notes.router.js.map