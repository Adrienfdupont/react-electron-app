interface INutriments {
  'energy-kcal': number;
  proteins: number;
  'saturated-fat': number;
  sugars: number;
}

interface IProductData {
  generic_name_fr: string;
  generic_name_en: string;
  ingredients_text: string;
  nutriments: INutriments;
  code: string;
}

export default IProductData;
