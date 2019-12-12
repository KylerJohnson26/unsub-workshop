import { Component, OnInit, HostListener  } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';
import { UserResponse } from '../user-response';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService
      .getUsers()
      .subscribe((response: UserResponse) => this.users = response.results);
  }

}
