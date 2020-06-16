import { Response, Request } from 'express';
import UpdateUserAvatarService from 'modules/users/services/UpdateUserAvatarService';

import { container } from 'tsyringe';

export default class UsersControllerer {
  async update(request: Request, response: Response): Promise<Response> {
    const updateUserAvatarService = container.resolve(UpdateUserAvatarService);
    const user = await updateUserAvatarService.execute({
      user_id: request.user.id,
      avatarFileName: request.file.filename,
    });

    delete user.password;

    return response.json(user);
  }
}
