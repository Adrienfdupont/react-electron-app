import { RxReset } from 'react-icons/rx';
import IStatData from '../../interfaces/IStatData';
import './StatBox.css';
import StatsService from '../../services/StatsService';
import ProductService from '../../services/ProductService';

function StatBox({ statData, updateStatData }: { statData: IStatData, updateStatData: (statData: IStatData) => void }) {
  const statsService = StatsService.getInstance();
  const productService = ProductService.getInstance();

  function handleResetStat() {
    updateStatData(StatsService.dataTemplate);
    statsService.saveStats(StatsService.dataTemplate);
    productService.saveProductHistory([]);
  }

  return (
    <>
      <h2>Récapitulatif nutritionnel</h2>
      <div className="statContainer">
        <div className="statCell">calories : {statData.calories}</div>
        <div className="statCell">protéines : {Math.round(statData.proteins)} g</div>
        <div className="statCell">graisses saturées : {Math.round(statData.saturedFat)} g</div>
        <div className="statCell">sucres : {Math.round(statData.sugars)} g</div>
        <div className="reset_button" onClick={handleResetStat}>
          <RxReset />
        </div>
      </div>
    </>
  );
}

export default StatBox;
