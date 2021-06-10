<template>
    <div class="panel">
        <div class="panel-header" @click="enabled = !enabled">
            <h2 class="panel-title">{{ title }}</h2>
            <font-awesome-icon :icon="['fas', 'heart']" />
            <font-awesome-icon :icon="['fas', 'heart']" />
            <font-awesome-icon :icon="['fas', 'heart']" />
            <font-awesome-icon :icon="['fas', 'heart']" />
            <font-awesome-icon :icon="['far', 'heart']" />
        </div>
        <transition name="panel-fade">
            <div class="panel-content" v-show="enabled">
                <slot name="panel-content">
                    <!-- Content -->
                </slot>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        props: [
            'title'
        ],
        data() {
            return {
                enabled: true
            }
        }
    }
</script>

<style scoped>
    .panel {
        padding: 0 auto;
        border: solid 2px grey;
        display: inline-block;
        margin: 5px;
        box-shadow: 5px 5px 10px grey;
        width: 300px;
        height: 100%;
        vertical-align: top;
        text-align: center;
    }

    .panel .panel-header {
        border: solid 2px;
        background: lightblue;
        margin-bottom: 10px;
    }

    .panel .panel-header .panel-title {
        font-size: 18px;
        text-align: center;
        margin: 0 0 15px 0;
        padding: 10px;
        text-transform: uppercase;
    }

    .panel-fade-enter, .panel-fade-leave-active {
        opacity: 0;
    }

    .panel-fade-enter-active, .panel-fade-leave-active {
        transition: opacity .4s;
    }
</style>