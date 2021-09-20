export interface IStreet {
  number: string;
  name: string;
  new_entry: string;
}

export interface ICoordinates {
  latitude: string;
  longitude: string;
}

export interface ITimezone {
  offset: string;
  description: string;
}

export interface IAddress {
  country: string;
  street: IStreet;
  city: string;
  state: string;
  postcode: string;
  coordinates: ICoordinates;
  timezone: ITimezone;
}

export interface IPageRequestOptions {
  page: number;
  results?: number;
}

export interface IRamdomUserApiPageRequestResultInfo {
  page: number;
  results: number;
  seed: string;
  version: string;
}

export interface IRandomUserApiPageRequestResult<T> {
  info: IRamdomUserApiPageRequestResultInfo;
  results: T;
}
