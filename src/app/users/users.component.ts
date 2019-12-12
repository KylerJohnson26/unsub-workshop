import { Component, OnInit, HostListener, OnDestroy  } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';
import { UserResponse } from '../user-response';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  usersSub: Subscription;
  users: User[];

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.usersSub = this.userService
      .getUsers()
      .subscribe((response: UserResponse) => this.users = response.results);
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    if (this.usersSub)
      this.usersSub.unsubscribe();
  }

}
