import type { Load } from '@sveltejs/kit';
import { getPosts } from '$lib/posts';

export const load: Load = async () => {
  const posts = await getPosts();
  return { posts };
};
