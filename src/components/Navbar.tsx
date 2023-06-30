import type { Component } from 'solid-js';

const Navbar: Component = () => {
    return (
        <div class="navbar bg-base-100 sticky top-0 z-10">
          <div class="flex-1 justify-center">
            <a class="btn btn-ghost normal-case text-xl">Hubert Kasperek</a>
          </div>
      </div>
    );
}

export default Navbar;
