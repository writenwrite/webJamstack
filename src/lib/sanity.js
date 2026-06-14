import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const config = {
  projectId: import.meta.env.SANITY_PROJECT_ID || '',
  dataset: import.meta.env.SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
};

export const sanityClient = createClient(config);

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
  return builder.image(source);
}
