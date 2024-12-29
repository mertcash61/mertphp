-- Tablo oluşturma
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    age INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Veri ekleme
INSERT INTO users (name, email, age) VALUES 
('Mert Doğanay', 'mert@example.com', 25),
('Ali Yılmaz', 'ali@example.com', 30);

-- Veri sorgulama
SELECT * FROM users WHERE age > 20;

-- Veri güncelleme
UPDATE users SET age = 26 WHERE name = 'Mert Doğanay';

-- JOIN örneği
SELECT 
    u.name,
    p.title
FROM users u
LEFT JOIN posts p ON u.id = p.user_id
WHERE u.age > 20;

-- Gruplama ve agregasyon
SELECT 
    COUNT(*) as total_users,
    AVG(age) as average_age,
    MAX(age) as max_age
FROM users; 