-- Veritabanı oluşturma
CREATE DATABASE PortfolioDB
GO

USE PortfolioDB
GO

-- Projeler tablosu
CREATE TABLE Projects (
    ProjectID INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,
    Description NVARCHAR(MAX),
    CreatedDate DATETIME DEFAULT GETDATE(),
    UpdatedDate DATETIME,
    Status NVARCHAR(20) DEFAULT 'Active'
)
GO

-- Teknolojiler tablosu
CREATE TABLE Technologies (
    TechnologyID INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(50) NOT NULL,
    Category NVARCHAR(50),
    Description NVARCHAR(200)
)
GO

-- Proje-Teknoloji ilişki tablosu
CREATE TABLE ProjectTechnologies (
    ProjectID INT,
    TechnologyID INT,
    CONSTRAINT PK_ProjectTechnologies PRIMARY KEY (ProjectID, TechnologyID),
    CONSTRAINT FK_ProjectTech_Project FOREIGN KEY (ProjectID) 
        REFERENCES Projects(ProjectID) ON DELETE CASCADE,
    CONSTRAINT FK_ProjectTech_Technology FOREIGN KEY (TechnologyID) 
        REFERENCES Technologies(TechnologyID) ON DELETE CASCADE
)
GO

-- Örnek veri ekleme
INSERT INTO Technologies (Name, Category, Description) VALUES
('HTML', 'Frontend', 'Web sayfası yapılandırma dili'),
('CSS', 'Frontend', 'Web sayfası stillendirme dili'),
('JavaScript', 'Frontend', 'Web programlama dili'),
('C#', 'Backend', '.NET platformu programlama dili'),
('SQL Server', 'Database', 'İlişkisel veritabanı yönetim sistemi')
GO

-- Stored Procedure: Proje Ekleme
CREATE PROCEDURE sp_AddProject
    @Name NVARCHAR(100),
    @Description NVARCHAR(MAX),
    @Technologies NVARCHAR(MAX)
AS
BEGIN
    BEGIN TRY
        BEGIN TRANSACTION

        -- Proje ekle
        INSERT INTO Projects (Name, Description)
        VALUES (@Name, @Description)

        DECLARE @ProjectID INT = SCOPE_IDENTITY()

        -- Teknolojileri ekle
        INSERT INTO ProjectTechnologies (ProjectID, TechnologyID)
        SELECT @ProjectID, value
        FROM STRING_SPLIT(@Technologies, ',')

        COMMIT TRANSACTION
    END TRY
    BEGIN CATCH
        ROLLBACK TRANSACTION
        THROW
    END CATCH
END
GO

-- Stored Procedure: Proje Listeleme
CREATE PROCEDURE sp_GetProjects
AS
BEGIN
    SELECT 
        p.ProjectID,
        p.Name AS ProjectName,
        p.Description,
        p.CreatedDate,
        STRING_AGG(t.Name, ', ') AS Technologies
    FROM Projects p
    LEFT JOIN ProjectTechnologies pt ON p.ProjectID = pt.ProjectID
    LEFT JOIN Technologies t ON pt.TechnologyID = t.TechnologyID
    WHERE p.Status = 'Active'
    GROUP BY p.ProjectID, p.Name, p.Description, p.CreatedDate
    ORDER BY p.CreatedDate DESC
END
GO

-- İndeksler
CREATE INDEX IX_Projects_Status ON Projects(Status)
CREATE INDEX IX_Technologies_Category ON Technologies(Category)
GO

-- Trigger: Proje Güncelleme Tarihi
CREATE TRIGGER tr_UpdateProjectDate
ON Projects
AFTER UPDATE
AS
BEGIN
    UPDATE Projects
    SET UpdatedDate = GETDATE()
    FROM Projects p
    INNER JOIN inserted i ON p.ProjectID = i.ProjectID
END
GO 