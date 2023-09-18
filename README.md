react-native-vector-icons 에 대한 테스트 소스 입니다.

# 현재 문제점.

- SVG 파일에서 <pattern>, <image> 가 있는 파일은 generate가 안된다. - 즉 사용이 불가능.

# Getting Started

- npm i --save react-native-vector-icons
- npm i --save-dev @types/react-native-vector-icons
- yarn add react-native-vector-image @klarna/react-native-vector-drawable

## Step 1: react-native-vector-icons Settings

[원문링크](https://github.com/oblador/react-native-vector-icons)

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

## Troubleshooting

- 아이콘이 원하는 아이콘이 나오지 않을경우
  - IOS]fonts provided by application 에 등록한 .ttf 파일과 node_modules/react-native-vector-icons/Fonts/ 의 파일과 동일한지 체크.
  - Android, IOS] 해당 폰트에 출력하고자 하는 텍스트가 있는지 확인한다.

## Step 2: react-native-vector-image Settings

[원문링크](https://www.npmjs.com/package/react-native-vector-image)

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

- 추가작업.

  - 이미지를 실제 코드에 적용후 `yarn react-native-vector-image generate` 를 꼭 해주어야 실제 적용이 된다.

## Troubleshooting

- Text strings must be rendered within a <Text> component.
  - 해당 컴포넌트에 세미콜론이 붙어있어서 발생된 에러.
- Error while updating property 'resourceName' of a view managed by:RNVectorDrawable
  - yarn react-native-vector-image generate 로 실제 플랫폼별 사용될 이미지의 실제 파일을 생성해야 함.
