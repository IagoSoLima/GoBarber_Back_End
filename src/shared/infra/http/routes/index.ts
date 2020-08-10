import { Router } from 'express';
import appointmentRouter from '@modules/appointments/infra/http/routes/appointments.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import PasswordRouter from '@modules/users/infra/http/routes/password.routes';

const routes = Router();
routes.use('/appointments', appointmentRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', PasswordRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', PasswordRouter);

export default routes;
