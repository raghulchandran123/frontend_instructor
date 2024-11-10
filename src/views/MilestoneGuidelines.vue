<template>
    <div>
      <NavBar />
      <br>
        <h2>Milestones</h2>
        <br>
        <div >

          <table class="table">
          <thead>
            <tr>
              <th>Milestone Name</th>
              <th>Date</th>
              <th>Action</th>
             
            </tr>
          </thead>
          <tbody>
            <tr v-for="milestone in milestones" :key="milestone.milestone_id">
              <td>{{ milestone.name}}</td>
              <td>{{ milestone.date}}</td>
              <td>
                <button
                  @click="returnbook(project.project_id, project.project_name)"
                  class="btn btn-primary mr-2"
                >
                  Modify
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        </div>  
        <br>
        <h2>Document Guidelines</h2>
        <p>View and upload project guidelines</p>
        <button @click="uploadNewGuideline" class="upload-btn">
          Upload New Guidelines
        </button>
        
          <div >
            <br>
          <h3>Uploaded Guidelines</h3>
          <ul>
            <li
              v-for="(guideline, index) in guidelines"
              :key="index"
              class="guideline-item"
            >
              <span>{{ guideline.name }}</span>
              <button @click="viewGuideline(guideline.id)" class="view-btn">
                View
              </button>
              <button @click="deleteGuideline(guideline.id)" class="delete-btn">
                Delete
              </button>
            </li>
            <li v-if="!guidelines.length">No guidelines uploaded yet.</li>
          </ul>
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
    },
    data() {
      return {
        milestones: [
        ],
        guidelines: [
        ],
      };
    },
    methods: {
      uploadNewGuideline() {
        alert("Upload new guideline functionality triggered");
      },
      viewGuideline(id) {
        alert(`View guideline with ID: ${id}`);
      },
      deleteGuideline(id) {
        this.guidelines = this.guidelines.filter(
          (guideline) => guideline.id !== id
        );
        alert(`Deleted guideline with ID: ${id}`);
      },
      goBack() {
        this.$router.go(-1);
      },
    },
  };
  </script>
  <style></style>