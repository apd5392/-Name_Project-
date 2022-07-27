const { Hero, Villain, Organization, Anime } = require("../models");

// Show Data, Get Databse

const getAllHeroes = async (req, res) => {
  try {
    const heroes = await Hero.find();
    return res.status(200).json({ heroes });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAllVillains = async (req, res) => {
  try {
    const villains = await Villain.find();
    return res.status(200).json({ villains });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAllOrganizations = async (req, res) => {
  try {
    const organizations = await Organization.find();
    return res.status(200).json({ organizations });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAllAnimes = async (req, res) => {
  try {
    const animes = await Anime.find();
    return res.status(200).json({ animes });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
//Create a new objects

const createHero = async (req, res) => {
  try {
    const hero = await new Hero(req.body);
    await hero.save();
    return res.status(201).json({
      hero,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createVillain = async (req, res) => {
  try {
    const villain = await new Villain(req.body);
    await villain.save();
    return res.status(201).json({
      villain,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createAnime = async (req, res) => {
  try {
    const animes = await new Anime(req.body);
    await animes.save();
    return res.status(201).json({
      animes,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createOrganization = async (req, res) => {
  try {
    const organizations = await new Organization(req.body);
    await organizations.save();
    return res.status(201).json({
      organizations,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Search ID

const getHeroId = async (req, res) => {
  try {
    const { id } = req.params;
    const hero = await Hero.findById(id);
    if (hero) {
      return res.status(200).json({ hero });
    }
    return res.status(404).send("Hero with the specified ID does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// Update an objects

const updateHero = async (req, res) => {
  try {
    const heroId = req.params.objectId;
    const updatedHero = await Hero.update(req.body, {
      where: { id: heroId },
      returning: true,
    });
    res.send(updatedHero);
  } catch (error) {
    throw error;
  }
};

// const getObjectById = async (req, res) => {
//     try {
//         const hero = await Hero.findById(req.params.id)
//         return res.status(200).json({hero})
//         res.send(hero)
//     } catch (error) {
//         throw error
//     }
// }
module.exports = {
  createHero,
  createVillain,
  createAnime,
  createOrganization,
  getAllHeroes,
  getAllVillains,
  getAllOrganizations,
  getAllAnimes,
  getHeroId,
  updateHero
};
