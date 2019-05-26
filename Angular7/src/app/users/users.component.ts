import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { TodolistService } from '../shared/todolist.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent implements OnInit {

  //constructor(private service:TodolistService) { }
  constructor(private service:UserService) { }

  ngOnInit() {
  }

}
