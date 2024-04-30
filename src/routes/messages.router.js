import { Router } from "express";
import { transporter } from "../nodemailer.js";

const router = Router()

router.get('/', async (req, res) =>{
    console.log('Sending Email');
    try {
        const message = {
            from: 'djcarloshermida.dch@gmail.com',
            to: 'djcarloshermidah@outlook.com',
            subject: 'Correo de prueba',
            text: 'PRUEBA MAILING'
        }
        await transporter.sendMail(message)
        res.send('Mail Sent')
    } catch (error) {
        res.json({message: 'Error', error})
    }
})

export default router