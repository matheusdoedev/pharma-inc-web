import { AxiosPromise } from 'axios';

import {
  IPageRequestOptions,
  IRandomUserApiPageRequestResult,
} from '~/models/Common';
import { IUser } from '~/models/User';

import api from './api';

class Patients {
  static getPatients({
    page,
    results = 50,
  }: IPageRequestOptions): AxiosPromise<
    IRandomUserApiPageRequestResult<IUser[]>
  > {
    return api.get('/', {
      params: {
        nat: 'br',
        inc: 'gender,name,location,email,phone,id,picture',
        results: results * page,
      },
    });
  }
}

export default Patients;
