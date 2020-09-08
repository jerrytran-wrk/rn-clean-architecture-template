import {injectable} from 'tsyringe';
import {Observable, Observer} from 'rxjs';

import * as Keychain from 'react-native-keychain';
import {LocalException} from '@core';

export interface LocalAuthenticationDataSource {
  saveToken(username: string, token: string): Observable<boolean>;

  getToken(): Observable<string>;
}

@injectable()
export class KeyChainAuthenticationDataSource
  implements LocalAuthenticationDataSource {
  saveToken(username: string, token: string): Observable<boolean> {
    return Observable.create(async (observer: Observer<boolean>) => {
      try {
        await Keychain.setGenericPassword(username, token);
        observer.next(true);
        observer.complete();
      } catch (error) {
        observer.error(new LocalException(error));
      }
    });
  }
  getToken(): Observable<string> {
    return Observable.create(async (observer: Observer<string>) => {
      try {
        const result = await Keychain.getGenericPassword();
        if (result) {
          observer.next(result.password);
          observer.complete();
          return;
        }
        observer.error(new LocalException({}));
      } catch (error) {
        observer.error(new LocalException(error));
      }
    });
  }
}
