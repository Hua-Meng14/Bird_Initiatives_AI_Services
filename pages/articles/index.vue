<template>
    <div>
        <div class="flex flex-col items-center justify-center py-5">
            <h1
                class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                List All Articles</h1>
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
                    </a>
                </div>
                <div class="absolute bottom-0 left-0 bg-gray-200 text-gray-600 p-2 text-xs">
                    Last Updated: {{ service.last_updated }}
                </div>
            </div>
            <!-- Read Now overlay
            <div
                class="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-90 cursor-pointer backdrop-blur-md bg-gray-800 text-white">
                <div class="text-lg font-semibold">Read Now</div>
            </div> -->
        </div>
    </div>
    <Footer/>
</template>
  
<script>
import { state as product } from '~/dummyData/articles';
import Footer from "../../components/Footer.vue"
import ProductList from '../../components/ProductList.vue';
export default {
    components: {
        Footer,
        ProductList
    },
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
