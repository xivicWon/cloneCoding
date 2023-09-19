# Getting Started

이번 코딩은 @react-native-community/netinfo 의 기능과 활용방법에 맞게 테스트하기 위함이다.

## Step 1: Install History

```bash
   yarn add @react-native-community/netinfo
   // 추가 확인을 하기 위해 추가된 모듈
   yarn add react-native-toast-message
```

or npm

```bash
   npm install @react-native-community/netinfo
   // 추가 확인을 하기 위해 추가된 모듈
   npm install react-native-toast-message
```

### For iOS

```bash
   cd ios && pod install && cd ..
```

## Step 2: Description

- 실무에 사용요령에 대한 테스트
- 데이터의 변화하는 시기와 실제 동작 테스트
- cellular, wifi, none 상태에 대한 변화를 체크할 수 있음.
- Observer를 추가함으로 네트워크가 끊겼을 경우 redirect처리를 알아봄.

# Troubleshooting

- 없음
