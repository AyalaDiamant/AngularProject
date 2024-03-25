import { Injectable } from '@angular/core';
import { HttpClient , HttpClientModule, HttpErrorResponse} from '@angular/common/http';
import { User } from '../Models/User';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  userName:string|null = null
  userPassword:string|null = null

  // מכניס ומוציא את השם ןהסיסמא ללוקל סטורג

  getUserName():string|null{
    if(!this.userName)
      this.userName = localStorage.getItem('userName')
    return this.userName
  }

  setUserName(userName:string){
    this.userName = userName
    localStorage.setItem('userName', this.userName)
  }

  getUserPassword():string|null{
    if(!this.userPassword)
      this.userPassword = localStorage.getItem('userPassword')
    return this.userPassword
  }
  
  setUserPassword(userPassword:string){
    this.userPassword = userPassword
    localStorage.setItem('userPassword', this.userPassword)
  }


  private users: User[] = [];
  private baseUrl = 'https://localhost:7234';
  private jobCountSubject = new BehaviorSubject<number>(0);
  jobCount$ = this.jobCountSubject.asObservable();

  constructor(private http: HttpClient) {}
  
  getUser(UserName: string, UserPassword: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/User/${UserName}/${UserPassword}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 404) {
            alert('User not found');
          } else {
            alert('An error occurred');
          }
          return throwError('Error');
        })
      );
  }

  showUser(users: User[]): void {
    this.users = users;
  }

  getJobCount(userName: string) {
    return this.http.get<number>(`${this.baseUrl}/User/${userName}`);
  }

  updateUser(userName: string) {
    return this.http.put(`${this.baseUrl}/User?userName=${userName}`, null);
  }
}





