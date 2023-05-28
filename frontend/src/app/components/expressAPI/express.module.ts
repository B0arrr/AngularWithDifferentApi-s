import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExpressRoutingModule} from "./express-routing.module";
import {AddComponent} from "./add/add.component";
import {UsersComponent} from "./users/users.component";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [AddComponent, UsersComponent],
  imports: [
    CommonModule,
    ExpressRoutingModule,
    ReactiveFormsModule
  ]
})
export class ExpressModule { }
