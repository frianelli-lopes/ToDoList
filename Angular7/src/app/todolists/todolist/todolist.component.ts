import { Todolist } from "./../../shared/todolist.model";
import { TodolistService } from "./../../shared/todolist.service";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-todolist",
  templateUrl: "./todolist.component.html",
  styles: []
})
export class TodolistComponent implements OnInit {
  constructor(
    private service: TodolistService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) form.form.reset();
    this.service.formData = {
      ToDoListId: 0,
      Titulo: "",
      Concluido: "S"
    };
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    if (this.service.formData.ToDoListId == 0) this.insertRecord(form);
    else this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postTodolist(form.value).subscribe(
      res => {
        //debugger;
        this.resetForm(form);
        this.toastr.success("Inserido com sucesso", "Registro de Tarefa");
        this.service.refreshList();
      },
      err => {
        //debugger;
        console.log(err);
      }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putTodolist().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info("Alterado com sucesso", "Registro de Tarefa");
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    );
  }
}
