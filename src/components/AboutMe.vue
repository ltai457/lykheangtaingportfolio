<template>
    <div class="app-container">
      <div class="profile">
        <div class="profile-section">
          <img src="@/assets/logo.png" alt="Your Profile Picture">
          <h1>Lykheang Taing</h1>
          <p class="title">Master of IT Student</p>
        </div>
      </div>
  
      <div class="about-me">
        <h1>About me</h1>
        <p>At present, I am pursuing a Master of Information Technology at The University of Auckland specifically focusing on web and software development. With experiences in front-end and back-end technologies from my previous projects including capstone project during my undergraduate studies, I look forward to an internship opportunity where I can be exposed to practical business challenges and grow both personally and professionally in the technology field.</p>
      </div>
  
      <div class="education">
        <h1>Education</h1>
        <ul>
          <li v-for="item in education" :key="item.id">
            <p>{{ item.degree }} at {{ item.Institution }} ({{ item.year }})</p>
            <button @click="toggleCourses(item.id)">Show Course</button>
            <transition>
                <ul v-if="item.showCourses">
                    <li v-for="(course, index) in item.courses" :key="`course-${index}`">{{ course }}</li>
                </ul>
            </transition>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutMe',
    data() {
      return {
        education: [
          {
            id: 1,
            degree: 'Master Of Information Technology',
            Institution: "University Of Auckland",
            year: "2023-Expected To Graduate 2024 Nov",
            courses: [
              "INFOSYS 750 Research Method - Quantitative",
              "INFOSYS 727 Advanced Information Security",
              "INFOSYS 730 Telecommunication Management",
              "INFOSYS 722 Data Ming and Big Data",
              "INFOSYS 703 Managing AI",
              "INFOSYS 704 IT Consultancy",
              "COMPSCI 732 Software Tool and Techniques",
              "COMSPCI 726 Network Defense and Countermeasure",

              
            ],
            showCourses: false,
          },
          {
            id: 2,
            degree: "Bachelor Of Science",
            Institution: "University Of Auckland",
            year: "2020-2023 (Graduated)",
            courses: [
            "COMPSCI 399 Capstone:Computer Science",
            "COMPSCI 335 Functional Programming and Distributed Services",
            "COMPSCI 345 Huamn-compueter Interaction",
            "COMPSCI 373 Computer Graphic and Image Processing",
            "COMPSCI 316 Cyber Security",
            "INFOSYS 321 Enterprise System",
            "BUSAN 300 Data Wrangling",
            "OPSMGT 357 Project Management",
            ],
            showCourses: false,
          }
        ],
      }
    },
    methods: {
      toggleCourses(id) {
        const educationItem = this.education.find(item => item.id === id);
        if (educationItem) {
          educationItem.showCourses = !educationItem.showCourses;
        }
      }
    }
  };
  </script>
  
  <style scoped>
.app-container {
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

.about-me, .education li {
  color: #ebd5d5;
  text-align: center; /* Center align the text within the education list items */
}

h1, p {
  margin-top: 0;
  color: #ebd5d5;
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

p {
  font-size: 1.2rem;
}

.profile-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 30px;
}

.profile-section img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 15px;
}

.title {
  font-size: 1.2rem;
}

.education ul, .education ul ul {
  list-style-type: none;
  padding: 0;
  margin: 0; /* Ensure the nested ul has no extra margin */
}

.education li button {
  background-color: #3498db; /* Button background color */
  color: white; /* Button text color */
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px; /* Add some space above the button */
  outline: none; /* Remove the outline on focus for cleaner look */
  transition: background-color 0.3s ease; /* Smooth background color transition */
}

.education li button:hover {
  background-color: #2980b9; /* Darker shade for hover effect */
}

/* Center-align courses and give them a cohesive look */
.education ul ul {
  display: flex;
  flex-direction: column;
  align-items: center; /* Center-align the course list */
  padding: 10px;
}

.education ul ul li {
  background-color: rgba(255, 255, 255, 0.1); /* Slight background for courses */
  margin: 5px 0; /* Add some vertical space between courses */
  padding: 5px;
  border-radius: 5px; /* Rounded corners for course items */
  width: 80%; /* Set a max-width for course items */
  text-align: center; /* Ensure text is centered within each course item */
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .profile-section img {
    width: 120px; /* Smaller profile image on smaller screens */
    height: 120px;
  }

  h1 {
    font-size: 2rem; /* Smaller heading on smaller screens */
  }

  p {
    font-size: 1rem; /* Smaller paragraph text on smaller screens */
  }
}

</style>

  