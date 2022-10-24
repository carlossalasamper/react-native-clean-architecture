# React Native: Clean Architecture

<p align="center">
<img src="./assets/images/logo.png?raw=true" style="max-width: 100%; width: 600px;" />
</p>
<p align="center" style="margin-top: 10px;">A clean architecture scaffold in React Native that is easy to understand.</p>

## Features

- 📁 Clean architecture. Layered file structure
- 🛡️ TypeScript bulletproof typing
- 🖌️ Code format: [ESLint](https://eslint.org/)
- 🐩 Git hooks: [Husky](https://www.npmjs.com/package/husky)
- 💉 Dependency injection: [Reactject](https://www.npmjs.com/package/reactject)
- 🌍 I18n: [expo-localization](https://docs.expo.dev/versions/latest/sdk/localization/) + [i18n-js](https://www.npmjs.com/package/i18n-js)
- 🚢 Navigation: [@react-navigation/native](https://reactnavigation.org/docs/getting-started)
- 🧰 State Manager: [Redux Toolkit](https://redux-toolkit.js.org/)

</br>

## 📁 Project File Structure

What makes the implementation of the clean architecture concept more difficult in my opinion is that since it is defined theoretically, each person implements it using different terminology or omitting/adding some layers or pieces to simplify it or continue to make it more complex.

For this reason, I think it is important to emphasize the documentation that accompanies the architecture to avoid obstacles with the rest of the people who are going to work with this system.

I briefly explain each of the layers that make up clean architecture within the /src folder:

```
└── /src
    ├── /domain                    # Enterprise Business Rules (entities)
    ├── /application               # Application Business Rules (use cases)
    ├── /infrastructure            # Technical details of the domain and application layers
    └── /ui                        # Contains the React Native source code
        ├── /i18n                  # I18n setup, injectable service and translations
        ├── /modules               # Modules/features
        │   ├── /core              # Project core UI
        │   │   ├── /components
        │   │   ├── /screens
        │   │   ├── /store
        │   │   └── /types
        │   └── /post              # Post related UI
        │       ├── /components
        │       ├── /screens
        │       ├── /store
        │       └── /types
        ├── /navigation            # Navigation setup
        ├── /store                 # Redux setup
        └── App.tsx
```

As you can see, the most notable customization I have done is to separate the domain and application infrastructure into different folders on the one hand, and the UI details on the other.

### References

- https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html
- https://jeffreypalermo.com/2008/07/the-onion-architecture-part-1/

</br>

## Run

Dev

```bash
yarn dev
```

Web

```bash
yarn web
```

Android

```bash
yarn android
```

iOS

```bash
yarn ios
```

</br>

## Eject from Expo

```bash
expo eject
```
