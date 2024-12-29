-- JOIN örnekleri
CREATE TABLE categories (
    category_id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE products (
    product_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2),
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

-- Örnek veriler
INSERT INTO categories VALUES 
(1, 'Elektronik'),
(2, 'Kitap'),
(3, 'Giyim');

INSERT INTO products VALUES
(1, 'Laptop', 15000, 1),
(2, 'Python Kitabı', 150, 2),
(3, 'T-Shirt', 200, 3),
(4, 'Telefon', 8000, 1),
(5, 'Kulaklık', 1000, 1);

-- INNER JOIN
SELECT p.name, p.price, c.name as category
FROM products p
INNER JOIN categories c ON p.category_id = c.category_id;

-- LEFT JOIN
SELECT c.name as category, COUNT(p.product_id) as product_count
FROM categories c
LEFT JOIN products p ON c.category_id = p.category_id
GROUP BY c.name; 