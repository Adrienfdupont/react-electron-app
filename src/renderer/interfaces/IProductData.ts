interface INutriments {
  kcal: number;
  proteins: number;
  saturedFat: number;
  sugars: number;
}

interface IProductData {
  nameFr?: string;
  nameEn?: string;
  ingredientList: string;
  nutriments: INutriments;
  code: string;
  pictureUrl?: string;
  brandName: string;
}

export default IProductData;
