<div align="center">
<h3 align="center">cordova-outsystems-health-fitness</h3>

  <p align="center">
    OutSystems' Cordova Plugin for Health & Fitness.
    <br />
    <a href="https://github.com/ionic-team/ion-android-healthfitness">🤖 Android Library</a>
    ·
    <a href="https://github.com/ionic-team/ion-ios-healthfitness">🍏 iOS Library</a>
  </p>
</div>

## Installation

```bash
cordova plugin add https://github.com/ionic-team/cordova-outsystems-health-fitness.git
```

## Description

Health & Fitness Cordova plugin for OutSystems applications, providing access to Android Health Connect and Apple HealthKit data.

This repository replaces [OutSystems/cordova-outsystems-healthfitness](https://github.com/OutSystems/cordova-outsystems-healthfitness), which is no longer maintained. The plugin ID (`com.outsystems.plugins.healthfitness`) is unchanged; only the source location and native library dependencies have moved.

A few API-surface changes were also made in this move - see [CHANGELOG.md](CHANGELOG.md) for details (method rename, two removed methods that were never implemented, and the relocation of the Capacitor-consumption hooks to [`capacitor-health-fitness`](https://github.com/ionic-team/capacitor-health-fitness)).
