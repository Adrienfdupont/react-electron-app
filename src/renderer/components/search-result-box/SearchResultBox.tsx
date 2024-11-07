import IProductData from '../../interfaces/IProductData';
import IStatData from '../../interfaces/IStatData';
import StatsService from '../../services/StatsService';
import './SearchResultBox.css';

function SearchResultBox({
  searchResult,
  statData,
  updateStatData,
}: {
  searchResult: IProductData;
  statData: IStatData;
  updateStatData: (statData: IStatData) => void;
}) {
  const statsService = StatsService.getInstance();

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
  }

  return (
    <div>
      <div className="search_result_container">
        <p>
          {searchResult.nameFr && searchResult.nameFr.length > 0
            ? searchResult.nameFr
            : searchResult.nameEn}
        </p>

      {searchResult.ingredients_text?.length > 0 && (
        <p>Ingrédients: {searchResult.ingredients_text}</p>
      )}

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
