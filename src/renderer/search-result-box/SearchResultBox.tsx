import IProductData from '../interfaces/IProductData';
import IStatData from '../interfaces/IStatData';

function SearchResultBox({
  searchResult,
  statData,
  updateStatData,
}: {
  searchResult: IProductData;
  statData: IStatData;
  updateStatData: (statData: IStatData) => void;
}) {
  function handleStatupdate(productData: IProductData) {
    const newStatData: IStatData = {
      ...statData,
      calories: statData.calories + productData.nutriments['energy-kcal'],
    };
    updateStatData(newStatData);
  }

  return (
    <div>
      <p>
        {searchResult.generic_name_fr?.length > 0
          ? searchResult.generic_name_fr
          : searchResult.generic_name_en}
      </p>

      {searchResult.ingredients_text?.length > 0 && (
        <p>{searchResult.ingredients_text}</p>
      )}
      <button type="button" onClick={() => handleStatupdate(searchResult)}>
        Ajouter
      </button>
    </div>
  );
}

export default SearchResultBox;
