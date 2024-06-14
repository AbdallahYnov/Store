CREATE TABLE users (
   user_id INT AUTO_INCREMENT PRIMARY KEY,
   email VARCHAR(100),
   username VARCHAR(50) NOT NULL UNIQUE,
   password VARCHAR(50) NOT NULL,
   basket VARCHAR(50) NOT NULL,
   role VARCHAR(50),
   address VARCHAR(100)
);

CREATE TABLE orders (
   order_id INT AUTO_INCREMENT PRIMARY KEY,
   total DECIMAL(15,2),
   purchase_date DATE,
   creation_date DATE,
   address VARCHAR(100),
   state VARCHAR(50),
   user_id INT,
   FOREIGN KEY(user_id) REFERENCES users(user_id)
);

CREATE TABLE categories (
   category_id INT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(50) NOT NULL UNIQUE,
   size VARCHAR(50)
);

CREATE TABLE discounts (
   discount_id INT AUTO_INCREMENT PRIMARY KEY,
   duration VARCHAR(50),
   amount DECIMAL(10,2)
);

CREATE TABLE products (
   product_id INT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(50) NOT NULL,
   description TEXT,
   price DECIMAL(10,2) NOT NULL,
   quantity INT NOT NULL,
   couleur VARCHAR(50),
   type VARCHAR(50),
   gender VARCHAR(50),
   size VARCHAR(50),
   discount_id INT,
   category_id INT NOT NULL,
   FOREIGN KEY(discount_id) REFERENCES discounts(discount_id),
   FOREIGN KEY(category_id) REFERENCES categories(category_id)
);

CREATE TABLE orderdetails (
   orderdetail_id INT AUTO_INCREMENT PRIMARY KEY,
   quantity INT NOT NULL,
   price DECIMAL(15,2) NOT NULL,
   product VARCHAR(50),
   product_id INT NOT NULL,
   order_id INT NOT NULL,
   FOREIGN KEY(product_id) REFERENCES products(product_id),
   FOREIGN KEY(order_id) REFERENCES orders(order_id)
);

CREATE TABLE productreviews (
   review_id INT AUTO_INCREMENT PRIMARY KEY,
   rating INT CHECK (rating >= 1 AND rating <= 5),
   is_positive TINYINT, -- Byte equivalent for boolean
   product_id INT NOT NULL,
   user_id INT NOT NULL,
   FOREIGN KEY(product_id) REFERENCES products(product_id),
   FOREIGN KEY(user_id) REFERENCES users(user_id)
);

CREATE TABLE images (
   image_id INT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(50),
   chemin VARCHAR(255) NOT NULL UNIQUE,
   idx INT NOT NULL UNIQUE,
   product_id INT NOT NULL,
   FOREIGN KEY(product_id) REFERENCES products(product_id)
);
-- Insert sample users
INSERT INTO users (email, username, password, basket, role, address) VALUES
('alice@example.com', 'alice', 'password123', 'basket1', 'customer', '123 Apple St, Wonderland'),
('bob@example.com', 'bob', 'password456', 'basket2', 'customer', '456 Banana St, Fruitland'),
('carol@example.com', 'carol', 'password789', 'basket3', 'customer', '789 Cherry St, Berryland');

-- Insert sample categories
INSERT INTO categories (name, size) VALUES
('Electronics', NULL),
('Clothing', NULL),
('Books', NULL);

  -- Insert products into the 'Electronics' category
INSERT INTO products (name, description, price, quantity, couleur, type, gender, size, discount_id, category_id) VALUES
('Smartphone Model X', 'Latest smartphone with high-end features.', 999.99, 50, 'Black', 'Phone', NULL, NULL, NULL, 1),
('Laptop Model Y', 'Powerful laptop for gaming and productivity.', 1499.99, 30, 'Silver', 'Laptop', NULL, NULL, NULL, 1),
('4K TV', 'Ultra HD television with stunning picture quality.', 799.99, 20, 'Black', 'Television', NULL, NULL, NULL, 1),
('Wireless Headphones', 'Noise-cancelling headphones for immersive sound.', 199.99, 100, 'Black', 'Headphones', NULL, NULL, NULL, 1),
('Smartwatch Model Z', 'Fitness-focused smartwatch with many apps.', 299.99, 60, 'Black', 'Smartwatch', NULL, NULL, NULL, 1),
('Bluetooth Speaker', 'Portable speaker with high-quality sound.', 99.99, 75, 'Red', 'Speaker', NULL, NULL, NULL, 1),
('Digital Camera', 'Capture stunning photos and videos.', 549.99, 25, 'Black', 'Camera', NULL, NULL, NULL, 1),
('Gaming Console', 'Next-gen gaming console for ultimate fun.', 499.99, 35, 'White', 'Console', NULL, NULL, NULL, 1),
('Tablet', 'Lightweight tablet with a high-resolution display.', 399.99, 45, 'Gray', 'Tablet', NULL, NULL, NULL, 1),
('Wireless Mouse', 'Ergonomic mouse with long battery life.', 29.99, 150, 'Blue', 'Mouse', NULL, NULL, NULL, 1),
('Router', 'High-speed router for seamless internet connectivity.', 89.99, 40, 'Black', 'Router', NULL, NULL, NULL, 1),
('External Hard Drive', 'Large storage capacity with fast data transfer.', 119.99, 60, 'Black', 'Storage', NULL, NULL, NULL, 1),
('Drone', 'Compact drone with a high-definition camera.', 599.99, 20, 'White', 'Drone', NULL, NULL, NULL, 1),
('VR Headset', 'Experience immersive virtual reality.', 299.99, 25, 'Black', 'VR', NULL, NULL, NULL, 1),
('E-Reader', 'Read e-books on a lightweight, glare-free screen.', 129.99, 80, 'Gray', 'E-Reader', NULL, NULL, NULL, 1);

-- Insert products into the 'Clothing' category
INSERT INTO products (name, description, price, quantity, couleur, type, gender, size, discount_id, category_id) VALUES
('Winter Jacket', 'Warm and comfortable winter jacket.', 129.99, 40, 'Blue', 'Jacket', 'Unisex', 'L', NULL, 2),
('Sneakers', 'Stylish and comfortable sneakers for daily wear.', 79.99, 60, 'White', 'Shoes', 'Unisex', 'M', NULL, 2),
('T-Shirt', 'Soft cotton t-shirt available in various colors.', 19.99, 200, 'Red', 'Top', 'Unisex', 'M', NULL, 2),
('Jeans', 'Classic denim jeans.', 49.99, 120, 'Blue', 'Pants', 'Unisex', '32', NULL, 2),
('Cap', 'Adjustable cap for all seasons.', 15.99, 150, 'Black', 'Accessory', 'Unisex', 'One Size', NULL, 2),
('Sweater', 'Cozy sweater for chilly weather.', 39.99, 70, 'Gray', 'Top', 'Unisex', 'M', NULL, 2),
('Dress', 'Elegant dress for special occasions.', 89.99, 30, 'Green', 'Dress', 'Female', 'M', NULL, 2),
('Belt', 'Leather belt with a stylish buckle.', 25.99, 100, 'Brown', 'Accessory', 'Unisex', 'One Size', NULL, 2),
('Socks', 'Comfortable socks in different colors.', 9.99, 250, 'Multicolor', 'Accessory', 'Unisex', 'One Size', NULL, 2),
('Hat', 'Sun hat for outdoor activities.', 22.99, 80, 'Beige', 'Accessory', 'Unisex', 'One Size', NULL, 2),
('Scarf', 'Soft scarf for cold days.', 14.99, 90, 'Red', 'Accessory', 'Unisex', 'One Size', NULL, 2),
('Gloves', 'Warm gloves for winter.', 19.99, 60, 'Black', 'Accessory', 'Unisex', 'M', NULL, 2),
('Sunglasses', 'Stylish sunglasses with UV protection.', 49.99, 40, 'Black', 'Accessory', 'Unisex', 'One Size', NULL, 2),
('Watch', 'Fashionable watch with a leather strap.', 199.99, 50, 'Black', 'Accessory', 'Unisex', 'One Size', NULL, 2),
('Sandals', 'Comfortable sandals for summer.', 29.99, 100, 'Brown', 'Shoes', 'Unisex', 'M', NULL, 2);

-- Insert products into the 'Books' category (15 items + 3 additional)
INSERT INTO products (name, description, price, quantity, couleur, type, gender, size, discount_id, category_id) VALUES
('Mystery Novel', 'A gripping mystery novel with unexpected twists.', 12.99, 100, NULL, 'Book', NULL, NULL, NULL, 3),
('Science Fiction Book', 'Explore futuristic worlds in this sci-fi book.', 15.99, 80, NULL, 'Book', NULL, NULL, NULL, 3),
('Cooking Book', 'Recipes for delicious and healthy meals.', 22.99, 50, NULL, 'Book', NULL, NULL, NULL, 3),
('Fantasy Book', 'Dive into a world of magic and adventure.', 18.99, 70, NULL, 'Book', NULL, NULL, NULL, 3),
('History Book', 'Comprehensive history book covering major events.', 20.99, 90, NULL, 'Book', NULL, NULL, NULL, 3),
('Romance Novel', 'A heartwarming romance novel.', 13.99, 120, NULL, 'Book', NULL, NULL, NULL, 3),
('Self-Help Book', 'Advice on personal development and success.', 17.99, 60, NULL, 'Book', NULL, NULL, NULL, 3),
('Biography', 'An inspiring biography of a famous personality.', 19.99, 50, NULL, 'Book', NULL, NULL, NULL, 3),
('Thriller Book', 'A fast-paced thriller full of suspense.', 14.99, 80, NULL, 'Book', NULL, NULL, NULL, 3),
('Technology Book', 'In-depth guide to modern technology trends.', 24.99, 60, NULL, 'Book', NULL, NULL, NULL, 3),
('Poetry Book', 'A collection of beautiful poems.', 11.99, 70, NULL, 'Book', NULL, NULL, NULL, 3),
('Graphic Novel', 'A visually stunning graphic novel.', 24.99, 40, NULL, 'Book', NULL, NULL, NULL, 3),
('Travel Guide', 'Your companion for exploring new destinations.', 19.99, 50, NULL, 'Book', NULL, NULL, NULL, 3),
('Art Book', 'A beautifully illustrated book on fine art.', 34.99, 30, NULL, 'Book', NULL, NULL, NULL, 3),
('Science Book', 'A detailed exploration of scientific concepts.', 29.99, 60, NULL, 'Book', NULL, NULL, NULL, 3);

-- Insert sample discounts
INSERT INTO discounts (duration, amount) VALUES
('30 days', 10.00),
('15 days', 5.00),
('7 days', 2.00);

-- Insert sample orders
INSERT INTO orders (total, purchase_date, creation_date, address, state, user_id) VALUES
(1229.98, '2024-06-01', '2024-06-01', '123 Apple St, Wonderland', 'shipped', 1),
(79.99, '2024-06-03', '2024-06-02', '456 Banana St, Fruitland', 'delivered', 2),
(36.98, '2024-06-05', '2024-06-04', '789 Cherry St, Berryland', 'processing', 3);

-- Insert sample order details
INSERT INTO orderdetails (quantity, price, product, product_id, order_id) VALUES
(1, 999.99, 'Smartphone Model X', 1, 1),
(1, 199.99, 'Wireless Headphones', 4, 1),
(1, 79.99, 'Sneakers', 19, 2),
(2, 18.99, 'Fantasy Book', 41, 3);

-- Insert sample product reviews
INSERT INTO productreviews (rating, is_positive, product_id, user_id) VALUES
(5, 1, 1, 1),
(4, 1, 4, 2),
(3, 1, 19, 3),
(2, 0, 41, 1);