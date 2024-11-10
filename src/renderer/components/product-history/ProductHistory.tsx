import IProductData from '../../interfaces/IProductData';
import './ProductHistory.css';

function ProductHistory({ history }: { history: IProductData[] }) {
  return (
    <div>
      <h2>Historique des produits</h2>
      <ul className="history_container">
        {history.map((product, index) => (
          <li className="history_item" key={index}>
            <img className="history_picture" src={product.pictureUrl} alt={product.nameFr || product.nameEn} />
            <p>{product.nameFr || product.nameEn}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductHistory;
