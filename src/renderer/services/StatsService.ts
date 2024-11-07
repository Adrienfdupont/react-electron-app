import StorageService from './StorageService';
import IStatData from '../interfaces/IStatData';

class StatsService {
  private static instance: StatsService;

  private storageService = StorageService.getInstance();

  static getInstance(): StatsService {
    if (!StatsService.instance) {
      StatsService.instance = new StatsService();
    }
    return StatsService.instance;
  }

  retrieveStats(): IStatData {
    if (this.storageService.retrieveData('stats')) {
      return this.storageService.retrieveData('stats');
    }
    return {
      calories: 0,
      proteins: 0,
      'saturated-fat': 0,
      sugars: 0,
    };
  }

  resetStats(): void {
    this.storageService.storeData('stats', {
      calories: 0,
      proteins: 0,
      'saturated-fat': 0,
      sugars: 0,
    });
  }
}

export default StatsService;
