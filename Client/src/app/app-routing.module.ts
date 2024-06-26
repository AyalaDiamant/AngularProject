import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../Components/home/home.component'
import { LoginComponent } from '../Components/login/login.component'
import { ListJobComponent } from '../Components/list-job/list-job.component'
import { JobComponent } from 'src/Components/job/job.component';
import { MainComponent } from 'src/Components/main/main.component';
//import { NotFoundComponent } from '../Components/not-found-component/not-found-component.component'



const routes: Routes = [
  
  { path: 'Job', component: ListJobComponent},
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
 // { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


