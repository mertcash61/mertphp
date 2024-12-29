-- Transaction örnekleri
-- Sipariş işleme transaction'ı
DELIMITER //

CREATE PROCEDURE process_order(
    IN p_user_id INT,
    IN p_product_id INT,
    IN p_quantity INT
)
BEGIN
    DECLARE v_price DECIMAL(10,2);
    DECLARE v_current_stock INT;
    DECLARE v_total_amount DECIMAL(10,2);
    DECLARE v_order_id INT;
    
    -- Transaction başlat
    START TRANSACTION;
    
    -- Ürün bilgilerini kontrol et
    SELECT price, stock INTO v_price, v_current_stock
    FROM products 
    WHERE product_id = p_product_id
    FOR UPDATE;  -- Satırı kilitle
    
    -- Stok kontrolü
    IF v_current_stock < p_quantity THEN
        ROLLBACK;
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Yetersiz stok!';
    END IF;
    
    -- Toplam tutarı hesapla
    SET v_total_amount = v_price * p_quantity;
    
    -- Siparişi oluştur
    INSERT INTO orders (user_id, total_amount, order_date)
    VALUES (p_user_id, v_total_amount, CURRENT_TIMESTAMP);
    
    SET v_order_id = LAST_INSERT_ID();
    
    -- Sipariş detaylarını ekle
    INSERT INTO order_details (order_id, product_id, quantity, price)
    VALUES (v_order_id, p_product_id, p_quantity, v_price);
    
    -- Stok güncelle
    UPDATE products 
    SET stock = stock - p_quantity
    WHERE product_id = p_product_id;
    
    -- Transaction'ı onayla
    COMMIT;
    
    -- Başarılı mesajı
    SELECT CONCAT('Sipariş başarıyla oluşturuldu. Sipariş No: ', v_order_id) AS message;
    
    EXCEPTION
    WHEN OTHERS THEN
        -- Hata durumunda rollback
        ROLLBACK;
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Sipariş işlemi başarısız!';
END //

DELIMITER ;

-- Transaction kullanım örnekleri
-- Başarılı sipariş
CALL process_order(1, 1, 2);

-- Yetersiz stok durumu
CALL process_order(1, 1, 1000);

-- Manuel transaction örneği
START TRANSACTION;

-- Kullanıcı bakiyesini güncelle
UPDATE users 
SET balance = balance - 1500
WHERE user_id = 1;

-- Başka bir kullanıcıya transfer
UPDATE users
SET balance = balance + 1500
WHERE user_id = 2;

-- Kontrol et ve onayla
IF (SELECT balance FROM users WHERE user_id = 1) >= 0 THEN
    COMMIT;
ELSE
    ROLLBACK;
END IF; 