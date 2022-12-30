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

| Property | Type | Description |
| --- | --- | --- |
| **actionButtonColor** | Object<[ActionButtonColor](#ActionButtonColor)> |  |
| **cardBackgroundColor** | `string` | Background color of wrapper block |
| **lineColor** | `string` | Menu separator |
| **textColor** | `string` | Text color (e.g. description in alert) |
| **titleTextColor** | `string` | Alert title color |

#### <a name="ActionButtonColor"></a> `ActionButtonColor`

Colors for different button variants.

| Property | Type |
| --- | --- |
| **cancel** | `string` |
| **default** | `string` |
| **destructive** | `string` |

:::note
All colors should be a valid strings. Learn more about it on [official React Native documentation](https://reactnative.dev/docs/colors).
:::
