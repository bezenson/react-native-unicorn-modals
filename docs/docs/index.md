---
sidebar_position: 1
---

import ButtonLink from '../src/components/ButtonLink';

# Introduction

:::caution
This library is under development now. API can change.
:::

Every time I have to work with modal windows in React Native, I encounter different problems.

If we talk about the standard `Alert` from React Native, it is poorly configurable and has a different look on different platforms. Often this does not match the main design of the application. But this approach has one advantage - simple usage via imperative API.

If the functionality of standard `Alert` is not enough, then you have to use third-party libraries to implement your own modal window. In my opinion most of libraries has one disadvantage - declarative approach. First you need to describe the modal window in JSX, then set its state and implement that state control. And what if you need to show several modal windows one after another? We usually put them on each other, which negatively affects the appearance of the application. These problems have to be solved literally in every application.

I had an idea to write a small library that would meet certain requirements:

- **Imperative approach**. The standard AlertAPI is great: all windows have a standard look and are easily configured using arguments passed to the function call. It formed the basis of this library.
- **Easy change of appearance**. Today, applications often have the ability to switch between light and dark modes.
- **Components should not overlap each other**. Animations should be simple and smooth. The next modal window should not be shown until the previous one is closed and even more so cover it.
- **An infinite number of components**. Just think of this library as a small framework. I did not want to limit developers to just Alert. There are two ready-to-use components in the library - Alert and Menu. However, you can implement any other own component.


<p align="center">
<ButtonLink to="https://snack.expo.dev/@inferusvv/react-native-unicorn-modals">Expo Snack Demo App</ButtonLink>
</p>

<p align="center">
<img src="img/demo.gif" height="500" />
</p>

