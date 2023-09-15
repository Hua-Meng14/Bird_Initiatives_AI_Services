<template>
    <div class="py-5">
        <div class="flex flex justify-center">
            <h1
                class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl dark:text-white">
                Read Article: {{ this.selectedProduct.title }}</h1>
        </div>
        <div class="flex flex-col items-center space-y-8  py-5">
            <div class="w-1/2">
                <img class="max-h-lg max-w-full mx-auto" :src="this.selectedProduct.image" alt="Image Description">
            </div>
            <div class="w-3/5 py-10">
                <h1 class="text-3xl font-bold border-b-2 border-blue-600 pb-2">{{ this.selectedProduct.title }}</h1>
                <p class="mt-4 text-lg text-gray-700">{{ this.selectedProduct.description }}</p>
            </div>
            <div class="w-3/5 py-10">
                <h1 class="text-3xl font-bold border-b-2 border-blue-600 pb-2">What is {{ this.selectedProduct.title }}?
                </h1>
                <p class="mt-4 text-lg text-gray-700">{{ this.selectedProduct.what_is }}</p>
            </div>
        </div>

        <div class="w-full p-4 text-center rounded-lg py-10">
            <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Share with your friends</h5>
            <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 py-10">
                <a href="#"
                    class="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-blue-700 dark:hover:bg-blue-600 dark:focus:ring-blue-700">
                    <svg class="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook"
                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path fill="currentColor"
                            d="M176 8C81 8 8 81 8 176c0 88.2 71.8 160 160 160 88.2 0 160-71.8 160-160 0-95-73-168-168-168zm32 264H168v136h-48V272H96v-48h24v-32c0-17.6 14.4-32 32-32h48v-48h48c26.5 0 48 21.5 48 48v48h-32v136z">
                        </path>
                    </svg>
                    <div class="text-left">
                        <div class="-mt-1 font-sans text-sm font-semibold">Facebook</div>
                    </div>
                </a>
                <a href="#"
                    class="w-full sm:w-auto bg-blue-400 hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-blue-500 dark:hover:bg-blue-400 dark:focus:ring-blue-600">
                    <svg class="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter"
                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor"
                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.691-17.219-161.004-47.106 8.462.974 16.546 1.299 25.307 1.299 49.055 0 94.213-16.546 130.302-44.885-46.151-.975-84.503-31.388-98.12-73.167 6.474.974 12.947 1.624 19.421 1.624 9.097 0 18.194-.975 26.607-2.273-46.476-9.747-81.24-52.208-81.24-103.962v-1.299c13.97 7.798 30.216 12.947 47.432 13.297-28.694-19.095-47.106-51.16-47.106-87.249 0-19.746 5.798-38.19 15.545-54.436 56.344 69.724 140.587 115.392 235.592 120.541-1.299-7.123-1.949-14.896-1.949-22.669 0-54.111 43.343-97.922 97.922-97.922 28.369 0 54.786 11.869 72.352 31.04 22.669-4.548 44.56-12.947 64.111-23.693-7.123 23.018-23.018 42.471-43.667 54.785 20.975-2.598 41.299-8.136 60.621-16.546-14.571 20.975-32.137 39.419-52.461 54.436z">
                        </path>
                    </svg>
                    <div class="text-left">
                        <div class="-mt-1 font-sans text-sm font-semibold">Twitter</div>
                    </div>
                </a>
                <a href="#"
                    class="w-full sm:w-auto bg-blue-700 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-800 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-blue-800 dark:hover:bg-blue-700 dark:focus:ring-blue-900">
                    <svg class="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab"
                        data-icon="facebook-messenger" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor"
                            d="M256 32c-123.7 0-224 98.2-224 219.3 0 73.4 35.9 138.9 92.3 187V433l74 40c8.4 4.5 18.9 4.7 27.4.4 4.2-2 7.8-4.9 10.7-8.5l122-108c20.1-17.8 21.7-48.7 2.5-68.1l-41.2-40.6 47.8-74.4c8.5-13.3 7.3-30.4-2.7-43.4l-40-63.5V70.4C476 55.7 442.5 32 409.6 32H256zM242.7 375.6l-49.8-49.2 73.4-73.3 49.2 49-73.3 73.5zm110.4-110.4l-49.2-49 73.3-73.5 49.8 49.2-73.9 73.3zm132.6 53.3L336 287.8l49.8-49.2 73.9 73.3-49.2 49zM512 238.6l-73.3-73.5 49.2-49.1c10-10 10-26.1 0-36.1-9.9-10-26-10-36 0l-49.2 49.1-73.5-73.3 63.5-63.5c7.7-7.7 20.1-7.7 27.7 0l94.8 94.8c7.7 7.7 7.7 20.1 0 27.7z">
                        </path>
                    </svg>
                    <div class="text-left">
                        <div class="-mt-1 font-sans text-sm font-semibold">Messenger</div>
                    </div>
                </a>
                <a href="#"
                    class="w-full sm:w-auto bg-pink-600 hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-pink-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-pink-700 dark:hover:bg-pink-600 dark:focus:ring-pink-700">
                    <svg class="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram"
                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor"
                            d="M224 32c-110.5 0-192 81.5-192 192s81.5 192 192 192 192-81.5 192-192S334.5 32 224 32zm0 336c-66.3 0-120-53.7-120-120s53.7-120 120-120 120 53.7 120 120-53.7 120-120 120zm124-240H124c-6.6 0-12 5.4-12 12v192c0 6.6 5.4 12 12 12h224c6.6 0 12-5.4 12-12v-192c0-6.6-5.4-12-12-12zm-112 132c-25.4 0-46-20.6-46-46s20.6-46 46-46 46 20.6 46 46-20.6 46-46 46zm64-132h-24c-15.4 0-28-12.6-28-28s12.6-28 28-28h24c15.4 0 28 12.6 28 28s-12.6 28-28 28zm-88 0h-32v-48h32c26.5 0 48 21.5 48 48s-21.5 48-48 48h-24c-15.4 0-28-12.6-28-28s12.6-28 28-28h24c8.8 0 16 7.2 16 16s-7.2 16-16 16z">
                        </path>
                    </svg>
                    <div class="text-left">
                        <div class="-mt-1 font-sans text-sm font-semibold">Instagram</div>
                    </div>
                </a>
            </div>
        </div>
        <h1 class="text-3xl font-bold border-b-2 border-blue-600 pb-2">Related articles:
        </h1>
        <!-- <p>{{ product.description }}</p> -->
    </div>
</template>
  
<script>
import { state as articles } from '~/dummyData/articles';

export default {
    data() {
        return {
            products: articles.articles,
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
