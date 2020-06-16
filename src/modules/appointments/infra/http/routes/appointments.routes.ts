import { Router } from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsControler from '../controllers/AppointmentsControler';

const appointmentRouter = Router();
const appointmentsController = new AppointmentsControler();
appointmentRouter.use(ensureAuthenticated);
// appointmentRouter.get('/', async (request, response) => {
//   const appointment = await appointmentRepository.find();

//   return response.json(appointment);
// });

appointmentRouter.post('/', appointmentsController.create);

export default appointmentRouter;
