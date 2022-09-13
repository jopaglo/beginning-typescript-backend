import { Request , Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  {id: 1, name: 'Joao Paulo' , email: 'joao@joao.com.br'}
];

export default {
  async index (req: Request, res: Response){
    return res.json(users);
  },

  async create(req: Request, res: Response){
    const emailService = new EmailService();

    await emailService.sendMail({
      to: {name: 'Joao' , email: 'joao@joao.com.br'} , 
      message: {
      body: 'Seja bem vindo a plataforma',
      subject: 'Boas vindas!'}
    });

    return res.json({ message: 'Usuario criado com sucesso!'});

  }

}