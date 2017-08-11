Grow and Webpack boilerplate
===========================

This repo tries to show a way to work with grow and webpack on a clean/module based way. Find below  **Configurations** instructions.

----------

How to install
-------------

> **Note:**

> - This project uses Grow, you can find information [here](https://github.com/grow/grow)
> - You need to install Grow in your local machine to have the project working, so, follow the instructions on the link below.
> - After you install Grow, follow the instructions to have the project running.
> - You also need node/npm, I suggest you install it via nvm. You can find instructions [here](https://github.com/creationix/nvm)
> - To work better with the css, we are using scss to have extended logic on the css side and webpack to generate the packages.

####  Install the packages

```
npm install
```

####  Run the project

```
npm start
```

How to create pages
-------------

####  Create a page

To create a page you need to have under the `/content/pages/` a `.yaml` file with the page you will create. e.g. `index.yaml`

In there you will define the view that will contain the template of the page:

```
---
$path: /
$view: /views/pages/index.html

... more stuff here...
---
```

> **Note:**

> It's very important to keep a module based architecture. The way we can accomplish that is using macros under the grow templating system.

####  Create a module

Under the `/views/modules/` create a new folder with your module name, in there create a html, js and scss file

```
-/views/modules/example/example.html
-/views/modules/example/example.js
-/views/modules/example/example.scss
```

#### Basic HTML

```
{% macro content(param1, param2, ...etc) %}
  <div class="example-module">
    {{param1}}
    ... Whatever you want here
  </div>
{% endmacro %}
```

#### Basic JS

```
import './example.scss';

... your JS code
```

#### Basic SCSS

```
.example-module {
  display: none; //This is an example
}
```

#### Final step

Go to `/src/js/[page].js` and add your module:

```
...
import "../../views/modules/example/example";
```

#### Webpack/Grow deploy flow

```flow
st=>start: npm start
e=>end: Bundled
op1=>operation: webpack --watch
op2=>operation: grow run
cond=>condition: Generates dist?
cond2=>condition: Generates pages?

st->op1->cond
op2->cond2
cond(yes)->op2
cond(no)->op1
cond2(yes)->e
cond2(no)->op2
```
