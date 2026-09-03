// swift-tools-version:5.9
import PackageDescription

let package = Package(
    name: "com.outsystems.plugins.healthfitness",
    platforms: [
        .iOS(.v15)
    ],
    products: [
        .library(
            name: "com.outsystems.plugins.healthfitness",
            targets: ["OSHealthFitnessPlugin"]
        )
    ],
    dependencies: [
        .package(url: "https://github.com/apache/cordova-ios.git", from: "8.0.0"),
        .package(url: "https://github.com/ionic-team/ion-ios-healthfitness.git", exact: "1.0.1")
    ],
    targets: [
        .target(
            name: "OSHealthFitnessPlugin",
            dependencies: [
                .product(name: "Cordova", package: "cordova-ios"),
                .product(name: "IONHealthFitnessLib", package: "ion-ios-healthfitness")
            ],
            path: "src/ios"
        )
    ]
)
