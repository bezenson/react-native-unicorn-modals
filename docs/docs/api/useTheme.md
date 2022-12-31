# `useTheme`

Will return a theme object, passed to `ModalProvider` `theme` prop.

## Default theme properties
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

:::tip
You can add your own theme properties. Learn more [here](../guides/themes#change-and-extend-themes).
:::
