-- Alt sorgu örnekleri
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    user_id INT,
    total_amount DECIMAL(10,2),
    order_date DATE
);

-- Örnek veriler
INSERT INTO orders VALUES
(1, 1, 500, '2024-01-01'),
(2, 1, 750, '2024-01-15'),
(3, 2, 1200, '2024-01-20'),
(4, 3, 300, '2024-02-01');

-- Alt sorgu ile ortalama sipariş tutarından yüksek siparişler
SELECT *
FROM orders
WHERE total_amount > (
    SELECT AVG(total_amount)
    FROM orders
);

-- En yüksek sipariş tutarına sahip kullanıcıyı bulma
SELECT user_id, total_amount
FROM orders
WHERE total_amount = (
    SELECT MAX(total_amount)
    FROM orders
); 