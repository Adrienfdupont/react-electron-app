interface INutriments {
  'energy-kcal': number;
}

interface IProductData {
  generic_name_fr: string;
  generic_name_en: string;
  ingredients_text: string;
  nutriments: INutriments;
}

export default IProductData;
