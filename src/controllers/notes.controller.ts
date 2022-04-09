import {NextFunction, Request, Response} from "express";

import {notesService} from "../services/notes.service";
import {INotes} from "../models/notes.interface";
import {resultStats} from "../helpers/notes.helpers";

class NotesController {
    async createNotes(req: Request, res: Response, next: NextFunction): Promise<Response<INotes>> {
        try {
            const createdNotes = await notesService.createNotes(req.body);
            return res.json(createdNotes);
        } catch (e) {
            next(e)
        }

    }

    async deleteNotes(req: Request, res: Response, next: NextFunction): Promise<Response<INotes>> {
        try {
            const {noteId} = req.params;
            await notesService.deleteNotesById(noteId);
            return res.json(`${noteId} is deleted`);
        } catch (e) {
            next(e);
        }

    }

    async editNotes(req: Request, res: Response, next: NextFunction): Promise<Response<INotes>> {
        try {
            const {noteId} = req.params;
            const notes = req.body;
            const note = await notesService.editNotesById(noteId, notes);
            return res.json(note);
        } catch (e) {
            next(e);
        }

    }

    async retrieveNotes(req: Request, res: Response, next: NextFunction): Promise<Response<INotes>> {
        try {
            const {noteId} = req.params;
            const note = await notesService.findNotesById(noteId);
            console.log(note);
            return res.json(note);
        } catch (e) {
            next(e);
        }

    }

    async getAll(req: Request, res: Response, next: NextFunction): Promise<Response<INotes>> {
        try {
            const notes = await notesService.findNotes(req.query);

            return res.json(notes);
        } catch (e) {
            next(e);
        }

    }

    async statisticNotes(req: Request, res: Response, next: NextFunction): Promise<Response<INotes>> {
        try {
            const notes = await notesService.findNotes(req.query);
            return res.json(resultStats(notes))

        } catch (e) {
            next(e);
        }

    }
}

export const notesController = new NotesController();
