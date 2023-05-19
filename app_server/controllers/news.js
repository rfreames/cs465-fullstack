var fs = require('fs');
var latestNews = JSON.parse(fs.readFileSync('./data/latestnews.json','utf8'));

const news = (req, res) => {
    res.render('news', {title: 'Travlr Getaways', latestNews});
}

module.exports = {
    news
}