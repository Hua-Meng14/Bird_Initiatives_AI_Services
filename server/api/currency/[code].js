export default defineEventHandler(async (event) => {
  const { code } = event.context.params;
  const runtimeConfig = useRuntimeConfig();
  const uri = `${runtimeConfig.public.currencyApiUrl}latest?currencies=${code}&apikey=${runtimeConfig.currencyApiKey}`;

  const { data } = await $fetch(uri);

  return data;
});
