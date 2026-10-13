import { Injectable, inject, signal } from '@angular/core';
import { ReservationApi } from '../infrastructure/services/reservation-api';
import { Reservation } from '../domain/model/reservation.entity';
@Injectable({ providedIn: 'root' })
export class ReservationStore {
  private readonly api = inject(ReservationApi);
  readonly stores = signal<Reservation[]>([]);
  async load(): Promise<void> {
    this.stores.set(await this.api.getReservations());
  }
  forParticipants(participants: number): Reservation | undefined {
    const stores = this.stores().filter((s) => s.participants === participants);
    return stores.length === 1 ? stores[0] : undefined;
  }
}
