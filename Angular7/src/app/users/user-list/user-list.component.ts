import { User } from './../../shared/user.model';
import { UserService } from './../../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: []
})
export class UserListComponent implements OnInit {

  constructor(private service: UserService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(tdl: User) {
    this.service.formData = Object.assign({}, tdl);
  }

  onDelete(UserId) {
    if (confirm('Você tem certeza que deseja deletar este usuário?')) {
      this.service.deleteUser(UserId)
        .subscribe(res => {
          debugger;
          this.service.refreshList();
          this.toastr.warning('Deletado com sucesso', 'Registro de Usuário');
        },
          err => {
            debugger;
            console.log(err);
          })
    }
  }

}