# `useModals`

Using this hook you can get access to imperative API of the library.

```js
const Example = () => {
  const modal = useModals();

  const onPress = () => {
    const componentName = 'alert';
    const data = {
      title: 'Title',
      description: 'Description',
      buttons: [{ onPress: () => {}, text: 'Ok' }],
    }
    const options = { cancelable: false };
    modal.show(componentName, data, options);
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Text>Open Alert</Text>
    </TouchableOpacity>
  );
};

export default Example;
```

## `show`

This function is a part of object, returned by `useModals` hook. Use it to show modal in your app. It accepts 3 arguments.

### `componentName`

After you registered a component in `createModalProvider`, you are able to show it. `componentName` is a key from registered component object.

```js
createModalProvider({
  alert: Alert,
  someComponent: YourCustomComponent,
});

const modal = useModals();
modal.show('alert', /* ... */);
modal.show('someComponent', /* ... */);
```

### `data`

Data is an object. But it can be different and depends on object you are showing.

### `options`

| Options | Type | Default | Description |
| --- | --- | --- | --- |
| **cancelable** | `boolean` | `true` | Defines if alert can be dismissed by tapping outside of the alert box or pressing Back button (Android). |
