import { Outdoor } from '../../domain/model/outdoor.entity';
import { OutdoorResource } from '../resources/outdoor.resources';
export class OutdoorAssembler {
  static toEntity(r: OutdoorResource): Outdoor {
    return new Outdoor(Number(r.id), r.name, r.activityType, r.capacity, r.latitude, r.longitude);
  }
}
