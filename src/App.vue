<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" @click="handleClick" />
  <router-view v-slot="{ Component }">
    <transition name="slide">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';
    import { MenuProps } from 'ant-design-vue';
    import { useRouter } from 'vue-router';
``
      const current = ref<string[]>(['home']);
      const items = ref<MenuProps['items']>([
        {
          key: 'home',
          title: 'home',
          label: 'home'
        },
        {
          key: 'skills',
          title: 'skills',
          label: 'skills'
        },
        {
          key: 'projects',
          title: 'projects',
          label: 'projects'
        },
        {
          key: 'contact',
          title: 'contact',
          label: 'contact'
        }
      ]);

      const router = useRouter();

const handleClick = (info: { key: string }) => {
  if (info.key === "home") {
    router.push('/');  
  } else {
    router.push(`/${info.key}`);
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.75s ease-out;
}

.slide-enter-to {
  position: absolute;
  right: 0;
}

.slide-enter-from {
  position: absolute;
  right: -100%;
}

.slide-leave-to {
  position: absolute;
  left: -100%;
}

.slide-leave-from {
  position: absolute;
  left: 0;
}
</style>
