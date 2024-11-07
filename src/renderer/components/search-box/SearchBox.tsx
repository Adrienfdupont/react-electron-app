import IProductData from '../../interfaces/IProductData';
import ProductService from '../../services/ProductService';
import './SearchBox.css';

function SearchBox({
  updateProduct,
}: {
  updateProduct: (product: IProductData) => void;
}) {
  const productService = ProductService.getInstance();

  function searchProduct() {
    const inputValue = document.querySelector('input')?.value;
    if (!inputValue || inputValue === '') return;

    productService
      .getProductData(inputValue)
      .then((data) => {
        updateProduct(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="search_container">
      <input className="search_input" type="text" />
      <button className="search_button" type="button" onClick={searchProduct}>
        Rechercher
      </button>
    </div>
  );
}

export default SearchBox;
