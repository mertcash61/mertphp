<?php
require_once '../includes/config.php';
require_once '../layouts/header.php';

// Sayfalama için değişkenler
$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
$perPage = 6;
$start = ($page - 1) * $perPage;

// Örnek blog gönderileri (gerçek uygulamada veritabanından gelecek)
$posts = [
    [
        'id' => 1,
        'title' => 'Modern Web Teknolojileri',
        'excerpt' => 'Modern web geliştirme dünyasındaki son trendler ve teknolojiler hakkında detaylı bir inceleme.',
        'author' => 'Ahmet Yılmaz',
        'date' => '2024-03-15',
        'category' => 'Teknoloji',
        'image' => 'blog1.jpg'
    ],
    // Diğer blog gönderileri...
];

// Toplam sayfa sayısı
$totalPosts = count($posts);
$totalPages = ceil($totalPosts / $perPage);
?>

<div class="content">
    <section class="blog">
        <div class="blog-header">
            <h1>Blog</h1>
            <p class="lead">Teknoloji, web geliştirme ve güncel konular hakkında yazılar</p>
        </div>

        <div class="blog-filters">
            <div class="search-box">
                <input type="text" placeholder="Blog yazılarında ara...">
                <button><i class="fas fa-search"></i></button>
            </div>

            <div class="category-filters">
                <select>
                    <option value="">Tüm Kategoriler</option>
                    <option value="teknoloji">Teknoloji</option>
                    <option value="webgelistirme">Web Geliştirme</option>
                    <option value="tasarim">Tasarım</option>
                    <option value="dijitalpazarlama">Dijital Pazarlama</option>
                </select>
            </div>
        </div>

        <div class="blog-grid">
            <?php foreach (array_slice($posts, $start, $perPage) as $post): ?>
            <article class="blog-post">
                <div class="post-image">
                    <img src="/themes/default/images/blog/<?php echo htmlspecialchars($post['image']); ?>" 
                         alt="<?php echo htmlspecialchars($post['title']); ?>">
                    <div class="post-category"><?php echo htmlspecialchars($post['category']); ?></div>
                </div>
                
                <div class="post-content">
                    <h2><a href="/blog/<?php echo $post['id']; ?>"><?php echo htmlspecialchars($post['title']); ?></a></h2>
                    
                    <div class="post-meta">
                        <span class="author">
                            <i class="fas fa-user"></i> <?php echo htmlspecialchars($post['author']); ?>
                        </span>
                        <span class="date">
                            <i class="fas fa-calendar"></i> <?php echo date('d.m.Y', strtotime($post['date'])); ?>
                        </span>
                    </div>
                    
                    <p class="excerpt"><?php echo htmlspecialchars($post['excerpt']); ?></p>
                    
                    <a href="/blog/<?php echo $post['id']; ?>" class="read-more">Devamını Oku</a>
                </div>
            </article>
            <?php endforeach; ?>
        </div>

        <?php if ($totalPages > 1): ?>
        <div class="pagination">
            <?php if ($page > 1): ?>
                <a href="?page=<?php echo $page - 1; ?>" class="prev">&laquo; Önceki</a>
            <?php endif; ?>
            
            <?php for ($i = 1; $i <= $totalPages; $i++): ?>
                <a href="?page=<?php echo $i; ?>" 
                   class="<?php echo $page === $i ? 'active' : ''; ?>">
                    <?php echo $i; ?>
                </a>
            <?php endfor; ?>
            
            <?php if ($page < $totalPages): ?>
                <a href="?page=<?php echo $page + 1; ?>" class="next">Sonraki &raquo;</a>
            <?php endif; ?>
        </div>
        <?php endif; ?>

        <aside class="blog-sidebar">
            <div class="widget categories">
                <h3>Kategoriler</h3>
                <ul>
                    <li><a href="#">Teknoloji (15)</a></li>
                    <li><a href="#">Web Geliştirme (12)</a></li>
                    <li><a href="#">Tasarım (8)</a></li>
                    <li><a href="#">Dijital Pazarlama (6)</a></li>
                </ul>
            </div>

            <div class="widget popular-posts">
                <h3>Popüler Yazılar</h3>
                <ul>
                    <li>
                        <a href="#">
                            <img src="/themes/default/images/blog/thumb1.jpg" alt="Post 1">
                            <div class="post-info">
                                <h4>JavaScript'te Yeni Özellikler</h4>
                                <span class="date">15 Mart 2024</span>
                            </div>
                        </a>
                    </li>
                    <!-- Diğer popüler yazılar... -->
                </ul>
            </div>

            <div class="widget tags">
                <h3>Etiketler</h3>
                <div class="tag-cloud">
                    <a href="#">HTML5</a>
                    <a href="#">CSS3</a>
                    <a href="#">JavaScript</a>
                    <a href="#">PHP</a>
                    <a href="#">React</a>
                    <a href="#">Vue.js</a>
                    <a href="#">Node.js</a>
                    <a href="#">MongoDB</a>
                </div>
            </div>
        </aside>
    </section>
</div>

<?php
require_once '../layouts/footer.php';
?> 