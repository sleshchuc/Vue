<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Elden Ring Armor</h1>
      <div v-if="loading" class="loading">Loading...</div>
      <div v-if="!loading && armors.length" class="columns is-multiline">
        <div class="column is-one-third" v-for="armor in armors" :key="armor.id">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="armor.image" :alt="armor.name" />
              </figure>
            </div>
            <div class="card-content">
              <p class="title is-4">{{ armor.name }}</p>
              <p class="subtitle is-6">{{ armor.description }}</p>
              <div class="content">
                <p><strong>Weight:</strong> {{ armor.weight }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!loading && !armors.length">
        <p>No armor available.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      armors: [],
      loading: true
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch('https://eldenring.fanapis.com/api/armors');
        const data = await response.json();
        this.armors = data.data.map(armor => ({
          id: armor.id,
          name: armor.name,
          description: armor.description || 'No description available.',
          image: armor.image || 'https://via.placeholder.com/150',
          weight: armor.weight || 'Unknown',
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
