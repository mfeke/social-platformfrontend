import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import {FormControl,FormGroupDirective, NgForm, Validators,FormsModule, ReactiveFormsModule, FormGroup,} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import { TokenService } from '../service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  hide = true;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required,]);

  constructor(private _snackBar: MatSnackBar ,private authService: UserService,private tokenService:TokenService,private router: Router) {}

  matcher = new ErrorStateMatcher();
  signup(){
    this.authService.login(this.emailFormControl.value,this.passwordFormControl.value).subscribe({
      next:async data=>{
        let user: any = {}
        user = data
        this.tokenService.saveToken(user.accessToken)        
        this._snackBar.open("Login Successful", 'Okay', {
          duration: 3000
        });
        this.router.navigate(['/home'])
      }
    })
  }

}
