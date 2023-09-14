<template>
  <div>
    <h2 class="text-6xl my-8">Welcome to Bird Initiative AI Services</h2>
    <h3 class="text-3xl my-8">
      AI services that make your daily life more convenient and smart are gathered here.
    </h3>
    <h3 class="text-3xl my-8">
      Why not find the perfect service for you by referring to our editorial department's reviews and usage guides?
    </h3>
    <div style="text-align: center;">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold text-2xl py-6 px-10 rounded-full">
        Take a look at AI Services
      </button>
    </div>
    <div style="text-align: center; margin-top: 40px;">
      <div style="background-color: #f0f0f0; padding: 20px; border-radius: 10px; width: 70%; margin: 0 auto;">
        <h3 class="text-xl font-bold">Search by categories</h3>
        <div class="flex flex-wrap justify-center mt-8">
          <button>
            <NuxtLink to="/products" class="category-button">Lighting</NuxtLink>
          </button>
          <button>
            <NuxtLink to="/products" class="category-button">Interactive</NuxtLink>
          </button>
          <button>
            <NuxtLink to="/products" class="category-button">Q&A Format</NuxtLink>
          </button>
          <button>
            <NuxtLink to="/products" class="category-button">Avatar Creation</NuxtLink>
          </button>
          <button>
            <NuxtLink to="/products" class="category-button">Email Writing</NuxtLink>
          </button>
          <button>
            <NuxtLink to="/products" class="category-button">Image Editing</NuxtLink>
          </button>
        </div>
        <div class="text-right mt-6">
          <button>
            <NuxtLink to="/products"
              class="bg-yellow-200 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-full">
              Explore More Categories >>
            </NuxtLink>
          </button>
        </div>
      </div>
    </div>
    <NewArticles />
    <NewAIServices />
    <Popularity />
    <Recommendation />
    <Footer />
  </div>
</template>

<script>
import ProductList from "/home/gmhua/Documents/Backend/birdAI/nuxt3-store-main/components/ProductList.vue";
import Footer from "~~/components/Footer.vue";
import NewArticles from "~~/components/Footer.vue";
import NewAIServices from "~~/components/Footer.vue";
import Popularity from "~~/components/Footer.vue";
import Recommendation from "~~/components/Footer.vue";

export default {
  components: {
    ProductList,
    Footer,
    NewAIServices,
    NewArticles,
    Popularity,
    Recommendation

  },
};
</script>
