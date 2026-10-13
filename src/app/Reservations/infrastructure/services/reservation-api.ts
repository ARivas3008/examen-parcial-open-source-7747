import { Injectable } from '@angular/core';
import { BaseApi } from '../../../shared/infrastructure/base-api';
import { BaseEndpoint } from '../../../shared/infrastructure/base-endpoint';
import { environment } from '../../../../environments/environments';
import {ReservationResource} from '../resources/reservation.resources';
import {ReservationAssembler} from '../assemblers/reservation.assembler';
@Injectable({ providedIn: 'root' })
export class ReservationApi extends BaseApi {
  readonly reservation = new BaseEndpoint<ReservationResource>(
    this.http,
    environment.apiBase + environment.endpoints.outdoor,
  );
  async getReservations(){
    return (await this.reservation.list()).map(ReservationAssembler.toEntity);
  }
}
