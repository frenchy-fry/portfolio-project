<template>
  <div class="home">
    <div id="image-container">

      <div v-for="image in images" :key="image.src">
        <img :src="image.src" alt="" class="art-image">
      </div>

    </div>
  </div>
</template>

<style scoped>
  #image-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    margin: auto;
    width: 800px;
    background: green;
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
        { src: require('../assets/art/ball_du_monde.png') },
        { src: require('../assets/art/cave_kabarett.png') },
        { src: require('../assets/art/caveman_podcast.png') },
        { src: require('../assets/art/dirty_dancing.png') },
        { src: require('../assets/art/ex_libris.jpg') },
        { src: require('../assets/art/kleiderkreisel.png') },
        { src: require('../assets/art/letter_f.jpg') },
        { src: require('../assets/art/martin_face.png') },
        { src: require('../assets/art/nathaly_benni.png') },
        { src: require('../assets/art/owl_fish.png') },
        { src: require('../assets/art/papillonia.png') },
        { src: require('../assets/art/spittelau.jpg') },
        { src: require('../assets/art/strangers_garden.png') }
      ]
    }
  }
}
</script>
