<template>
    <div class="document-guidelines">
      <NavBar />
      <section class="header">
        <h2>Document Guidelines</h2>
        <p>View and upload project guidelines</p>
        <button class="upload-btn" @click="uploadGuidelines">Upload New Guidelines</button>
      </section>
  
      <section class="uploaded-guidelines">
        <h3>Uploaded Guidelines</h3>
  

        <div class="filter-bar">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search guidelines"
            class="search-input"
          />
          <select v-model="selectedProject" class="project-select">
            <option v-for="project in projects" :key="project.id" :value="project.id">
              {{ project.name }}
            </option>
          </select>
          <span class="new-tag">NEW</span>
        </div>
        <div v-if="filteredGuidelines.length" class="guidelines-list">
          <div
            v-for="(guideline) in filteredGuidelines"
            :key="guideline.id"
            class="guideline-item"
          >
            <span>{{ guideline.name }}</span>
            <button @click="viewGuideline(guideline)" class="view-btn">View</button>
            <button @click="deleteGuideline(guideline.id)" class="delete-btn">Delete</button>
          </div>
        </div>
        <p v-else>No guidelines found for the selected project.</p>
      </section>
      <div>
        <button @click="goBack">Back</button>
      </div>
    </div>

  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: "",
        selectedProject: null,
        projects: [],
      };
    },
    computed: {
      // Get the guidelines of the selected project and filter them based on the search query
      filteredGuidelines() {
        const selectedProject = this.projects.find(
          (project) => project.id === this.selectedProject
        );
        if (!selectedProject) return [];
        return selectedProject.guidelines.filter((g) =>
          g.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
    },
    methods: {
      uploadGuidelines() {
        alert("Upload New Guidelines functionality is not yet implemented.");
      },
      viewGuideline(guideline) {
        alert(`Viewing ${guideline.name}`);
      },
      deleteGuideline(guidelineId) {
        const projectIndex = this.projects.findIndex(
          (project) => project.id === this.selectedProject
        );
        if (projectIndex === -1) return;
        const guidelineIndex = this.projects[projectIndex].guidelines.findIndex(
          (g) => g.id === guidelineId
        );
        if (guidelineIndex !== -1) {
          this.projects[projectIndex].guidelines.splice(guidelineIndex, 1);
        }
      },
      goBack() {
        this.$router.go(-1);
      },
    },
    mounted() {
      // Set default project selection to the first project
      if (this.projects.length > 0) {
        this.selectedProject = this.projects[0].id;
      }
    },
  };
  </script>
  <style></style>