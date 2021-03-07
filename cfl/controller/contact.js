let ContactMdl = require('../model/contact')


module.exports = {
    indexContact,
    createContact
}

function indexContact(req, res) {
    res.render("./contact/main.ejs")
};

function createContact(req, res) {
    let names = req.body.name
    let emails = req.body.email
    let messages = req.body.message
    ContactMdl.lastContact = {name: names, email: emails, message: messages }
    ContactMdl.contactArr.push(ContactMdl.lastContact)
    res.render('./contact/confirm.ejs', {submitted: ContactMdl.lastContact} )
}

