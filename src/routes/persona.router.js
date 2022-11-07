import { Router } from 'express';
import {
  getPersonas,
  postPersonas,
  patchPersonas,
  deletePersonas,
  getPersona,
} from '../controller/persona.controller.js';

const personaRouter = Router();

personaRouter.route('/').get(getPersonas).post(postPersonas);
personaRouter.route('/:id').get(getPersona).patch(patchPersonas).delete(deletePersonas);

export default personaRouter;
