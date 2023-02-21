import type { Load } from '@sveltejs/kit'
import { getPostBySlug } from '$lib/posts'

export const load: Load = async ({ params }) => {
  const data = await getPostBySlug(params.slug || '')

  return data
}
