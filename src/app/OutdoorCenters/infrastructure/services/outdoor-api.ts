import { Injectable } from '@angular/core';
import { BaseApi } from '../../../shared/infrastructure/base-api';
import { BaseEndpoint } from '../../../shared/infrastructure/base-endpoint';
import { environment } from '../../../../environments/environments';
import { OutdoorResource } from '../resources/outdoor.resources';
import { OutdoorAssembler } from '../assemblers/outdoor.assembler';
@Injectable({ providedIn: 'root' })
export class OutdoorApi extends BaseApi {
  readonly bookstores = new BaseEndpoint<OutdoorResource>(
    this.http,
    environment.apiBase + environment.endpoints.outdoor,
  );
  async getOutdoor() {
    return (await this.bookstores.list()).map(OutdoorAssembler.toEntity);
  }
}
