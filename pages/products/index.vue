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

  <footer class="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
    <div class="mx-6 py-10 text-center md:text-left">
      <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div class="">
          <h6 class="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="mr-3 h-4 w-4">
              <path
                d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
            </svg>
            BIRD INITIATIVE AI SERVICES
          </h6>
          <p>
            At BIRD INITIATIVE, we do our best to support the creation of new businesses by major listed
            companies.
            Utilizing software technologies such as AI technology and control technology, we will accelerate the
            speed
            of commercialization through carve-outs from major companies and increase the probability of
            business
            success.
          </p>
        </div>
        <div class="">
          <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
            services
          </h6>
          <p class="mb-4">
            <a href="https://bird-initiative.com/" class="text-neutral-600 dark:text-neutral-200">Process/Organization</a>
          </p>
          <p class="mb-4">
            <a href="https://bird-initiative.com/" class="text-neutral-600 dark:text-neutral-200">Human Resource
              Development</a>
          </p>
          <p class="mb-4">
            <a href="https://bird-initiative.com/" class="text-neutral-600 dark:text-neutral-200">Exit
              Strategy</a>
          </p>
        </div>
        <div class="">
          <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
            Useful links
          </h6>
          <p class="mb-4">
            <a href="https://bird-initiative.com/" class="text-neutral-600 dark:text-neutral-200">Pricing</a>
          </p>
          <p class="mb-4">
            <a href="https://bird-initiative.com/" class="text-neutral-600 dark:text-neutral-200">Settings</a>
          </p>
          <p class="mb-4">
            <a href="https://bird-initiative.com/" class="text-neutral-600 dark:text-neutral-200">Orders</a>
          </p>
          <p>
            <a href="https://bird-initiative.com/" class="text-neutral-600 dark:text-neutral-200">Help</a>
          </p>
        </div>
        <div>
          <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
            Contact
          </h6>
          <p class="mb-4 flex items-center justify-center md:justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="mr-3 h-5 w-5">
              <path
                d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path
                d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>
            Tokyo, Japan
          </p>
          <p class="mb-4 flex items-center justify-center md:justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="mr-3 h-5 w-5">
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
            bird-initiative@info.com.jp
          </p>
          <p class="mb-4 flex items-center justify-center md:justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="mr-3 h-5 w-5">
              <path fill-rule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clip-rule="evenodd" />
            </svg>
            + 81 888 999 99
          </p>
          <p class="flex items-center justify-center md:justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="mr-3 h-5 w-5">
              <path fill-rule="evenodd"
                d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z"
                clip-rule="evenodd" />
            </svg>
            + 81 777 888 88
          </p>
        </div>
      </div>
    </div>
    <div class="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
      <span>© 2023 Copyright:</span>
      <a class="font-semibold text-neutral-600 dark:text-neutral-400" href="https://bird-initiative.com/">Bird
        Initiative Co.Ltd</a>
    </div>
  </footer>
</template>

<script>
import { state as product } from '~/dummyData/data';
export default {
  data() {
    return {
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
};
</script>
