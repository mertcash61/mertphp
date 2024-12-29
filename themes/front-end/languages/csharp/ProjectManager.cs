using System;
using System.Collections.Generic;

namespace PortfolioProject
{
    public class Project
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public List<string> Technologies { get; set; }
        public DateTime CreatedDate { get; set; }

        public Project(string name, string description)
        {
            Name = name;
            Description = description;
            Technologies = new List<string>();
            CreatedDate = DateTime.Now;
        }

        public void AddTechnology(string technology)
        {
            Technologies.Add(technology);
        }

        public void DisplayInfo()
        {
            Console.WriteLine($"Proje: {Name}");
            Console.WriteLine($"Açıklama: {Description}");
            Console.WriteLine("Teknolojiler:");
            foreach (var tech in Technologies)
            {
                Console.WriteLine($"- {tech}");
            }
            Console.WriteLine($"Oluşturulma Tarihi: {CreatedDate}");
        }
    }

    public class ProjectManager
    {
        private List<Project> projects;

        public ProjectManager()
        {
            projects = new List<Project>();
        }

        public void AddProject(Project project)
        {
            projects.Add(project);
        }

        public void ListAllProjects()
        {
            foreach (var project in projects)
            {
                project.DisplayInfo();
                Console.WriteLine("------------------------");
            }
        }
    }
} 