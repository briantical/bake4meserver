const path = require('path');
const mongoose = require('mongoose');
const fs = require('fs');

const { sendOne } = require('../../middleware/index');

const retrieve = ({ Image }) => async (req, res, next) => {
  try {  
    mongoose.connect('mongodb://127.0.0.1:27017/criteria',{ useNewUrlParser: true})
    .then(async () => {
      var gridfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
        chunkSizeBytes: 1024,
        bucketName: 'criteriafiles'
    });

    const { _id } = req.params;
    const image = await Image.findOne({ _id });
    
    const filesrc = path.join(__dirname, '../../storage/'+ image.name);
    
    let data = gridfs.openDownloadStream(image.file_id).
        pipe(fs.createWriteStream(filesrc)).
        on('error', function(error) {
            console.log(":::error");
          assert.ifError(error);
        }).
        on('finish', function() {
          console.log('File downloaded successfully!');
        });
    // console.log('File path: ' + JSON.stringify(data.path));
    // res.type('png');
    // return res.sendFile(data.path);
    return sendOne(res, { image });

    }).catch((err) => console.log(err));
  } catch (error) {
    next(error);
  }
};

module.exports = retrieve;