<template>
    
      
      <div>
        <NavBar />
        <div>
        <br>
        <h1>Project List</h1>
        <br>
        <p>View and manage student projects</p>
        <br>
        <input type="text" placeholder="Search projects..." v-model="searchQuery" />
        <button @click="filterProjects">Filter Projects</button>
        <button @click="createNewProject">Create New Project</button>
        <br>
        <table class="table">
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Students Enrolled</th>
              <th>Progress</th>
              <th>Milestones</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="project in projects" :key="project.id">
              <td>{{ project.name }}</td>
              <td>{{ project.studentsEnrolled }}</td>
              <td>{{ project.progress }}%</td>
              <td>{{ project.milestonesCompleted }}/10</td>
              <td><button @click="addAction(project.id)">ADD</button></td>
            </tr>
          </tbody>
        </table>
      
    </div>
    <div>
        <button @click="goBack">Back</button>
      </div>
</div>
  </template>
  
  <script>
  import NavBar from "@/components/NavBar.vue";
  export default {
    components: {
      NavBar,
    },    data() {
      return {
        searchQuery: '',
        projects: [ ]
      };
    },
    methods: {
      filterProjects() {
        
      },
      createNewProject() {
        
      },
      addAction() {
        
      }
    }, 
    goBack() {
        this.$router.go(-1);
      },
  };
  </script>
  
  <style >  </style>
  