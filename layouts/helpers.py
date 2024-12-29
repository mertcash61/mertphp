import os
import json
from datetime import datetime
from typing import Dict, List, Optional

class ConfigManager:
    """Konfigürasyon yönetimi için yardımcı sınıf"""
    
    def __init__(self, config_path: str):
        self.config_path = config_path
        self.config = self._load_config()
    
    def _load_config(self) -> Dict:
        """Konfigürasyon dosyasını yükler"""
        if not os.path.exists(self.config_path):
            return {}
        
        with open(self.config_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    
    def get(self, key: str, default=None) -> any:
        """Konfigürasyon değerini döndürür"""
        return self.config.get(key, default)
    
    def set(self, key: str, value: any) -> None:
        """Konfigürasyon değerini günceller"""
        self.config[key] = value
        self._save_config()
    
    def _save_config(self) -> None:
        """Konfigürasyonu dosyaya kaydeder"""
        with open(self.config_path, 'w', encoding='utf-8') as f:
            json.dump(self.config, f, indent=4)

class Logger:
    """Basit loglama sınıfı"""
    
    def __init__(self, log_path: str):
        self.log_path = log_path
    
    def log(self, message: str, level: str = 'INFO') -> None:
        """Log mesajı yazar"""
        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        log_message = f'[{timestamp}] [{level}] {message}\n'
        
        with open(self.log_path, 'a', encoding='utf-8') as f:
            f.write(log_message)

class DatabaseHelper:
    """Veritabanı işlemleri için yardımcı sınıf"""
    
    def __init__(self, db_config: Dict):
        self.config = db_config
        # Veritabanı bağlantısı burada kurulacak
    
    def query(self, sql: str, params: Optional[tuple] = None) -> List:
        """SQL sorgusu çalıştırır"""
        # Örnek implementasyon
        return []
    
    def execute(self, sql: str, params: Optional[tuple] = None) -> bool:
        """SQL komutunu çalıştırır"""
        # Örnek implementasyon
        return True

class FileManager:
    """Dosya işlemleri için yardımcı sınıf"""
    
    @staticmethod
    def ensure_dir(path: str) -> None:
        """Klasörün var olduğundan emin olur"""
        if not os.path.exists(path):
            os.makedirs(path)
    
    @staticmethod
    def save_uploaded_file(file, destination: str) -> bool:
        """Yüklenen dosyayı kaydeder"""
        try:
            FileManager.ensure_dir(os.path.dirname(destination))
            # Dosya kaydetme işlemi burada yapılacak
            return True
        except Exception:
            return False 