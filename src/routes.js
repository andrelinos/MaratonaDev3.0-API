import { Router } from 'express';

import DonorsController from './app/controllers/DonorsController';

const routes = new Router();

routes.get('/donors', DonorsController.index);

export default routes;
