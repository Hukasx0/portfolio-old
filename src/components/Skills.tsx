import type { Component } from 'solid-js';

const Skills: Component = () => {
    return (
        <>
        <div class="test overflow-x-hidden">
        <table class="table">
          <thead>
            <tr>
              <th>Main skills</th>
              <th>Additional skills</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/2048px-Rust_programming_language_black_logo.svg.png" />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">Rust language</div>
                    <div class="text-sm opacity-50">Backend</div>
                  </div>
                </div>
              </td>
              <td>
                Actix, Hyper 1.0, Tokio
                <br/>
              </td>
            </tr>
            <tr>
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" alt="" />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">TypeScript</div>
                    <div class="text-sm opacity-50">Frontend and Backend</div>
                  </div>
                </div>
              </td>
              <td>
                React.js, Solid.js
                <br/>
              </td>
            </tr>
            <tr>
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">React</div>
                    <div class="text-sm opacity-50">Frontend</div>
                  </div>
                </div>
              </td>
              <td>
                React Native
                <br/>
              </td>
            </tr>
            <tr>
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" alt="" />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">Tailwind</div>
                    <div class="text-sm opacity-50">Frontend</div>
                  </div>
                </div>
              </td>
              <td>
                DaisyUI
                <br/>
              </td>
            </tr>
            <tr>
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/726px-CSS3_logo_and_wordmark.svg.png" alt="" />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">CSS</div>
                    <div class="text-sm opacity-50">Frontend</div>
                  </div>
                </div>
              </td>
              <td>
                Sass (scss)
                <br/>
              </td>
            </tr>
            <tr>
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" alt="" />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">Node.js</div>
                    <div class="text-sm opacity-50">Backend</div>
                  </div>
                </div>
              </td>
              <td>
                Express.js
                <br/>
              </td>
            </tr>
            <tr>
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img src="https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png" />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">MySql</div>
                    <div class="text-sm opacity-50">Database</div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/sqlite_logo_icon_169724.png" />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">SQLite</div>
                    <div class="text-sm opacity-50">Database</div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">Git</div>
                    <div class="text-sm opacity-50">Tool</div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">Docker</div>
                    <div class="text-sm opacity-50">Tool</div>
                  </div>
                </div>
              </td>
              <td>Docker compose</td>
            </tr>
          </tbody>
        </table>
      </div>
      </>
    );
}

export default Skills;
