import {InversifySugar} from 'inversify-sugar';

import AppModule from './src/AppModule';
import App from './src/core/presentation/App';
import {AppRegistry} from 'react-native';

(() => {
  InversifySugar.options.defaultScope = 'Singleton';
  InversifySugar.run(AppModule);

  AppRegistry.registerComponent('CleanArchitecture', () => App);
})();
