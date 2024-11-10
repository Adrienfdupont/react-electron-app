import IProductData from '../../interfaces/IProductData';
import IStatData from '../../interfaces/IStatData';
import StatsService from '../../services/StatsService';
import './SearchResultBox.css';
import ProductService from '../../services/ProductService';

function SearchResultBox({
  searchResult,
  statData,
  updateStatData,
  productHistory,
  updateProductHistory,
}: {
  searchResult: IProductData;
  statData: IStatData;
  updateStatData: (statData: IStatData) => void;
  productHistory: IProductData[];
  updateProductHistory: (productHistory: IProductData[]) => void;
}) {
  const statsService = StatsService.getInstance();
  const productService = ProductService.getInstance();

  function handleStatUpdate(productData: IProductData) {
    const newStatData: IStatData = {
      ...statData,
      calories: statData.calories + productData.nutriments.kcal,
      proteins: statData.proteins + productData.nutriments.proteins,
      sugars: statData.sugars + productData.nutriments.sugars,
      saturedFat: statData.saturedFat + productData.nutriments.saturedFat,
    };
    updateStatData(newStatData);
    statsService.saveStats(newStatData);
    updateProductHistory([...productHistory, productData]);
    productService.saveProductHistory([...productHistory, productData]);
  }

  return (
    <div>
      <div className="search_result_container">
        <p>
          {searchResult.nameFr &&
            searchResult.nameFr.length > 0 &&
            `${searchResult.nameFr} (${searchResult.brandName})`}
        </p>

        {searchResult.pictureUrl && (
          <img
            className="product_image"
            src={searchResult.pictureUrl}
            alt="product image"
          />
        )}

        {searchResult.ingredientList?.length > 0 && (
          <p>Ingrédients: {searchResult.ingredientList}</p>
        )}
      </div>

      {searchResult.code?.length > 0 && (
        <div className="button_container">
          <button className="add_button" type="button" onClick={() => handleStatUpdate(searchResult)}>
            Ajouter
          </button>
        </div>
      )}
    </div>
  );
}

export default SearchResultBox;
