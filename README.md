# Getting Started

## Step 1: Settings

### Step 1.1: Naver

Install and Setting

```bash

npm install @react-native-seoul/naver-login
or
yarn add @react-native-seoul/naver-login

cd ios && pod install

```

xcode 로 ios 프로젝트를 열고.
info.plist 에 아래 코드 추가.

```bash
<key>LSApplicationQueriesSchemes</key>
<array>
    <string>naversearchapp</string>
    <string>naversearchthirdlogin</string>
</array>
```

xcode 에서 보여질때는 Queried URL Schemes로 나타남.

AppDelegate.mm 파일 수정.

```code
// 상단에 추가.
#import <NaverThirdPartyLogin/NaverThirdPartyLoginConnection.h>
...

// 아래 코드 추가.
- (BOOL)application:(UIApplication *)application
            openURL:(NSURL *)url
            options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {
  // naver
  return [[NaverThirdPartyLoginConnection getSharedInstance] application:application openURL:url options:options];
}
```

project > info > URL type 에서 URL Schemes 를 추가하는데. 해당 스킴은 네이버에서 ios 앱 등록할때와 동일해야한다.

그외 호출 하는 방법은 App.tsx 참조.

### Step 1.2: Kakao

Install and Setting

```bash

```

카카오 개발자 안드로이드 키 해시 조회

```sh
keytool -exportcert -alias androiddebugkey -keystore ~/.android/debug.keystore -storepass android -keypass android | openssl sha1 -binary | openssl base64

```
