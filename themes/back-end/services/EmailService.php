<?php
namespace App\Services;

class EmailService {
    private $config;

    public function __construct($config) {
        $this->config = $config;
    }

    public function sendWelcomeEmail($user) {
        // Hoş geldin e-postası gönderme
    }

    public function sendPasswordReset($user, $token) {
        // Şifre sıfırlama e-postası gönderme
    }

    public function sendNotification($user, $message) {
        // Bildirim e-postası gönderme
    }
} 