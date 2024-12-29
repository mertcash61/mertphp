using System;

namespace PortfolioProject
{
    class Program
    {
        static void Main(string[] args)
        {
            var manager = new ProjectManager();

            var portfolioProject = new Project(
                "Portfolio Website",
                "Kişisel portfolyo web sitesi projesi"
            );

            portfolioProject.AddTechnology("HTML");
            portfolioProject.AddTechnology("CSS");
            portfolioProject.AddTechnology("JavaScript");
            portfolioProject.AddTechnology("C#");

            manager.AddProject(portfolioProject);

            var ecommerceProject = new Project(
                "E-Ticaret Sitesi",
                "Modern bir e-ticaret platformu"
            );

            ecommerceProject.AddTechnology("ASP.NET Core");
            ecommerceProject.AddTechnology("Entity Framework");
            ecommerceProject.AddTechnology("SQL Server");
            ecommerceProject.AddTechnology("React");

            manager.AddProject(ecommerceProject);

            Console.WriteLine("Tüm Projeler:");
            Console.WriteLine("========================");
            manager.ListAllProjects();
        }
    }
} 