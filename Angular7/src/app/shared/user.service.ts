import { User } from './user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { API } from "./constants";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  formData: User;
  readonly rootURL = API;
  list : User[];

  constructor(private http: HttpClient) { }

  postUser() {
    return this.http.post(this.rootURL + '/User', this.formData);
  }
  putUser() {
    return this.http.put(this.rootURL + '/User/'+ this.formData.UserId, this.formData);
  }
  deleteUser(id: any) {
    return this.http.delete(this.rootURL + '/User/'+ id);
  }

  refreshList(){
    this.http.get(this.rootURL + '/User')
    .toPromise()
    .then(res => this.list = res as User[]);
  }
}
