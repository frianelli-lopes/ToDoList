import { User } from './../../shared/user.model';
import { UserService } from './../../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {

  constructor(private service: UserService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }


  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      UserId: 0,
      Nome: '',
      Email: '',
      Permissao: '',
      Senha: ''
    }
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.UserId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postUser().subscribe(
      res => {
        debugger;
        this.resetForm(form);
        this.toastr.success('Inserido com sucesso', 'Registro de Usuário');
        this.service.refreshList();
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }
  updateRecord(form: NgForm) {
    this.service.putUser().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Alterado com sucesso', 'Registro de Usuário');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

}
