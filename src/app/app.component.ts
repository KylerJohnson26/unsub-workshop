import { Component, OnInit } from '@angular/core';

import { User } from './user';
import { UserService } from './user.service';
import { UserResponse } from './user-response';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'unsub-workshop';
}
