const Property = require("../models/property.model");

const getProperties = async (req, res) => {
    try {
        const property = await Property.find();
        if (!property) {
            return res.status(404).json({message: 'Not found property'})
        }        
    } catch (error) {
        console.log("error ----", error);
        return res.status(500).json(error);
    }
}


module.exports = { getProperties };