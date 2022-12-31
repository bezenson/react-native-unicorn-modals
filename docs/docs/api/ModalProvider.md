# `ModalProvider`

`ModalProvider` is a React Component which is returned by [`createModalProvider`](./createModalProvider) call. Normally this component should wrap your application.

```js
const ModalProvider = createModalProvider({ /* ... */ });
```

## Props

### `theme`

`theme` prop accepts an object with colors.

```js
<ModalProvider theme={{ /* theme */ }}>{/* ... */}</ModalProvider>
```

:::info
Learn more about default theme properties at [here](useTheme#default-theme-properties).
:::
