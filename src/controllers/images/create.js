const _ = require('lodash');
const mongoose = require('mongoose');
const fs = require('fs');

const { sendCreated } = require('../../middleware/index');

const create = ({ Image }) => async (req, res, next) => {
  try {  
    mongoose.connect('mongodb://127.0.0.1:27017/criteria',{ useNewUrlParser: true})
    .then(async () =>{
      var gridfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
        chunkSizeBytes: 1024,
        bucketName: 'criteriafiles'
    });
    
    let filesrc = req.file.path;
    let filename = req.file.filename;

    fs.createReadStream(filesrc)
    .pipe(gridfs.openUploadStream(filename))
    .on('error', function (error) {
        assert.ifError(error);
    })
    .on('finish', async function (filedata) {
        console.log('File write successful!');
        let file_id = filedata._id
        
        const image = new Image();
        _.extend(image, req.body);
        _.extend(image, {'name': filename});
        _.extend(image, {'file_id': file_id});
        
        await image.save();
        sendCreated(res, { image });

        //Delete the image from the file system after storage in MongoDB
        fs.unlink(filesrc, (err) =>{
          err ? console.log('File deletion failed') : console.log('File deletion successful');
        })
    });
    }).catch((err) => console.log(""));

  } catch (error) {
    next(error);
  }
};

module.exports = create;