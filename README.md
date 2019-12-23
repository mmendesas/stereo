# Stereo

An example of a `monorepo` structure with nextjs, lerna and yarn monorepo.

## Getting started

This project shows a simple use case with `monorepo` structure. It has a `home` page made with `ssr` and a shareable components package inside project `core`.

### Prerequisites

You need to have the last version of `node` in yor machine

### Avaiable Scripts

In the project directory, you can see the follow structure:

**`stereo/`**

- In the root folder you can run one of these scripts:
  - `yarn` - installs all the dependencies
  - `yarn build` - build every package
  - `yarn bootstrap` - bootstrap the packages, Installs all of their dependencies and links any cross-dependencies.
  - `yarn storybook:start` - start the storybook to view all components locally [locahost:5555](http://localhost:5555)
  - `yarn test` - Launches the test runner through all packages.
  - `yarn coverage` - run coverage through all packages

**`stereo/packages/core`**

- Inside the `design` package you can run:
  - `yarn build` - will build this currently package and create the `/lib` folder

**`stereo/packages/home`**

- Inside the `home` ssr app, you can run one of the [nextjs](https://nextjs.org/docs) methods:
  - `yarn dev` - start a dev-server with hot-reloading

## Tips and Tricks

- `yarn add --dev -W package` - Use this command inside `/stereo` to install package in workspace. After that you only need to add it in your `package` dependency.

## Built With

- 🐉 [Lerna](https://lernajs.io/)  - The Monorepo manager
- 📦 [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/)  -  Sane multi-package management
- 🚀 [React](https://reactjs.org/)  -  JavaScript library for user interfaces
- 💅 [styled-components](https://www.styled-components.com/)  -  CSS in JS elegance
- 🛠 [Babel](https://babeljs.io/)  -  Compiles next-gen JavaScript
- 📖 [Storybook](https://storybook.js.org/) - UI Component Environment
- 🃏 [Jest](https://jestjs.io/)  -  Unit/Snapshot Testing
- 📦 [NextJS](https://nextjs.org/) - The React Framework

## Author

- **Marcio Mendes** - [mmendesas](https://github.com/mmendesas)

## License

This project is licensed under the MIT License
