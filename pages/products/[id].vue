<template>
    <div>
        <h1>ID: {{ $route.params.id }}</h1>
        <!-- <p>{{ product.description }}</p> -->
    </div>
</template>
  
<script>
import { state as data } from '~/dummyData/data';

export default {
    data() {
        return {
            products: data.products,
            selectedProduct: null,
        };
    },
    beforeMount() {
        const productId = this.$route.params.id;
        console.log("Product ID:", productId);

        // Find the product with a matching id
        const matchedProduct = this.products.find(product => product.id === Number(productId));

        // Check if a matching product was found
        if (matchedProduct) {
            // Assign the matched product to selectedProduct
            this.selectedProduct = matchedProduct;
            console.log("Selected Product:", this.selectedProduct);
        } else {
            console.log("Product not found");
        }
    },
};
</script>
