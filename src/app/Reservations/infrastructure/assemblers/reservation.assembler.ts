import {Reservation} from '../../domain/model/reservation.entity';
import {ReservationResource} from '../resources/reservation.resources';

export class ReservationAssembler {
  static toEntity(r: ReservationResource): Reservation {
    return new Reservation(Number(r.id), Number(r.outdoorCenterId), r.activityType,
      r.participantName, (Number(r.participants)), r.weatherTemperature, r.reservedAt)
  }
}

