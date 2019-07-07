const socket_io = require('socket.io');
let io = socket_io();
const { AddressModel } = require('./model');

const changeStream = AddressModel.watch();

changeStream.on('change', (change) => {
    console.log(change); // You could parse out the needed info and send only that data. 
    io.emit('changeData', change);
}); 

io.on('connection', function () {
    console.log('connected');
});

var Address = io;

module.exports = { Address };