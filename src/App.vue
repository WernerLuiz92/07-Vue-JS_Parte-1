<template>
  <div class="body">
    <h1 class="center">{{ title }}</h1>
    <ul class="picture-list">
      <li class="picture-list-item" v-for="foto in pictures" :key="foto.url">
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
  .body {
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
  }

  .center {
    text-align: center;
  }

  .picture-list {
    list-style: none;    
  }

  .picture-list .picture-list-item {
    display: inline-block;
  }

</style>