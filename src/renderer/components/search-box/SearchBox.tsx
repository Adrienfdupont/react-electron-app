import { useState } from 'react';
import IProductData from '../../interfaces/IProductData';
import ProductService from '../../services/ProductService';
import './SearchBox.css';

function SearchBox({
  updateProduct,
}: {
  updateProduct: (product: IProductData) => void;
}) {
  const productService = ProductService.getInstance();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function searchProduct() {
    const inputValue = document.querySelector('input')?.value;
    if (!inputValue || inputValue === '') return;

    productService
      .getProductData(inputValue)
      .then((data) => {
        updateProduct(data);
        setErrorMessage(null);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }

  return (
    <div className="search_container">
      <input className="search_input" type="text" />
      <button className="search_button" type="button" onClick={searchProduct}>
        Rechercher
      </button>
      {errorMessage && <p className="error_message">{errorMessage}</p>}
    </div>
  );
}

export default SearchBox;
