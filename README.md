# Getting Started

## Step 1: Settings

### Step 1.1: NPM Package - react-native-keychain, async-storage

[npm 바로가기](https://www.npmjs.com/package/react-native-keychain)

```bash
npm i react-native-keychain
npm i @react-native-async-storage/async-storage

cd ios && pod install && cd ..

```

# What is it?

안드로이드의 Keystore, iOS 의 keyChain 을 구현한 모듈로 앱의 종료여부와 관계없이 유효하게 존재하는 데이터를 저장한다.
async-storage 는 로컬에 저장하고 유지되는것은 동일하나 암호화되어 저장되지않는다.
