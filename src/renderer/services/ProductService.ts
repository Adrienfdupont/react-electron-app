import IProductData from '../interfaces/IProductData';

class ProductService {
  private static instance: ProductService;

  static getInstance(): ProductService {
    if (!ProductService.instance) {
      ProductService.instance = new ProductService();
    }
    return ProductService.instance;
  }

  async getProductData(inputValue: string): Promise<IProductData> {
    const url = `https://world.openfoodfacts.org/api/v3/product/${inputValue}.json`;

    return fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('API request failed');
      })
      .then((data) => {
        return data.product;
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
  }
}

export default ProductService;
