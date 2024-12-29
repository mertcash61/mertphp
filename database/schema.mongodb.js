// MongoDB şeması ve koleksiyonlar

// Kullanıcılar koleksiyonu
db.createCollection("users", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["name", "email", "password", "role"],
            properties: {
                name: {
                    bsonType: "string",
                    description: "Kullanıcı adı - zorunlu"
                },
                email: {
                    bsonType: "string",
                    pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
                    description: "Geçerli email adresi - zorunlu"
                },
                password: {
                    bsonType: "string",
                    description: "Şifre - zorunlu"
                },
                role: {
                    enum: ["admin", "user"],
                    description: "Kullanıcı rolü - zorunlu"
                },
                createdAt: {
                    bsonType: "date",
                    description: "Oluşturulma tarihi"
                },
                updatedAt: {
                    bsonType: "date",
                    description: "Güncellenme tarihi"
                }
            }
        }
    }
});

// Projeler koleksiyonu
db.createCollection("projects", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["title", "description"],
            properties: {
                title: {
                    bsonType: "string",
                    description: "Proje başlığı - zorunlu"
                },
                description: {
                    bsonType: "string",
                    description: "Proje açıklaması - zorunlu"
                },
                imageUrl: {
                    bsonType: "string",
                    description: "Proje görseli URL'i"
                },
                projectUrl: {
                    bsonType: "string",
                    description: "Proje demo URL'i"
                },
                githubUrl: {
                    bsonType: "string",
                    description: "GitHub repository URL'i"
                },
                technologies: {
                    bsonType: "array",
                    description: "Kullanılan teknolojiler listesi"
                },
                createdAt: {
                    bsonType: "date",
                    description: "Oluşturulma tarihi"
                },
                updatedAt: {
                    bsonType: "date",
                    description: "Güncellenme tarihi"
                }
            }
        }
    }
});

// Blog yazıları koleksiyonu
db.createCollection("blogPosts", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["title", "slug", "content", "authorId"],
            properties: {
                title: {
                    bsonType: "string",
                    description: "Yazı başlığı - zorunlu"
                },
                slug: {
                    bsonType: "string",
                    description: "SEO dostu URL - zorunlu"
                },
                content: {
                    bsonType: "string",
                    description: "Yazı içeriği - zorunlu"
                },
                imageUrl: {
                    bsonType: "string",
                    description: "Kapak görseli URL'i"
                },
                authorId: {
                    bsonType: "objectId",
                    description: "Yazar ID'si - zorunlu"
                },
                tags: {
                    bsonType: "array",
                    description: "Etiketler"
                },
                status: {
                    enum: ["draft", "published"],
                    description: "Yazı durumu"
                },
                publishedAt: {
                    bsonType: "date",
                    description: "Yayınlanma tarihi"
                },
                createdAt: {
                    bsonType: "date",
                    description: "Oluşturulma tarihi"
                },
                updatedAt: {
                    bsonType: "date",
                    description: "Güncellenme tarihi"
                }
            }
        }
    }
});

// İndeksler
db.users.createIndex({ "email": 1 }, { unique: true });
db.blogPosts.createIndex({ "slug": 1 }, { unique: true });
db.blogPosts.createIndex({ "authorId": 1 });

// Örnek veri
db.users.insertOne({
    name: "Mert Doğanay",
    email: "mertdoganay437@gmail.com",
    password: "$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi",
    role: "admin",
    createdAt: new Date(),
    updatedAt: new Date()
});

db.skills.insertMany([
    {
        name: "HTML",
        category: "frontend",
        level: "advanced",
        icon: "fab fa-html5",
        createdAt: new Date()
    },
    {
        name: "CSS",
        category: "frontend",
        level: "advanced",
        icon: "fab fa-css3-alt",
        createdAt: new Date()
    },
    {
        name: "JavaScript",
        category: "frontend",
        level: "intermediate",
        icon: "fab fa-js",
        createdAt: new Date()
    }
]); 