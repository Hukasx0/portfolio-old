import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';

const Navbar: Component = () => {
  console.log(window.matchMedia("(prefers-color-scheme: dark)"));
  const preferredTheme = (window.matchMedia("(prefers-color-scheme: dark)")).matches ? "dark" : "light";
  const [currentTheme, setCurrentTheme] = createSignal(preferredTheme);
  const changeTheme = () => {
      if (currentTheme() === "dark") {
        setCurrentTheme("light");
      } else {
        setCurrentTheme("dark");
      }
      document.querySelector("html")?.setAttribute("data-theme", currentTheme());
  }

    return (
        <div class="navbar bg-base-100 sticky top-0 z-10">
          <div class="flex-1 justify-center">
            <a class="btn btn-ghost normal-case text-xl" onClick={changeTheme}>Portfolio</a>
          </div>
      </div>
    );
}

export default Navbar;
