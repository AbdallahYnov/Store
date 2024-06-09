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

INSERT INTO users (email, username, password, basket, role, address) VALUES
  ('email@gmail.com','user','mdps','pa'),