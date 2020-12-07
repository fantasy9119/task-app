const sgMail = require ('@sendgrid/mail')
const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: 'fabianmubusiness@gmail.com',
    from: 'fabianmubusiness@gmail.com',
    subject: 'This is my first creation!',
    text: 'I hope this one actually gets you'
})