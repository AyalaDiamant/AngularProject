import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { JobService } from '../../Services/job.service';
import { Job } from 'src/Models/Job';
import { Router } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-list-job',
  templateUrl: './list-job.component.html',
  styleUrls: ['./list-job.component.scss']
})
export class ListJobComponent implements OnInit{

  constructor(private jobService: JobService, private router: Router) { }

  user: any;
  listJob!: any[];
  filteredJobs!: any[];
  areaJobs!: any[];
  byArea: boolean = true;
  msg!: string;
  selectedJob!: Job;
  enter : boolean = true;
  show:boolean =false;
  
  

  isFloatingWindowOpen: boolean = false;

  ngOnInit(): void {
    this.jobService.getJobs().subscribe(
      (res: Job[]) =>
      {
        localStorage.setItem('listJob', JSON.stringify(res));
      });
      console.log(this.isFloatingWindowOpen)
    this.user = JSON.parse(localStorage.getItem('User') || '{}');
    if(this.user === null)
    {
      this.enter=false;
    }
    // console.log(this.user);
    this.listJob = JSON.parse(localStorage.getItem('listJob') || '[]');
    console.log(this.listJob)
    this.filteredJobs = this.listJob.filter(job => job.jobField === this.user.jobSearchField);
    // this.locationJob.forward
    // window.location.reload();
  }

  onJobSelected(job: Job): void {
    this.show = true;
    this.selectedJob = job;
    console.log(this.selectedJob);
  }

  okClick(Area:string|null): void{
    this.byArea = false;
    this.areaJobs = this.filteredJobs.filter(j => j.area === Area)
    if(this.areaJobs.length == 0){
      this.byArea = true;
      this.msg = "אין משרות עבור האיזור המבוקש";
    }
    else{
      this.msg = "";

    }
  
  }}