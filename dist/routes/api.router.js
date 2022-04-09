"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const express_1 = require("express");
const notes_router_1 = require("./notes.router");
const router = (0, express_1.Router)();
router.use("/notes", notes_router_1.notesRouter);
exports.apiRouter = router;
//# sourceMappingURL=api.router.js.map