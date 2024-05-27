<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Elden Ring Locations</h1>
      <div v-if="loading" class="loading">Loading...</div>
      <div v-if="!loading && locations.length">
        <ul>
          <li v-for="location in locations" :key="location.id">
            <div class="location">
              <img :src="location.image" :alt="location.name" class="location-image">
              <div class="location-info">
                <p class="location-name">{{ location.name }}</p>
                <p class="location-description">{{ location.description }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div v-if="!loading && !locations.length">
        <p>No locations available.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      locations: [],
      loading: true
    };
  },
  created() {
    this.fetchLocations();
  },
  methods: {
    async fetchLocations() {
      try {
        const response = await fetch('https://eldenring.fanapis.com/api/locations');
        const data = await response.json();
        this.locations = data.data;
      } catch (error) {
        console.error('Error fetching locations:', error);
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

.container {
}
.title {
  margin-bottom: 2rem;
}

.loading {
  font-size: 1.5rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

.location {
  margin-bottom: 1rem;
  display: flex;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 1rem;}

.location-image {
  width: 100px;
  height: auto;
  margin-right: 10px;
  border-radius: 5px;
}

.location-info {
  flex: 1;
}

.location-name {
  font-weight: bold;
}

.location-description {
  color: #666;
}
</style>
