import { Component, OnInit } from '@angular/core';
import {UpdateInfo} from '../../../model/userManager/UpdateInfo';
import {UserService} from '../../../service/userManager/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'Thông Tin Tài Khoản';
  userInfor: UpdateInfo;
  errorMessage: string;
  constructor(private userService: UserService) {
    // this.userInfor = {
    //   id: 0,
    //   name: '',
    //   email: '',
    //   avatarUrl: ''
    // };
  }

  ngOnInit() {
    const name = sessionStorage.getItem('AuthUsername');
    this.userService
      .getUser(name)
      .subscribe(
        data => { this.userInfor = data; },
        error => {this.userInfor = null; }
      );

  }
}
