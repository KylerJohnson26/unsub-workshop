import { Component, OnInit, HostListener  } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';
import { UserResponse } from '../user-response';
import { takeUntil } from 'rxjs/operators';
import { TokenInfo } from '../token-info.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  private onDestroy$: Subject<void> = new Subject<void>();

  tokenInfoSub: Subscription;
  tokenInfo: TokenInfo;
  usersSub: Subscription;
  users: User[];

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.usersSub = this.userService
      .getUsers()
      // takeUntil should always be the last operator in the pipe
      // to avoid memory leaks
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((response: UserResponse) => this.users = response.results);

    this.tokenInfoSub = this.userService
      .getTokenInfo()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((tokenInfo: TokenInfo) => this.tokenInfo = tokenInfo);
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    // all observable streams complete automatically unsubscribing
    // when OnDestroy runs
    this.onDestroy$.next();
  }
}
