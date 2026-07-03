import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { AUTOR_IDS } from './lib/autores';

const postSchema = z.object({
  title: z.string(),
  date: z.date(),
  excerpt: z.string(),
  cover: z.string().optional(),
  autor: z.enum(AUTOR_IDS),
});

const noticias = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/noticias' }),
  schema: postSchema,
});

const artigos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/artigos' }),
  schema: postSchema,
});

export const collections = { noticias, artigos };
