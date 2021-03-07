<template>
  <div class="home">
    <div id="image-container">

      <div v-for="(column, index) in imageColumns" :key="index" class="column">
        <div v-for="image in column" :key="image.src">
          <img :src="image.src" alt="" class="art-image">
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
  #image-container {
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin: auto;
    width: 800px;
    /* background: green; */
  }

  .art-image {
    width: 150px;
    padding: 5px;
  }
</style>

<script>
export default {
  name: 'Art',
  data () {
    return {
      images: [
        { src: require('../assets/art/nathaly_benni.png'), col: 0 },
        { src: require('../assets/art/ball_du_monde.png'), col: 0 },
        { src: require('../assets/art/kleiderkreisel.png'), col: 0 },
        { src: require('../assets/art/martin_face.png'), col: 0 },
        { src: require('../assets/art/strangers_garden.png'), col: 1 },
        { src: require('../assets/art/spittelau.jpg'), col: 1 },
        { src: require('../assets/art/caveman_podcast.png'), col: 1 },
        { src: require('../assets/art/letter_f.jpg'), col: 1 },
        { src: require('../assets/art/cave_kabarett.png'), col: 2 },
        { src: require('../assets/art/dirty_dancing.png'), col: 2 },
        { src: require('../assets/art/papillonia.png'), col: 2 },
        { src: require('../assets/art/owl_fish.png'), col: 2 }
        // { src: require('../assets/art/ex_libris.jpg'), col: 2 },
      ]
    }
  },
  computed: {
    imageColumns: function () {
      // get all column numbers (without duplicates)
      const existingColumns = [...new Set(this.images.map(e => e.col))]

      // sort column numbers ascending
      existingColumns.sort((a, b) => a > b ? 1 : -1)

      // get image data for each column
      const columns = existingColumns.map(number => this.images.filter(image => image.col === number))
      return columns
    }
  }
}
</script>
