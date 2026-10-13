import { HttpClient } from '@angular/common/http';
import { firstValueFrom, timeout } from 'rxjs';
export class BaseEndpoint<TResource, TRequest = Omit<TResource, 'id'>> {
  constructor(
    private readonly http: HttpClient,
    private readonly url: string,
  ) {}
  list(): Promise<TResource[]> {
    return firstValueFrom(this.http.get<TResource[]>(this.url).pipe(timeout(20000)));
  }
  create(request: TRequest): Promise<TResource> {
    return firstValueFrom(this.http.post<TResource>(this.url, request).pipe(timeout(20000)));
  }
}
