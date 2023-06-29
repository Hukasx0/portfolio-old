import type { Component } from 'solid-js';

const Navbar: Component = () => {
    return (
        <div class="navbar bg-base-100 sticky top-0">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl">Hubert Kasperek</a>
  </div>
  <div class="flex-none">
  </div>
</div>
    );
}

export default Navbar;
