class StorageService {
  private static instance: StorageService;

  static getInstance(): StorageService {
    if (!StorageService.instance) {
      StorageService.instance = new StorageService();
    }
    return StorageService.instance;
  }

  storeData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  retrieveData(key: string) {
    return JSON.parse(localStorage.getItem(key) || '{}');
  }
}

export default StorageService;
