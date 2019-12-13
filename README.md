```sh
$ npm install use-dark-mode
```

A React Hook to check whether the OS dark mode has been turned on.

![example](./example.gif)

```jsx
import useIsDark from 'use-is-dark';

function App() {
  const isDark = useIsDark();
  return (
    <div className="App">
      <h1>Color scheme: {isDark ? "dark" : "light"}</h1>
    </div>
  );
}
```

Try it out [here](https://codesandbox.io/s/useisdark-ect4w)!
