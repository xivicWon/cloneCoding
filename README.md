react-native-svg 에 대한 테스트 소스 입니다.

# Getting Started

```

npm i react-native-vector-icons react-native-svg-transformer
// or yarn add react-native-svg react-native-svg-transformer

cd ios && pod install && cd ..
```

## Step 1: Settings

[원문링크](https://www.npmjs.com/package/react-native-svg)

- react-native-svg 는 svg 코드를 읽을 수 있게 해주는 모듈
- react-native-svg-transformer 는 기존 svg 파일을 불러와 읽을 수 있도록 해주는 모듈

## react-native-svg-transformer 을 위한 추가 작업

```javascript
// metro.config.js
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const {assetExts, sourceExts} = defaultConfig.resolver;

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
  },
};

module.exports = mergeConfig(defaultConfig, config);
```
