import { Router } from 'express';
import {
  getTramite,
  getTramites,
  patchTramite,
  postTramite,
  deleteTramite,
  getTipoTramite,
} from '../controller/tramite.controller.js';

const tramiteRouter = Router();

tramiteRouter.route('/').get(getTramites).post(postTramite);
tramiteRouter.route('/:id').get(getTramite).patch(patchTramite).delete(deleteTramite);
tramiteRouter.get('/tipo/:id', getTipoTramite);

export default tramiteRouter;
