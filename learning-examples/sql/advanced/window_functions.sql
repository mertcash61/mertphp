-- Window Functions örnekleri
-- Kategori bazında ürün sıralaması
SELECT 
    name,
    price,
    category_id,
    RANK() OVER (PARTITION BY category_id ORDER BY price DESC) as price_rank
FROM products;

-- Hareketli ortalama
SELECT 
    order_date,
    total_amount,
    AVG(total_amount) OVER (
        ORDER BY order_date
        ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
    ) as moving_avg
FROM orders;

-- Kümülatif toplam
SELECT 
    order_date,
    total_amount,
    SUM(total_amount) OVER (ORDER BY order_date) as running_total
FROM orders; 