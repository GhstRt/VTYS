const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  location: { type: String, required: true },
  wikipediaLink: { type: String },
  pictureLink: { type: String },
  buildInYear: { type: String },
});

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;
