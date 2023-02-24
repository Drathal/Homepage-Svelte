---
published: true
datePublished: 2023-02-21
dateUpdated: 2023-02-21
title: Building a Click Outside Function in Svelte with TypeScript
description: A tutorial on building a clickOutside function in Svelte with TypeScript, which detects when a user clicks outside a specific element. The post provides step-by-step instructions and an example of using the function in a Svelte component to create a dropdown menu that closes when a user clicks outside of it.
tags: [typescript, svelte]
---

# Building a Click Outside Function in Svelte with TypeScript

When building interactive web applications, it's often useful to be able to detect when a user clicks outside of a particular element. This can be used to close a dropdown menu, dismiss a modal dialog, or perform any other action when the user interacts with the page outside of a specific area.

In this tutorial, we'll walk through building a clickOutside function in Svelte with TypeScript that will allow you to detect when a user clicks outside of a particular element.

## Step 1: Set up the clickOutside function

First, let's set up the clickOutside function. This function will take a single parameter, node, which is the element that we want to detect clicks outside of.

```typescript
import type { Action } from 'svelte/action'

interface Attributes {
  'on:clickOutside'?: (event: CustomEvent) => void
}

export const clickOutside: Action<HTMLElement, any, Attributes> = (node) => {
  // TODO: Implement the clickOutside function
}
```

## Step 2: Add a click event listener to the document

Next, we'll add a click event listener to the document. This will allow us to detect when the user clicks anywhere on the page.

```typescript
import type { Action } from 'svelte/action'

export const clickOutside: Action<HTMLElement, any, Attributes> = (node) => {
  const handleClick = (event: MouseEvent) => {
    // TODO: Implement the handleClick function
  }

  document.addEventListener('click', handleClick, true)
}
```

## Step 3: Check if the click is outside of the specified element

In the handleClick function, we need to check if the user clicked outside of the node element. We can do this by checking if the event target is a descendant of node.

```typescript
import type { Action } from 'svelte/action'

export const clickOutside: Action<HTMLElement, any, Attributes> = (node) => {
  const handleClick = (event: MouseEvent) => {
    if (!node || node.contains(event.target as HTMLElement) || event.defaultPrevented) {
      return
    }

    const clickOutsideEvent = new CustomEvent('clickOutside', {
      detail: 'Detects a click outside of an element'
    })

    node.dispatchEvent(clickOutsideEvent)
  }

  document.addEventListener('click', handleClick, true)
}
```

## Step 4: Clean up the event listener when the component is destroyed

Finally, we need to clean up the click event listener when the component that uses the clickOutside function is destroyed. We can do this by returning a function from the clickOutside function that removes the event listener.

```typescript
import type { Action } from 'svelte/action'

export const clickOutside: Action<HTMLElement, any, Attributes> = (node) => {
  const handleClick = (event: MouseEvent) => {
    if (!node || node.contains(event.target as HTMLElement) || event.defaultPrevented) {
      return
    }

    const clickOutsideEvent = new CustomEvent('clickOutside', {
      detail: 'Detects a click outside of an element'
    })

    node.dispatchEvent(clickOutsideEvent)
  }

  document.addEventListener('click', handleClick, true)

  return {
    destroy() {
      document.removeEventListener('click', handleClick, true)
    }
  }
}
```

## Step 5: Use the clickOutside function in a Svelte component

Now that we've built the clickOutside function, we can use it in a Svelte component. Let's build a simple dropdown menu that will close when the user clicks outside of it.

```svelte
<script lang="ts">
  import { clickOutside } from './clickOutside.ts'

  let isDropdownOpen = false

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen
  }
</script>

<button on:click={toggleDropdown}> Toggle Dropdown </button>

{#if isDropdownOpen}
  <div use:clickOutside on:clickOutside={toggleDropdown}>
    <p>This is the dropdown content.</p>
  </div>
{/if}
```

In this example, we import the clickOutside function from a file (**./clickOutside.ts** in this case). We add the **use:clickOutside** attribute to attach our action to the div element. To define hat should be executed when clicking outside the div we use **on:clickOutside**. This will execute the toggleDropdown function when we click outside the div.

We use a boolean variable isDropdownOpen to track whether the dropdown is open or closed. When the "Toggle Dropdown" button is clicked, we toggle the isDropdownOpen variable.

We use an if block to conditionally render the dropdown content, and we apply the clickOutside action to the div element that contains the dropdown content. The on:clickOutside handler is used to close the dropdown when the user clicks outside of it.

Note that we're passing the toggleDropdown function as a handler to the on:clickOutside event, so that we can close the dropdown when the user clicks outside of it.

## Conclusion

In this post, we've built a clickOutside function in Svelte with TypeScript that allows you to detect when a user clicks outside of a particular element. We've also shown how to use this function in a Svelte component to build a simple dropdown menu that closes when the user clicks outside of it.
