import {inject, injectable} from 'tsyringe';
import {Observable} from 'rxjs';
import {map, mergeMap, mapTo} from 'rxjs/operators';

import {UseCase} from '@core';

import {AuthenticationRepository} from '../../repository';
import {SignInResult} from '../../entity';

@injectable()
export class SignInUseCase implements UseCase<SignInResult, any> {
  constructor(
    @inject('AuthenticationRepository')
    private readonly authenticationRepository: AuthenticationRepository,
  ) {}

  call(param?: any): Observable<SignInResult> {
    if (typeof param === 'undefined') {
      return this.localSignIn();
    }
    return this.remoteSignIn(param);
  }

  private localSignIn(): Observable<SignInResult> {
    return this.authenticationRepository.getToken().pipe(
      map(
        (token): SignInResult => {
          return {fromLocal: true, token};
        },
      ),
    );
  }

  private remoteSignIn(param?: any): Observable<SignInResult> {
    return this.authenticationRepository
      .signIn(param)
      .pipe(mergeMap(this.onRemoteSignInSuccess));
  }

  onRemoteSignInSuccess(result: SignInResult): Observable<SignInResult> {
    return this.authenticationRepository
      .saveToken('test', result.token)
      .pipe(mapTo(result));
  }
}
