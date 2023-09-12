<template>
  <div>
    <!-- example solution for dynamic meta tags -->
    <!-- <Head>
      <Title>Nuxt Dojo | {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head> -->
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const runtimeConfig = useRuntimeConfig();
const uri = `${runtimeConfig.public.fakeStoreApiUrl}products/${id}`;

// Le key sert de dépendance, si sa valeur change le fetch ce relance, mais bon apparemment ca marche sans...
const { data: product } = await useFetch(uri, { key: id });

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: "Product not found" });
}

definePageMeta({
  layout: "products",
});
</script>

<style scoped></style>
