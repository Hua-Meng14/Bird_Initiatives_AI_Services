<template>
  <div>
    <div class="flex flex-col items-center justify-center py-5">
      <h1
        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        List of recommended AI services
      </h1>
    </div>

    <!-- Search Bar -->
    <div class="flex justify-center">
      <input v-model="searchQuery" @input="filterServices"
        class="px-3 py-2 m-1 rounded-full border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
        type="text" placeholder="Search services..." />
    </div>

    <div class="container mx-auto grid gap-6 md:grid-cols-4">
      <div v-for="(service, index) in paginatedServices" :key="index"
        class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 serviceCard">
        <NuxtLink :to="`/products/${service.id}`">
          <img class="p-2 rounded-t-lg" :src="service.image" :alt="service.title" />
        </NuxtLink>
        <div class="px-5 pb-5">
          <a :href="service.link">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{{ service.title }}</h5>
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
import { state as product } from '~/dummyData/data';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    Footer,
  },
  data() {
    return {
      services: product.products.map((product) => ({
        id: product.id,
        title: product.title,
        sub_title: product.sub_title,
        link: product.link,
        image: product.image,
        ratings: product.ratings,
        rating: product.rating,
      })),
      currentPage: 1,
      productsPerPage: 12,
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
      this.services = product.products.filter((service) =>
        service.title.toLowerCase().includes(query)
      );
      // Reset pagination to the first page after filtering
      this.currentPage = 1;
    },
  },
};
</script>
