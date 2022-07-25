const Hero = require('../models/hero')
//creating index route/List route
const getObjects = async (req, res) =>{
    try {
        const hero =await Hero.find()
        return res.status(200).json({hero})
        res.send(hero)
    } catch (error) {
        return res.status(500).send(error.message)
        throw error
    }
}

//Creating details / Show route

const getObjectById = async (req, res) => {
    try {
        const hero = await Hero.findById(req.params.id)
        return res.status(200).json({hero})
        res.send(hero)
    } catch (error) {
        throw error
    }
}

//Create a new object

const createObject = async(req, res) => {
    try {
        const newHero = await Hero.create(req.body)
        await newHero.save()
        return res.status(201).json({newHero})
    } catch (error) {
        throw error
        
    }
}


//Update an object
const updateObject = async(req,res)=>{
    try {
        //making sure we have the right object
        const objectId = req.params.objectId
        //creating new object thst is being updated via body request
        const updatedObject = await Hero.update(req.body, {
            //targets specific object id
            where: {id: objectId},
            //sending the updated version
            returning: true
        })
        res.send(updatedObject)

    } catch (error) {
        throw error
    }
}


module.exports = {
    getObjects,
    getObjectById,
    createObject,
    updateObject
}