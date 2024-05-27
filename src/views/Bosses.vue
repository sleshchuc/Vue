<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Elden Ring Bosses</h1>
      <div v-if="loading" class="loading">Loading...</div>
      <div v-if="!loading && uniqueBosses.length" class="columns is-multiline">
        <div class="column is-half" v-for="boss in uniqueBosses" :key="boss.id">
          <div class="card boss-card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="boss.image" :alt="boss.name" class="boss-image">
              </figure>
            </div>
            <div class="card-content boss-content">
              <p class="title is-4">{{ boss.name }}</p>
              <p class="subtitle is-6">{{ boss.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!loading && !uniqueBosses.length">
        <p>No bosses available.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      bosses: [],
      loading: true
    };
  },
  computed: {
    uniqueBosses() {
      const uniqueIds = new Set();
      return this.bosses.filter(boss => {
        if (uniqueIds.has(boss.id)) {
          return false;
        } else {
          uniqueIds.add(boss.id);
          return true;
        }
      });
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch('https://eldenring.fanapis.com/api/bosses');
        const data = await response.json();
        this.bosses = data.data
            .filter(boss => boss.image)
            .map(boss => ({
              id: boss.id,
              name: boss.name,
              description: boss.description || 'No description available.',
              image: boss.image
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
}

.card-content .content {
  margin-top: 1rem;
}

.boss-card {
  background-color: rgba(0, 0, 0, 0.1);
  padding: 1rem;
}

.boss-image {
  width: 25%;
}
</style>
