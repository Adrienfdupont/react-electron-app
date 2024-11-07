import IProductData from '../interfaces/IProductData';

class ProductService {
  private static instance: ProductService;

  private static apiBaseUrl = 'https://world.openfoodfacts.org/';

  public static dataTemplate: IProductData = {
    nameFr: '',
    nameEn: '',
    ingredientList: '',
    nutriments: {
      kcal: 0,
      proteins: 0,
      saturedFat: 0,
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
        if (response.status === 200) {
          return response.json();
        }
        throw new Error('An error occured');
      })
      .then((data) => {
        return {
          nameFr: data.product.product_name_fr,
          nameEn: data.product.product_name,
          ingredientList: data.product.ingredients_text_fr,
          nutriments: {
            kcal: data.product.nutriments['energy-kcal'],
            proteins: data.product.nutriments.proteins,
            saturedFat: data.product.nutriments['saturated-fat'],
            sugars: data.product.nutriments.sugars,
          },
          code: data.code,
          pictureUrl: data.product.image_front_url,
        };
      })
      .catch(() => {
        throw new Error('Product not found');
      });
  }
}

export default ProductService;
