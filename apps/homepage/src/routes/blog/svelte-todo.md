---
published: false
datePublished: 2023-02-01
dateUpdated: 2021-02-01
title: Understanding Svelte Stores in a Todo App
description: none
---

# Understanding Svelte Stores in a Todo App

Svelte is a popular front-end framework that offers a unique approach to state management. One of its key features is the use of reactive variables, which allow you to manage the state of your application in a simple and efficient way.

In this article, we'll be exploring the use of reactive variables in a todo app. We'll be covering the basics of reactive variables, how to create and use them, and how they can be used to build a simple todo app.

## What are Svelte Reactive Variables?

Reactive variables in Svelte are a way to store data that can be shared across different parts of your application. Unlike traditional state management systems, reactive variables are automatically updated whenever their value changes. This means that any part of your application that depends on a reactive variable will be updated automatically when the variable is updated.

## Creating a Reactive Variable

Creating a reactive variable in Svelte is simple and straightforward. First, you need to import the writable function from the svelte/store module. Then, you can call the writable function, passing in an initial value, to create a new reactive variable.

Here's an example of a reactive variable that holds an array of todo items:

```javascript
import { writable } from 'svelte/store';

export const todos = writable([]);
```

## Using a Reactive Variable

Once you've created a reactive variable, you can use it in any component that needs to access its value. You can do this by importing the reactive variable and using it in your component's template.

Here's an example of a component that displays a list of todo items:

```javascript
<script>
import { todos } from './store.js';

let items;

todos.subscribe(value => {
  items = value;
});
</script>

<ul>
  {#each items as item}
    <li>{item}</li>
  {/each}
</ul>
```

## Updating a Reactive Variable

Updating a reactive variable is just as simple as using it. You can do this by calling the set method on the reactive variable, passing in the new value.

Here's an example of a component that allows you to add new todo items to the list:

```javascript
<script>
import { todos } from './store.js';

let newItem = '';

function handleSubmit(event) {
  todos.update(items => [...items, newItem]);
  newItem = '';
}
</script>

<form on:submit|preventDefault={handleSubmit}>
  <input type="text" bind:value={newItem} />
  <button type="submit">Add Item</button>
</form>
```

## Building a Todo App

With the basics of reactive variables in mind, let's build a simple todo app. The app will have two components: a list of todo items and a form for adding new items.

Here's the complete code for the todo app:

```javascript
<!-- store.js -->

import { writable } from 'svelte/store';

export const todos = writable([]);
```

```javascript
<!-- TodoList.svelte -->
<script>
import { todos } from './store.js';

let items;

todos.subscribe(value => {
  items = value;
});
</script>
<ul>
  {#each items as item}
    <li>{item}</li>
  {/each}
</ul>
```

```javascript
<!-- AddTodo.svelte -->
<script>
import { todos } from './store.js';

let newItem = '';

function handleSubmit(event) {
  todos.update(items => [...items, newItem]);
  newItem = '';
}
</script>

<form on:submit|preventDefault={handleSubmit}>
  <input type="text" bind:value={newItem} />
  <button type="submit">Add Item</button>
</form>

<TodoList />
<AddTodo />
```

In this example, we have a reactive variable todos that holds the list of todo items. The TodoList component displays the list of items, and the AddTodo component allows you to add new items to the list. When you submit the form in the AddTodo component, the new item is added to the todos reactive variable and the TodoList component is automatically updated with the new list of items.

In conclusion, reactive variables are a key feature of Svelte that make it easy to manage the state of your application. By using reactive variables, you can build dynamic and responsive applications with ease. Whether you're a beginner or an experienced developer, understanding how to use reactive variables will greatly improve your ability to build web applications with Svelte.
