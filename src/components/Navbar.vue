<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <!-- Aquí va tu logo o marca -->
    </div>

    <div class="navbar-menu" :class="{'is-active': isActive}">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">Home</router-link>
        <router-link class="navbar-item" to="/Localitzacions">Localitzacions</router-link>
        <router-link class="navbar-item" to="/NPCs">NPCs</router-link>
        <router-link class="navbar-item" to="/Armament">Armament</router-link>
        <router-link class="navbar-item" to="/Vestimenta">Vestimenta</router-link>
        <router-link class="navbar-item" to="/Bosses">Bosses</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: #333;
  color: #fff;
}

.navbar-item {
  color: #fff;
  margin-right: 10px;
}

.navbar-item:hover {
  background-color: #444;
}

.is-active .navbar-menu {
  display: block;
}
</style>
