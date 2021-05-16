import { getCustomRepository, Repository } from 'typeorm';
import { Users } from '../entities/Users';
import { UsersRepository } from '../repositories/UsersRepository';

class UsersService {
  private usersRepository: Repository<Users>;
  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }
  async index<Users>() {
    const userExists = await this.usersRepository.find();
    if (userExists) {
      return userExists;
    }
  }
  async findById(id: string) {
    const userExists = await this.usersRepository.findOne({ id });
    if (userExists) {
      return userExists;
    }
  }
  async create(
    name: string,
    email: string,
    whatsapp: string,
    social_medias: string,
    city: string,
    uf: string
  ) {
    const userExists = await this.usersRepository.findOne({
      name,
      email,
      whatsapp,
      social_medias,
      city,
      uf,
    });

    if (userExists) {
      return userExists;
    }

    const user = this.usersRepository.create({
      name,
      email,
      whatsapp,
      social_medias,
      city,
      uf,
    });

    await this.usersRepository.save(user);

    return user;
  }
  async update(
    id: string,
    name: string,
    email: string,
    whatsapp: string,
    social_medias: string,
    city: string,
    uf: string
  ) {
    const userId = await this.usersRepository.findOne({
      id,
    });

    if (userId) {
      const updateUser = this.usersRepository.merge(userId, {
        name,
        email,
        whatsapp,
        social_medias,
        city,
        uf,
      });
      await this.usersRepository.save(userId);
      return updateUser;
    }
  }
  async delete(id: string) {
    const deleteUser = this.usersRepository.delete(id);

    return deleteUser;
  }
}

export { UsersService };
