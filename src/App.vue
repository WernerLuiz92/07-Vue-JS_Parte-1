<template>
  <div>
    <h1>{{ title }}</h1>
    <img :src="picture.url" :alt="picture.title" width="100%">
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      title: 'AluraPIC',
      picture: {
        url: 'https://super.abril.com.br/wp-content/uploads/2016/10/super_imgnao_deixe_seu_cachorro_lamber.jpg',
        title: 'Cachorrinho fofo'
      }
    }
  }
}
</script>

<style>
  h1 {
    color: blue;
    font-size: 3rem;
  }
</style>