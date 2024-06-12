import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private fb: NonNullableFormBuilder ,private router:Router,private cookie: CookieService,private api: ApiService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  ngOnInit(): void {
    
  }
  validateForm: FormGroup<{
    username: FormControl<string>;
    password: FormControl<string>;
    // remember: FormControl<boolean>;
  }> = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    // remember: [true]
  });

  submitForm(): void {
    console.log(this.validateForm.value);
    
    if (this.validateForm.valid) {
      // this.router.navigate(['/home']);
      // this.cookie.set("token","tung")
      this.api.changePassword({old_password:this.validateForm.value.username ?? '',new_password:this.validateForm.value.password??''}).subscribe(
        success => {
          if (success) {
           
            console.log('Đăng nhập thành công');
            this.router.navigate(['/']);
          } else {
            console.error('Đăng nhập thất bại');
          }
        },
        error => {
          console.error('Lỗi máy chủ', error);
        }
      );
      // this.api.login()
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }


}
