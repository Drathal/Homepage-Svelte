---
published: true
datePublished: 2023-08-20
dateUpdated: 2023-08-20
title: Svelte Form Actions
description: Use Svelte Form Actions in an example Todo Application.
tags: [typescript, svelte]
---

# Svelte Form Actions

Svelte is a powerful tool for building web applications, and one of its strengths lies in its ability to handle form actions seamlessly. In this tutorial, we'll explore how to manage form actions in Svelte, using a simple Todo App as an example.

Svelte form actions are a powerful feature that allows developers to handle form submissions directly within the Svelte component. Instead of relying on traditional methods like AJAX or fetch to send form data to the server, Svelte form actions provide a more integrated approach.


* The Demo can be found here: [Todo Svelte](https://todo.markus-dethlefsen.dev/)
* You can find the whole code here: [Homepage-Svelte/apps
/todo/](https://github.com/Drathal/Homepage-Svelte/tree/main/apps/todo)

## Form Action Attribute

In Svelte, when you want to handle a form submission, you can use the action attribute on the form element, just like in traditional HTML. However, the difference is that in Svelte, the action attribute's value is prefixed with `?/`, followed by the action's name. For example:

```svelte
<form method="POST" action="?/addTodo">
  ...
</form>
```

## Setting Up the Frontend
Let's start by examining the frontend code for our Todo App.

[+page.svelte](https://github.com/Drathal/Homepage-Svelte/blob/main/apps/todo/src/routes/todo/%2Bpage.svelte)

### 1. State Management and Reactive Statements
In our Svelte component (+page.svelte), we begin by importing necessary types and setting up our reactive state, at the end we also export data and form variables that come from the backend:

```javascript
  import type { ActionData, PageData } from './$types';

  const debug = false;
  let showTodoForm = false;
  let updateIndex = -1;

  $: progressAbsolute = data.todos.filter((todo) => todo.completed).length;
  $: progress = (progressAbsolute / data.todos.length) * 100;
  $: sortedTodos = data.todos.sort((a, b) => {
    if (a.completed === b.completed) return 0;
    if (a.completed) return 1;

    return -1;
  });

  ...

  export let data: PageData;
  export let form: ActionData;

```
Here, we're using Svelte's reactive statements (prefixed with $:) to compute the progress of our todos.

### 2. Form Handling
We've set up two functions to handle showing the add and update todo forms, we could do it inline but i prefer to have expicit function for it:

```javascript
const handleShowAddTodoForm = () => {
  showTodoForm = !showTodoForm;
};

const handleShowUpdateTodoForm = (index: number) => {
  if (data.todos[index].completed) return;
  updateIndex = index;
};
```

### 3. Rendering the UI

The UI is a mix of conditionally rendered components. I dont show the whole html here you can take a loot into it in the source. Showing / hiding the form for adding todos:

```svelte
{#if showTodoForm || form?.errors}
  <form method="POST" action="?/addTodo">
  ...
  </form>
{/if}
```

And a list of todos:

```svelte
<ul>
  {#each sortedTodos as todo, i}
  ...
  {/each}
</ul>
```

This are made with the svelte template syntax.


##  Request Handling

Now, let's dive into the server-side logic (+page.server.ts). Inside each action method, we have access to the request object, which contains the form data. We can use this data to perform various operations like validation, database updates, etc.


[+page.server.ts](https://github.com/Drathal/Homepage-Svelte/blob/main/apps/todo/src/routes/todo/%2Bpage.server.ts)


### 1. Loading Todos

When the page loads, we fetch all todos:

```javascript
export const load: PageServerLoad = async () => ({ todos: getTodos() });
```

### 2. Form Actions

Each form action corresponds to a function in the actions object. We also want to validate all user input, im using the Zod library for this.  For example, the addTodo action:

```javascript
addTodo: async ({ request }) => {
  const zodResult = validate.addTodo(await request.formData());

  if (!zodResult.success) {
    return fail(400, {
      ...zodResult,
      form: 'addTodo'
    });
  }

  addTodo(zodResult.data.text);
  return { ...zodResult, form: 'addTodo' };
},
```

Here, we're:

* Validating the form data using the validate function.
* If validation fails, we return an error.
* If validation passes, we add the new todo and return a success response.

The other actions (**updateTodo**, **removeTodo**, **toggleTodo**, and **clearTodos**) follow a similar pattern.

One of the advantages of using Svelte form actions is the seamless integration with Svelte's reactive system. For instance, if the server returns new data or an update after a form submission, we can easily update a Svelte store or local state, causing the UI to re-render with the updated data.

## Conclusion

In this tutorial, we've explored how to handle form actions in a Svelte application. By separating frontend and server-side logic, we can create a clean and maintainable codebase. The Todo App serves as a practical example of how to implement these concepts in a real-world application.

Whether you're building a simple todo list or a more complex application, Svelte's form actions provide a powerful way to manage user input and server interactions. Happy coding!


