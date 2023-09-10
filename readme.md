# localstorage-react

localstorage-react is a simple and lightweight npm package that allows you to use Local Storage as state in your React applications. With this package, you can easily synchronize data between your application and the browser's Local Storage, making it a breeze to manage and persist your application's state.

## Installation

You can install localstorage-react using npm or yarn:

```bash
npm install localstorage-react
```

or

```bash
yarn add localstorage-react
```

## Usage

To get started, import the \`useLocalStorage\` hook from \`localstorage-react\` and use it in your components:

```javascript
import React from 'react';
import  useLocalStorage  from 'localstorage-react';

function MyComponent() {
  // Replace 'key' with the desired key for your Local Storage item
  const [value, setValue] = useLocalStorage('key');

  // Now you can use 'value' just like any other state variable
  // Changes to 'value' will be automatically synchronized with Local Storage

  const handleChange = (newValue) => {
    // Update 'value' like you would with any other state variable
    setValue(newValue);
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
      <p>Value in Local Storage: {value}</p>
    </div>
  );
}

export default MyComponent;
```

### Notes:

- Make sure to replace 'key' with a unique and descriptive key for your Local Storage item. This key is used to identify and store the data in Local Storage.
- Changes to the \`value\` state will automatically trigger updates to Local Storage, ensuring your application's state is always in sync with the stored data.

## License

localstorage-react is distributed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Issues

If you encounter any issues, have questions, or would like to contribute, please visit the [GitHub repository](https://github.com/A-4-Atom/localstorage-react) for localstorage-react.

## Contributing

Contributions are welcome! Feel free to open a pull request or create an issue on the GitHub repository to get involved.

## Author

localstorage-react is maintained by Vikas Chauhan. You can reach out to me at vikaschauhanbca009@gmail.com.

Thank you for using localstorage-react! We hope it simplifies managing state in your React applications.