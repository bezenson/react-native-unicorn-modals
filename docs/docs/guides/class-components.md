---
sidebar_position: 5
---

# Class components

Library provides a hook. But what if you need to open modal in class component? Just wrap your class component in a function component to use the hook:

```js
class MyButton extends React.Component {
  render() {
    // Get it from props
    const { showModal } = this.props;
    showModal('alert', { /* data */ }, { /* options */});
  }
}

// Wrap and export
export default function(props) {
  const { show } = useModals();
  return <MyButton {...props} showModal={show} />;
}
```
