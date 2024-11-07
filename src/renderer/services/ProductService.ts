import IProductData from '../interfaces/IProductData';

class ProductService {
  private static instance: ProductService;

  private static apiBaseUrl = 'https://world.openfoodfacts.org/';

  public static dataTemplate: IProductData = {
    generic_name_fr: '',
    generic_name_en: '',
    ingredients_text: '',
    nutriments: {
      'energy-kcal': 0,
      proteins: 0,
      'saturated-fat': 0,
      sugars: 0,
    },
    code: '',
  };

  static getInstance(): ProductService {
    if (!ProductService.instance) {
      ProductService.instance = new ProductService();
    }
    return ProductService.instance;
  }

  async getProductData(inputValue: string): Promise<IProductData> {
    const url = `${ProductService.apiBaseUrl}api/v3/product/${inputValue}.json`;

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
