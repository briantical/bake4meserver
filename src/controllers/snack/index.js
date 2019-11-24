const { Router: router } = require("express");
const { authenticate } = require("../../middleware");

const update = require("./update");
const create = require("./create");
const remove = require("./remove");
const retrieve = require("./retrieve");
const all = require("./all");

module.exports = (models, { config, pusher }) => {
  const api = router();

  const { Snack } = models;
  const changeStream = Snack.watch({ fullDocument: "updateLookup" });

  changeStream.on("change", change => {
    const channel = "snacks";
    const snack = change.fullDocument;

    switch (change.operationType) {
      //Return full document inserted
      case "insert":
        pusher.trigger(channel, "inserted", { snack });
        break;
      //Return deleted document ID
      case "delete":
        pusher.trigger(channel, "deleted", change.documentKey._id);
        break;
      //Return full document inserted and updated fields
      case "update":
        const snack_fields = change.updateDescription.updatedFields;
        pusher.trigger(channel, "updated", { snack_fields, snack });
        break;

      default:
        break;
    }
  });

  api.get("/", authenticate, all(models, { config }));
  api.get("/:_id", authenticate, retrieve(models));
  api.post("/", authenticate, create(models));
  api.put("/:_id", authenticate, update(models));
  api.delete("/:_id", authenticate, remove(models));

  return api;
};
