---
sidebar_position: 6
---

# TypeScript

:::tip
[Example app](https://github.com/inferusvv/react-native-unicorn-modals/tree/main/example) is using TypeScript.
:::

:::note
**Author note**

TypeScript coverage outside library seems to be good enough. But in my opinion it is not ideal as well as inside library. If you have your own ideas, suggestions, etc. - please **open ticket to discuss** or **create merge request** with your solution 💪
:::

## `createModalProvider`

Most important part is to create `UnicornModalsComponents` interface and describe data objects for each component there. It will also be used in hooks below.

```ts title=src/types.ts
import { AlertData } from 'react-native-unicorn-modals';

interface MyComponentData {
  title: string;
}

// highlight-start
export interface UnicornModalsComponents {
  alert: AlertData;
  myComponent: MyComponentData;
}
// highlight-end
```

```ts title=src/App.ts
import { createModalProvider } from 'react-native-unicorn-modals';
// highlight-next-line
import { UnicornModalsComponents } from './types.ts';

// highlight-next-line
const Provider = createModalProvider<UnicornModalsComponents>({
  alert: Alert,
  myComponent: MyComponent,
});
```

## `useModals`

It is possible to check your data object depending on the component name, which you are showing.

You need to create a wrapper hook named `useAppModals` (or whatever name you want) around `useModals`, where you should add interface from `src/types.ts`. You should import this hook in your app instead of `useModals` from library.

```ts title=src/hooks/useAppModals.ts
import { useModals } from 'react-native-unicorn-modals';
import { UnicornModalsComponents } from '../types.ts';

// highlight-start
export default function useAppModals() {
  return useModals<UnicornModalsComponents>();
}
// highlight-end
```

## `useTheme`

Here we will go in the same way as with `useModals`. To extends from default theme - import `Theme` generic and put interface with new style props into it.

```ts title=src/types.ts
import type { Theme } from 'react-native-unicorn-modals';

// highlight-start
interface AdditionalThemeProps {
  buttonColor: string;
}
// highlight-end

// highlight-start
export type AppTheme = Theme<AdditionalThemeProps>;
// highlight-end
```

:::tip
You may not use `Theme` generic (for example you are not planning use internal components and not extending from default theme). Just export your own theme interface.
:::

Then simply create wrapper hook around internal `useTheme` with type and use this hook instead of `useTheme` from library.

```ts title=src/hooks/useAppTheme.ts
import { useTheme } from 'react-native-unicorn-modals';
import { AppTheme } from '../types.ts';

// highlight-start
export default function useAppTheme() {
  return useTheme<AppTheme>();
}
// highlight-end
```
