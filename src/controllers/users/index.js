const { Router: router } = require('express');
const { authenticate } = require('../../middleware');
const update = require('./update');

/**
 * Provide Api for User

 PUT /api/v1/users/update - Update User details
 @header
        Authorization: Bearer {token}
 @params
       email {string}

 **/

module.exports = (models) => {
  const api = router();

  api.put('/update', authenticate, update(models));

  return api;
};
