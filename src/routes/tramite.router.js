import { Router } from 'express';
import {
  getTramite,
  getTramites,
  patchTramite,
  postTramite,
  deleteTramite,
} from '../controller/tramite.controller.js';

const tramiteRouter = Router();

tramiteRouter.route('/').get(getTramites).post(postTramite);
tramiteRouter.route('/:id').get(getTramite).patch(patchTramite).delete(deleteTramite);

export default tramiteRouter;
