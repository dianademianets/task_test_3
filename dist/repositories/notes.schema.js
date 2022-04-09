"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notesModel = exports.NotesSchema = void 0;
const mongoose_1 = require("mongoose");
exports.NotesSchema = new mongoose_1.Schema({
    name: {
        type: String
    },
    date: {
        type: String
    },
    category: {
        type: String
    },
    content: {
        type: String
    },
    archived: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});
exports.notesModel = (0, mongoose_1.model)('notes', exports.NotesSchema);
//# sourceMappingURL=notes.schema.js.map