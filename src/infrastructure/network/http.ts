import axios, { AxiosInstance } from 'axios';
import { injectable } from 'inversify';

import { BASE_URL } from '../config/api/urls';

export interface HttpManager {
  get<T>(url: string): Promise<T>;
}

@injectable()
export class AxiosHttpManager implements HttpManager {
  private http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: BASE_URL,
    });
  }

  get<T>(url: string): Promise<T> {
    return this.http
      .get(url)
      .then((d) => d.data)
      .catch((e) => e);
  }
}
