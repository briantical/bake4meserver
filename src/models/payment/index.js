const socket_io = require('socket.io');
let io = socket_io();
const { PaymentModel } = require('./model');

const changeStream = PaymentModel.watch();

changeStream.on('change', (change) => {
    console.log(change); // You could parse out the needed info and send only that data. 
    io.emit('changeData', change);
}); 

io.on('connection', function () {
    console.log('connected');
});

var Payment = io;

module.exports = { Payment };