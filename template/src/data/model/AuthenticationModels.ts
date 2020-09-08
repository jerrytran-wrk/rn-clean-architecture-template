import {UserModel} from './UserModel';

export interface SignInRequestData {}

export interface SignInResponseData {
  token: string;
  user: UserModel;
}
export interface SignUpResponseData {}
