import { Controller, Get, Res } from '@nestjs/common';
import { NodeMailerService } from './nodemailer.service';

@Controller()
export class NodeMailerController {
//   constructor(private readonly nodeMailerService: NodeMailerService
//   ) {}

//   @Get()
//   sendMailer(@Res() response: any) {
//     const mail = this.nodeMailerService.sendMail();

//     return response.status(200).json({
//       message: 'success',
//       mail,
//     });
//   }
}
