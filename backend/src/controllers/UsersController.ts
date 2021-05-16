import { Request, Response } from 'express';
import { UsersService } from '../services/UsersService';

class UsersController {
  async index(req: Request, res: Response): Promise<Response> {
    const userService = new UsersService();

    const findUsers = await userService.index();

    return res.json(findUsers);
  }
  async findUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const userService = new UsersService();

    const findUser = await userService.findById(id);

    return res.json(findUser);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { name, email, whatsapp, social_medias, city, uf } = req.body;

    const userService = new UsersService();

    const registerUser = await userService.create(
      name,
      email,
      whatsapp,
      social_medias,
      city,
      uf
    );
    return res.json(registerUser);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, email, whatsapp, social_medias, city, uf } = req.body;

    const userService = new UsersService();

    const updateUser = await userService.update(
      id,
      name,
      email,
      whatsapp,
      social_medias,
      city,
      uf
    );

    return res.json(updateUser);
  }
  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const userService = new UsersService();

    const deleteUser = await userService.delete(id);

    return res.json(deleteUser);
  }
}

export { UsersController };
