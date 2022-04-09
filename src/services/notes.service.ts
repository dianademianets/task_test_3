import {INotes} from "../models/notes.interface";
import {notesModel} from "../database/notes.schema";

class NotesService {
    createNotes(notes: Partial<INotes>): Promise<INotes> {
        const notesToCreate = new notesModel(notes);
        return notesToCreate.save();
    }

    deleteNotesById(noteId: string): Promise<INotes> {
        return notesModel.findByIdAndRemove(noteId).lean().exec();
    }

    editNotesById(noteId: string, update:Partial<INotes>) {
        return  notesModel.updateOne({noteId}, update, {new: true}).lean().exec();
    }

    findNotesById(noteId: string): Promise<INotes | null> {
        return notesModel.findById(noteId).lean().exec();
    }

    findNotes(notes: any): Promise<INotes[] | []> {
        return notesModel.find(notes).lean().exec();
    }
}

export const notesService = new NotesService();
