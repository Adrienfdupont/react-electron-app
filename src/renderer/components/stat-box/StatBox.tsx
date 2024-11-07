import { RxReset } from "react-icons/rx";
import IStatData from '../../interfaces/IStatData';
import './StatBox.css';
import StatsService from '../../services/StatsService';

function StatBox({ statData, updateStatData }: { statData: IStatData, updateStatData: (statData: IStatData) => void }) {
  const statsService = StatsService.getInstance();

  function handleUpdateStat() {
    const newStatData: IStatData = {
      calories: 0,
      proteins: 0,
      'saturated-fat': 0,
      sugars: 0,
    };
    updateStatData(newStatData);
    statsService.resetStats();
  }

  return (
    <>
      <h2>Récapitulatif nutritionnel</h2>
      <div className="statContainer">
        <div className="statCell">calories : {statData.calories}</div>
        <div className="statCell">protéines : {Math.round(statData.proteins)} g</div>
        <div className="statCell">graisses saturées : {Math.round(statData['saturated-fat'])} g</div>
        <div className="statCell">sucres : {Math.round(statData.sugars)} g</div>
        <div className="reset_button" onClick={handleUpdateStat}>
          <RxReset />
        </div>
      </div>
    </>
  );
}

export default StatBox;
