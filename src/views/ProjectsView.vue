<template>
    <div>
        <a-card hoverable style="width: 700px">
    <template #cover>
      <a-image
        alt="example"
        src="https://hukasx0.github.io/portfolio/assets/ai-companion-img-191daf07.png"
      />
    </template>
    <template #actions>
      <setting-outlined key="setting" />
      <edit-outlined key="edit" />
      <a href="https://github.com/Hukasx0/ai-companion" target="_blank">GitHub</a>
    </template>
    <a-card-meta title="ai-companion" description="This is the description">
    </a-card-meta>
  </a-card>

  <a-card hoverable style="width: 700px">
    <template #cover>
      <a-image
        alt="example"
        src="https://hukasx0.github.io/portfolio/assets/rogger-img-2c100b00.png"
      />
    </template>
    <template #actions>
      <setting-outlined key="setting" />
      <edit-outlined key="edit" />
      <a href="https://github.com/Hukasx0/rogger" target="_blank">GitHub</a>
    </template>
    <a-card-meta title="Rogger" description="This is the description">
    </a-card-meta>
  </a-card>

  <a-card hoverable style="width: 700px">
    <template #cover>
      <a-image
        alt="example"
        src="https://hukasx0.github.io/portfolio/assets/home-middleman-img-b207a834.png"
      />
    </template>
    <template #actions>
      <setting-outlined key="setting" />
      <edit-outlined key="edit" />
      <a href="https://github.com/Hukasx0/Home_Middleman" target="_blank">GitHub</a>
    </template>
    <a-card-meta title="Home Middleman" description="This is the description">
    </a-card-meta>
  </a-card>

  <a-card hoverable style="width: 700px">
    <template #cover>
    <a href="https://hukasx0.github.io/zsp2wagrowiec-strona/">
      <a-image
        src="https://hukasx0.github.io/portfolio/assets/zsp2-wagrowiec-img-a5512235.png"
      />
    </a>
    </template>
    <template #actions>
      <setting-outlined key="setting" />
      <edit-outlined key="edit" />
      <a href="https://github.com/Hukasx0/zsp2wagrowiec-strona" target="_blank">GitHub</a>
    </template>
    <a-card-meta title="Zsp2wagrowiec website" description="This is the description">
    </a-card-meta>
  </a-card>

  <h1>And other smaller projects available on <a href="https://github.com/Hukasx0?tab=repositories"> my GitHub</a>, which are also made out of passion/curiosity for programming ♥️</h1>
  

        <h1></h1>
        <h2>ai-companion</h2>
        <h3>React, TypeScript, Rust, Sqlite, Tantivy, Actix, LLM</h3>

        <h2>ai-companion-py</h2>
        <h3>Rust, Python, Jupyter Notebook, LLM</h3>

        <h2>Rogger</h2>
        <h3>Rust, Actix, Redis, Sqlite, JavaScript</h3>

        <h2>Home Middleman</h2>
        <h3>JavaScript, Bootstrap, Node.js, Python, LaTeX</h3>

    </div>
</template>

<script setup lang="ts">
    
import { SettingOutlined, EditOutlined } from '@ant-design/icons-vue';
</script>

<style scoped>

</style>