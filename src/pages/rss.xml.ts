import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  return rss({
    title: 'Sumit Kumar — Blog',
    description: 'Technical articles on software engineering, algorithms, system design, and engineering leadership.',
    site: context.site!,
    items: posts
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map(post => ({
        title:       post.data.title,
        description: post.data.description,
        pubDate:     post.data.date,
        link:        `/blog/${post.id.replace(/\.(md|mdx)$/, '')}/`,
      })),
    customData: `<language>en-gb</language>`,
  });
}
