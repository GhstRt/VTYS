const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('MongoDB Atlas bağlantısı başarılı.');
  } catch (error) {
    console.error('Hata:', error.message);
  }
}

async function closeDatabaseConnection() {
  try {
    await client.close();
    console.log('MongoDB Atlas bağlantısı kapatıldı.');
  } catch (error) {
    console.error('Hata:', error.message);
  }
}

async function getAllPlaces(req, res) {
  try {
    await connectToDatabase();

    const database = client.db('dunya');
    const ulkeCollection = database.collection('ulke');
    
    const allCountries = await ulkeCollection.find().toArray();
    res.json(allCountries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    await closeDatabaseConnection();
  }
}

async function getPlaceById(req, res) {
  try {
    await connectToDatabase();

    const database = client.db('dunya');
    const ulkeCollection = database.collection('ulke');

    const specificCountryId = req.params.id;
    const specificCountry = await ulkeCollection.findOne({ _id: new ObjectId(specificCountryId) });


    if (!specificCountry) {
      return res.status(404).json({ message: 'Belirli ülke bulunamadı' });
    }

    res.json(specificCountry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    await closeDatabaseConnection();
  }
}

module.exports = { getAllPlaces, getPlaceById };
