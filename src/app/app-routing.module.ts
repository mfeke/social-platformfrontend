import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { PostComponent } from './post/post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { OptPageComponent } from './opt-page/opt-page.component';

const routes: Routes = [
  // { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'composer', component: AddPostComponent },
  { path: 'verification', component: OptPageComponent },
  { path: 'post', component: PostComponent }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
