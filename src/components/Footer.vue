<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>My Vue.js App</strong> by <a href="#">Svyatoslav</a>. The source code is licensed
        <a href="#">MIT</a>.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  padding: 2rem 1.5rem;
}

a {
  color: #fff;
}

a:hover {
  color: #ccc;
}
</style>
