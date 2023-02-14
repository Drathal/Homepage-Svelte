interface Post {
  slug: string | undefined;
  datePublished: string;
  dateUpdated: string;
  title: string;
  description: string;
  published: boolean;
  component?: any;
}

interface Metadata {
  metadata: Post;
}

export const getPosts = async () => {
  let mdModules = import.meta.glob(`$routes/blog/*.md`);

  const posts: Post[] = await Promise.all(
    Object.keys(mdModules).map(async (path) => {
      const slug = await path.split('/').at(-1)?.replace('.md', '');
      const { metadata } = (await mdModules[path]()) as Metadata;
      const { datePublished, dateUpdated, title, description, published } = metadata;
      return {
        slug,
        datePublished,
        dateUpdated,
        title,
        description,
        published
      };
    })
  );

  let proccessedPosts = posts
    .filter((post) => post.published)
    .sort((a, b) => new Date(a.datePublished).getTime() - new Date(b.datePublished).getTime());

  return proccessedPosts;
};

export const getPostBySlug = async (slug: string) => {
  const post = await import(`$routes/blog/${slug}.md`);

  const { datePublished, dateUpdated, title, description, published } = post.metadata;
  const content = post.default;

  return {
    content,
    datePublished,
    dateUpdated,
    title,
    description,
    published,
    slug
  };
};
