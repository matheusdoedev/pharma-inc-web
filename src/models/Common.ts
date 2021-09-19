export interface IAddress {
  street: string;
  city: string;
  state: string;
  postcode: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  timezone: {
    offset: string;
    description: string;
  };
}

export interface IDatabaseFields {
  id: string;
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
