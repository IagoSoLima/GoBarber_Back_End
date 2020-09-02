import { Router } from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../controllers/ProvidersController';

const providersController = Router();
const ProviderController = new ProvidersController();
providersController.use(ensureAuthenticated);

providersController.get('/', ProviderController.index);

export default providersController;
