# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:

# 앱 배포 시, 코드 축소, 난독화, 최적화를 하는 경우, 카카오 SDK를 제외
#-keep class com.kakao.sdk.**.model.* { <fields>; }
#-keep class * extends com.google.gson.TypeAdapter