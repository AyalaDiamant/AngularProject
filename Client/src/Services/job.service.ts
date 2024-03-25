import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../Models/Job'; 
import { tap } from 'rxjs/operators';
import { observeNotification } from 'rxjs/internal/Notification';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private jobs: Job[] = [];
  private baseUrl = 'https://localhost:7234'; 

  constructor(private http: HttpClient) {}

  getJobs(): Observable<Job[]>{

    return this.http.get<Job[]>(`${this.baseUrl}/Job`)
    let res = this.http.get<Job[]>(`${this.baseUrl}/Job`);
    console.log("----"+JSON.stringify(res))
    localStorage.setItem("listJob" , JSON.stringify(res).toString()) 
  }

  showJobs(jobs: Job[]): void {
    this.jobs = jobs;
  }
}

