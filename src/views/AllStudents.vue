<template>
    <div>
        <NavBar />
      <h1>All Students</h1>
      <table class="table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Project Name</th>
            <th>GitHub Link</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in students" :key="student.email">
            <td>{{ student.name }}</td>
            <td>{{ student.project }}</td>
            <td><a :href="student.github" target="_blank">{{ student.github }}</a></td>
            <td><a :href="'mailto:' + student.email">{{ student.email }}</a></td>
          </tr>
        </tbody>
      </table>
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
        students: [
          { name: 'Alice', project: 'Project Alpha', github: 'https://github.com/alice', email: 'alice@example.com' },
          { name: 'Bob', project: 'Project Beta', github: 'https://github.com/bob', email: 'bob@example.com' },
          // Add more students as needed
        ],
      };
    },
  };
  </script>
  
  <style> </style>
  