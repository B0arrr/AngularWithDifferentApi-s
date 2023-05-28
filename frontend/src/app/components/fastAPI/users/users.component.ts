import { Component } from '@angular/core';
import {FastService} from "../../../services/fast.service";
import {User} from "../../../models/User";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users?: User[];
  constructor(private fastService: FastService) {
    this.fastService.getAllUsers().subscribe((users) => {
      this.users = users
    })
  }
}
