<template>
    <div class="projects-container">
      <h1>Projects</h1>
      <div class="project-list">
        <div class="project" v-for="project in projects" :key="project.id">
          <h2>{{ project.name }}</h2>
          <p>{{ project.description }}</p>
          <div class="technologies">
            <span class="tech" v-for="tech in project.technologies" :key="tech">{{ tech }}</span>
          </div>
          <a class = 'view-project-btn' v-bind:href="project.link" target="_blank">View Project</a>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: 'Projects',
    data() {
      return {
        projects: [
          {
            id: 1,
            name: 'COMPSCI 399 Capstone Project',
            description: 'Our goal in this project, is to develop an online website for the capstone course which showcases students’ projects to a wide audience, including prospective employers, clients, and other students.',
            technologies: ['ASP.NET6', 'C#', 'Microsoft SQL Sever', 'HTML', 'CSS', 'J-query'],
            link : 'https://github.com/uoa-compsci399-s1-2023/Project-CS399'
          },
          {
            id: 2,
            name: 'Danone NZ UOA Micro Internship',
            description: 'Danone NZ asked our team to build a micro-service to convert receipt from physical one to pdf based. It help them to reduce the waste. ',
            technologies: ['Python', 'MongoDB', 'HTML','CSS','JavaScript'],
            link : ''
          },
          {
            id: 3,
            name: 'COMPSCI 732 Tech Demo',
            description: 'This project aim to showcase all my projects that I have done.',
            technologies: ['Vue.js', 'HTML','CSS',],
            link : 'https://github.com/ltai457/lykheangtaingportfolio'
          }
          // Add more projects as needed
        ]
      }
    }
  };
  </script>
  
  
  
  <style scoped>
  .projects-container {
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-image: url('@/assets/background3.webp');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    margin: 0;
  }
  
  h1 {
    color: #ebd5d5;
    font-size: 3rem;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .project-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px; /* Add space between project cards */
  }
  
  .project {
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Align items vertically with space between */
    width: 300px; /* Fixed width for each project card */
    min-height: 400px; /* Minimum height to ensure all cards are the same height */
    margin-bottom: 20px; /* Space below each project card */
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    background-color: #fff;
  }
  
  .project-description {
    color: #666;
    font-size: 1rem;
    line-height: 1.6;
    text-align: justify;
    margin-top: 10px;
    margin-bottom: 15px;
  }
  
  .technologies {
    margin: 10px 0;
  }
  
  .tech {
    display: inline-block;
    background-color: #eee;
    padding: 5px 10px;
    margin: 5px;
    border-radius: 5px;
  }
  
  .view-project-btn {
    background-color: #3498db;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s;
  }
  
  .view-project-btn:hover {
    background-color: #2980b9;
  }
  
  @media (max-width: 768px) {
    .project {
      width: 80%; /* Adjust width for smaller screens */
    }
  }
  </style>
  
