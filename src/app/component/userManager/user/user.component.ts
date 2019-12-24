import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../service/userManager/user/user.service';
import {TokenStorageService} from '../../../service/userManager/token/token-storage.service';
import {Router} from '@angular/router';
import {UpdateInfo} from "../../../model/userManager/UpdateInfo";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  board: any = [];
  errorMessage: string;
  info: any;
  userInfor: UpdateInfo;


  constructor(
    private userService: UserService,
    private token: TokenStorageService,
    private router: Router
  ) {
    this.userInfor = {
      id: 0,
      name: '',
      email: '',
      avatarUrl: ''
    };
  }

  ngOnInit() {
    const name = sessionStorage.getItem('AuthUsername');
    this.userService
      .getUser(name)
      .subscribe(
        data => { this.userInfor = data; },
        error => {this.userInfor = null; }
      );

    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      avatar: this.token.getAvatar(),
      authorities: this.token.getAuthorities()
    };
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }
}
