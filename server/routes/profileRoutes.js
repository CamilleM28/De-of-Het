const mongoose = require("mongoose");
const Profile = mongoose.model("profiles");

const profileRoutes = (app) => {
  app.get(`/api/profiles`, async (req, res) => {
    const profiles = await Profile.find();

    return res.status(200).send(profiles);
  });

  app.post(`/api/profile`, async (req, res) => {
    const profile = await Profile.create(req.body);

    return res.status(201).send({
      profile,
    });
  });

  app.patch(`/api/profile/favourites/:id`, async (req, res) => {
    const id = req.params.id;
    const favourites = await Profile.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    return res.status(202).send(favourites);
  });

  app.patch(`/api/profile/scores/:id`, async (req, res) => {
    const id = req.params.id;
    const scores = await Profile.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    return res.status(202).send(scores);
  });

  app.patch(`/api/profile/failed/:id`, async (req, res) => {
    const id = req.params.id;
    const failed = await Profile.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    return res.status(202).send(failed);
  });
};

module.exports = profileRoutes;
