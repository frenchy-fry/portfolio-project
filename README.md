# portfolio-project
School project for MTIN.

## Goal

In this project I want to create a portfolio website, which showcases some of my art projects and provides contact information.

I decided to use the [Vue.js framework](https://vuejs.org) to reduce [boilerplate code](https://en.wikipedia.org/wiki/Boilerplate_code) and to have a simple starting point for a navigation menu.

To implmenent vue into my project I am going to use the [Vue Command-Line-Interface](https://en.wikipedia.org/wiki/Boilerplate_code) so I can set up the project faster.

# Workflow

## Prerequisites

* To install the vue-cli I had to install the [Node-Package-Manager (npm)](https://www.npmjs.com) before. For installing npm/(node.js) I use the [Node-Version-Manager (nvm)](https://github.com/nvm-sh/nvm) for simplicity.
    ```
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
    ```
* With nvm I installed node.js/npm like this
    ```
    nvm install v14.16.0
    ```
* With npm available, I installed the vue-cli
    ```
    npm install -g @vue/cli
    ```
    * installing this required some xcode-developer tools and it seemd like my installation was broken, so I removed it and installed it again:
        ```
        sudo rm -rf $(xcode-select -print-path)
        xcode-select --install
        ```
* With the vue-cli I initialized my project with
    ```
    vue create portfolio-project
    ```
    I enabled following options:
    * **Babel**: so I can use future JavaScript features already today
    * **Linter / Formatting**: so I get help with malformed code
    * **Router**: so I can create a basic navigation
