    <footer class="footer">
        <div class="container">
            <div class="grid grid-3">
                <div class="footer-info">
                    <h3>Hakkımızda</h3>
                    <p>Profesyonel web çözümleri ve dijital pazarlama hizmetleri sunuyoruz.</p>
                </div>
                <div class="footer-links">
                    <h3>Hızlı Linkler</h3>
                    <ul>
                        <li><a href="/">Ana Sayfa</a></li>
                        <li><a href="/hizmetler">Hizmetler</a></li>
                        <li><a href="/hakkimizda">Hakkımızda</a></li>
                        <li><a href="/iletisim">İletişim</a></li>
                    </ul>
                </div>
                <div class="footer-social">
                    <h3>Sosyal Medya</h3>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; <?php echo date('Y'); ?> Tüm Hakları Saklıdır.</p>
            </div>
        </div>
    </footer>
    
    <!-- JavaScript -->
    <script src="/js/main.js"></script>
    <script src="/js/form.js"></script>
    <script src="/js/animations.js"></script>
    <?php if (isset($additionalJs)): ?>
        <?php foreach ($additionalJs as $js): ?>
            <script src="<?php echo $js; ?>"></script>
        <?php endforeach; ?>
    <?php endif; ?>
</body>
</html> 