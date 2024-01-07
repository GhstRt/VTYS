const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
let database; // Module-level variable to hold the connected database instance

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('MongoDB Atlas bağlantısı başarılı.');
    database = client.db('dunya'); // Set the connected database
  } catch (error) {
    console.error('Hata:', error.message);
  }
}

async function getAllPlaces(req, res) {
  try {
    if (!database) {
      await connectToDatabase();
    }

    const ulkeCollection = database.collection('ulke');
    
    const allCountries = await ulkeCollection.find().toArray();
    res.json(allCountries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } 
}

async function getPlaceById(req, res) {
  try {
    if (!database) {
      await connectToDatabase();
    }

    const ulkeCollection = database.collection('ulke');

    const specificCountryId = req.params.id;
    const specificCountry = await ulkeCollection.findOne({ _id: new ObjectId(specificCountryId) });

    if (!specificCountry) {
      return res.status(404).json({ message: 'Belirli ülke bulunamadı' });
    }

    res.json(specificCountry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } 
}

module.exports = { getAllPlaces, getPlaceById };
