# Alert

:::info
You can learn more about `Alert` at [guide page](../../guides/renderable-components/alert.md).
:::

```js
modal.show(
  'alert',
  // highlight-start
  {
    title: 'Hello',
    description: 'Are you sure you want to use this awesome library?',
    buttons: [
      { onPress: () => {}, variant: 'cancel', text: 'Cancel', secondary: true },
      { onPress: () => {}, variant: 'destructive', text: 'No' },
      { onPress: () => {}, text: 'Yes' },
    ],
  },
  // highlight-end
);
```

## Data object

Seconds argument of `show` function.

| Option | Type | Required? |
| --- | --- | --- |
| **title** | `string` | Yes |
| **description** | `string` | Yes |
| **buttons** | [`Button[]`](#button) | Yes |

### `Button`

| Option | Type | Required? | Default | Description |
| --- | --- | --- | --- | --- |
| **onPress** | `Function` |  | | Button `onPress` handler. |
| **secondary** | `string` |  | `false` | Will be rendered on left side if `true`. |
| **text** | `string` | Yes |  | Button text. |
| **variant** | [`AlertButtonVariant`](#alertbuttonvariant) | | Button color. |

### `AlertButtonVariant`

| Variant | Description |
| --- | --- |
| `'cancel'` | Gray color. Good to use when you want to cancel some action. |
| `'default'` | Blue color. Used by default. |
| `'destructive'` | Red color. Should be used for dangerous actions (e. g. delete something). |


