<?php
namespace App\Models;

class User {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    public function find($id) {
        // Kullanıcı bulma
    }

    public function create($data) {
        // Kullanıcı oluşturma
    }

    public function update($id, $data) {
        // Kullanıcı güncelleme
    }

    public function delete($id) {
        // Kullanıcı silme
    }
} 