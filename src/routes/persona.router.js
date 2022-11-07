import { Router } from 'express';
import {
  getPersonas,
  postPersonas,
  patchPersonas,
  deletePersonas,
  getPersona,
} from '../controller/persona.controller.js';

const personaRouter = Router();

personaRouter
  .route('/')
  .get(getPersonas)
  .post(postPersonas)
  .patch(patchPersonas)
  .delete(deletePersonas);
personaRouter.get('/:id', getPersona);

export default personaRouter;
