import { Todolist } from './todolist.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  formData: Todolist;
  readonly rootURL = 'http://localhost:59728/api'; //?
  list : Todolist[];

  constructor(private http: HttpClient) { }

  postTodolist() {
    return this.http.post(this.rootURL + '/Todolist', this.formData);
  }
  putTodolist() {
    return this.http.put(this.rootURL + '/Todolist/'+ this.formData.ToDoListId, this.formData);
  }
  deleteTodolist(id: any) {
    return this.http.delete(this.rootURL + '/Todolist/'+ id);
  }

  refreshList(){
    this.http.get(this.rootURL + '/Todolist')
    .toPromise()
    .then(res => this.list = res as Todolist[]);
  }
}
