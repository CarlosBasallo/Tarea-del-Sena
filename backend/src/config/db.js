const mongoose = require('mongoose');

const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri, { dbName: 'appdb' });
    console.log('MongoDB conectado');
  } catch (err) {
    console.error('Error conectando a MongoDB', err);
    process.exit(1);
  }
};

module.exports = { connectDB };
