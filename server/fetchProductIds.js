// Import your product data from your data module
import { state as data } from '../dummyData/data';

// Define a function to fetch product IDs
async function fetchProductIds() {
  // Assuming your data object has a 'products' property containing an array of products
  const products = data().products;

  // Extract the IDs from the products and return them as an array
  const productIds = products.map(product => product.id);

  return productIds;
}

export default fetchProductIds;
