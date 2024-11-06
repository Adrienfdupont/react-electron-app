import IStatData from '../interfaces/IStatData';

function StatBox({ statData }: { statData: IStatData }) {
  return (
    <div>
      calories : {statData.calories}
    </div>
  );
}

export default StatBox;
