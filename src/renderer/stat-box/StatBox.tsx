import IStatData from '../interfaces/IStatData';
import './StatBox.css';

function StatBox({ statData, updateStatData }: { statData: IStatData, updateStatData: (statData: IStatData) => void }) {
  function handleUpdateStat() {
    const newStatData: IStatData = {
      calories: 0,
      proteins: 0,
      'saturated-fat': 0,
      sugars: 0,
    };
    updateStatData(newStatData);
  }

  return (
    <>
      <h2>Somme des valeurs nutritionelles</h2>
      <div className="statContainer">
        <div className="statCell">calories : {statData.calories}</div>
        <div className="statCell">protéines : {Math.round(statData.proteins)} g</div>
        <div className="statCell">graisses saturées : {Math.round(statData['saturated-fat'])} g</div>
        <div className="statCell">sucres : {Math.round(statData.sugars)} g</div>
        <button onClick={handleUpdateStat}>Réinitialiser</button>
      </div>
    </>
  );
}

export default StatBox;
