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


exports.getProductById = async (req, res) => {
    const productId = req.params.id;
    const link = req.protocol + '://' + req.get('host');
    try {
        const response = await axios.get(`http://localhost:3000/products/${productId}`);
        let product = response.data;
        if (!product) {
            return res.render('error', { message: "Product not found" });
        }
        if (product.picture) {
            product.picture = `${link}/image/${product.picture}`;
        }
        res.render('product', { product });
    } catch (error) {
        res.render('error', { message: "Internal server error" });
    }
};


exports.getProductByPrice = async (req, res) => {
    const productPrice = req.params.price;
    const link = req.protocol + '://' + req.get('host');
    try {
        const response = await axios.get(`http://localhost:3000/products/price/${productPrice}`);
        let products = response.data;
        if (!products || products.length === 0) {
            return res.render('error', { message: "No products found at this price" });
        }
        products.forEach(product => {
            if (product.picture) {
                product.picture = `${link}/image/${product.picture}`;
            }
        });
        res.render('products', { products });
    } catch (error) {
        res.render('error', { message: "Internal server error" });
    }
};

exports.createProduct = async (req, res) => {
    try {
        const response = await axios.post('http://localhost:3000/products', req.body);
        const result = response.data;
        res.render('success', { message: "Product created successfully", productId: result.insertId });
    } catch (error) {
        res.render('error', { message: "Internal server error" });
    }
};


exports.updateProduct = async (req, res) => {
    const productId = req.params.id;
    try {
        const response = await axios.put(`http://localhost:3000/products/${productId}`, req.body);
        const result = response.data;
        if (result.affectedRows === 0) {
            return res.render('error', { message: "Product not found" });
        }
        res.render('success', { message: "Product updated successfully" });
    } catch (error) {
        res.render('error', { message: "Internal server error" });
    }
};

exports.deleteProduct = async (req, res) => {
    const productId = req.params.id;
    try {
        const response = await axios.delete(`http://localhost:3000/products/${productId}`);
        const result = response.data;
        if (result.affectedRows === 0) {
            return res.render('error', { message: "Product not found" });
        }
        res.render('success', { message: "Product deleted successfully" });
    } catch (error) {
        res.render('error', { message: "Internal server error" });
    }
};

