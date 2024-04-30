import dotenv from 'dotenv'

dotenv.config()

export default {
    port: process.env.PORT,
    gmail_user: process.env.GMAIL_USER,
    gmail_password: process.env.GMAIL_PASSWORD
}