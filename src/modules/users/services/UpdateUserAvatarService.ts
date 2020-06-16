import { injectable, inject } from 'tsyringe';

import path from 'path';
import fs from 'fs';
import uploadConfig from '@config/upload';
import AppError from '@shared/errors/AppError';
import User from '../infra/typeorm/entities/User';
import IUserRepository from '../repositories/IUsersRepository';

interface IRequest {
  user_id: string;
  avatarFileName: string;
}

@injectable()
class UpdateUserAvatarService {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUserRepository,
  ) {}

  public async execute({ user_id, avatarFileName }: IRequest): Promise<User> {
    const user = await this.userRepository.findById(user_id);

    if (!user) {
      throw new AppError('Only authorization users can change avatar', 401);
    }

    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);
      const userAvatarFileExits = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExits) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }

    user.avatar = avatarFileName;

    await this.userRepository.save(user);

    return user;
  }
}

export default UpdateUserAvatarService;
