import { Component } from '@angular/core';
import {User} from "../../../models/User";
import {MinimalService} from "../../../services/minimal.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users?: User[];
  constructor(private minimalService: MinimalService) {
    this.minimalService.getAllUsers().subscribe((users) => {
      this.users = users
    })
  }

}
