import { createClient } from '@sanity/client';

const isProduction = import.meta.env.MODE === 'production';

export const sanityClient = createClient({
  projectId: 'k3wb9a79',
  dataset: 'production',
  apiVersion: '2025-01-01',
  useCdn: isProduction,
});