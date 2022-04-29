const mongoose = require("mongoose");
const Profile = mongoose.model("profiles");

const profileRoutes = (app) => {
  app.get(`/api/profiles/`, async (req, res) => {
    const profiles = await Profile.find();

    return res.status(200).send(profiles);
  });

  app.get(`/api/profile/:id`, async (req, res) => {
    const id = req.params.id;
    const profile = await Profile.findById(id);

    return res.status(200).send(profile);
  });

  app.post(`/api/profile`, async (req, res) => {
    const profile = await Profile.create(req.body);

    return res.status(201).send({
      profile,
    });
  });

  app.patch(`/api/profile/addfav/:id`, async (req, res) => {
    const id = req.params.id;
    const favs = await Profile.findById(id);
    const updatedFavs = await Profile.findByIdAndUpdate(
      id,
      {
        favourites: [...favs.favourites, req.body.favouriteId],
      },
      { new: true }
    );

    return res.status(202).send(updatedFavs);
  });

  app.patch(`/api/profile/deletefav/:id`, async (req, res) => {
    const id = req.params.id;
    const currentFavs = await Profile.findById(id);
    const updatedFavs = currentFavs.favourites.filter(
      (fav) => fav !== req.body.deletedId
    );
    const deletedFavs = await Profile.findByIdAndUpdate(
      id,
      { favourites: updatedFavs },
      {
        new: true,
      }
    );
    return res.status(202).send(deletedFavs);
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
    const failed = await Profile.findByIdAndUpdate(
      id,
      { failed: req.body.failedId },
      {
        new: true,
      }
    );

    return res.status(202).send(failed);
  });
};

module.exports = profileRoutes;
