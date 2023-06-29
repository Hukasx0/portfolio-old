import type { Component } from "solid-js";
import roggerImage from "../assets/rogger-img.png";
import zsp2Image from "../assets/zsp2-wagrowiec-img.png";

const Projects: Component = () => {
    return (
        <div>
        <div class="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={roggerImage} alt=""/></figure>
  <div class="card-body w-1/2">
    <h2 class="card-title">Rogger</h2>
    <div class="flex flex-row">
        <div class="badge badge-neutral">Rust</div>
        <div class="badge badge-primary">Actix</div>
        <div class="badge badge-secondary">SQLite</div>
        <div class="badge badge-accent">JavaScript</div>
        <div class="badge badge-ghost">Docker</div>
    </div>
    <p>Very lightweight, efficient, secure and easy to use Blog Content Management System</p>
    <div class="card-actions justify-end">
      <a href="https://github.com/Hukasx0/rogger" target="_blank"><button class="btn btn-primary">GitHub</button></a>
    </div>
  </div>
</div>
    <div class="card lg:card-side bg-base-100 shadow-xl">
    <figure><img src={zsp2Image} alt=""/></figure>
    <div class="card-body w-1/2">
      <h2 class="card-title">ZSP2 Wagrowiec website</h2>
      <div class="flex flex-row">
        <div class="badge badge-neutral">HTML</div>
        <div class="badge badge-primary">Bootstrap</div>
        <div class="badge badge-secondary">CSS</div>
        <div class="badge badge-accent">JavaScript</div>
        <div class="badge badge-ghost">JQuery</div>
    </div>
      <p>The website that won the school contest, the website automatically fetches the latest data from the school backend</p>
      <div class="card-actions justify-end">
        <a href="https://hukasx0.github.io/zsp2wagrowiec-strona/" target="_blank"><button class="btn btn-primary">Website</button></a>
        <a href="https://github.com/Hukasx0/zsp2wagrowiec-strona" target="_blank"><button class="btn btn-primary">GitHub</button></a>
      </div>
    </div>
  </div>
  </div>
    );
}

export default Projects;
