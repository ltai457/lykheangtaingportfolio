<template>
    <div class="skills-container">
      <h1>Skills</h1>
      <div class="skill-categories">
        <button
          v-for="category in skillCategories"
          :key="category"
          @click="filterSkills(category)"
          :class="{ active: activeCategory === category }"
        >
          {{ category }}
        </button>
      </div>
      <transition-group name="fade" tag="ul" class="skills-list">
        <li v-for="skill in filteredSkills" :key="skill" class="fade-item">
          {{ skill }}
        </li>
      </transition-group>
    </div>
  </template>
  
  <script>
export default {
  name: 'Skills',
  data() {
    return {
      skills: {
        Development: ['ASP.NET', 'HTML', 'CSS', 'JavaScript'],
        Databases: ['SQL Server', 'MongoDB'],
        Analysis: ['Statistical Analysis with R'],
        Coding: ['Python', 'JavaScript', 'ASP.NET'],
        Tools: ['Microsoft Office (Word, Excel, PowerPoint)'],
        SoftSkill: ['Teamwork', 'Independent Work', 'Problem Solving', 'High-Pressure Adaptability'],
      },
      activeCategory: 'Development',
    };
  },
  computed: {
    skillCategories() {
      return Object.keys(this.skills);
    },
    filteredSkills() {
      return this.skills[this.activeCategory];
    },
  },
  methods: {
    filterSkills(category) {
      this.activeCategory = category;
    },
  },
};
</script>

  
  <style scoped>
  .skills-container {
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
  
  .skill-categories button {
    padding: 10px 20px;
    margin: 0 10px;
    border: 2px solid #3498db;
    background-color: transparent;
    color: #3498db;
    cursor: pointer;
    border-radius: 5px;
  }
  
  .skill-categories button.active {
    background-color: #3498db;
    color: white;
  }
  
  .skills-list {
    list-style-type: none;
    padding: 0;
  }
  
  .skills-list li {
    background-color: #f7f7f7;
    border: 1px solid #eaeaea;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  </style>
  