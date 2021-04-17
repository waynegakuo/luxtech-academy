import { UserService } from './../user.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  usersInfo;
  subs: Subscription; // manage subscriptions

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // this.subs = this.userService.getUsers().subscribe(data => {
    //   this.usersInfo = data;
    //   console.log(this.usersInfo);
    // });
    this.usersInfo = this.userService.getUsers();
  }

  // If subscribing in the TypeScript file, make sure to unsubscribe to avoid memory leak
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
