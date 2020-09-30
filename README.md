# :space_invader: React Native Clean Architect Template TypeScript

<p>
  <a href="https://travis-ci.org/react-native-community/react-native-template-typescript">
    <img alt="Build Status" src="https://img.shields.io/travis/react-native-community/react-native-template-typescript.svg" target="_blank" />
  </a>
  <a href="https://github.com/react-native-community/react-native-template-typescript#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/react-native-community/react-native-template-typescript/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/react-native-community/react-native-template-typescript/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
</p>

> React Native clean architecture for quick start with React Native
![Architecture illustrate](https://miro.medium.com/max/556/0*zUtZYiJ1bDTugOYY)

**This project follow the diagram of [ResoCoderflutter-tdd-clean-architecture-course](https://github.com/ResoCoder/flutter-tdd-clean-architecture-course)
## :star: Features

- Elegant usage directly within the [React Native CLI](https://github.com/react-native-community/cli)
- Consistent with the default React Native typescript template
- Clean architecture implementation
- Reactive implementation
- Redux + [Redux-Observable](https://redux-observable.js.org/) by default
- Blueprint template for module uses redux observable or [React-sweet-state](https://github.com/atlassian/react-sweet-state) 
- React Navigation by default
- Type guide for React Native project
- React Native config
- Asset Icon Generator script
- Dependency injection with [tsyringe](https://github.com/microsoft/tsyringe)

## :star: ToDos
- Resource values - Such as: Component dimension, Text Theme ...
- Fastlane template
- Lean code ...

## :star: Example
- Demo implementation for this template [Example](https://github.com/tiennm16/Example)

## :arrow_forward: Usage

```sh
npx react-native init MyApp --template rn-clean-architecture-template
```

### Usage with older versions of React Native

See the below table to find out which version of the template to use.

#### React Native <=> Template Version

| React Native  	| Template  	|
|---	            |---	        |
| 0.63.3  	        | 0.2.*       |
| 0.63.2  	        | 0.1.*       |


### Note on the legacy CLI

There seems to be quite some confusion about the legacy CLI. This template only works with the new CLI. Make sure you have uninstalled the legacy `react-native-cli` first (`npm uninstall -g react-native-cli`), for the below command to work. If you wish to not use `npx`, you can also install the new CLI globally (`npm i -g @react-native-community/cli` or `yarn global add @react-native-community/cli`).

Further information can be found here: https://github.com/react-native-community/cli#about

# Source component usage

* **Blueprint template**: generate files with available template in folder: blueprint-template
    * Require: Blueprint template plugin's installed in VSC 
    * Usage: **New file with template and choose the one you want to create**
    * Available template:
        * Hot redux module: Create new module with new reducer, action, epic to handle the module's own logic
        * React sweet state: Create new module with react sweet state integration by default
* **Asset Generator script**: Generate index file for asset folder
    * Rule: icon-facebook.png => export const ICON_FACEBOOK = require('icon-facebook.png');
    * Usage: node <script_name> <folder paths need to index, separate with space>
## :computer: Contributing

Contributions are very welcome. Please check out the [contributing document](CONTRIBUTING.md).

## :bookmark: License

This project is [MIT](LICENSE) licensed.
