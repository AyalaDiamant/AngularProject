import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/Services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{

  userName = localStorage.getItem("userName")
  user = JSON.parse(String(localStorage.getItem("User")))
  jobCount!: number;
  isUser: boolean = false;
  count!: any

  ngOnInit(): void {
    if (!(String(user) === "null")) {
      this.isUser = true;
      let userName = localStorage.getItem("userName")
      if (userName)
        this.count = this.UserService.getJobCount(userName).subscribe(
          (jobCount: number) => {
            this.jobCount = jobCount;
          },
          (error) => {
            console.error('Error fetching job count: ', error);
          }
        );
    }
  }


  constructor(private UserService: UserService) { }


}

let user = JSON.parse(String(localStorage.getItem("User")))
