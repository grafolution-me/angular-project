import {IUserModel} from './user-interface.model';

export class UserModel {
  constructor(public email: string,
              public id: string,
              private _token: string,
              private _tokenExpriationDate: Date) {}


  get token(): string {
    if (!this._tokenExpriationDate || new Date () > this._tokenExpriationDate) {
      return null;
    }
    return this._token;
  }

  get tokenExpriationDate(): Date {
    return this._tokenExpriationDate;
  }

  set tokenExpriationDate(value: Date) {
    this._tokenExpriationDate = value;
  }



}
