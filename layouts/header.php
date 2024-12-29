<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $pageTitle ?? 'Ana Sayfa'; ?></title>
    <link rel="stylesheet" href="/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <?php if (isset($additionalCss)): ?>
        <?php foreach ($additionalCss as $css): ?>
            <link rel="stylesheet" href="<?php echo $css; ?>">
        <?php endforeach; ?>
    <?php endif; ?>
</head>
<body>
    <header>
        <nav>
            <div class="container">
                <div class="logo">
                    <a href="/">Logo</a>
                </div>
                <ul class="nav-links">
                    <li><a href="/" <?php echo $currentPage === 'home' ? 'class="active"' : ''; ?>>Ana Sayfa</a></li>
                    <li><a href="/hakkimizda" <?php echo $currentPage === 'about' ? 'class="active"' : ''; ?>>Hakkımızda</a></li>
                    <li><a href="/hizmetler" <?php echo $currentPage === 'services' ? 'class="active"' : ''; ?>>Hizmetler</a></li>
                    <li><a href="/referanslar" <?php echo $currentPage === 'references' ? 'class="active"' : ''; ?>>Referanslar</a></li>
                    <li><a href="/iletisim" <?php echo $currentPage === 'contact' ? 'class="active"' : ''; ?>>İletişim</a></li>
                </ul>
                <div class="mobile-menu">
                    <i class="fas fa-bars"></i>
                </div>
            </div>
        </nav>
    </header>
</body>
</html>