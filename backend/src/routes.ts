import { Router } from 'express';
import { UsersController } from './controllers/UsersController';
import { celebrate, Joi } from 'celebrate';

const routes = Router();

const usersController = new UsersController();

routes.get('/users', usersController.index);
routes.get('/users/:id', usersController.findUser);

routes.post(
  '/users',
  celebrate(
    {
      body: Joi.object().keys({
        name: Joi.string().required().min(2).max(100),
        email: Joi.string().required().email().min(2).max(100),
        whatsapp: Joi.number().required(),
        social_medias: Joi.string().required(),
        city: Joi.string().required().min(2),
        uf: Joi.string().required().min(1).max(2),
      }),
    },
    { abortEarly: false }
  ),
  usersController.create
);
routes.put('/users/:id', usersController.update);
routes.delete('/users/:id', usersController.delete);

export { routes };
