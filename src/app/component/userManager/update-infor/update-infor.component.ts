import { Component, OnInit } from '@angular/core';
import {UpdateInfo} from "../../../model/userManager/UpdateInfo";
import {AuthService} from "../../../service/userManager/auth/auth.service";
import {TokenStorageService} from "../../../service/userManager/token/token-storage.service";
import {UserService} from "../../../service/userManager/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-infor',
  templateUrl: './update-infor.component.html',
  styleUrls: ['./update-infor.component.scss']
})
export class UpdateInforComponent implements OnInit {
  title = 'Thay Đổi Thông Tin';
  form: any = {};
  progress = 0;
  updateInfo: UpdateInfo;
  isUpdated = false;
  isUpdateFailed = false;
  errorMessage = '';
  data: FormData = new FormData();
  fileList: FileList;

  updateUser: UpdateInfo;

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private userService: UserService) {
  }

  ngOnInit() {
    debugger;
    const name = sessionStorage.getItem('AuthUsername');
    this.userService
      .getUser(name)
      .subscribe(
        data => {this.updateInfo = data; },
        error => {this.updateInfo = null; }
      );
  }

  fileChange(event) {
    this.fileList = event.target.files;
  }

  onSubmit() {
    this.updateInfo = new UpdateInfo(
      this.form.name,
      this.form.email
    );

    this.authService
      .updateAuth(this.updateInfo)
      .subscribe(
        data => {
          console.log(data);
          this.isUpdated = true;
          this.isUpdateFailed = false;
          this.router.navigate(['/home']); },
        error => {
          console.log(error);
          this.errorMessage = error.error.message;
          this.isUpdateFailed = true; });
  }

}
