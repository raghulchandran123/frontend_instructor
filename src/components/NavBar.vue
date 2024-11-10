<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light"
    style="position: sticky"
  >
    <div class="container">
      <router-link class="navbar-brand" to="/">Instructor</router-link>
      <div class="navbar-nav justify-content-end" id="navbarNav"> 
            <router-link class="nav-item nav-link" to="/">Home</router-link>
            <router-link class="nav-item nav-link" to="/projectlist/:id"
              >Projects</router-link>
            <router-link class="nav-item nav-link" to="/allstudents/:id"
              >Students</router-link>
              <router-link class="nav-item nav-link" to="/register"
              >Settings</router-link>
              <router-link class="nav-item nav-link" to="/logout"
              >Logout</router-link>
          </div>
          </div>
        
  </nav>
</template>


<script>
import UserMixin from "../mixins/userMixin";

export default {
  mixins: [UserMixin],
};
</script>

<style>
.navitems {
  display: flex;
  align-items: center;
}

.navitems a {
  margin-left: 15px;
}
</style>
