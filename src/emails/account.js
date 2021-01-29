const sgMail = require ('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'fabianmubusiness@gmail.com',
        subject: 'Bienvenido hermani3!',
        text: `Bienvenido a la app compare, ${name}. Hazme saber como te funca la weaita.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'fabianmubusiness@gmail.com',
        subject: 'Lamento que te vayas amigue',
        text: `Nos vemos compañere, ${name}. Hazme saber que wea hicimos mal.`
    })
    
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}