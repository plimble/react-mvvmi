## Setup

### Install create-react-app typescript

```sh
npm install -g create-react-app
```

```sh
create-react-app my-app --scripts-version=react-scripts-ts
```

### Install antd

```sh
yarn add antd
```

```sh
yarn add react-app-rewired --dev
```

```js
/* package.json */
"scripts": {
  "start": "react-app-rewired start --scripts-version react-scripts-ts",
  "build": "react-app-rewired build --scripts-version react-scripts-ts",
  "test": "react-app-rewired test --env=jsdom --scripts-version react-scripts-ts",
}
```

Then create a `config-overrides.js` at root directory of your project for further overriding.

```js
/* config-overrides.js */
const tsImportPluginFactory = require('ts-import-plugin')
const { getLoader } = require("react-app-rewired");

module.exports = function override(config, env) {
  const tsLoader = getLoader(
    config.module.rules,
    rule =>
      rule.loader &&
      typeof rule.loader === 'string' &&
      rule.loader.includes('ts-loader')
  );

  tsLoader.options = {
    getCustomTransformers: () => ({
      before: [ tsImportPluginFactory({
        libraryDirectory: 'es',
        libraryName: 'antd',
        style: 'css',
      }) ]
    })
  };

  return config;
}
```

### Install MobX

```sh
yarn install mobx mobx-react
```

```js
/* tsconfig.json */
{
  "compilerOptions": {
    ...
    "experimentalDecorators": true,
    ...
  }
}
```







