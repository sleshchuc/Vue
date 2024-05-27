<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Elden Ring Weapons</h1>
      <div v-if="loading" class="loading">Loading...</div>
      <div v-if="!loading && weapons.length" class="columns is-multiline">
        <div class="column is-one-third" v-for="weapon in weapons" :key="weapon.id">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="weapon.image" :alt="weapon.name" />
              </figure>
            </div>
            <div class="card-content">
              <p class="title is-4">{{ weapon.name }}</p>
              <p class="subtitle is-6">{{ weapon.description }}</p>
              <div class="content">
                <p><strong>Category:</strong> {{ weapon.category }}</p>
                <p><strong>Weight:</strong> {{ weapon.weight }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!loading && !weapons.length">
        <p>No weapons available.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      weapons: [],
      loading: true
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch('https://eldenring.fanapis.com/api/weapons');
        const data = await response.json();
        this.weapons = data.data.map(weapon => ({
          id: weapon.id,
          name: weapon.name,
          description: weapon.description || 'No description available.',
          image: weapon.image || 'https://via.placeholder.com/150',
          category: weapon.category || 'Unknown',
          weight: weapon.weight || 'Unknown'
        }));
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.section {
  padding: 2rem 1.5rem;
}

.title {
  margin-bottom: 2rem;
}

.loading {
  font-size: 1.5rem;
}

.columns {
  margin-top: 2rem;
}

.card {
  margin-bottom: 2rem;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 1rem;
}

.card-content .content {
  margin-top: 1rem;
}
</style>
