<?php
require_once '../includes/config.php';
require_once '../layouts/header.php';

// İletişim formu işleme
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $subject = $_POST['subject'] ?? '';
    $message = $_POST['message'] ?? '';
    
    // Form doğrulama
    $errors = [];
    if (empty($name)) $errors[] = "İsim alanı zorunludur.";
    if (empty($email)) $errors[] = "E-posta alanı zorunludur.";
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = "Geçerli bir e-posta adresi giriniz.";
    if (empty($message)) $errors[] = "Mesaj alanı zorunludur.";
    
    // E-posta gönderme işlemi
    if (empty($errors)) {
        $to = "ornek@domain.com";
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
        
        $emailBody = "
            <h3>Yeni İletişim Formu Mesajı</h3>
            <p><strong>İsim:</strong> $name</p>
            <p><strong>E-posta:</strong> $email</p>
            <p><strong>Konu:</strong> $subject</p>
            <p><strong>Mesaj:</strong><br>$message</p>
        ";
        
        mail($to, "İletişim Formu: $subject", $emailBody, $headers);
        $success = "Mesajınız başarıyla gönderildi.";
    }
}
?>

<div class="content">
    <section class="contact">
        <h1>İletişim</h1>
        
        <?php if (!empty($errors)): ?>
            <div class="alert alert-danger">
                <ul>
                    <?php foreach ($errors as $error): ?>
                        <li><?php echo htmlspecialchars($error); ?></li>
                    <?php endforeach; ?>
                </ul>
            </div>
        <?php endif; ?>
        
        <?php if (isset($success)): ?>
            <div class="alert alert-success">
                <?php echo $success; ?>
            </div>
        <?php endif; ?>

        <div class="contact-grid">
            <div class="contact-form">
                <h2>Bize Ulaşın</h2>
                <form method="POST" action="">
                    <div class="form-group">
                        <label for="name">Adınız Soyadınız *</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="email">E-posta Adresiniz *</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="subject">Konu</label>
                        <input type="text" id="subject" name="subject">
                    </div>
                    
                    <div class="form-group">
                        <label for="message">Mesajınız *</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    
                    <button type="submit" class="btn">Gönder</button>
                </form>
            </div>
            
            <div class="contact-info">
                <h2>İletişim Bilgileri</h2>
                <div class="info-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <div>
                        <h3>Adres</h3>
                        <p>Çıldır Mahallesi, 134. Sokak No:05<br>
                        Marmaris/Muğla</p>
                    </div>
                </div>
                
                <div class="info-item">
                    <i class="fas fa-phone"></i>
                    <div>
                        <h3>Telefon</h3>
                        <p>+90 533 472 75 61</p>
                    </div>
                </div>
                
                <div class="info-item">
                    <i class="fas fa-envelope"></i>
                    <div>
                        <h3>E-posta</h3>
                        <p>imertdoganay437@gmail.com</p>
                    </div>
                </div>
                
                <div class="social-media">
                    <h3>Sosyal Medya</h3>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="map-container">
            <h2>Konum</h2>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.2718441828513!2d29.0307!3d41.0053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAwJzE5LjEiTiAyOcKwMDEnNTAuNiJF!5e0!3m2!1str!2str!4v1234567890!5m2!1str!2str" 
                width="100%" 
                height="450" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy">
            </iframe>
        </div>
    </section>
</div>

<?php
require_once '../layouts/footer.php';
?> 