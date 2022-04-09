import {Document, Model, model, Schema} from "mongoose";

import { INotes } from "../models/notes.interface";

export type NotesType = INotes & Document

export const NotesSchema: Schema = new Schema<INotes>({
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
    archived:{
        type: Boolean,
        default:false
    }
}, {
    timestamps: true
});

export const notesModel: Model<NotesType> = model<NotesType>("notes", NotesSchema);
