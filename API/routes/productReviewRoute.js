const express = require('express');
const router = express.Router();
const productReviewController = require('../controllers/productReviewController');

router.get('/', productReviewController.getAllProductReviews);
router.get('/:id', productReviewController.getProductReviewById);
router.post('/', productReviewController.createProductReview);
router.put('/:id', productReviewController.updateProductReview);
router.delete('/:id', productReviewController.deleteProductReview);

module.exports = router;
