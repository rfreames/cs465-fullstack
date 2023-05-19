var fs = require('fs');
var contactUs = JSON.parse(fs.readFileSync('./data/contactus.json','utf8'));

const contact = (req, res) => {
    res.render('contact', {title: 'Travlr Getaways', contactUs});
}

module.exports = {
    contact
}