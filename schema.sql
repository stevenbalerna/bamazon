DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
item_id INT(4) NOT NULL,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(100) NOT NULL,
price DECIMAL(5,2) NOT NULL,
stock_quantity INT(20) NOT NULL,
PRIMARY KEY (item_id)
);

SELECT * FROM products;

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
VALUES 
	(101, "Beats Headphones", "electronics", 99.99, 15),
    (202, "Basketball Shorts", "sports apparel", 19.99, 7),
    (333, "Baseball Cap", "sports apparel", 25.99, 56),
    (456, "Apple Watch", "electronics", 199.99, 38),
    (578, "Batman Comic Book #1,000", "books", 3.99, 43),
    (609, "J.Cole - KOD Album", "music", 9.99, 99),
    (747, "12-Pack of Mountain Dew", "drinks", 4.99, 87),
    (824, "Nike Basketball Shoes", "sports apparel", 99.99, 24),
    (987, "Smartfood Popcorn", "foods", 3.99, 88),
    (1234, "Old School DVD", "entertainment", 19.99, 69);
    
    SELECT * FROM products;