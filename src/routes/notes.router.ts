import {Router} from "express";

import {notesController} from "../controllers/notes.controller";
import {notesMiddleware} from "../middleware/notes.middleware";

const router = Router();

router.post("/",  notesMiddleware.noteValidatorMiddleware, notesController.createNotes);
router.delete("/:noteId", notesController.deleteNotes);
router.patch("/:noteId", notesController.editNotes);
router.get("/:noteId", notesController.retrieveNotes);
router.get("/", notesController.getAll);
router.post("/stats", notesController.statisticNotes);

export const notesRouter = router;
