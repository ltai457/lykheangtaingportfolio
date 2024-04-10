<template>
  <div id="app">
    <nav class="navbar">
      <div class="logo">
        <router-link to="/" class="nav-link">My Portfolio</router-link>
      </div>
      <button @click="toggleNav" class="nav-toggle" aria-label="Toggle navigation">
        ☰
      </button>
      <div class="nav-container" :class="{ 'is-active': navActive }">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about-me" class="nav-link">About Me</router-link>
        <router-link to="/projects" class="nav-link">Projects</router-link>
        <router-link to="/skills" class="nav-link">Skills</router-link>
        <router-link to ="/contact-me" class = "nav-link">Contact Me</router-link>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      navActive: false,
    };
  },
  methods: {
    toggleNav() {
      this.navActive = !this.navActive;
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
}

.logo .nav-link {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}

.nav-container {
  display: flex;
  gap: 20px;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: #555;
}

.nav-toggle {
  display: none;
  background-color: #333;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
}

@media (max-width: 768px) {
  .nav-container {
    display: none;
    flex-direction: column;
    width: 100%;
    text-align: center;
  }

  .nav-container.is-active {
    display: flex;
  }

  .nav-toggle {
    display: block;
  }
}
</style>
