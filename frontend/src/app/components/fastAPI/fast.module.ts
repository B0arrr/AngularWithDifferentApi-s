import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FastRoutingModule} from "./fast-routing.module";
import {AddComponent} from "./add/add.component";
import {UsersComponent} from "./users/users.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [AddComponent, UsersComponent],
  imports: [
    CommonModule,
    FastRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FastModule { }
