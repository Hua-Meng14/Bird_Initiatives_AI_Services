<template>
  <div>
    <h2 class="text-6xl my-8">About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit repellat
      hic cupiditate magnam, accusantium qui expedita quos saepe nemo ut laborum
      odit veniam, totam non, dolorem quis vero quae velit?
    </p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
definePageMeta({ layout: "default" });
const { data } = await useFetch("/api/currency/GBP");
</script>

<style scoped></style>
