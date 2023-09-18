# React Native Clone Coding

> **Note**: 모든 코드는 유튜브 또는 다른 경로에서의 코드를 참조해서 작업하였습니다.

## Step 1: Google Sign in

원본링크 > 셀프 코딩.

## 진행 요약

!!! 코드에 있는 클라이언트 ID는 삭제했기 때문에 사용이 불가능하다. - 그래도 수정함.

- 문제 발생 내역에 대한 정리.

  - 안드로이드

    - keytool 생성
    - PC에 설치된 JDK 를 찾아서 해당 디렉토리의 /bin 폴더에 keytool 실행파일이 있음. 아래 명령어로 keystore 생성.
      ```
      ./keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
      ```
    - 해당 keystore를 PROJECT/android/app 에 옮김
    - PROJECT/android/gradle.properties 의 설정값을 추가.
      ```
        MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
        MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
        MYAPP_UPLOAD_STORE_PASSWORD=123123
        MYAPP_UPLOAD_KEY_PASSWORD=123123
      ```
      (정확한 참고는 코드로 직접 확인하세요.)
    - PROJECT/android/app/build.gradle 코드 추가
      ```
        // android.signingConfigs.release 추가하고,
        release {
              if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
                  storeFile file(MYAPP_UPLOAD_STORE_FILE)
                  storePassword MYAPP_UPLOAD_STORE_PASSWORD
                  keyAlias MYAPP_UPLOAD_KEY_ALIAS
                  keyPassword MYAPP_UPLOAD_KEY_PASSWORD
              }
        }

        // android.buildTypes.release.signingConfig 추가 
        signingConfig signingConfigs.release
      ```
      (정확한 참고는 코드로 직접 확인하세요.)
    - 빌드 명령어로 실행하면, keystore가 적용된 앱을 생성함.
      ```
      npm run android -- --mode=release
      ```
    - 정상적으로 데이터 조회 확인.

  - 아이폰
    - GoogleService-info.plist
    - 파일을 가져와서 xcode에서 주입시킨다.
    - GoogleService-info.plist파일에서 REVERSED_CLIENT_ID를 복사하여
    - Target > [현재앱(googlesignin)] > info > URL Types 에 URL schemes 를 추가한다.
