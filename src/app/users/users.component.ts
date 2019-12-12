import { Component, OnInit, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';
import { UserResponse } from '../user-response';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }

}
