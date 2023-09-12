<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: "products" });
const runtimeConfig = useRuntimeConfig();

const { data: products } = await useFetch(
  `${runtimeConfig.public.fakeStoreApiUrl}products`
);

// Override the default page title and meta tags
useHead({
  title: "Nuxt Dojo | Merch",
  meta: [
    {
      name: "description",
      content: "Nuxt Dojo | Merch",
    },
  ],
});
</script>

<style scoped></style>
