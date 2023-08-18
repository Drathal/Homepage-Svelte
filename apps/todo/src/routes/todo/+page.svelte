<script lang="ts">
  import type { ActionData, PageData } from './$types';
  import Checkbox from '$lib/components/Checkbox.svelte';

  const debug = true;
  let showTodoForm = false;
  let updateIndex = -1;

  $: progressAbsolute = data.todos.filter((todo) => todo.completed).length;
  $: progress = (progressAbsolute / data.todos.length) * 100;
  $: sortedTodos = data.todos.sort((a, b) => {
    if (a.completed === b.completed) return 0;
    if (a.completed) return 1;

    return -1;
  });

  const handleShowAddTodoForm = () => {
    showTodoForm = !showTodoForm;
  };

  const handleShowUpdateTodoForm = (index: number) => {
    updateIndex = index;
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
      <button on:click={handleShowAddTodoForm}>Add Task</button>
    </div>
  </div>

  {#if showTodoForm || form?.errors}
    <h3>Add Todo</h3>
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

  <ul>
    {#each sortedTodos as todo, i}
      {#if todo.completed !== sortedTodos[i - 1]?.completed}
        {#if todo.completed == true}
          <li>
            <p>Done</p>
            <button type="submit" formaction="?/clearTodos">Clear</button>
            <div class="progressBar progressDone">
              <div class="progress" style="width: {progress}%" />
              <div class="progressText">{Math.ceil(progress)}%</div>
            </div>
          </li>
        {:else}
          <li>
            <p>Active</p>

            <div class="progressBar progress">
              <div class="progress" style="width: {100 - progress}%" />
              <div class="progressText">{Math.floor(100 - progress)}%</div>
            </div>
          </li>
        {/if}
      {/if}
      <li>
        <span>
          <form method="POST" action="?/toggleTodo">
            <Checkbox checked={todo.completed} name="completed">
              <input type="hidden" name="id" value={todo.id} />
            </Checkbox>
          </form>
        </span>
        {#if i === updateIndex}
          <form method="POST" action="?/updateTodo">
            <input type="hidden" name="id" value={todo.id} />
            <input type="text" name="text" value={todo.text} />
            <button type="submit">Update</button>
          </form>
        {:else}
          <button
            class="text"
            class:done={todo.completed}
            on:click={() => handleShowUpdateTodoForm(i)}>{todo.text}</button
          >
        {/if}

        <span class="horizontal">
          {#if todo.completed}
            <span class="tag completed">completed</span>
          {/if}
          <form method="POST" action="?/removeTodo">
            <input type="hidden" name="id" value={todo.id} />
            <button type="submit" class="delete">X</button>
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

<style lang="css">
</style>
