var fs = require('fs');
var ourRooms = JSON.parse(fs.readFileSync('./data/ourrooms.json','utf8'));

const rooms = (req, res) => {
    res.render('rooms', {title: 'Travlr Getaways', ourRooms});
}

module.exports = {
    rooms
}