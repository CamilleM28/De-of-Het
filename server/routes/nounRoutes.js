const mongoose = require("mongoose");
const Noun = mongoose.model("nouns");

const nounRoutes = (app) => {
  app.get(`/api/nouns`, async (req, res) => {
    const nouns = await Noun.find();

    return res.status(200).send(nouns);
  });
};

module.exports = nounRoutes;
