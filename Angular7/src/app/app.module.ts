import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { TodolistsComponent } from './todolists/todolists.component';
import { TodolistComponent } from './todolists/todolist/todolist.component';
import { TodolistListComponent } from './todolists/todolist-list/todolist-list.component';
import { TodolistService } from './shared/todolist.service';

@NgModule({
  declarations: [
    AppComponent,
    TodolistsComponent,
    TodolistComponent,
    TodolistListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [TodolistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
