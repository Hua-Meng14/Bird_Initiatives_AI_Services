<template>
    <div>
        <div class="flex flex-col items-center justify-center py-5">
            <h1
                class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                List of recommended AI services</h1>
        </div>
        <div class="container mx-auto grid gap-6 md:grid-cols-4">
            <div v-for="(service, index) in services" :key="index"
                class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 serviceCard">

                <NuxtLink :to="`/products/${service.id}`">
                    <img class="p-2 rounded-t-lg" :src="service.image" :alt="service.title" />
                </NuxtLink>
                <div class="px-5 pb-5">
                    <a :href="service.link">
                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{{ service.title }}
                        </h5>
                        <p class="text-gray-600">{{ service.sub_title }}</p>

                    </a>
                    <div class="flex items-center mt-2.5 mb-5">
                        <template v-for="rating in service.ratings">
                            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        </template>
                        <span
                            class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{{
                                service.rating }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<!-- <script lang="ts">

export default defineComponent({
    computed: {
        data() {
            return this.state.products.product;
        },
    },
});
</script> -->
<script>
import { state as product } from '../dummyData/data';
export default {
    data() {
        return {
            // Use the products data from the imported state
            services: product.products.map(product => ({
                id: product.id,
                title: product.title,
                sub_title: product.sub_title,
                link: product.link,
                image: product.image,
                ratings: product.ratings,
                rating: product.rating
            }))
        };
    }

    // services: [
    //     {
    //         id: 1,
    //         title: 'Blockcode AI Photo Studio',
    //         sub_title: 'Created brand avatars to personalized marketing.',
    //         link: '#',
    //         image: 'https://appliv-gai-production.s3.ap-northeast-1.amazonaws.com/images/blockode-ai-photo-studio.png',
    //         ratings: [1, 2, 3, 4, 5], // Example ratings
    //         rating: 5.0 // Example rating
    //     },
    //     {
    //         id: 2,
    //         title: 'Blockcode AI Photo Studio',
    //         sub_title: 'Created brand avatars to personalized marketing.',
    //         link: '#',
    //         image: 'https://appliv-gai-production.s3.ap-northeast-1.amazonaws.com/images/blockode-ai-photo-studio.png',
    //         ratings: [1, 2, 3, 4, 5], // Example ratings
    //         rating: 5.0 // Example rating
    //     },
    //     {
    //         id: 3,
    //         title: 'Blockcode AI Photo Studio',
    //         sub_title: 'Created brand avatars to personalized marketing.',
    //         link: '#',
    //         image: 'https://appliv-gai-production.s3.ap-northeast-1.amazonaws.com/images/blockode-ai-photo-studio.png',
    //         ratings: [1, 2, 3, 4, 5], // Example ratings
    //         rating: 5.0 // Example rating
    //     },
    //     {
    //         id: 4,
    //         title: 'Blockcode AI Photo Studio',
    //         sub_title: 'Created brand avatars to personalized marketing.',
    //         link: '#',
    //         image: 'https://appliv-gai-production.s3.ap-northeast-1.amazonaws.com/images/blockode-ai-photo-studio.png',
    //         ratings: [1, 2, 3, 4, 5], // Example ratings
    //         rating: 5.0 // Example rating
    //     },
    //     {
    //         id: 6,
    //         title: 'Blockcode AI Photo Studio',
    //         sub_title: 'Created brand avatars to personalized marketing.',
    //         link: '#',
    //         image: 'https://appliv-gai-production.s3.ap-northeast-1.amazonaws.com/images/blockode-ai-photo-studio.png',
    //         ratings: [1, 2, 3, 4, 5], // Example ratings
    //         rating: 5.0 // Example rating
    //     },
    //     {
    //         id: 7,
    //         title: 'Blockcode AI Photo Studio',
    //         sub_title: 'Created brand avatars to personalized marketing.',
    //         link: '#',
    //         image: 'https://appliv-gai-production.s3.ap-northeast-1.amazonaws.com/images/blockode-ai-photo-studio.png',
    //         ratings: [1, 2, 3, 4, 5], // Example ratings
    //         rating: 5.0 // Example rating
    //     },
    //     {
    //         id: 8,
    //         title: 'Blockcode AI Photo Studio',
    //         sub_title: 'Created brand avatars to personalized marketing.',
    //         link: '#',
    //         image: 'https://appliv-gai-production.s3.ap-northeast-1.amazonaws.com/images/blockode-ai-photo-studio.png',
    //         ratings: [1, 2, 3, 4, 5], // Example ratings
    //         rating: 5.0 // Example rating
    //     },
    //     {
    //         id: 9,
    //         title: 'Blockcode AI Photo Studio',
    //         sub_title: 'Created brand avatars to personalized marketing.',
    //         link: '#',
    //         image: 'https://appliv-gai-production.s3.ap-northeast-1.amazonaws.com/images/blockode-ai-photo-studio.png',
    //         ratings: [1, 2, 3, 4, 5], // Example ratings
    //         rating: 5.0 // Example rating
    //     },
    //     {
    //         id: 10,
    //         title: 'Blockcode AI Photo Studio',
    //         sub_title: 'Created brand avatars to personalized marketing.',
    //         link: '#',
    //         image: 'https://appliv-gai-production.s3.ap-northeast-1.amazonaws.com/images/blockode-ai-photo-studio.png',
    //         ratings: [1, 2, 3, 4, 5], // Example ratings
    //         rating: 5.0 // Example rating
    //     },
    //     {
    //         id: 11,
    //         title: 'Blockcode AI Photo Studio',
    //         sub_title: 'Created brand avatars to personalized marketing.',
    //         link: '#',
    //         image: 'https://appliv-gai-production.s3.ap-northeast-1.amazonaws.com/images/blockode-ai-photo-studio.png',
    //         ratings: [1, 2, 3, 4, 5], // Example ratings
    //         rating: 5.0 // Example rating
    //     },
    //     {
    //         id: 12,
    //         title: 'Blockcode AI Photo Studio',
    //         sub_title: 'Created brand avatars to personalized marketing.',
    //         link: '#',
    //         image: 'https://appliv-gai-production.s3.ap-northeast-1.amazonaws.com/images/blockode-ai-photo-studio.png',
    //         ratings: [1, 2, 3, 4, 5], // Example ratings
    //         rating: 5.0 // Example rating
    //     },
    //     {
    //         id: 13,
    //         title: 'Blockcode AI Photo Studio',
    //         sub_title: 'Created brand avatars to personalized marketing.',
    //         link: '#',
    //         image: 'https://appliv-gai-production.s3.ap-northeast-1.amazonaws.com/images/blockode-ai-photo-studio.png',
    //         ratings: [1, 2, 3, 4, 5], // Example ratings
    //         rating: 5.0 // Example rating
    //     },
    //     {
    //         id: 14,
    //         title: 'Blockcode AI Photo Studio',
    //         sub_title: 'Created brand avatars to personalized marketing.',
    //         link: '#',
    //         image: 'https://appliv-gai-production.s3.ap-northeast-1.amazonaws.com/images/blockode-ai-photo-studio.png',
    //         ratings: [1, 2, 3, 4, 5], // Example ratings
    //         rating: 5.0 // Example rating
    //     },
    //     {
    //         id: 15,
    //         title: 'Blockcode AI Photo Studio',
    //         sub_title: 'Created brand avatars to personalized marketing.',
    //         link: '#',
    //         image: 'https://appliv-gai-production.s3.ap-northeast-1.amazonaws.com/images/blockode-ai-photo-studio.png',
    //         ratings: [1, 2, 3, 4, 5], // Example ratings
    //         rating: 5.0 // Example rating
    //     },
    //     {
    //         id: 5,
    //         title: 'Blockcode AI Photo Studio',
    //         sub_title: 'Created brand avatars to personalized marketing.',
    //         link: '#',
    //         image: 'https://appliv-gai-production.s3.ap-northeast-1.amazonaws.com/images/blockode-ai-photo-studio.png',
    //         ratings: [1, 2, 3, 4, 5], // Example ratings
    //         rating: 5.0 // Example rating
    //     },
    // ]
};
</script>
  
<style scoped>
/* Add your styles here */
</style>
  