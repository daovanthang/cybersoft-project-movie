const { Cinema, Cineplex, sequelize } = require("../models");
const getAll = async (req, res) => {
  try {
    const cinemaList = await Cinema.findAll({
      include: [
        {
          model: Cineplex,
        },
      ],
    });

    res.status(200).send(cinemaList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getCinemaBycineplex = async (req, res) => {
  try {
    const { id, name } = req.query;
    const [result] =
      await sequelize.query(`select cinemas.name ,cinemas.image  from cinemas
   INNER JOIN cineplexes
   on cinemas.cineplexId = cineplexes.id
   and cineplexes.id = ${id}
    `);

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = {
  getAll,
  getCinemaBycineplex,
};
