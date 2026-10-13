import { Injectable, inject, signal } from '@angular/core';
import { OutdoorApi } from '../infrastructure/services/outdoor-api';
import { Outdoor } from '../domain/model/outdoor.entity';
@Injectable({ providedIn: 'root' })
export class BookstoresStore {
  private readonly api = inject(OutdoorApi);
  readonly stores = signal<Outdoor[]>([]);
  async load(): Promise<void> {
    this.stores.set(await this.api.getOutdoor());
  }
  forActivityType(activityType: string): Outdoor | undefined {
    const stores = this.stores().filter((s) => s.activityType === activityType);
    return stores.length === 1 ? stores[0] : undefined;
  }
}
