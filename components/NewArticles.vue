<template>
    <div style="margin-top: 40px;">
        <div style="padding: 20px; border-radius: 10px; width: 100%; margin: 0 auto;">
            <h3 class="text-2xl py-5 font-bold">New articles</h3>
            <div class="cards-container">
                <div v-for="(service, index) in services.slice(0, 3)" :key="index"
                    class="w-full max-w bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 serviceCard">
                    <NuxtLink :to="`/articles/${service.id}`">
                        <img class="p-2 rounded-t-lg" :src="service.image" :alt="service.title" />
                    </NuxtLink>
                    <div class="px-5 pb-5">
                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{{
                            service.title }}
                        </h5>
                    </div>
                </div>
            </div>
            <!-- See More Button -->
            <div class="text-right mt-4">
                <NuxtLink to="/articles"><button
                        class="bg-yellow-300 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-md">
                        See More >
                    </button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
import { state as product } from '~/dummyData/articles';
export default {
    data() {
        return {
            services: product.articles.map(product => ({
                id: product.id,
                title: product.title,
                image: product.image,
                last_updated: product.last_updated
            }))
        };
    }
};
</script>
