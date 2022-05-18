# reactnative-codepush-demo

## How to run

```sh
yarn install
yarn android
```

## Related guides

- https://pagepro.co/blog/react-native-over-the-air-updates/

- https://www.youtube.com/watch?v=ejVPtJF3x7s&ab_channel=JASACADAMY

- https://docs.microsoft.com/en-us/appcenter/distribution/codepush/rn-get-started

- https://s-pace.github.io/react-native/docs/signed-apk-android.html

## Demoing

* Create an APK

```sh
cd android && ./gradlew assembleRelease
```

* Remove any existing installation of the App in Android Emulator

* Drag the APK at android/app/build/outputs/apk/app-release.apk to Android Emulator

* Open the app on the emulator

* Create a new code push release

```sh
appcenter codepush release-react -a flaviostutz/CodePushDemo -d Staging
```

* Reopen the app on the emulator twice (one for just downloading, and the next one to install)


