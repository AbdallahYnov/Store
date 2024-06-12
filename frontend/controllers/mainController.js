const axios = require('axios');
// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3000/products');
        const products = response.data;

        // Render 'products' view with data
        res.render('products', { products });
    } catch (error) {
        // Render error page on failure
        render('error', {
            message: "Internal server error",
        });
    }
};

// Get products by