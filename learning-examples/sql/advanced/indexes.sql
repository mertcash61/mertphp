-- Index örnekleri
-- Temel index
CREATE INDEX idx_product_name ON products(name);

-- Composite index
CREATE INDEX idx_order_date_user ON orders(order_date, user_id);

-- Unique index
CREATE UNIQUE INDEX idx_email ON users(email);

-- Full-text index
CREATE FULLTEXT INDEX idx_product_description 
ON products(description);

-- Index kullanımı örneği
EXPLAIN SELECT * FROM products 
WHERE name LIKE 'Lap%';

-- Full-text arama örneği
SELECT * FROM products 
WHERE MATCH(description) AGAINST('wireless bluetooth' IN BOOLEAN MODE); 