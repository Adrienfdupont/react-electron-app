import IProductData from '../interfaces/IProductData';
import ProductService from '../services/ProductService';

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
    <div>
      <input type="text" />
      <button type="button" onClick={searchProduct}>
        Search
      </button>
    </div>
  );
}

export default SearchBox;
