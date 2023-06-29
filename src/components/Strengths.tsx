import type { Component } from "solid-js";

interface StrengthData {
  title: string;
  content: string;
  btnLink: string;
}


const Strength: Component<StrengthData> = ({title, content, btnLink}) => {
    return (
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">{title}</h1>
        <p class="py-6">{content}</p>
        <a href={btnLink} target="_blank"><button class="btn btn-primary">Find out more</button></a>
      </div>
    </div>
    );
}

const Strengths: Component = () => {
    return (
        <div class="hero flex flex-col items-center">
            <Strength title="Passion and curiosity" content="Curiosity and passion for programming and computer science make me constantly motivated to act and learn new things, an example of which is my GitHub" btnLink="https://github.com/Hukasx0" />
            <Strength title="Security" content="My knowledge in the field of cybersecurity helps me write secure code, which results in less number of vulnerabilities. I can also conduct penetration tests of web applications" btnLink="https://tryhackme.com/p/Hukasx0" />
            <Strength title="One-man army" content="Knowledge of Frontend, Backend and Penetration testing allows me to better understand the project and deal with various aspects of the project" btnLink="https://github.com/Hukasx0?tab=repositories" />
        </div>
    )
}

export default Strengths;
