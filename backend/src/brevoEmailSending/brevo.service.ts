import { Injectable } from '@nestjs/common';
import { User } from 'src/users/user.interface';
import * as Brevo from '@getbrevo/brevo';
import { DatabaseService } from 'src/database/db.service';


@Injectable()
export class BrevoService {
    dbConnect = new DatabaseService()
    page_url = process.env.PAGE_URL
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
                    Kérjük, a lenti gombra kattintva erősítse meg az e-mail címét, hogy megbizonyodhassunk a jelentkezési szándékáról és arról, hogy valóban Ön jelentkezett a könyvre!
                    </p>
                    
                    <div style="margin: 20px 0; text-align: left;">
                    <a href="${this.page_url}changeGuestStatus/?userId=${user.id}&applicationId=${application_id}&token=${guestToken}" style="background-color: #bf7d02; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Megerősítem az e-mail címem</a>
                    </div>

                    <p style="color: #333; font-size: 16px;"><b>Tisztelettel:</b></p>
                    <p style="font-family: 'Dancing Script', cursive; font-size: 1rem;">BookWorms Csapata</p>
                    
                    <hr style="border: 1px solid rgb(191, 125, 2); width: 100%;">
                    <p style="font-size: 14px; color: #000000; text-align: center;">
                    Tekintse meg weboldalunk számtalan ritka és felbecsülhetetlen értékű könyvritkaságait és jelentkezzen aukcióinkra még ma!<br>
                    <a href="${this.page_url}books" style="color: #3c64ae;">BookWorms</a><br>
                    <i>Ahol a motiváció és az irodalom kéz a kézben jár.</i>
                    </p>
                    <hr style="border: 1px solid rgb(191, 125, 2); width: 100%;">
                    
                    <div style="text-align: center;">
                    <img src="https://kephost.net/p/MTM0ODc2NA.png" alt="Bookworms logója" style="max-width: 100px; max-height: 100px;">
                    </div>
                    
                    <p style="font-size: 12px; color: #666; text-align: justify;">
                    Ezt az e-mailt azért kapta, mert a weboldalunkon jelentkezett egy Ön által kiválasztott könyvre. Amennyiben nem Ön kezdeményezte a jelentkezést, kérjük mielőbb vegye fel velünk a kapcsolatot!
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

            const emailTemplateSource = `
                <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
                <div style="background-color: #fff8dc; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1); max-width: 600px; margin: 0 auto;">
                    
                    <div style="text-align: center;">
                    <img src="https://kephost.net/p/MTM0ODc2NQ.png" alt="Bookworms céges kanapé" style="width: 66.66%; max-width: 150px; max-height: 100px;">
                    <h1 style="font-size: 24px; color: #3c64ae; margin-top: 20px;">Sikeres jelentkezés!</h1>
                    <hr style="border: 1px solid rgb(191, 125, 2); width: 80%;">
                    </div>
                    
                    <h2 style="margin-top: 20px; color: #333; font-size: 20px;">Kérjük végezze el a regisztrációt!</h2>
                    <p style="font-size: 16px; color: #333;">Tisztelt ${user.first_name}!</p>
                    <p style="font-size: 16px; color: #333;">
                    Kérjük, a lenti gombra kattintva végezze el a regisztrációt!
                    </p>
                    
                    <div style="margin: 20px 0; text-align: left;">
                    <a href="${this.page_url}registration/?id=${user.id}&token=${guestToken}" style="background-color: #bf7d02; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Regisztrálok</a>
                    </div>

                    <p style="color: #333; font-size: 16px;"><b>Tisztelettel:</b></p>
                    <p style="font-family: 'Dancing Script', cursive; font-size: 1rem;">BookWorms Csapata</p>
                    
                    <hr style="border: 1px solid rgb(191, 125, 2); width: 100%;">
                    <p style="font-size: 14px; color: #000000; text-align: center;">
                    Tekintse meg weboldalunk számtalan ritka és felbecsülhetetlen értékű könyvritkaságait és jelentkezzen aukcióinkra még ma!<br>
                    <a href="${this.page_url}books" style="color: #3c64ae;">BookWorms</a><br>
                    <i>Ahol a motiváció és az irodalom kéz a kézben jár.</i>
                    </p>
                    <hr style="border: 1px solid rgb(191, 125, 2); width: 100%;">
                    
                    <div style="text-align: center;">
                    <img src="https://kephost.net/p/MTM0ODc2NA.png" alt="Bookworms logója" style="max-width: 100px; max-height: 100px;">
                    </div>
                    
                    <p style="font-size: 12px; color: #666; text-align: justify;">
                    Ezt az e-mailt azért kapta, mert a weboldalunkon jelentkezett egy Ön által kiválasztott könyvre, és jelentkezése elfogadásra került. Amennyiben nem Ön kezdeményezte a jelentkezést, kérjük mielőbb vegye fel velünk a kapcsolatot!
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
                subject: 'Regisztrációs email',
                htmlContent: `${emailTemplateSource}`
            })

            return true
        } catch (error) {
            console.log('ERROR SENDING EMAIL: ', error)
            return false
        }
    }

    async sendForgottenPasswordEmailToUser(user: User, guestToken: string) {
        try {
            const apiInstance = new Brevo.TransactionalEmailsApi()
            apiInstance.setApiKey(0, process.env.BREVO_API_KEY)

            const emailTemplateSource = `
                <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
                <div style="background-color: #fff8dc; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1); max-width: 600px; margin: 0 auto;">
                    
                    <div style="text-align: center;">
                    <img src="https://kephost.net/p/MTM0ODc2NQ.png" alt="Bookworms céges kanapé" style="width: 66.66%; max-width: 150px; max-height: 100px;">
                    <h1 style="font-size: 24px; color: #3c64ae; margin-top: 20px;">Elfelejtett jelszó visszaállítása.</h1>
                    <hr style="border: 1px solid rgb(191, 125, 2); width: 80%;">
                    </div>
                    
                    <h2 style="margin-top: 20px; color: #333; font-size: 20px;">Kérjük állítsa vissza jelszavát!</h2>
                    <p style="font-size: 16px; color: #333;">Tisztelt ${user.first_name}!</p>
                    <p style="font-size: 16px; color: #333;">
                    A lenti gombra kattintva tudja visszaállítani a jelszavát!
                    </p>
                    
                    <div style="margin: 20px 0; text-align: left;">
                    <a href="${this.page_url}registration/?id=${user.id}&token=${guestToken}" style="background-color: #bf7d02; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Jelszó visszaállítása</a>
                    </div>

                    <p style="color: #333; font-size: 16px;"><b>Tisztelettel:</b></p>
                    <p style="font-family: 'Dancing Script', cursive; font-size: 1rem;">BookWorms Csapata</p>
                    
                    <hr style="border: 1px solid rgb(191, 125, 2); width: 100%;">
                    <p style="font-size: 14px; color: #000000; text-align: center;">
                    Tekintse meg weboldalunk számtalan ritka és felbecsülhetetlen értékű könyvritkaságait és jelentkezzen aukcióinkra még ma!<br>
                    <a href="${this.page_url}books" style="color: #3c64ae;">BookWorms</a><br>
                    <i>Ahol a motiváció és az irodalom kéz a kézben jár.</i>
                    </p>
                    <hr style="border: 1px solid rgb(191, 125, 2); width: 100%;">
                    
                    <div style="text-align: center;">
                    <img src="https://kephost.net/p/MTM0ODc2NA.png" alt="Bookworms logója" style="max-width: 100px; max-height: 100px;">
                    </div>
                    
                    <p style="font-size: 12px; color: #666; text-align: justify;">
                    Ezt az e-mailt azért kapta, mert a weboldalunkon igányelte a fiókjához tartozó jelszó visszaállítását. Amennyiben nem Ön kezdeményezte a visszaállítást, kérjük mielőbb vegye fel velünk a kapcsolatot!
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
                subject: 'Elfelejtett jelszó',
                htmlContent: `${emailTemplateSource}`
            })

            return true
        } catch (error) {
            console.log('ERROR SENDING EMAIL: ', error)
            return false
        }
    }
}
