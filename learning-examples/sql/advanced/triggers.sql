-- Trigger örnekleri
DELIMITER //

-- Ürün fiyat değişikliği log tablosu
CREATE TABLE price_history (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    old_price DECIMAL(10,2),
    new_price DECIMAL(10,2),
    change_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Fiyat değişikliği trigger'ı
CREATE TRIGGER before_price_update
BEFORE UPDATE ON products
FOR EACH ROW
BEGIN
    IF OLD.price != NEW.price THEN
        INSERT INTO price_history (product_id, old_price, new_price)
        VALUES (OLD.product_id, OLD.price, NEW.price);
    END IF;
END //

DELIMITER ;

-- Test için fiyat güncelleme
UPDATE products SET price = 16000 WHERE name = 'Laptop'; 