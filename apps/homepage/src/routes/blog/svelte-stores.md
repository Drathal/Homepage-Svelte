---
published: true
datePublished: 2023-02-01
dateUpdated: 2023-02-01
title: A Short Guide to Svelte Stores
description: none
---

# A Short Guide to Svelte Stores

As a full stack developer, I have been working with Svelte-Kit for a while now and can say that it is one of the most user-friendly and efficient frameworks available. One of the key features of Svelte is its **store system**, which enables you to manage the state of your application in an organized and efficient way.

## Basics of Svelte Stores

A store in Svelte is a piece of data that can be shared across different parts of your application. Stores are similar to state in other frameworks (hooks / redux in react), but with a few key differences. In Svelte, stores are **reactive**, meaning that any changes made to a store will **automatically** update **any parts** of your application that are dependent on that store.

### Creating a Store

Creating a store in Svelte is simple and straightforward. First, you need to create a new file with a .ts extension, for example, "store.ts". We do this so that we can include the store anywhere we want. Then, you'll define your store and export it as a default export. Here's a basic example of a store that holds a string:

###### Svelte Code:

```javascript
import { writable } from 'svelte/store';

export const message = writable('Hello, Svelte!');
```

###### React Code:

```javascript
import React, { useState } from 'react';

const useMessage = () => {
  const [message, setMessage] = useState('Hello, React!');

  return {
    message,
    setMessage
  };
};

export default useMessage;
```

### Using a Store

Once you've created a store, you can import it into any component that needs to use it. You can do this by using the import statement and destructuring the store from the default export. For example:

```svelte
<script>
  import { message } from './store.ts';

  let currentMessage: string;

  const unsubscribe = message.subscribe((value) => {
    currentMessage = value;
  });

  onDestroy(unsubscribe);
</script>

<h1>{currentMessage}</h1>
```

As this code has much boilerplate stuff, so Svelte also allows accessing stores with "$". We can also write it as easy as:

```svelte
<script>
  import { message } from './store.ts';
</script>

<h1>{$message}</h1>
```

### Store Subscriptions

In the example above, we used the subscribe method to listen for changes to the message store. This method takes a callback function as an argument and is called every time the store is updated.

### Store Updates

Updating a store is just as simple as subscribing to it. You can do this by calling the set method on the store, passing in the new value. Here's an example:

###### Svelte Code:

```svelte
<script>
  import { message } from './store.ts';

  function handleClick() {
    $message = 'Hello, Svelte! This message has been updated.';
  }
</script>

<h1>{$message}</h1>
<button on:click={handleClick}>Update Message</button>
```

###### React Code:

```jsx
import React from 'react';
import useMessage from './store.ts';

function Example() {
  const { message, setMessage } = useMessage();

  function handleClick() {
    setMessage('Hello, React! This message has been updated.');
  }

  return (
    <>
      <h1>{message}</h1>
      <button onClick={handleClick}>Update Message</button>
    </>
  );
}
```

### Store Access

In addition to the subscribe and set methods, Svelte stores also have a get method that returns the current value of the store. This can be useful in cases where you need to access the store's value without subscribing to it.

## Advanced Concepts

While the basics of Svelte stores are fairly straightforward, there are a few more advanced concepts to be aware of. For example, you can use readonly instead of writable to create a store that can only be read and not updated. This can be useful if you have certain parts of your application that should not be able to modify the state of the store.

Another advanced concept is the use of derived stores, which are stores that are based on other stores. Derived stores are created using the derived method and take a getter function as an argument. The getter function receives the current value of the underlying store and returns the derived value. Here's an example of a derived store that doubles the value of the message store:

```javascript
import { writable, derived } from 'svelte/store';

export const message = writable('Hello, Svelte!');

export const doubledMessage = derived(message, ($message) => {
  return $message + $message;
});
```

In addition to writable and derived, Svelte also provides the readable store, which is a read-only store that can be used to share data between components. The readable store is created using the readable method and takes an initial value and an optional start function as arguments.

A store can also handle updates from outside the App itself (a side effect). Here is an example where a setInterval function updates the store every second:

###### App.svelte

```svelte
<script>
  import { time } from './stores.js';

  const formatter = new Intl.DateTimeFormat('en', {
    hour12: true,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit'
  });
</script>

<h1>The time is {formatter.format($time)}</h1>
```

###### store.ts

```typescript
import { readable } from 'svelte/store';

export const time = readable(null, function start(set) {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);

  return function stop() {
    clearInterval(interval);
  };

  return function stop() {};
});
```

Finally, it's worth mentioning that Svelte stores also support transaction batching, which means that you can make multiple updates to a store and have them all take effect at once. This can be useful in cases where you want to make several related updates to a store, but only want to trigger a single update to your component.

In conclusion, Svelte stores are a powerful feature that make it easy to manage the state of your application. Whether you're a beginner or an experienced developer, understanding how to use Svelte stores will greatly improve your ability to build efficient and effective web applications with Svelte.
