import {Observable} from 'rxjs';
import {SignInResult} from '../entity';

export interface AuthenticationRepository {
  /**
   * @summary sign the @credential with remote api
   * @param credential
   * @return signed token of credential
   */
  signIn(credential: any): Observable<SignInResult>;

  /**
   * @summary get token by key
   * @param key
   * @returns token's saved before
   */
  getToken(): Observable<string>;

  /**
   * @summary save the token with key
   * @param key identify with other token
   * @param token
   * @returns boolean variable to indicate that success or failure
   */
  saveToken(key: string, token: string): Observable<boolean>;
}
