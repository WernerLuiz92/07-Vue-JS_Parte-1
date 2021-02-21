<template>
  <div>
    <h1>{{ title }}</h1>
    <ul v-for="foto in pictures" :key="foto.url">
      <li>
        <img :src="foto.url" :alt="foto.title" width="100%">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      title: 'Cachorrinhos fofos!',
      pictures: [
        {
          url: 'https://super.abril.com.br/wp-content/uploads/2016/10/super_imgnao_deixe_seu_cachorro_lamber.jpg',
          title: 'Cachorrinho fofo 1'
        },
        {
          url: 'https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png',
          title: 'Cachorrinho fofo 2'
        },
        {
          url: 'https://img.estadao.com.br/thumbs/640/resources/jpg/4/9/1580310654894.jpg',
          title: 'Cachorrinho fofo 3'
        },
        {
          url: 'https://www.petz.com.br/blog/wp-content/uploads/2020/06/animais-com-sindrome-de-down.jpg',
          title: 'Cachorrinho fofo 4'
        },
        {
          url: 'https://i.pinimg.com/originals/69/be/90/69be90cb0bdfd8285929b64d5027a9c2.jpg',
          title: 'Cachorrinho fofo 5'
        }
      ]
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