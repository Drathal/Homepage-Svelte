<script lang="ts">
  import type { ActionData, PageData } from './$types';
  import Checkbox from '$lib/components/Checkbox.svelte';

  const debug = true;
  export let data: PageData;
  export let form: ActionData;
</script>

<section>
  <form method="POST" action="?/addTodo">
    <input type="text" name="text" placeholder="New todo" class:error={form?.errors?.text} />
    {#if form?.errors?.text}
      <p class="error-text">{form?.errors?.text}</p>
    {/if}
    <button type="submit">Add</button>
    <button type="submit" formaction="?/clearTodos">Clear</button>
  </form>

  {#if form?.success}
    <p>Added todo! 🥳</p>
  {/if}

  <ul>
    {#each data.todos as todo}
      <li>
        <span>
          <form method="POST" action="?/toggleTodo">
            <Checkbox checked={todo.completed} name="completed">
              <input type="hidden" name="id" value={todo.id} />
            </Checkbox>
          </form>
        </span>
        <span class="text" class:done={todo.completed}>{todo.text}</span>
        <span>
          <form method="POST" action="?/removeTodo">
            <input type="hidden" name="id" value={todo.id} />
            <button type="submit" class="delete">❌</button>
          </form>
        </span>
      </li>
    {/each}
  </ul>

  {#if debug}
    <p>form:</p>
    <pre>{JSON.stringify(form, null, 2)}</pre>
    <p>data:</p>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  {/if}
</section>

<style lang="scss">
  .done {
    text-decoration: line-through;
    opacity: 0.5;
  }

  .error {
    border-color: red;
  }

  .error-text {
    color: red;
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
        &.text {
          flex: 1;
          margin: 0 1em;
          overflow: hidden;
          max-height: 1.5em;
          line-height: 1.5em;
        }
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
