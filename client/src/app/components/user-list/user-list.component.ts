import { Component, OnInit, HostBinding } from '@angular/core';

import { UserService } from '../../services/user.service'
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  users: any = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.userService.getUsers().subscribe(
      res => {
        this.users = res;
        console.log(res)
      },
      err => console.error(err)
    );
  }

  deleteUser(id: string){
    this.userService.deleteUser(id).subscribe(
      res => {
        console.log(res);
        this.getUser();
      },
      err => console.log(err)
    )
  }

}
