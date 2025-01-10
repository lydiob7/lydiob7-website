import { z, defineCollection } from 'astro:content';

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),

      canonical: z.string().url().optional(),

      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),

      description: z.string().optional(),

      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),

      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

const postCollection = defineCollection({
  schema: z.object({
    publishDate: z.date().optional(),
    updateDate: z.date().optional(),
    draft: z.boolean().optional(),

    title: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(),

    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),

    metadata: metadataDefinition(),
  }),
});

const workerSchema = z.object({
  name: z.string(),
  portfolio: z.string().optional(),
});

const mobileAppCollection = defineCollection({
  schema: z.object({
    categories: z.array(z.string()).optional(),
    designers: z.array(workerSchema),
    developers: z.array(workerSchema),
    downloadLinks: z.object({
      appStore: z.string().optional(),
      googlePlay: z.string().optional(),
    }),
    draft: z.boolean().optional(),
    excerpt: z.string().optional(),
    image: z.string().optional(),
    publishDate: z.date().optional(),
    updateDate: z.date().optional(),
    tags: z.array(z.string()).optional(),
    title: z.string(),
  }),
});

export const collections = {
  mobileApp: mobileAppCollection,
  post: postCollection,
};
