import { Todolist } from "./todolist.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API } from "./constants";
import { map, catchError, take, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class TodolistService {
  formData: Todolist;
  readonly rootURL = API;
  list: Todolist[];

  constructor(private http: HttpClient) {}

  postTodolist(todo: Todolist) {
    console.log("postTodolist");
    console.log(todo);
    return this.http.post(`${this.rootURL}/ToDoList`, todo);
  }

  putTodolist() {
    return this.http.put(
      this.rootURL + "/Todolist/" + this.formData.ToDoListId,
      this.formData
    );
  }
  deleteTodolist(id: any) {
    return this.http.delete(this.rootURL + "/Todolist/" + id);
  }

  refreshList() {
    this.http
      .get(this.rootURL + "/Todolist")
      .toPromise()
      .then(res => (this.list = res as Todolist[]));
  }
}
