import { Router } from "express";

import {notesRouter}  from "./notes.router";

const router = Router();

router.use("/notes", notesRouter);

export const apiRouter = router;
