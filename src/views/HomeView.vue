<template>
  <div class="home">
    <HeroComponent />
    <BodyComponent />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HeroComponent from '@/components/home/HeroComponent.vue';
import BodyComponent from '@/components/home/BodyComponent.vue';

@Options({
  components: {
    HeroComponent,
    BodyComponent
  },
})
export default class HomeView extends Vue {}
</script>

<style scoped>
  .home {
    width: 100%;
    height: 100%;
  }
</style>
