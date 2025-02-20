import { Product } from '../types';

const BASE_URL = 'https://fakestoreapi.com';

// Fetch all products from fakestoreapi.
// Throw appropriate error on failure.
// Return json response.
export const fetchAllProducts = async (): Promise<Product[]> => {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    const responseJson = await response.json();
    console.log("All products response: ", responseJson);
    return responseJson;
};


// Fetch product by id from fakestoreapi.
// Throw appropriate error on failure.
// Return json response.
export const fetchProductById = async (id: number): Promise<Product> => {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch product with id ${id}`);
    }
    const responseJson = await response.json();
    console.log(`Product ID:: ${id} \nResponse:: ${responseJson}`);
    return responseJson;
};