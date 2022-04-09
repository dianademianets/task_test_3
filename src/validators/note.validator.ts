import * as Joi from "joi";
import { RegExpEnum } from "../constants/regexp.enum";

export const filterNoteValidator = Joi.object({
    name: Joi.string().max(99).required(),
    date: Joi.string().regex(RegExpEnum.date),
    category: Joi.string().trim().max(50).required(),
    content: Joi.string().min(2).max(999999).required(),
    archived: Joi.boolean()
});

