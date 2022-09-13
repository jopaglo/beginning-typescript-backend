interface IMailTo{
  name: string,
  email: string,
}

interface IMailMessage{
  subject: string,
  body: string,
  attacment?: string[],
}

// DTO = data transfer object
interface IMessageDTO {
  to: IMailTo,
  message: IMailMessage,
}

// tipando a classe/metodo com implements
interface IEmailService{
  sendMail(request: IMessageDTO): void; 
}


class EmailService implements IEmailService {
  sendMail({to, message}: IMessageDTO){
    console.log(`Email enviado para ${to.name} : ${message.subject}`);
  }
}

export default EmailService;