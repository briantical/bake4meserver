const _ = require("lodash");
const momo = require("mtn-momo");

const { sendOne } = require("../../middleware/index");

const { Collections } = momo.create({
  callbackHost: "callbackhost.com"
});

const collections = Collections({
  userSecret: process.env.USER_SECRET,
  userId: process.env.USER_ID,
  primaryKey: process.env.PRIMARY_KEY
});

const create = ({ Paymnet }) => async (req, res, next) => {
  const { amount, externalId, partyId, payeeNote } = req;
  try {
    collections
      .requestToPay({
        amount,
        currency: "EUR",
        externalId,
        payer: {
          partyIdType: momo.PayerType.MSISDN,
          partyId
        },
        payerMessage: "CRITERIA CAKES",
        payeeNote
      })
      .then(transactionId => {
        console.log({ transactionId });

        // Get transaction status
        return collections.getTransaction(transactionId);
      })
      .then(transaction => {
        console.log({ transaction });

        // Get account balance
        return collections.getBalance();
      })
      .then(accountBalance => console.log({ accountBalance }))
      .catch(error => {
        console.log("The error:" + error);
      });

    const payment = new Paymnet();
    _.extend(payment, req.body);

    await payment.save();
    return sendOne(res, { payment });
  } catch (error) {
    next(error);
  }
};

module.exports = create;
