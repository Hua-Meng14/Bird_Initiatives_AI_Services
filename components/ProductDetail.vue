<!-- pages/ProductDetails.vue -->
<template>
    <div>
        <h1>{{ product.title }}</h1>
        <p>{{ product.description }}</p>
        <!-- Add other product details as needed -->
    </div>
</template>
  
<script>
import fetchProductIds from '~/server/fetchProductIds';
export default {
    async asyncData({ params }) {
        const productId = params.id; // Get the product ID from the route

        // Fetch the product data based on productId from your data source
        // Replace this with your actual data fetching logic
        const product = await fetchProductIds(productId);

        return { product };
    },
};
</script>
  