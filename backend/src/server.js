require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db');
const { errorHandler } = require('./middlewares/errorHandler');

const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => res.json({ ok: true, ts: Date.now() }));

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
connectDB(process.env.MONGO_URI).then(() =>
  app.listen(PORT, () => console.log(`API corriendo en puerto ${PORT}`))
);
