-- Stored Procedure örnekleri
DELIMITER //

CREATE PROCEDURE add_product(
    IN p_name VARCHAR(100),
    IN p_price DECIMAL(10,2),
    IN p_category_id INT
)
BEGIN
    INSERT INTO products (name, price, category_id)
    VALUES (p_name, p_price, p_category_id);
END //

CREATE PROCEDURE get_category_products(
    IN category_name VARCHAR(50)
)
BEGIN
    SELECT p.*
    FROM products p
    JOIN categories c ON p.category_id = c.category_id
    WHERE c.name = category_name;
END //

DELIMITER ;

-- Procedure kullanımı
CALL add_product('Mouse', 250, 1);
CALL get_category_products('Elektronik'); 