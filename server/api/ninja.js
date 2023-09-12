export default defineEventHandler(async (event) => {
  // Get the name from the query string
  //   const { name } = getQuery(event);

  // Get the age from the request body
  //   const { age } = await readBody(event);

  const runtimeConfig = useRuntimeConfig();

  const { data } = await $fetch(
    `${runtimeConfig.public.currencyApiUrl}latest?apikey=${runtimeConfig.currencyApiKey}`
  );

  return data;
});
