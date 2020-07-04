import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import ApponintmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentRepository';

container.registerSingleton<IAppointmentsRepository>(
  'ApponintmentsRepository',
  ApponintmentsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
