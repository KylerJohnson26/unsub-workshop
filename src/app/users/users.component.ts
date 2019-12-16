import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';
import { TokenInfo } from '../token-info.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  vm$: Observable<{
    users: User[],
    tokenInfo: TokenInfo
  }>;

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.vm$ = combineLatest([
      this.userService.getUsers(),
      this.userService.getTokenInfo()
    ]).pipe(
      map(([users, tokenInfo]) => ({ users, tokenInfo }))
    );
  }

}
