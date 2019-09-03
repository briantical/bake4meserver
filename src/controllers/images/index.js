const { Router: router } = require('express');
const  multer = require('multer');
const { authenticate } = require('../../middleware');
const  firebase = require('firebase-admin');

const update = require('./update');
const create = require('./create');
const remove = require('./remove');
const retrieve = require('./retrieve');
const all = require('./all');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '../../../storage/') 
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.png')
  }
});

var upload = multer({storage: storage,
    onFileUploadStart: function (file) {
      console.log(file.originalname + ' is starting ...')
    },
});

module.exports = (models, { config }) => {
  const api = router();

  api.get('/', authenticate, all(models, { config }));
  api.get('/:_id', authenticate, retrieve(models));
  api.post('/', authenticate, upload.single('avatar'),create(models));
  api.put('/:_id', authenticate, update(models));
  api.delete('/:_id', authenticate, remove(models));
  
  return api;
};