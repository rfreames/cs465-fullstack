var fs = require('fs');
var home = JSON.parse(fs.readFileSync('./data/home.json','utf8'));

const index = (req, res) => {
    res.render('index', {title: 'Travlr Getaways', home});
}

module.exports = {
    index
}