import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import schemas from './schemas';

export default defineConfig({
  name: 'portfolio-blog',
  title: 'Portfolio & Blog',
  projectId: process.env.SANITY_PROJECT_ID || '',
  dataset: process.env.SANITY_DATASET || 'production',
  plugins: [structureTool()],
  schema: {
    types: schemas,
  },
});
