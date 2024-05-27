<template>
  <section class="hero is-primary is-fullheight">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Benvinguts a la meva aplicació de vue.js
        </h1>
        <h2 class="subtitle">
          Esta es la pàgina de inici
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style scoped>
.hero {
  background: url('/home/alumne/prova/projecte/src/assets/eldenring.jpg') no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
}

.container {
  text-align: center;
}

.title {
  font-size: 3rem;
}

.subtitle {
  font-size: 1.5rem;
}
</style>
