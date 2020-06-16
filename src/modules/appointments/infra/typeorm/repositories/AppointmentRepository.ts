import { getRepository, Repository } from 'typeorm';
import IAppointmentRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import ICreateAppointmentDTo from '@modules/appointments/dtos/ICreateAppointmentDto';
import Appointment from '../entities/Appointment';

class AppointmentRepositoy implements IAppointmentRepository {
  private ormRepository: Repository<Appointment>;

  constructor() {
    this.ormRepository = getRepository(Appointment);
  }

  public async create({
    provider_id,
    date,
  }: ICreateAppointmentDTo): Promise<Appointment> {
    const appointment = this.ormRepository.create({ provider_id, date });

    await this.ormRepository.save(appointment);

    return appointment;
  }

  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const findAppointment = await this.ormRepository.findOne({
      where: { date },
    });

    return findAppointment;
  }
}

export default AppointmentRepositoy;
