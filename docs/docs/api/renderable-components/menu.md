# Menu

:::info
You can learn more about `Menu` at [guide page](../../guides/renderable-components/menu.md).
:::

```js
modal.show(
  'menu',
  // highlight-start
  {
    items: [
      { text: 'Default variant', onPress: () => {} },
      { text: 'Cancel variant', variant: 'cancel', onPress: () => {} },
      { text: 'Destructive variant', variant: 'destructive', onPress: () => {} },
    ],
  },
  // highlight-end
);
```

## Data object

Seconds argument of `show` function.

| Option | Type | Required? |
| --- | --- | --- |
| **items** | [`MenuItem[]`](#menuitem) | Yes |

### `MenuItem`

| Option | Type | Required? | Default | Description |
| --- | --- | --- | --- | --- |
| **onPress** | `Function` |  | | List item `onPress` handler. |
| **text** | `string` | Yes |  | List item text. |
| **variant** | [`MenuItemVariant`](#menuitemvariant) | | `default` | List item text color. |

### `MenuItemVariant`

| Variant | Description |
| --- | --- |
| `'cancel'` | Gray color. Good to use when you want to cancel some action. |
| `'default'` | Blue color. Used by default. |
| `'destructive'` | Red color. Should be used for dangerous actions (e. g. delete something). |
