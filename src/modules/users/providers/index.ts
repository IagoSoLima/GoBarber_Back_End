import { container } from 'tsyringe';
import IHashProvider from './HashProvider/models/IHashProvider';
import BCryptHshProvider from './HashProvider/implementations/BCryptHashProvider';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHshProvider);
