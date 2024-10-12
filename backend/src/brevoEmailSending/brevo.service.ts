import { Injectable } from '@nestjs/common';
import { User } from 'src/users/user.interface';
import * as Brevo from '@getbrevo/brevo';


@Injectable()
export class BrevoService {
    async sendVerificationEmailToGuest(user: User, application_id: number, guestToken: string): Promise<boolean> {
        try {
            const apiInstance = new Brevo.TransactionalEmailsApi()
            apiInstance.setApiKey(0, process.env.BREVO_API_KEY)

            const emailTemplateSource = `
                <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
                <div style="background-color: #fff8dc; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1); max-width: 600px; margin: 0 auto;">
                    
                    <div style="text-align: center;">
                    <img src="https://kephost.net/p/MTM0ODc2NQ.png" alt="Bookworms céges kanapé" style="width: 66.66%; max-width: 150px; max-height: 100px;">
                    <h1 style="font-size: 24px; color: #3c64ae; margin-top: 20px;">Sikeres Regisztráció!</h1>
                    <hr style="border: 1px solid rgb(191, 125, 2); width: 80%;">
                    </div>
                    
                    <h2 style="margin-top: 20px; color: #333; font-size: 20px;">Kérjük erősítse meg e-mail címét!</h2>
                    <p style="font-size: 16px; color: #333;">Tisztelt ${user.first_name}!</p>
                    <p style="font-size: 16px; color: #333;">
                    Kérjük, a lenti gombra kattintva erősítse meg az e-mail címét, hogy megbizonyodhassunk jelentkezési szándékáról és valóban Ön jelentkezett a könyvre!
                    </p>
                    
                    <div style="margin: 20px 0; text-align: left;">
                    <a href="https://bookworms-dev.fly.dev/changeGuestStatus/?userId=${user.id}&applicationId=${application_id}&token=${guestToken}" style="background-color: #bf7d02; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Megerősítem az e-mail címem</a>
                    </div>

                    <p style="color: #333; font-size: 16px;"><b>Tisztelettel:</b></p>
                    <p style="font-family: 'Dancing Script', cursive; font-size: 1rem;">BookWorms Csapata</p>
                    
                    <hr style="border: 1px solid rgb(191, 125, 2); width: 100%;">
                    <p style="font-size: 14px; color: #000000; text-align: center;">
                    Tekintse meg weboldalunk számtalan ritka és felbecsülhetetlen értékű könyvritkaságait és jelentkezzen aukcióinkra még ma!<br>
                    <a href="https://bookworms.fly.dev/books" style="color: #3c64ae;">BookWorms</a><br>
                    <i>Ahol a motiváció és az irodalom kéz a kézben jár.</i>
                    </p>
                    <hr style="border: 1px solid rgb(191, 125, 2); width: 100%;">
                    
                    <div style="text-align: center;">
                    <img src="https://kephost.net/p/MTM0ODc2NA.png" alt="Bookworms logója" style="max-width: 100px; max-height: 100px;">
                    </div>
                    
                    <p style="font-size: 12px; color: #666; text-align: justify;">
                    Ezt az e-mailt azért kapta, mert a weboldalunkon jelentkezett egy Ön által kiválasztott könyvre. Amennyiben Ön nem jelentkezett oldalunkon érdeklődőként könyvritkaságaink egyikére, ezesetben elnézését kérjük és levelünket tekintse tárgytalannak!
                    </p>
                </div>
                </div>
                    `

            await apiInstance.sendTransacEmail({
                sender: {
                    "name": "BookWorms Team",
                    "email": "bookwormsproject2024@gmail.com"
                },
                to: [{
                    "name": `${user.family_name} ${user.first_name}`,
                    "email": `${user.email}`
                }],
                subject: 'Visszaigazoló email jelentkezéshez',
                htmlContent: `${emailTemplateSource}`
            })

            return true
        } catch (error) {
            console.log('ERROR SENDING EMAIL: ', error)
            return false
        }
    }

    async sendRegistrationEmailToGuest(user: User, guestToken: string) {
        try {
            const apiInstance = new Brevo.TransactionalEmailsApi()
            apiInstance.setApiKey(0, process.env.BREVO_API_KEY)

            const emailTemplateSource = `Kattints a linkre a regisztrációhoz: https://bookworms-dev.fly.dev/registration/?id=${user.id}&token=${guestToken}`

            await apiInstance.sendTransacEmail({
                sender: {
                    "name": "BookWorms Team",
                    "email": "bookwormsproject2024@gmail.com"
                },
                to: [{
                    "name": `${user.family_name} ${user.first_name}`,
                    "email": `${user.email}`
                }],
                subject: 'Regisztrációs email',
                htmlContent: `${emailTemplateSource}`
            })

            return true
        } catch (error) {
            console.log('ERROR SENDING EMAIL: ', error)
            return false
        }
    }
}
