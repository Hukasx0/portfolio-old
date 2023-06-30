import type { Component } from 'solid-js';
import { createSignal } from "solid-js";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Strengths from './components/Strengths';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import "./index.css"

const App: Component = () => {
  const [tab, setTab] = createSignal(0);
  const tabClick = (tabIndex: number) => {
      setTab(tabIndex);
  };

  return (
    <>
    <div class="h-screen flex flex-col">
    <Navbar />
    <div class="tabs flex items-center justify-center">
      <a class={`tab tab-lg tab-lifted ${tab() === 0 ? 'tab-active' : ''}`} onClick={() => { tabClick(0) }}>Home</a> 
       <a class={`tab tab-lg tab-lifted ${tab() === 1 ? 'tab-active' : ''}`} onClick={() => { tabClick(1) }}>Why me?</a> 
       <a class={`tab tab-lg tab-lifted ${tab() === 2 ? 'tab-active' : ''}`} onClick={() => { tabClick(2) }}>My projects</a> 
       <a class={`tab tab-lg tab-lifted ${tab() === 3 ? 'tab-active' : ''}`} onClick={() => { tabClick(3) }}>My skills</a>
       <a class={`tab tab-lg tab-lifted ${tab() === 4 ? 'tab-active' : ''}`} onClick={() => { tabClick(4) }}>Contact me</a>
</div>
  <div class="hero flex flex-1 flex-col">
    <div class='flex justify-center content-center items-center flex-1'>
      {tab() === 0 && <Hero />}
      {tab() === 1 && <Strengths />}
      {tab() === 2 && <Projects />}
      {tab() === 3 && <Skills />}
      </div>
      <ul class="steps mt-auto">
        <li style={'cursor: pointer;'} class={`step ${tab() >= 0 ? 'step-primary' : ''}`} onClick={() => tabClick(0)}></li>
        <li style={'cursor: pointer;'} class={`step ${tab() >= 1 ? 'step-primary' : ''}`} onClick={() => tabClick(1)}></li>
        <li style={'cursor: pointer;'} class={`step ${tab() >= 2 ? 'step-primary' : ''}`} onClick={() => tabClick(2)}></li>
        <li style={'cursor: pointer;'} class={`step ${tab() >= 3 ? 'step-primary' : ''}`} onClick={() => tabClick(3)}></li>
        <li style={'cursor: pointer;'} class={`step ${tab() >= 4 ? 'step-primary' : ''}`} onClick={() => tabClick(4)}></li>
      </ul>
      </div>
      <Footer />
      </div>
    </>
  );
};

export default App;
