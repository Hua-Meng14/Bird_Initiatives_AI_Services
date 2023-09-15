<template>
    <div>
        <div class="flex flex-col items-center justify-center">
            <h1
                class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                List All Articles
            </h1>
        </div>

        <!-- Search Bar -->
        <div class="flex justify-center">
            <input v-model="searchQuery" @input="filterServices"
                class="px-3 py-2 m-1 rounded-full border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
                type="text" placeholder="Search articles..." />
        </div>

        <div class="container mx-auto grid gap-6 md:grid-cols-4">
            <div v-for="(service, index) in paginatedServices" :key="index"
                class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 serviceCard">
                <NuxtLink :to="`/articles/${service.id}`">
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
        </div>

        <!-- Pagination -->
        <div class="flex justify-center mt-5">
            <a href="#">
                <button v-for="pageNumber in totalPages" :key="pageNumber" @click="setCurrentPage(pageNumber)"
                    :class="{ 'bg-blue-500 text-white': currentPage === pageNumber, 'bg-gray-300': currentPage !== pageNumber }"
                    class="px-3 py-2 m-1 rounded-full">
                    {{ pageNumber }}
                </button>
            </a>
        </div>
    </div>
    <Footer />
</template>
  
<script>
import { state as product } from '~/dummyData/articles';
import Footer from '../../components/Footer.vue';
import ProductList from '../../components/ProductList.vue';

export default {
    components: {
        Footer,
        ProductList,
    },
    data() {
        return {
            services: product.articles.map((product) => ({
                id: product.id,
                title: product.title,
                image: product.image,
                last_updated: product.last_updated,
            })),
            currentPage: 1,
            productsPerPage: 8,
            searchQuery: '', // Initialize search query
        };
    },
    computed: {
        paginatedServices() {
            const startIndex = (this.currentPage - 1) * this.productsPerPage;
            const endIndex = startIndex + this.productsPerPage;
            return this.services.slice(startIndex, endIndex);
        },
        totalPages() {
            return Math.ceil(this.services.length / this.productsPerPage);
        },
    },
    methods: {
        setCurrentPage(pageNumber) {
            this.currentPage = pageNumber;
        },
        filterServices() {
            const query = this.searchQuery.toLowerCase();
            this.services = product.articles
                .filter((service) => service.title.toLowerCase().includes(query));
            // Reset pagination to the first page after filtering
            this.currentPage = 1;
        },
    },
};
</script>
  