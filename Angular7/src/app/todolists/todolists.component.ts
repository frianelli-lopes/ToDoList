import { Component, OnInit } from '@angular/core';
import { TodolistService } from '../shared/todolist.service';

@Component({
  selector: 'app-todolists',
  templateUrl: './todolists.component.html',
  styles: []
})
export class TodolistsComponent implements OnInit {

  constructor(private service:TodolistService) { }

  ngOnInit() {
  }

}
