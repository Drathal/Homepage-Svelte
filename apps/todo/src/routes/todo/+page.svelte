<script lang="ts">
  import type { ActionData, PageData } from './$types';
  import { Icon } from '@drathal/components';
  import Checkbox from '$lib/components/Checkbox.svelte';

  const debug = false;
  let showTodoForm = true;

  $: progressAbsolute = data.todos.filter((todo) => todo.completed).length;
  $: progress = (progressAbsolute / data.todos.length) * 100;
  $: sortedTodos = data.todos.sort((a, b) => {
    if (a.completed === b.completed) return 0;
    if (a.completed) return 1;

    return -1;
  });

  const handleShowTodoForm = () => {
    showTodoForm = !showTodoForm;
  };

  export let data: PageData;
  export let form: ActionData;
</script>

<svelte:head>
  <title>Create | Todo</title>
</svelte:head>

<section>
  <div class="menuBar">
    <div>
      <h2>Todo</h2>
    </div>

    <div class="horizontal">
      <button on:click={handleShowTodoForm}>Add Task</button>
      <button type="submit" formaction="?/clearTodos">Clear</button>
    </div>
  </div>

  {#if showTodoForm && form?.errors}
    <form method="POST" action="?/addTodo">
      <input type="text" name="text" placeholder="New todo" class:error={form?.errors?.text} />
      {#if form?.errors?.text}
        <p class="error-text">{form?.errors?.text}</p>
      {/if}
      <button type="submit">Add</button>
    </form>
  {/if}

  <div class="horizontal">
    <h3>Progress</h3>
    <div>{progressAbsolute} / {data.todos.length}</div>
  </div>

  <div class="progressBar progressDone">
    <div class="progress" style="width: {progress}%" />
    <div class="progressText">{Math.ceil(progress)}%</div>
  </div>
  <div class="progressBar progress">
    <div class="progress" style="width: {100 - progress}%" />
    <div class="progressText">{Math.floor(100 - progress)}%</div>
  </div>

  <ul>
    {#each sortedTodos as todo}
      <li>
        <span>
          <form method="POST" action="?/toggleTodo">
            <Checkbox checked={todo.completed} name="completed">
              <input type="hidden" name="id" value={todo.id} />
            </Checkbox>
          </form>
        </span>
        <span class="text" class:done={todo.completed}>{todo.text}</span>
        <span class="horizontal">
          {#if todo.completed}
            <span class="tag completed">completed</span>
          {/if}
          <form method="POST" action="?/removeTodo">
            <input type="hidden" name="id" value={todo.id} />
            <button type="submit" class="delete"><Icon name="trash" /></button>
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
  button {
    white-space: nowrap;
  }
  .menuBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1em;
  }

  .horizontal {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > * {
      margin-left: 0.5em;
    }
  }

  .tag {
    display: inline-block;
    padding: 0.25em 0.5em;
    border-radius: 0.75em;
    font-size: 0.75em;
    margin-left: 0.5em;
    background-color: #444;

    &.completed {
      background-color: rgb(0, 184, 0);
      color: #000000;
    }
  }

  .progressBar {
    position: relative;
    height: 1em;
    margin-bottom: 1em;
    border-radius: 0.5em;
    background-color: rgba(0, 0, 0, 0.4);

    .progress {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      background-color: rgb(0, 184, 0);
      border-radius: 0.5em;
    }

    .progressText {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      font-size: 0.8rem;
    }
  }

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
      margin-bottom: 1rem;

      border: 1px solid #666666;
      border-radius: 6px;
      padding: 0.5em 1em;

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
