import { IAddress } from './Common';

export type Gender = 'male' | 'female';

export interface IUserId {
  name: string;
  value: string;
}

export interface IUserCredentials {
  email: string;
  id: IUserId;
}

export interface IUserName {
  title: string;
  first: string;
  last: string;
}

export interface IUserContact {
  phone: string;
  cell: string;
}

export interface IUserPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface IUserDob {
  date: string;
}

export interface IUserLogin {
  uuid: string;
}

export interface IUser extends IUserCredentials, IUserContact {
  gender: Gender;
  name: IUserName;
  location: IAddress;
  picture: IUserPicture;
  dob: IUserDob;
  login: IUserLogin;
}
