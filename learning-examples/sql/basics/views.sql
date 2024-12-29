-- View örnekleri
CREATE VIEW product_summary AS
SELECT 
    c.name as category,
    COUNT(p.product_id) as total_products,
    AVG(p.price) as avg_price,
    MIN(p.price) as min_price,
    MAX(p.price) as max_price
FROM categories c
LEFT JOIN products p ON c.category_id = p.category_id
GROUP BY c.name;

-- View kullanımı
SELECT * FROM product_summary;

-- Fiyatı ortalama üzerinde olan ürünler için view
CREATE VIEW expensive_products AS
SELECT name, price
FROM products
WHERE price > (SELECT AVG(price) FROM products); 