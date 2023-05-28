import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {LayoutComponent} from "../layout/layout.component";
import {UsersComponent} from "./users/users.component";
import {AddComponent} from "./add/add.component";

const routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', component: UsersComponent},
      {path: 'add', component: AddComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MinimalRoutingModule { }
