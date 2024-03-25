import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import {FormControl,FormGroupDirective, NgForm, Validators,FormsModule, ReactiveFormsModule, FormGroup,} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  hide = true;
 
  
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  fullNameFormControl = new FormControl('', [Validators.required,]);
  passwordFormControl = new FormControl('', [Validators.required,]);

  constructor(private _snackBar: MatSnackBar ,private authService: UserService,private router: Router) {}

  matcher = new MyErrorStateMatcher();
  signup(){


    this.authService.register(this.fullNameFormControl.value,this.emailFormControl.value,this.passwordFormControl.value).subscribe({
      next:data=>{
        console.log(data)
        this._snackBar.open(data.message, 'Okay', {
          duration: 3000
        });
        this.router.navigate(['/signin']);  // define your component where you want to go

      }
    })
  }
  openSnackBar(message: string, action: string) {
  
  }


}
