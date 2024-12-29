<?php include 'header.php'; ?>

<main>
    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <h1>Hoş Geldiniz</h1>
                <p class="hero-text">Profesyonel çözümlerle işinizi bir üst seviyeye taşıyoruz</p>
                <a href="#iletisim" class="btn">Bizimle İletişime Geçin</a>
            </div>
        </div>
    </section>

    <!-- Hizmetler Section -->
    <section class="services p-2">
        <div class="container">
            <h2 class="text-center mb-2">Hizmetlerimiz</h2>
            <div class="grid grid-3">
                <div class="card">
                    <h3>Web Tasarım</h3>
                    <p>Modern ve kullanıcı dostu web siteleri geliştiriyoruz.</p>
                </div>
                <div class="card">
                    <h3>E-Ticaret</h3>
                    <p>Online satış platformları ile işinizi büyütün.</p>
                </div>
                <div class="card">
                    <h3>Dijital Pazarlama</h3>
                    <p>Markanızı dijital dünyada öne çıkarın.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Hakkımızda Section -->
    <section class="about p-2">
        <div class="container">
            <div class="grid grid-2">
                <div class="about-content">
                    <h2>Hakkımızda</h2>
                    <p>10 yılı aşkın tecrübemizle dijital dünyada işinizi büyütmenize yardımcı oluyoruz. Uzman ekibimiz ile en son teknolojileri kullanarak projelerinizi hayata geçiriyoruz.</p>
                    <a href="hakkimizda.php" class="btn btn-outline">Daha Fazla Bilgi</a>
                </div>
                <div class="about-image">
                    <img src="assets/images/about.jpg" alt="Hakkımızda">
                </div>
            </div>
        </div>
    </section>

    <!-- İletişim Section -->
    <section id="iletisim" class="contact p-2">
        <div class="container">
            <h2 class="text-center mb-2">İletişime Geçin</h2>
            <div class="grid grid-2">
                <div class="contact-form card">
                    <form action="contact-process.php" method="POST">
                        <div class="form-group">
                            <label for="name">Adınız</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">E-posta</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Mesajınız</label>
                            <textarea id="message" name="message" required></textarea>
                        </div>
                        <button type="submit" class="btn">Gönder</button>
                    </form>
                </div>
                <div class="contact-info card">
                    <h3>İletişim Bilgileri</h3>
                    <p><strong>Adres:</strong> Örnek Mahallesi, Örnek Sokak No:123</p>
                    <p><strong>Telefon:</strong> +90 555 123 4567</p>
                    <p><strong>E-posta:</strong> info@example.com</p>
                </div>
            </div>
        </div>
    </section>
</main>

<?php include 'footer.php'; ?> 