<template>
    <div>
      <NavBar />
  
      <div>
        <h1>Instructor Dashboard</h1>
        <br>
        <h2>Project Overview</h2>
        <br>
        <table class="table">
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Progress</th>
              <th>Milestones</th>
              <th>Review Project</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="project in projects" :key="project.project_id">
              <td>{{ project.project_name }}</td>
              <td>{{ project.progress }}</td>
              <td>{{ project.milestones }}</td>
              <td>
                <button
                  @click="returnbook(project.project_id, project.project_name)"
                  class="btn btn-primary mr-2"
                >
                  Review Project
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <button @click="goBack">Back</button>
      </div>
      <br>
      <br>
      <h2> Recent Activities</h2>
    </div>
  </template>
  
  <script>
  import NavBar from "@/components/NavBar.vue";
  export default {
    components: {
      NavBar,
    },
    data() {
      return {
        
      };
    },
    created() {
     
    },
    methods: {
      
      goBack() {
        this.$router.go(-1);
      },
      
      
    },
  };
  </script>
  
  <style></style>
  