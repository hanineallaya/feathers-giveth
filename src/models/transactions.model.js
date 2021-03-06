function Transaction(app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const transaction = new Schema(
    {
      hash: { type: String, required: true, index: true },
      from: { type: String, required: true },
      isHome: { type: Boolean, default: false },
    },
    {
      timestamps: false,
    },
  );

  return mongooseClient.model('transactions', transaction);
}

module.exports = {
  createModel: Transaction,
};
