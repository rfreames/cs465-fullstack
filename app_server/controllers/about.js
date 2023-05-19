var fs = require('fs');
var aboutUs = JSON.parse(fs.readFileSync('./data/aboutus.json','utf8'));

const about = (req, res) => {
    res.render('about', {title: 'Travlr Getaways', aboutUs});
}

module.exports = {
    about
}