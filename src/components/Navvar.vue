<template>
    <nav class="navbar">
      <div class="container">
        <router-link to="/" class="navbar-brand">My Portfolio</router-link>
        <div class="navbar-links">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/about-me" class="nav-link">About Me</router-link>
          <router-link to="/projects" class="nav-link">Projects</router-link>
          <router-link to="/skills" class="nav-link">Skills</router-link>
          <!-- Add more links as needed -->
        </div>
      </div>
    </nav>
  </template>


<style scoped>
.navbar {
  background-color: #333;
  color: #fff;
  padding: 10px 0;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
}

.navbar-brand {
  font-size: 1.5rem;
  color: #fff;
  text-decoration: none;
  padding-left: 20px;
}

.navbar-links {
  display: flex;
}

.nav-link {
  margin-left: 20px;
  color: #ddd;
  text-decoration: none;
}

.nav-link:hover {
  color: #fff;
}
</style>

  