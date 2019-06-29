const { errorHandler } = require('./error-handler');
const { authenticate, generateAccessToken } = require('../passport/Passport-middleware');

const {
  sendOne,
  sendList,
  sendCreated,
  sendUpdated,
  sendDeleted,
  sendAccepted,
  withoutErrors,
} = require('./requests-helpers');

module.exports = {
  sendOne,
  sendList,
  sendCreated,
  sendUpdated,
  sendDeleted,
  sendAccepted,
  authenticate,
  generateAccessToken,
  withoutErrors,
  errorHandler,
};