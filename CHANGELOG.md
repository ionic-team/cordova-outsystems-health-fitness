# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

The changes documented here do not include those from the original repository.

## [1.0.0]

- Initial release of the Cordova Health & Fitness plugin under ionic-team, pointing at the new `ion-android-healthfitness` and `ion-ios-healthfitness` native libraries.
- `requestPermissions` renamed to `requestHealthPermissions` (JS bridge export, Android `execute()` action string, and iOS `@objc` selector), to align with the new `capacitor-health-fitness` plugin's method name.
- Removed `updateData` and `enableBackgroundJob` - neither was implemented on Android or iOS.
- Dropped the `capacitor:sync:after`/`capacitor:update:after` npm hooks (`capacitorCopyHealthFitnessConfigs.js`, `capacitorInsertAzureRepository.js`) - Capacitor consumption now goes through the dedicated `capacitor-health-fitness` plugin instead of this Cordova plugin's Capacitor-compat layer, and the Azure Maven repository is no longer needed now that the native library is published on Maven Central.
- Fixed several previously-silent failure modes so behavior now matches `capacitor-health-fitness` exactly on well-formed *and* malformed input:
  - Android/iOS: `getData`, `setBackgroundJob`, and `updateBackgroundJob` now reject cleanly with a structured error on malformed `parameters` JSON (was previously an uncaught exception on Android, and a silent hang forever on iOS).
  - Android: `requestBackgroundJobPermissions` no longer hangs on API 26-28 devices, where the requested runtime-permission list is empty and the OS never invokes the permission-result callback.
