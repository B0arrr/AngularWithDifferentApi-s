import {Component} from '@angular/core';
import {User} from "../../../models/User";
import {ExpressService} from "../../../services/express.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users?: User[];

  constructor(private expressService: ExpressService) {
    this.expressService.getAllUsers().subscribe((users) => {
      this.users = users;
    })
  }
}
