<template>
    <div class="body">
        <h1 class="page-title">{{ title }}</h1>
        <ul class="picture-list">
            <li class="picture-list-item" v-for="foto in pictures" :key="foto.url">

                <my-panel :title="foto.title">
                    <div slot="content">
                        <img class="panel-image" :src="foto.url" :alt="foto.title">
                    </div>
                </my-panel>

            </li>
        </ul>
    </div>
</template>

<script>
    import Panel from './components/shared/panel/Panel.vue';
    export default {

        components: {
            'my-panel': Panel
        },
        data() {
            return {
                title: 'AluraPic - Werner',
                pictures: []
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


    .panel-image {
        width: 100%;
    }
</style>