<svelte:head>
  <title>Todo | Home</title>
</svelte:head>

<section>
  <h1>Login</h1>

  <form method="POST" action="/login">
    <input type="text" name="username" placeholder="Username" />
    <input type="password" name="password" placeholder="Password" />
    <button type="submit">Login</button>
  </form>

  <a href="/todo">Todo</a>
</section>
