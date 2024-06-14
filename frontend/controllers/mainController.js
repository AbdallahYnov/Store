const axios = require('axios');

// Get all categories
exports.getAllCategories = async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3000/categories');
        const categories = response.data;
        res.render('categories', { categories });
    } catch (error) {
        res.render('error', { message: "Internal server error" });
    }
};

// Get category by ID
exports.getCategoryById = async (req, res) => {
    const categoryId = req.params.id;
    try {
        const response = await axios.get(`http://localhost:3000/categories/${categoryId}`);
        const category = response.data;
        if (!category) {
            return res.render('error', { message: "Category not found" });
        }
        res.render('category', { category });
    } catch (error) {
        res.render('error', { message: "Internal server error" });
    }
};

// Create new category
exports.createCategory = async (req, res) => {
    try {
        const response = await axios.post('http://localhost:3000/categories', req.body);
        const result = response.data;
        res.render('success', { message: "Category created successfully", categoryId: result.insertId });
    } catch (error) {
        res.render('error', { message: "Internal server error" });
    }
};

// Update category
exports.updateCategory = async (req, res) => {
    const categoryId = req.params.id;
    try {
        const response = await axios.put(`http://localhost:3000/categories/${categoryId}`, req.body);
        const result = response.data;
        if (result.affectedRows === 0) {
            return res.render('error', { message: "Category not found" });
        }
        res.render('success', { message: "Category updated successfully" });
    } catch (error) {
        res.render('error', { message: "Internal server error" });
    }
};

// Delete category
exports.deleteCategory = async (req, res) => {
    const categoryId = req.params.id;
    try {
        const response = await axios.delete(`http://localhost:3000/categories/${categoryId}`);
        const result = response.data;
        if (result.affectedRows === 0) {
            return res.render('error', { message: "Category not found" });
        }
        res.render('success', { message: "Category deleted successfully" });
    } catch (error) {
        res.render('error', { message: "Internal server error" });
    }
};

// Get all discounts
exports.getAllDiscounts = async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3000/discounts');
        const discounts = response.data;
        res.render('discounts', { discounts });
    } catch (error) {
        res.render('error', { message: "Internal server error" });
    }
};

// Get discount by ID
exports.getDiscountById = async (req, res) => {
    const discountId = req.params.id;
    try {
        const response = await axios.get(`http://localhost:3000/discounts/${discountId}`);
        const discount = response.data;
        if (!discount) {
            return res.render('error', { message: "Discount not found" });
        }
        res.render('discount', { discount });
    } catch (error) {
        res.render('error', { message: "Internal server error" });
    }
};

// Create new discount
exports.createDiscount = async (req, res) => {
    try {
        const response = await axios.post('http://localhost:3000/discounts', req.body);
        const result = response.data;
        res.render('success', { message: "Discount created successfully", discountId: result.insertId });
    } catch (error) {
        res.render('error', { message: "Internal server error" });
    }
};

// Update discount
exports.updateDiscount = async (req, res) => {
    const discountId = req.params.id;
    try {
        const response = await axios.put(`http://localhost:3000/discounts/${discountId}`, req.body);
        const result = response.data;
        if (result.affectedRows === 0) {
            return res.render('error', { message: "Discount not found" });
        }
        res.render('success', { message: "Discount updated successfully" });
    } catch (error) {
        res.render('error', { message: "Internal server error" });
    }
};

// Delete discount
exports.deleteDiscount = async (req, res) => {
    const discountId = req.params.id;
    try {
        const response = await axios.delete(`http://localhost:3000/discounts/${discountId}`);
        const result = response.data;
        if (result.affectedRows === 0) {
            return res.render('error', { message: "Discount not found" });
        }
        res.render('success', { message: "Discount deleted successfully" });
    } catch (error) {
        res.render('error', { message: "Internal server error" });
    }
};

// Get all images
exports.getAllImages = async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3000/images');
        const images = response.data;
        res.render('images', { images });
    } catch (error) {
        res.render('error', { message: "Internal server error" });
    }
};

// Get image by ID
exports.getImageById = async (req, res) => {
    const imageId = req.params.id;
    try {
        const response = await axios.get(`http://localhost:3000/images/${imageId}`);
        const image = response.data;
        if (!image) {
            return res.render('error', { message: "Image not found" });
        }
        res.render('image', { image });
    } catch (error) {
        res.render('error', { message: "Internal server error" });
    }
};

// Create new image
exports.createImage = async (req, res) => {
    try {
        const response = await axios.post('http://localhost:3000/images', req.body);
        const result = response.data;
        res.render('success', { message: "Image created successfully", imageId: result.insertId });
    } catch (error) {
        res.render('error', { message: "Internal server error" });
    }
};

// Update image
exports.updateImage = async (req, res) => {
    const imageId = req.params.id;
    try {
        const response = await axios.put(`http://localhost:3000/images/${imageId}`, req.body);
        const result = response.data;
        if (result.affectedRows === 0) {
            return res.render('error', { message: "Image not found" });
        }
        res.render('success', { message: "Image updated successfully" });
    } catch (error) {
        res.render('error', { message: "Internal server error" });
    }
};

// Delete image
exports.deleteImage = async (req, res) => {
    const imageId = req.params.id;
    try {
        const response = await axios.delete(`http://localhost:3000/images/${imageId}`);
        const result = response.data;
        if (result.affectedRows === 0) {
            return res.render('error', { message: "Image not found" });
        }
        res.render('success', { message: "Image deleted successfully" });
    } catch (error) {
        res.render('error', { message: "Internal server error" });
    }
};

// Get all orders
exports.getAllOrders = async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3000/orders');
        const orders = response.data;
        res.render('orders', { orders });
    } catch (error) {
        res.render('error', { message: "Internal server error" });
    }
};

// Get order by ID
exports.getOrderById = async (req, res) => {
    const orderId = req.params.id;
    try {
        const response = await axios.get(`http://localhost:3000/orders/${orderId}`);
        const order = response.data;
        if (!order) {
            return res.render('error', { message: "Order not found" });
        }
        res.render('order', { order });
    } catch (error) {
        res.render('error', { message: "Internal server error" });
    }
};

// Create new order
exports.createOrder = async (req, res) => {
    try {
        const response = await axios.post('http://localhost:3000/orders', req.body);
        const result = response.data;
        res.render('success', { message: "Order created successfully", orderId: result.insertId });
    } catch (error) {
        res.render('error', { message: "Internal server error" });
    }
};

// Update order
exports.updateOrder = async (req, res) => {
    const orderId = req.params.id;
    try {
        const response = await axios.put(`http://localhost:3000/orders/${orderId}`, req.body);
        const result = response.data;
        if (result.affectedRows === 0) {
            return res.render('error', { message: "Order not found" });
        }
        res.render('success', { message: "Order updated successfully" });
    } catch (error) {
        res.render('error', { message: "Internal server error" });
    }
};

// Delete order
exports.deleteOrder = async (req, res) => {
    const orderId = req.params.id;
    try {
        const response = await axios.delete(`http://localhost:3000/orders/${orderId}`);
        const result = response.data;
        if (result.affectedRows === 0) {
            return res.render('error', { message: "Order not found" });
        }
        res.render('success', { message: "Order deleted successfully" });
    } catch (error) {
        res.render('error', { message: "Internal server error" });
    }
};

// Get all order details
exports.getAllOrderDetails = async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3000/orderdetails');
        const orderDetails = response.data;
        res.render('orderDetails', { orderDetails });
    } catch (error) {
        res.render('error', { message: "Internal server error" });
    }
};

// Get order detail by ID
exports.getOrderDetailById = async (req, res) => {
    const orderDetailId = req.params.id;
    try {
        const response = await axios.get(`http://localhost:3000/orderdetails/${orderDetailId}`);
        const orderDetail = response.data;
        if (!orderDetail) {
            return res.render('error', { message: "Order detail not found" });
        }
        res.render('orderDetail', { orderDetail });
    } catch (error) {
        res.render('error', { message: "Internal server error" });
    }
};

// Create new order detail
exports.createOrderDetail = async (req, res) => {
    try {
        const response = await axios.post('http://localhost:3000/orderdetails', req.body);
        const result = response.data;
        res.render('success', { message: "Order detail created successfully", orderDetailId: result.insertId });
    } catch (error) {
        res.render('error', { message: "Internal server error" });
    }
};

// Update order detail
exports.updateOrderDetail = async (req, res) => {
    const orderDetailId = req.params.id;
    try {
        const response = await axios.put(`http://localhost:3000/orderdetails/${orderDetailId}`, req.body);
        const result = response.data;
        if (result.affectedRows === 0) {
            return res.render('error', { message: "Order detail not found" });
        }
        res.render('success', { message: "Order detail updated successfully" });
    } catch (error) {
        res.render('error', { message: "Internal server error" });
    }
};

// Delete order detail
exports.deleteOrderDetail = async (req, res) => {
    const orderDetailId = req.params.id;
    try {
        const response = await axios.delete(`http://localhost:3000/orderdetails/${orderDetailId}`);
        const result = response.data;
        if (result.affectedRows === 0) {
            return res.render('error', { message: "Order detail not found" });
        }
        res.render('success', { message: "Order detail deleted successfully" });
    } catch (error) {
        res.render('error', { message: "Internal server error" });
    }
};

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3000/products');
        const products = response.data;
        res.render('products', { products });
    } catch (error) {
        res.render('error', { message: "Internal server error" });
    }
};

// Get product by ID
exports.getProductById = async (req, res) => {
    const productId = req.params.id;
    const link = req.protocol + '://' + req.get('host');
    try {
        const response = await axios.get(`http://localhost:3000/products/${productId}`);
        const product = response.data;
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

// Get products by price
exports.getProductByPrice = async (req, res) => {
    const productPrice = req.params.price;
    const link = req.protocol + '://' + req.get('host');
    try {
        const response = await axios.get(`http://localhost:3000/products/price/${productPrice}`);
        const products = response.data;
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

// Create new product
exports.createProduct = async (req, res) => {
    try {
        const response = await axios.post('http://localhost:3000/products', req.body);
        const result = response.data;
        res.render('success', { message: "Product created successfully", productId: result.insertId });
    } catch (error) {
        res.render('error', { message: "Internal server error" });
    }
};

// Update product
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

// Delete product
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

// Get all product reviews
exports.getAllProductReviews = async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3000/productreviews');
        const productReviews = response.data;
        res.render('productReviews', { productReviews });
    } catch (error) {
        res.render('error', { message: "Internal server error" });
    }
};

// Get product review by ID
exports.getProductReviewById = async (req, res) => {
    const productReviewId = req.params.id;
    try {
        const response = await axios.get(`http://localhost:3000/productreviews/${productReviewId}`);
        const productReview = response.data;
        if (!productReview) {
            return res.render('error', { message: "Product review not found" });
        }
        res.render('productReview', { productReview });
    } catch (error) {
        res.render('error', { message: "Internal server error" });
    }
};

// Create new product review
exports.createProductReview = async (req, res) => {
    try {
        const response = await axios.post('http://localhost:3000/productreviews', req.body);
        const result = response.data;
        res.render('success', { message: "Product review created successfully", productReviewId: result.insertId });
    } catch (error) {
        res.render('error', { message: "Internal server error" });
    }
};

// Update product review
exports.updateProductReview = async (req, res) => {
    const productReviewId = req.params.id;
    try {
        const response = await axios.put(`http://localhost:3000/productreviews/${productReviewId}`, req.body);
        const result = response.data;
        if (result.affectedRows === 0) {
            return res.render('error', { message: "Product review not found" });
        }
        res.render('success', { message: "Product review updated successfully" });
    } catch (error) {
        res.render('error', { message: "Internal server error" });
    }
};

// Delete product review
exports.deleteProductReview = async (req, res) => {
    const productReviewId = req.params.id;
    try {
        const response = await axios.delete(`http://localhost:3000/productreviews/${productReviewId}`);
        const result = response.data;
        if (result.affectedRows === 0) {
            return res.render('error', { message: "Product review not found" });
        }
        res.render('success', { message: "Product review deleted successfully" });
    } catch (error) {
        res.render('error', { message: "Internal server error" });
    }
};

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3000/users');
        const users = response.data;
        res.render('users', { users });
    } catch (error) {
        res.render('error', { message: "Internal server error" });
    }
};

// Get user by ID
exports.getUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        const response = await axios.get(`http://localhost:3000/users/${userId}`);
        const user = response.data;
        if (!user) {
            return res.render('error', { message: "User not found" });
        }
        res.render('user', { user });
    } catch (error) {
        res.render('error', { message: "Internal server error" });
    }
};

const axios = require('axios');

exports.getOrderById = async (req, res) => {
    const orderId = req.params.id;
    try {
        const response = await axios.put(`http://localhost:3000/users/${userId}`, req.body);
        const result = response.data;
        if (result.affectedRows === 0) {
            return res.render('error', { message: "User not found" });
        }
        res.render('success', { message: "User updated successfully" });
    } catch (error) {
        res.render('error', { message: "Internal server error" });
    }
};

// Delete user
exports.deleteUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const response = await axios.delete(`http://localhost:3000/users/${userId}`);
        const result = response.data;
        if (result.affectedRows === 0) {
            return res.render('error', { message: "User not found" });
        }
        res.render('success', { message: "User deleted successfully" });
    } catch (error) {
        res.render('error', { message: "Internal server error" });
    }
};
