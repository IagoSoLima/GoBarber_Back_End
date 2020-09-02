import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviders from '@modules/appointments/services/ListProvidersService';

export default class ProvidersControlller {
  async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const listproviders = container.resolve(ListProviders);

    const appointment = await listproviders.execute({
      user_id,
    });

    return response.json(appointment);
  }
}
