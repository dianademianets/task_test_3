"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notesController = void 0;
const notes_service_1 = require("../services/notes.service");
const notes_helpers_1 = require("../helpers/notes.helpers");
class NotesController {
    createNotes(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdNotes = yield notes_service_1.notesService.createNotes(req.body);
                return res.json(createdNotes);
            }
            catch (e) {
                next(e);
            }
        });
    }
    deleteNotes(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { noteId } = req.params;
                yield notes_service_1.notesService.deleteNotesById(noteId);
                return res.json(`${noteId} is deleted`);
            }
            catch (e) {
                next(e);
            }
        });
    }
    editNotes(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { noteId } = req.params;
                const notes = req.body;
                const note = yield notes_service_1.notesService.editNotesById(noteId, notes);
                return res.json(note);
            }
            catch (e) {
                next(e);
            }
        });
    }
    retrieveNotes(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { noteId } = req.params;
                const note = yield notes_service_1.notesService.findNotesById(noteId);
                console.log(note);
                return res.json(note);
            }
            catch (e) {
                next(e);
            }
        });
    }
    getAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const notes = yield notes_service_1.notesService.findNotes(req.query);
                return res.json(notes);
            }
            catch (e) {
                next(e);
            }
        });
    }
    statisticNotes(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const notes = yield notes_service_1.notesService.findNotes(req.query);
                return res.json((0, notes_helpers_1.resultStats)(notes));
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.notesController = new NotesController();
//# sourceMappingURL=notes.controller.js.map