const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const propertySchema = new Schema (
    {
        name: {type: String, required: true},
        constructionYear: {type: Number, required: true},
        shareholders: [
            {
                owners: {type: Schema.Types.ObjectId, ref: "owner"},
                share: {type: Number, required: false}
            }
        ],
        image: {type: String, required: false},
        geometry: {
            location: {
                lat: {type: Number, required: true},
                lng: {type: Number, required: true},
            }
        }

    }, {
        timestamps: true
    }
)

const Property = mongoose.model("property", propertySchema);

module.exports = Property;

