import { Component } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { User } from 'src/Models/User';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
// import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private userService: UserService, private location: Location ) {

  }
  user: User[] = [];
  

  loginClick(userName: string, password: string) {
    this.userService.setUserName(userName);
    this.userService.setUserPassword(password);
    this.userService.getUser(userName, password).subscribe(
      (res: User[]) => {
        this.user = res;
        console.log("UserUser:  "+res);
        localStorage.setItem('User', JSON.stringify(res));
        if (res.length === 0) {
          localStorage.removeItem('userName');
          localStorage.setItem("User",JSON.stringify(null))
          alert('!!התחברת בהצלחה')

          // this.snackBar.open('!!התחברת בהצלחה', '', {
          //   duration: 90000
          //  });
        } else {
          localStorage.setItem('User', JSON.stringify(res));
          alert('!!התחברת בהצלחה')
          // this.snackBar.open('!!התחברת בהצלחה', '', {
          //   duration: 90000
          //  });
          window.location.reload();
        }
      },
      (error: any) => {
        localStorage.removeItem('userName');
        localStorage.removeItem('User');
        localStorage.setItem("User",JSON.stringify(null))
        console.error(error);
        window.location.reload();
      }
    );
  }

}
