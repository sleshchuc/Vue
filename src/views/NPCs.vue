<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Elden Ring NPCs</h1>
      <div v-if="loading" class="loading">Loading...</div>
      <div v-if="!loading && npcs.length" class="columns is-multiline">
        <div class="column is-one-third" v-for="npc in npcs" :key="npc.id">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="npc.image" :alt="npc.name" />
              </figure>
            </div>
            <div class="card-content">
              <p class="title is-4">{{ npc.name }}</p>
              <p class="subtitle is-6">{{ npc.description }}</p>
              <div class="content">
                <p><strong>Role:</strong> {{ npc.role }}</p>
                <p><strong>Location:</strong> {{ npc.location }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!loading && !npcs.length">
        <p>No NPCs available.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      NPCs: [],
      loading: true
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch('https://eldenring.fanapis.com/api/npcs');
        const data = await response.json();
        this.npcs = data.data.map(npc => ({
          id: npc.id,
          name: npc.name,
          description: npc.description || 'No description available.',
          image: npc.image || 'https://via.placeholder.com/150',
          role: npc.role || 'Unknown',
          location: npc.location || 'Unknown',
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
