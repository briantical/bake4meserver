const { Router: router } = require("express");
const { authenticate } = require("../../middleware");
const update = require("./update");
const deleteuser = require("./delete-user");

/**
 * Provide Api for User

 PUT /api/v1/users/update - Update User details
 @header
        Authorization: Bearer {token}
 @params
       email {string}

 **/

module.exports = (models, { pusher }) => {
  const api = router();

  const { User } = models;
  const changeStream = User.watch({ fullDocument: "updateLookup" });

  changeStream.on("change", change => {
    const channel = "users";
    const user = change.fullDocument;

    switch (change.operationType) {
      //Return full document inserted
      case "insert":
        pusher.trigger(channel, "inserted", { user });
        break;
      //Return deleted document ID
      case "delete":
        pusher.trigger(channel, "deleted", change.documentKey._id);
        break;
      //Return full document inserted and updated fields
      case "update":
        const user_fields = change.updateDescription.updatedFields;
        pusher.trigger(channel, "updated", { user_fields, user });
        break;

      default:
        break;
    }
  });

  api.put("/update", authenticate, update(models));
  api.delete("/:_id", authenticate, deleteuser(models));

  return api;
};
