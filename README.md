react-native-vector-icons 에 대한 테스트 소스 입니다.

# Getting Started

- npm i --save react-native-vector-icons
- npm i --save-dev @types/react-native-vector-icons

## Step 1: Settings

[원본참조링크](https://github.com/oblador/react-native-vector-icons)

- ios
  - fonts 폴더 ios 에 복사 및 info에 fonts provided by application 에 수동 등록.
  - react-native.config.js 파일에 추가.
  ```
   module.exports = {
      dependencies: {
         'react-native-vector-icons': {
            platforms: {
            ios: null,
            },
         },
      },
   };
  ```
- android

  - android/app/build.gradle 에 코드 추가.

  ```
   /// 커스텀 화를 위한 코드 ( 전체를 반영할 목적일 경우 필요없음. )
   project.ext.vectoricons = [
      iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ] // Name of the font files you want to copy
   ]

   apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle");
  ```
