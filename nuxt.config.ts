import { NuxtConfig } from 'nuxt';
import fetchProductIds from './server/fetchProductIds';

interface Product {
  id: string;
  title: string;
  sub_title: string;
  image: string;
  link: string;
  ratings: number[];
  rating: number;
  last_updated: string;
  description: string; // Add description property if it exists in your data
}

const config: NuxtConfig = {
  modules: ["@nuxtjs/tailwindcss"],
  generate: {
    async routes() {
      // Call the data function to get the object
      const productIds = await fetchProductIds();
      // Generate routes for each product ID
      return productIds.map((id: any) => `/services/${id}`);
    }
  },
  head: {
    title: "Bird Initiatives AI Services",
    meta: [{ name: "description", content: "Everything about AI Services" }],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
      },
    ],
  },
};

export default config;
