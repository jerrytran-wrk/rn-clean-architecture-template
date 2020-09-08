import {Observable} from 'rxjs';

export interface UseCase<Data = any, Params = any> {
  call(param?: Params): Observable<Data>;
}
