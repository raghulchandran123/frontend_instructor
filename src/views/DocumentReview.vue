<template>
    <div >
      <NavBar />
        <h1>Document Review & Feedback Page - Instructor View</h1>

      
          <h2>Student Submissions</h2>
          <div class="filter">
            <input type="text" placeholder="Filter" />
            <button>Filter</button>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Milestone 1.pdf</th>
                <th>AI Analysis</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Student 1</td>
                <td><a href="#">View</a></td>
                <td>Positive</td>
                <td>★★★★☆</td>
              </tr>
              <tr>
                <td>Student 2</td>
                <td><a href="#">View</a></td>
                <td>Needs Improvement</td>
                <td>★★★☆☆</td>
              </tr>
              <tr>
                <td>Student 3</td>
                <td><a href="#">View</a></td>
                <td>Neutral</td>
                <td>★★★☆☆</td>
              </tr>
            </tbody>
          </table>
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
  
  <style > </style>
  