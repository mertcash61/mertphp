<?php
require_once '../includes/config.php';
require_once '../layouts/header.php';
?>

<div class="content">
    <section class="references">
        <h1>Referanslarım</h1>
        <p class="lead">Başarıyla tamamladığımız projeler ve mutlu müşterilerimiz</p>

        <div class="reference-filters">
            <button class="filter-btn active" data-filter="all">Tümü</button>
            <button class="filter-btn" data-filter="web">Web Tasarım</button>
            <button class="filter-btn" data-filter="ecommerce">E-Ticaret</button>
            <button class="filter-btn" data-filter="mobile">Mobil Uygulama</button>
        </div>

        <div class="reference-grid">
            <!-- Web Tasarım Projeleri -->
            <div class="reference-item web">
                <div class="reference-image">
                    <img src="/themes/default/images/references/project1.jpg" alt="Proje 1">
                    <div class="overlay">
                        <a href="#" class="btn">Detayları Gör</a>
                    </div>
                </div>
                <div class="reference-info">
                    <h3>Kurumsal Web Sitesi</h3>
                    <p>ABC Şirketi için geliştirilen modern kurumsal web sitesi</p>
                    <div class="tags">
                        <span>HTML5</span>
                        <span>CSS3</span>
                        <span>JavaScript</span>
                        <span>PHP</span>
                    </div>
                </div>
            </div>

            <!-- E-Ticaret Projeleri -->
            <div class="reference-item ecommerce">
                <div class="reference-image">
                    <img src="/themes/default/images/references/project2.jpg" alt="Proje 2">
                    <div class="overlay">
                        <a href="#" class="btn">Detayları Gör</a>
                    </div>
                </div>
                <div class="reference-info">
                    <h3>Online Mağaza</h3>
                    <p>XYZ Mağazası için geliştirilen e-ticaret platformu</p>
                    <div class="tags">
                        <span>React</span>
                        <span>Node.js</span>
                        <span>MongoDB</span>
                    </div>
                </div>
            </div>

            <!-- Mobil Uygulama Projeleri -->
            <div class="reference-item mobile">
                <div class="reference-image">
                    <img src="/themes/default/images/references/project3.jpg" alt="Proje 3">
                    <div class="overlay">
                        <a href="#" class="btn">Detayları Gör</a>
                    </div>
                </div>
                <div class="reference-info">
                    <h3>Mobil Uygulama</h3>
                    <p>DEF Firması için geliştirilen iOS ve Android uygulaması</p>
                    <div class="tags">
                        <span>React Native</span>
                        <span>Firebase</span>
                    </div>
                </div>
            </div>

            <!-- Diğer Projeler -->
            <div class="reference-item web">
                <div class="reference-image">
                    <img src="/themes/default/images/references/project4.jpg" alt="Proje 4">
                    <div class="overlay">
                        <a href="#" class="btn">Detayları Gör</a>
                    </div>
                </div>
                <div class="reference-info">
                    <h3>Blog Platformu</h3>
                    <p>Kişisel blog sitesi tasarımı ve geliştirmesi</p>
                    <div class="tags">
                        <span>WordPress</span>
                        <span>PHP</span>
                        <span>MySQL</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="testimonials">
            <h2>Müşteri Yorumları</h2>
            <div class="testimonial-grid">
                <div class="testimonial-item">
                    <div class="testimonial-content">
                        <p>"Harika bir iş çıkardılar. Profesyonel yaklaşımları ve zamanında teslimatları için teşekkür ederiz."</p>
                    </div>
                    <div class="testimonial-author">
                        <img src="/themes/default/images/testimonials/client1.jpg" alt="Müşteri 1">
                        <div class="author-info">
                            <h4>Ahmet Yılmaz</h4>
                            <p>ABC Şirketi CEO</p>
                        </div>
                    </div>
                </div>

                <div class="testimonial-item">
                    <div class="testimonial-content">
                        <p>"İhtiyaçlarımızı tam olarak anladılar ve mükemmel bir çözüm sundular. Kesinlikle tavsiye ederim."</p>
                    </div>
                    <div class="testimonial-author">
                        <img src="/themes/default/images/testimonials/client2.jpg" alt="Müşteri 2">
                        <div class="author-info">
                            <h4>Ayşe Kaya</h4>
                            <p>XYZ Mağazası Sahibi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

<?php
require_once '../layouts/footer.php';
?> 