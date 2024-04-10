<template>
    <div class="home">
        <header>
            <h1>I'm Lykheang Taing(Kay)</h1>
            <a v-bind:href="githubLink" target="_blank">
            <img src="@/assets/github-mark.png" alt="GitHub Logo" class = "logo">
            </a>
            <a v-bind:href="instagramLink" target="_blank">
            <img src="@/assets/LinkedinIcon.png" alt="Linkedin Logo" class = "logo">
            </a>
        </header>

    <router-link to="/about-me" class="btn">Learn More About Me</router-link>
    </div>
  </template>
  
  
  <script>
  export default {
  data() {
    return {
      githubLink: 'https://github.com/ltai457',
      instagramLink: 'https://www.linkedin.com/in/lykheang-taing-086044205/'
    };
  }
};

  </script>
  
  <style scoped>
.home {
  /* Make sure the .home class covers the entire viewport */
  min-height: 100vh; /* 100% of the viewport height */
  width: 100vw; /* 100% of the viewport width */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('@/assets/background3.webp'); /* Replace with your image path */
  background-size: cover; /* Cover the entire space */
  background-position: center center; /* Center the image on the page */
  background-repeat: no-repeat; /* Do not repeat the image */
  margin: 0;
}

h1 {
  margin-bottom: 20px;
  margin-top: 50px;
  color: #ebd5d5;
  font-size: 3rem;
}

.btn {
  padding: 10px 20px;
  background-color: #ff4500; /* A bright orange color */
  color: white; /* White text for contrast */
  text-decoration: none;
  border: none; /* Assuming no border needed; add one if you like */
  border-radius: 5px;
  font-weight: bold; /* Optional: makes the text a bit more prominent */
  cursor: pointer; /* Changes the mouse cursor to a pointer on hover */
}

.btn:hover {
  background-color: #e33e00; /* A slightly darker shade for the hover state */
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.logo {
  width: 100px; /* Set a fixed width */
  height: 100px; /* Set a fixed height */
  object-fit: contain; /* This will make sure the image is scaled properly */
  margin : 10px 0;
}
</style>

  