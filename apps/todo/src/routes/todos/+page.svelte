<script lang="ts">
  import type { PageData } from './$types';

  type Data = {
    success: boolean;
    errors: Record<string, string>;
  };

  let formData: Data;
  export let data: PageData;

  async function addTodo(event: Event) {
    const formElementg923 clam = event.target as HTMLFormElement;
    const data = new FormData(formElement);
    const response = await fetch(formElement.action, {
      method: formElement.method,
      body: data
    });
    const responeData = await response.json();

    formData = responeData;
    formElement.reset();
  }
  async function removeTodo(event: Event) {}
</script>

<ul>
  {#each data.todos as todo}
    <li>
      <span><input type="checkbox" bind:checked={todo.completed} /></span>
      <span class:done={todo.completed}>{todo.text}</span>
      <span>
        <form on:submit|preventDefault={removeTodo} method="POST">
          <input type="hidden" name="id" value={todo.id} />
          <button type="submit" class="delete">Remove</button>
        </form>
      </span>
    </li>
  {/each}
</ul>

<form on:submit|preventDefault={addTodo} method="POST">
  <input type="text" name="text" placeholder="New todo" />
  <button type="submit">Add</button>
</form>

<style lang="scss">
  .done {
    text-decoration: line-through;
  }

  form {
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        flex: 1;
      }

      .delete {
        margin: 0;
        padding: 0;
        background: none;
        border: none;
      }
    }
  }
</style>
