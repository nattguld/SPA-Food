import { Component, OnInit } from '@angular/core';
import { User } from '../users/user';
import { UsersService } from '../users/service/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  users: User[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.usersService.fetchUsers()
      .subscribe(users => this.users = users.slice(1, 5));
  }
}