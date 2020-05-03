import { startOfHour } from 'date-fns';
import Appointment from '../models/Appointment';
import AppointmentRepositoy from '../repositories/AppointmentRepository';

interface RequestDTO {
  provider: string;
  date: Date;
}

class CreateAppointmentService {
  private appointmentRepository: AppointmentRepositoy;

  constructor(appointmentRepository: AppointmentRepositoy) {
    this.appointmentRepository = appointmentRepository;
  }

  public execute({ date, provider }: RequestDTO): Appointment {
    const appointmentDate = startOfHour(date);

    const finAppointmentInSameDate = this.appointmentRepository.findByDate(
      appointmentDate,
    );

    if (finAppointmentInSameDate) {
      throw Error('This appointment is already booked');
    }

    const appointment = this.appointmentRepository.create({
      provider,
      date: appointmentDate,
    });
    return appointment;
  }
}

export default CreateAppointmentService;
