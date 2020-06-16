import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import UsersControllerer from '../controllers/UsersController';
import UserAvatarControllerer from '../controllers/UserAvatarController';

const usersRouter = Router();
const usersController = new UsersControllerer();
const userAvatarController = new UserAvatarControllerer();
const upload = multer(uploadConfig);

usersRouter.post('/', usersController.create);

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  userAvatarController.update,
);

export default usersRouter;
