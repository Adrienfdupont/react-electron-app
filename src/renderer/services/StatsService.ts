import StorageService from './StorageService';
import IStatData from '../interfaces/IStatData';

class StatsService {
  private static instance: StatsService;

  private storageService = StorageService.getInstance();

  public static dataTemplate: IStatData = {
    calories: 0,
    proteins: 0,
    saturedFat: 0,
    sugars: 0,
  };

  static getInstance(): StatsService {
    if (!StatsService.instance) {
      StatsService.instance = new StatsService();
    }
    return StatsService.instance;
  }

  retrieveStats(): IStatData {
    return (
      this.storageService.retrieveData('stats') || StatsService.dataTemplate
    );
  }

  saveStats(newStats: IStatData): void {
    this.storageService.storeData('stats', newStats);
  }
}

export default StatsService;
