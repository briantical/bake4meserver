const mongoose = require('mongoose');
const { sendDeleted } = require('../../middleware/index');

const remove = ({ Image }) => async (req, res, next) => {
  try {  
    const { _id } = req.params;
    const image = await Image.findOne({ _id });

    mongoose.connect('mongodb://127.0.0.1:27017/criteria',{ useNewUrlParser: true})
    .then(async () =>{
      var gridfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
        chunkSizeBytes: 1024,
        bucketName: 'criteriafiles'
      })

      gridfs.delete(image.file_id).then(async () => {
        console.log('File successfully deleted.');

        await Image.remove({ _id });  
        return sendDeleted(res, { image });
      })

    }).catch((err) => console.log(""));;
  } catch (error) {
    next(error);
  }
};

module.exports = remove;