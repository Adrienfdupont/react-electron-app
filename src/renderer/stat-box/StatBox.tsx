import IStatData from '../interfaces/IStatData';
import './StatBox.css';

function StatBox({ statData, updateStatData }: { statData: IStatData, updateStatData: (statData: IStatData) => void }) {
  function handleUpdateStat() {
    const newStatData: IStatData = {
      ...statData,
      calories: 0,
    };
    updateStatData(newStatData);
  }

  return (
    <>
      <h2>Somme des valeurs nutritionelles</h2>
      <div className="statContainer">
        <p>calories : {statData.calories}</p>
        <button onClick={handleUpdateStat}>Réinitialiser</button>
      </div>
    </>
  );
}

export default StatBox;
