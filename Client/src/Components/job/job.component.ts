import { Job } from 'src/Models/Job';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/Services/user.service';
import { CustomPipe } from 'src/custom.pipe';
// import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent {
  @Input() selectedJob!: Job;
  jobCount!: number;
  isCount: boolean = false;

  constructor(private route: ActivatedRoute, private UserService: UserService ) { }

  countClick(): void {
    alert('!!נשלח בהצלחה')
    // this.snackBar.open('!!נשלח בהצלחה', '', {
    //   duration: 90000
    //  });
    this.isCount = true;
    let userName = localStorage.getItem("userName");
    if (userName)
      this.UserService.updateUser(userName)
        .subscribe(
          () => {
            console.log('User updated successfully');
          },
          (error) => {
            console.error('Error updating user: ', error);
          }
        );
    window.location.reload()
  }

  ngOnInit(): void {

  }
}




