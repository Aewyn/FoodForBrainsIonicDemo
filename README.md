# FoodForBrainsIonicDemo
Demo to be used during the Food For Brains session regaring the Ionic Framework.

## Required knowledge
- Front-end of preference, in this project the app is based on Angular.

- Jave Keystore generation to sign the Android .apk file.

## Used Technologies
**Android SDK**: Either Android Studio or through Android Command Line Tools (I prefer the latter)

**Node** v18.17.0

**Angular CLI** v16.2.1

**Ionic** v7.1.1

## Prepare build
### Install node packages
```
npm install
```
### Sync any changes made - build app for platform
```
ionic capacitor sync android
```
### Build the application, assuming you're in the android folder
```
.\gradlew assembleRelease
```

### Run the application on an external device
```
ionic capacitor run android -l --external
```

### Easy info for the keystore - might differ to your own created keystore
- **name**: demo
- **pw**: ffbdemo