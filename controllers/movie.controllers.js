const { Movie } = require("../models");

const uploadPoster = async (req, res) => {
  const { file } = req;
  const { idMovie } = req.body;
  const urlImage = `http://localhost:3000/${file.path}`;
  try {
    const movieDetail = await Movie.findByPk(idMovie);
    console.log(movieDetail);
    movieDetail.poster = urlImage;
    await movieDetail.save();
    res.send(movieDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  uploadPoster,
};
