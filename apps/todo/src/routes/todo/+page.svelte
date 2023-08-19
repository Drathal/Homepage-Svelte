<script lang="ts">
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

  const handleShowAddTodoForm = () => {
    showTodoForm = !showTodoForm;
  };

  const handleShowUpdateTodoForm = (index: number) => {
    if (data.todos[index].completed) return;
    updateIndex = index;
  };

  export let data: PageData;
  export let form: ActionData;
</script>

<svelte:head>
  <title>Create | Todo</title>
</svelte:head>

<section class="max-w-screen-xl px-4 mx-auto lg:px-12">
  <div
    class="flex flex-col items-center justify-between py-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4"
  >
    <h1
      class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
    >
      Todo App
    </h1>

    {#if !showTodoForm && !form?.errors}
      <button
        on:click={handleShowAddTodoForm}
        type="button"
        class="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3.5 w-3.5 mr-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
          />
        </svg>
        Add Task
      </button>
    {/if}
  </div>

  {#if showTodoForm || form?.errors}
    <h3
      class="mb-4 font-bold leading-tight tracking-tight text-gray-900 text-md md:text-xl dark:text-white"
    >
      Add Todo
    </h3>
    <form method="POST" action="?/addTodo">
      <div>
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Todo:</label
        >
        <input
          type="text"
          name="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="New todo"
          class:error={form?.errors?.text}
        />
      </div>

      {#if form?.errors?.text}
        <p class="font-bold text-red-600">{form?.errors?.text}</p>
      {/if}

      <div class="flex flex-row items-start justify-between py-4">
        <button
          type="submit"
          class="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3.5 w-3.5 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            />
          </svg>
          Add Task
        </button>

        <button
          on:click={handleShowAddTodoForm}
          type="button"
          class="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
        >
          Cancel
        </button>
      </div>
    </form>
  {/if}

  <ul>
    {#each sortedTodos as todo, i}
      {#if todo.completed !== sortedTodos[i - 1]?.completed}
        {#if todo.completed == true}
          <li class="mb-4">
            <div
              class="flex flex-col items-center justify-between py-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4"
            >
              <h4
                class="font-bold leading-tight tracking-tight text-gray-900 text-md md:text-xl dark:text-white"
              >
                Done
              </h4>
              <button
                type="submit"
                formaction="?/clearTodos"
                class="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                >Clear done</button
              >
            </div>

            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div
                class="bg-blue-600 text-s font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style="width: {Math.floor(progress)}%"
              >
                {Math.floor(progress)}%
              </div>
            </div>
          </li>
        {:else}
          <li class="mb-4">
            <h4
              class="py-4 font-bold leading-tight tracking-tight text-gray-900 text-md md:text-xl dark:text-white"
            >
              Active
            </h4>

            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div
                class="bg-blue-600 text-s font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style="width: {Math.floor(100 - progress)}%"
              >
                {Math.floor(100 - progress)}%
              </div>
            </div>
          </li>
        {/if}
      {/if}
      <li class="flex items-center justify-between p-4 mt-2 border border-gray-600 rounded-md">
        <form method="POST" action="?/toggleTodo">
          <input type="hidden" name="id" value={todo.id} />
          {#if !todo.completed}
            <button
              type="submit"
              class="flex items-center justify-center px-1.5 py-1.5 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-3 h-3"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
                /></svg
              >
            </button>
          {:else}
            <button
              type="submit"
              class="flex items-center justify-center px-1.5 py-1.5 text-sm font-medium text-gray-200 rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-white dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-3 h-3"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
                /></svg
              >
            </button>
          {/if}
        </form>

        {#if i === updateIndex}
          <form
            method="POST"
            action="?/updateTodo"
            class="flex flex-row items-start justify-between flex-auto px-4"
          >
            <input type="hidden" name="id" value={todo.id} />
            <input
              type="text"
              name="text"
              value={todo.text}
              class="flex-auto block w-full p-2 mr-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <button
              type="submit"
              class="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              Update
            </button>
          </form>
        {:else}
          <button
            class="flex-auto mx-4 text-left {todo.completed
              ? 'text-gray-400 line-through'
              : 'text-gray-200'}"
            class:done={todo.completed}
            on:click={() => handleShowUpdateTodoForm(i)}>{todo.text}</button
          >
        {/if}

        {#if todo.completed}
          <span class="px-2 mr-4 text-sm text-gray-200 rounded-full bg-lime-800">completed</span>
        {/if}

        <form method="POST" action="?/removeTodo">
          <input type="hidden" name="id" value={todo.id} />
          <button
            type="submit"
            class="flex items-center justify-center px-1.5 py-1.5 text-sm font-medium text-gray-200 rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-700 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-3 h-3"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              ><path
                d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"
              /></svg
            >
          </button>
        </form>
      </li>
    {/each}
  </ul>

  {#if debug}
    <div class="text-cyan-800">
      <p>form:</p>
      <pre>{JSON.stringify(form, null, 2)}</pre>
      <p>data:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  {/if}
</section>
