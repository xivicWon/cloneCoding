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
npm i @react-native-seoul/kakao-login
or
yarn add @react-native-seoul/kakao-login
```

#### IOS

1.info.plist

```xml
<!-- 추가 -->
<key>KAKAO_APP_KEY</key>
<string>[네이티브 앱키]</string>
<key>LSApplicationQueriesSchemes</key>
<array>
    <string>kakaokompassauth</string>
    <string>kakaolink</string>
</array>
```

2.개발자 > 플랫폼에서 IOS 추가 및 bundleID 등록.

#### ANDROID

1.카카오 개발자에서 발급된 네이티브 앱 키(kakao-api-key)를 직접 앱에 등록한다.
/android/app/src/main/res/values/strings.xml 에 키 등록

```xml
<resources>
    <string name="app_name">cloneCoding</string>
    <string name="kakao_app_key">{kakao-api-key}</string> <!-- API 호출 -->
    <string name="kakao_app_redirect">kakao{kakao-api-key}</string>  <!-- 리다이렉트 경로 -->
</resources>
```

2.AndroidManifest.xml 에 리다이렉트 설정을 위해 코드 추가.

```xml
<activity
    android:name="com.kakao.sdk.auth.AuthCodeHandlerActivity"
    android:exported="true">
    <intent-filter>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />

        <!-- Redirect URI: "kakao{NATIVE_APP_KEY}://oauth“ -->
        <data android:host="oauth"
            android:scheme="@string/kakao_app_redirect" />
    </intent-filter>
</activity>
```

3.카카오 개발자 안드로이드 키 해시 조회

```sh
keytool -exportcert -alias androiddebugkey -keystore ~/.android/debug.keystore -storepass android -keypass android | openssl sha1 -binary | openssl base64

```

조회된 key hash 를 카카오 개발자에서 android의 키해시에 등록.
주의!!!) 해시 등록을 안할경우 인증에러 발생됨.
