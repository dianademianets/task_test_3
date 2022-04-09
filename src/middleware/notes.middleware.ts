import {NextFunction, Request, Response} from "express";

import {filterNoteValidator} from "../validators/note.validator";
import {ErrorHandler} from "../constants/errors";

class NotesMiddleware {
    async noteValidatorMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const {error, value} = await filterNoteValidator.validate(req.body);

            if (error) {
                next(new ErrorHandler(error.details[0].message));
                return;
            }
            req.body = value;
            next();
        } catch (e) {
            next(e);
        }
    }
}

export const notesMiddleware = new NotesMiddleware();
