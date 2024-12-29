<?php

class Database {
    private $connection;
    private static $instance = null;

    private function __construct() {
        $config = require_once 'config.php';
        try {
            $this->connection = new PDO(
                "mysql:host={$config['db_host']};dbname={$config['db_name']}",
                $config['db_user'],
                $config['db_pass']
            );
            $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $e) {
            die("Bağlantı hatası: " . $e->getMessage());
        }
    }

    public static function getInstance() {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    public function query($sql, $params = []) {
        try {
            $stmt = $this->connection->prepare($sql);
            $stmt->execute($params);
            return $stmt;
        } catch(PDOException $e) {
            die("Sorgu hatası: " . $e->getMessage());
        }
    }
}

class Auth {
    public static function check() {
        return isset($_SESSION['user_id']);
    }

    public static function user() {
        if (self::check()) {
            $db = Database::getInstance();
            $stmt = $db->query("SELECT * FROM users WHERE id = ?", [$_SESSION['user_id']]);
            return $stmt->fetch(PDO::FETCH_ASSOC);
        }
        return null;
    }

    public static function login($email, $password) {
        $db = Database::getInstance();
        $stmt = $db->query("SELECT * FROM users WHERE email = ?", [$email]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($password, $user['password'])) {
            $_SESSION['user_id'] = $user['id'];
            return true;
        }
        return false;
    }

    public static function logout() {
        session_destroy();
    }
}

class FileUpload {
    private $allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    private $maxSize = 5242880; // 5MB

    public function upload($file, $destination) {
        if (!isset($file['error']) || is_array($file['error'])) {
            throw new RuntimeException('Geçersiz parametre.');
        }

        if ($file['size'] > $this->maxSize) {
            throw new RuntimeException('Dosya boyutu çok büyük.');
        }

        if (!in_array($file['type'], $this->allowedTypes)) {
            throw new RuntimeException('Geçersiz dosya türü.');
        }

        $filename = sprintf('%s-%s', uniqid(), $file['name']);
        
        if (!move_uploaded_file($file['tmp_name'], $destination . $filename)) {
            throw new RuntimeException('Dosya yüklenemedi.');
        }

        return $filename;
    }
}

function sanitize($input) {
    if (is_array($input)) {
        foreach($input as $key => $value) {
            $input[$key] = sanitize($value);
        }
    } else {
        $input = htmlspecialchars($input, ENT_QUOTES, 'UTF-8');
    }
    return $input;
}

function redirect($url) {
    header("Location: $url");
    exit();
} 