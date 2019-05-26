import { Todolist } from './../../shared/todolist.model';
import { TodolistService } from './../../shared/todolist.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-todolist-list',
  templateUrl: './todolist-list.component.html',
  styles: []
})
export class TodolistListComponent implements OnInit {

  constructor(private service: TodolistService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(tdl: Todolist) {
    this.service.formData = Object.assign({}, tdl);
  }

  onDelete(TodolistId) {
    if (confirm('Você tem certeza que deseja deletar este registro?')) {
      this.service.deleteTodolist(TodolistId)
        .subscribe(res => {
          debugger;
          this.service.refreshList();
          this.toastr.warning('Deletado com sucesso', 'Registro de Tarefa');
        },
          err => {
            debugger;
            console.log(err);
          })
    }
  }

}