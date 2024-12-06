# Developer Setup

By Nicola Mihai, Aylin Onalan, and Davis Zhong <br>

Please note that this is my personal setup and what has worked for me, there may be updates and changes to dependencies in the future.

## Setup
- node -v
- expo init &lt;project name&gt;
- Ensure yarn.lock or package-lock.json or package.lock in C:/users/username are removed
- yarn add expo

## Dependencies
- yarn add @react-navigation/native
- yarn add react-native-screens react-native-safe-area-context
- yarn add @react-navigation/native-stack
- yarn add @react-native-community/slider
- yarn add @react-navigation/bottom-tabs
- yarn add @react-navigation/bottom-tabs
- yarn add @react-native-async-storage/async-storage
- yarn add react-native-sound
- yarn add expo-av
- Must use this version of picker:
- yarn add @react-native-picker/picker@2.2.1
- yarn add react-native-vector-icons
- expo install expo-notifications expo-task-manager
- yarn add react-native-background-timer


## Single Line Dependencies Install

DO NOT USE THESE WRONG DEPENDENCY VERSIONS WILL BREAK APP IN EXPO

yarn add @react-navigation/native react-native-screens react-native-safe-area-context @react-navigation/native-stack @react-native-community/slider @react-navigation/bottom-tabs @react-native-async-storage/async-storage react-native-sound expo-av @react-native-picker/picker@2.2.1 react-native-vector-icons

## Dependency Hotfix
yarn remove @react-navigation/native @react-navigation/native-stack
yarn add @react-navigation/native@6.1.18 @react-navigation/native-stack@6.11.0
yarn add react-native-screens@3.20.0 react-native-safe-area-context@4.4.0

yarn add @react-navigation/native@6.1.18
yarn add @react-navigation/native-stack@6.11.0
yarn add @react-navigation/bottom-tabs@6.4.0
yarn add react-native-screens@3.20.0
yarn add react-native-safe-area-context@4.4.0


## Build and Execution
- yarn start
