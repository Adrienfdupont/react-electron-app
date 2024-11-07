import IProductData from '../../interfaces/IProductData';
import IStatData from '../../interfaces/IStatData';
import StorageService from '../../services/StorageService';
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
  const storageService = StorageService.getInstance();

  function handleStatUpdate(productData: IProductData) {
    const newStatData: IStatData = {
      ...statData,
      calories: statData.calories + productData.nutriments['energy-kcal'],
      proteins: statData.proteins + productData.nutriments.proteins,
      sugars: statData.sugars + productData.nutriments.sugars,
      'saturated-fat': statData['saturated-fat'] + productData.nutriments['saturated-fat'],
    };
    updateStatData(newStatData);
    storageService.storeData('stats', newStatData);
  }

  return (
    <div>
      <p>
        {searchResult.generic_name_fr?.length > 0
          ? searchResult.generic_name_fr
          : searchResult.generic_name_en}
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
