react-native-vector-icons 에 대한 테스트 소스 입니다.

# Getting Started

- npm i --save react-native-vector-icons
- npm i --save-dev @types/react-native-vector-icons
- yarn add react-native-vector-image @klarna/react-native-vector-drawable

## Step 1: react-native-vector-icons Settings

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

## Step 2: react-native-vector-image Settings

- ios

  - vectorIcon > Build Pharses > Bundle React Native code and images

    ```
    set -e

    WITH_ENVIRONMENT="../node_modules/react-native/scripts/xcode/with-environment.sh"
    REACT_NATIVE_XCODE="../node_modules/react-native/scripts/react-native-xcode.sh"
    REACT_NATIVE_VECTOR_IMAGE="../node_modules/react-native-vector-image/strip_svgs.sh" <<- 추가됨
    /bin/sh -c "$WITH_ENVIRONMENT $REACT_NATIVE_XCODE $REACT_NATIVE_VECTOR_IMAGE" <<- 추가됨

    ```

- android

  - android/app/build.gradle 에 아래 코드 추가.(실제 경로를 찾아가 유효한지 체크해보자)
    ```
       apply from: file("../../node_modules/react-native-vector-image/strip_svgs.gradle")
    ```

- TrubleShot
  - Text strings must be rendered within a <Text> component.
    - 해당 컴포넌트에 세미콜론이 붙어있어서 발생된 에러.
  - Error while updating property 'resourceName' of a view managed by:RNVectorDrawable
    - yarn react-native-vector-image generate 로 실제 플랫폼별 사용될 이미지의 실제 파일을 생성해야 함.
