const { sendOne } = require('../../middleware/index');

const socket_io = require('socket.io');
let io = socket_io();

const retrieve = ({ Cake }) => async (req, res, next) => {
  try {    
    
    // SET WATCH ON COLLECTION 
    const changeStream = Cake.watch();  

    // Socket Connection  
    await io.on('connection', function (socket) {
        console.log('Connection!');

        // USERS - Change
        changeStream.on('change', function(change) {
            console.log('COLLECTION CHANGED');

            const cakeID = req.user.id;
    		const { _id } = req.params;

            const cake = Cake.findOne({}, (err, data) => {
                if (err) throw err;
  
                if (data) {
                    // RESEND ALL USERS
                    let cakeData = socket.emit('cake', data);
                    return cakeData;
                }
            });
            return sendOne(res, { cake });
        });
    });

  } catch (error) {
    next(error);
  }
};

module.exports = retrieve;