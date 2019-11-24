const { Router: router } = require("express");
const { authenticate } = require("../../middleware");

const update = require("./update");
const create = require("./create");
const remove = require("./remove");
const retrieve = require("./retrieve");
const all = require("./all");

module.exports = (models, { config, pusher }) => {
  const api = router();

  const { Payment } = models;
  const changeStream = Payment.watch({ fullDocument: "updateLookup" });

  changeStream.on("change", change => {
    const channel = "payments";
    const payment = change.fullDocument;

    switch (change.operationType) {
      //Return full document inserted
      case "insert":
        pusher.trigger(channel, "inserted", { payment });
        break;
      //Return deleted document ID
      case "delete":
        pusher.trigger(channel, "deleted", change.documentKey._id);
        break;
      //Return full document inserted and updated fields
      case "update":
        const payment_fields = change.updateDescription.updatedFields;
        pusher.trigger(channel, "updated", { payment_fields, payment });
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
