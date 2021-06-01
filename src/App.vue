<template>
    <div class="body">
        <h1 class="page-title">{{ title }}</h1>
        <!--                 @input === v-on:input                 -->
        <input type="search" @input="searchFilter = $event.target.value" class="search-filter" name="search-filter" placeholder="Buscar fotos">
        <ul class="picture-list">
            <li class="picture-list-item" v-for="picture in filteredPictures" :key="picture.url">

                <my-panel :title="picture.title">
                    <responsive-image slot="panel-content" :url="picture.url" :title="picture.title" />
                </my-panel>

            </li>
        </ul>
    </div>
</template>

<script>
    import Panel from './components/shared/panel/Panel.vue';
    import ResponsiveImage from './components/shared/images/ResponsiveImage.vue';
    export default {

        components: {
            'my-panel': Panel,
            'responsive-image': ResponsiveImage
        },
        data() {
            return {
                title: 'AluraPic - Werner',
                pictures: [],
                searchFilter: ''
            }
        },
        computed: {

            filteredPictures() {
                if (this.searchFilter) {
                    let exp = new RegExp(this.searchFilter.trim(), 'i');

                    return this.pictures.filter(picture => exp.test(picture.title));
                }
                
                return this.pictures;
            }

        },
        created() {

            this.$http.get('http://localhost:3000/v1/pictures')
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

    .page-title {
        text-align: center;
    }

    .picture-list {
        list-style: none;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    .picture-list .picture-list-item {
        display: inline-block;
        margin-bottom: 20px;
    }

    .search-filter {
        display: block;
        width: 100%;
        font-size: 1.5rem;
        /* superior | direita | inferior | esquerda */
        padding: 10px 15px 10px 15px;
        border: solid 1px grey;
        border-radius: 8px;
    }
</style>