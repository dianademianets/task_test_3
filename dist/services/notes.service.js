"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notesService = void 0;
const notes_schema_1 = require("../database/notes.schema");
class NotesService {
    createNotes(notes) {
        const notesToCreate = new notes_schema_1.notesModel(notes);
        return notesToCreate.save();
    }
    deleteNotesById(noteId) {
        return notes_schema_1.notesModel.findByIdAndRemove(noteId).lean().exec();
    }
    editNotesById(noteId, update) {
        return notes_schema_1.notesModel.updateOne({ noteId }, update, { new: true }).lean().exec();
    }
    findNotesById(noteId) {
        return notes_schema_1.notesModel.findById(noteId).lean().exec();
    }
    findNotes(notes) {
        return notes_schema_1.notesModel.find(notes).lean().exec();
    }
}
exports.notesService = new NotesService();
//# sourceMappingURL=notes.service.js.map