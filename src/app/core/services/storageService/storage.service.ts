import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { PLATFORM_ID, Provider } from '@angular/core';

interface IStorage {
  setItem<T>(key: string, item: T): T;
  getItem<T>(key: string): T;
}

export class StorageService implements IStorage {
  setItem<T>(key: string, item: T): T { return item }
  getItem(key: string) { return null }
}

function storageFactory(platformId: string): BrowserStorage | ServerStorage {

  if (isPlatformBrowser(platformId)) {
    return new BrowserStorage();
  }

  if (isPlatformServer(platformId)) {
    return new ServerStorage();
  }

  return null;
}

export const storageServiceProvider: Provider = {
  provide: StorageService,
  useFactory: storageFactory,
  deps: [PLATFORM_ID]
}

class BrowserStorage {
  localStorage = localStorage

  setItem<T>(key: string, item: T): T {
    const str = typeof item === 'string' ? item : JSON.stringify(item);

    this.localStorage.setItem(key, str);

    return item;
  }

  getItem<T>(key: string): T {
    let item: any;

    const tmp = this.localStorage.getItem(key);

    if (!tmp) { return null };

    try {
      item = JSON.parse(tmp);
    } catch {
      item = tmp
    }

    return item;
  }
}

class ServerStorage {
  localStorage = {
    data: {},
    setItem<T>(key: string, item: T): void {
      this.data[key] = item;
    },
    getItem<T>(key: string): T {
      return this.data[key];
    }
  }

  setItem<T>(key: string, item: T): T {
    const str = typeof item === 'string' ? item : JSON.stringify(item);

    this.localStorage.setItem(key, str);

    return item;
  }

  getItem<T>(key: string): T {
    let item: any;

    const tmp = this.localStorage.getItem(key) as any;

    try {
      item = JSON.parse(tmp);
    } catch {
      item = tmp
    }

    return item;
  }
}