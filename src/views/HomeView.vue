<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <HeroComponent />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HeroComponent from '@/components/HeroComponent.vue'; // @ is an alias to /src

@Options({
  components: {
    HeroComponent,
  },
})
export default class HomeView extends Vue {}
</script>
