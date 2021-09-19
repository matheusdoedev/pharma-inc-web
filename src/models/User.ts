import { IAddress, IDatabaseFields } from './Common';

export type Gender = 'male' | 'female';

export interface IUserCredentials {
  email: string;
  id: {
    name: string;
    value: string;
  };
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

export interface IUser extends IUserCredentials, IUserContact {
  gender: Gender;
  name: IUserName;
  location: IAddress;
  picture: IUserPicture;
}
