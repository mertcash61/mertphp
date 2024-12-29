<?php
require_once '../includes/config.php';
require_once '../layouts/header.php';
?>

<div class="content">
    <section class="about">
        <div class="about-header">
            <h1>Hakkımda</h1>
            <div class="profile-image">
                <img src="/themes/default/images/profile.jpg" alt="Profil Fotoğrafı">
            </div>
        </div>

        <div class="about-content">
            <div class="bio">
                <h2>Merhaba, Ben [Mert Doğanay]</h2>
                <p class="lead">10+ yıllık deneyime sahip Full Stack Web Developer</p>
                
                <div class="bio-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>

            <div class="skills">
                <h2>Yeteneklerim</h2>
                <div class="skill-grid">
                    <div class="skill-category">
                        <h3>Frontend Teknolojileri</h3>
                        <ul>
                            <li>HTML5 & CSS3</li>
                            <li>JavaScript (ES6+)</li>
                            <li>React.js</li>
                            <li>Vue.js</li>
                            <li>Bootstrap</li>
                            <li>SASS/SCSS</li>
                        </ul>
                    </div>

                    <div class="skill-category">
                        <h3>Backend Teknolojileri</h3>
                        <ul>
                            <li>PHP</li>
                            <li>Node.js</li>
                            <li>Python</li>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                            <li>RESTful APIs</li>
                        </ul>
                    </div>

                    <div class="skill-category">
                        <h3>Diğer Yetenekler</h3>
                        <ul>
                            <li>Git & GitHub</li>
                            <li>Docker</li>
                            <li>AWS</li>
                            <li>Linux Server</li>
                            <li>Agile/Scrum</li>
                            <li>UI/UX Design</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="experience">
                <h2>İş Deneyimi</h2>
                <div class="timeline">
                    <div class="timeline-item">
                        <div class="timeline-date">2020 - Günümüz</div>
                        <div class="timeline-content">
                            <h3>Kıdemli Web Geliştirici</h3>
                            <p class="company">ABC Teknoloji Ltd. Şti.</p>
                            <ul>
                                <li>Büyük ölçekli web uygulamaları geliştirme</li>
                                <li>Takım liderliği ve mentorluk</li>
                                <li>Proje planlama ve yönetimi</li>
                            </ul>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-date">2017 - 2020</div>
                        <div class="timeline-content">
                            <h3>Full Stack Developer</h3>
                            <p class="company">XYZ Yazılım A.Ş.</p>
                            <ul>
                                <li>E-ticaret platformları geliştirme</li>
                                <li>RESTful API tasarımı ve implementasyonu</li>
                                <li>Performans optimizasyonu</li>
                            </ul>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-date">2015 - 2017</div>
                        <div class="timeline-content">
                            <h3>Frontend Developer</h3>
                            <p class="company">Web Çözümleri Ltd.</p>
                            <ul>
                                <li>Responsive web siteleri geliştirme</li>
                                <li>JavaScript framework'leri ile çalışma</li>
                                <li>Cross-browser uyumluluk sağlama</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="education">
                <h2>Eğitim</h2>
                <div class="education-item">
                    <h3>Bilgisayar Mühendisliği</h3>
                    <p class="school">XYZ Üniversitesi</p>
                    <p class="date">2011 - 2015</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

            <div class="certifications">
                <h2>Sertifikalar</h2>
                <div class="cert-grid">
                    <div class="cert-item">
                        <h3>AWS Certified Developer</h3>
                        <p class="date">2022</p>
                    </div>
                    <div class="cert-item">
                        <h3>Google Cloud Professional</h3>
                        <p class="date">2021</p>
                    </div>
                    <div class="cert-item">
                        <h3>MongoDB Certified Developer</h3>
                        <p class="date">2020</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

<?php
require_once '../layouts/footer.php';
?> 