const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors({
    origin: '*'
}));
app.use(express.json()); // To parse JSON bodies

// Import routes
const userRoutes = require('./routes/userRoute');
const orderRoutes = require('./routes/orderRoute');
const categoryRoutes = require('./routes/categoryRoute');
const discountRoutes = require('./routes/discountRoute');
const productRoutes = require('./routes/productRoute');
const orderDetailRoutes = require('./routes/orderDetailRoute');
const productReviewRoutes = require('./routes/productReviewRoute');
const imageRoutes = require('./routes/imageRoute');

// Use routes with base paths
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);
app.use('/categories', categoryRoutes);
app.use('/discounts', discountRoutes);
app.use('/products', productRoutes);
app.use('/orderdetails', orderDetailRoutes);
app.use('/productreviews', productReviewRoutes);
app.use('/images', imageRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});