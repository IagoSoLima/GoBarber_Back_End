import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import User from '../infra/typeorm/entities/User';
import IUserRepository from '../repositories/IUsersRepository';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUserRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ name, email, password }: IRequest): Promise<User> {
    const checkUserExist = await this.userRepository.findByEmail(email);

    if (checkUserExist) {
      throw new AppError('Email address already used.');
    }

    const hashPassword = await this.hashProvider.generateHash(password);
    const user = await this.userRepository.create({
      name,
      email,
      password: hashPassword,
    });

    return user;
  }
}

export default CreateUserService;
