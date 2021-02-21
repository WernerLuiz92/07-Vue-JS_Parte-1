<template>
  <div>
    <h1>{{ title }}</h1>
    <ul v-for="foto in pictures" :key="foto.url">
      <li>
        <img :src="foto.url" :alt="foto.title">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      title: 'AluraPic',
      pictures: []
    }
  },
  created() {
    
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(resPictures => this.pictures = resPictures, err => console.log(err));
  }
}
</script>

<style>

</style>