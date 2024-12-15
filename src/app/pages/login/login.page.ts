import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { 
  IonContent, 
  IonItem, 
  IonLabel, 
  IonInput, 
  IonButton, 
  IonIcon,
  IonHeader,
  IonToolbar,
  IonTitle
} from '@ionic/angular/standalone';
import { logoApple, logoGoogle } from 'ionicons/icons';
import { AuthService } from '../../services/auth.service';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonIcon,
    IonHeader,
    IonToolbar,
    IonTitle
  ]
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    addIcons({ logoApple, logoGoogle });
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    
  }

  async loginWithGoogle() {
    try {
      await this.authService.loginWithGoogle().toPromise();
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Google login failed:', error);
    }
  }

  async loginWithApple() {
    try {
      await this.authService.loginWithApple().toPromise();
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Apple login failed:', error);
    }
  }

  async loginWithEmail() {
    if (this.loginForm.valid) {
      try {
        const { email, password } = this.loginForm.value;
        await this.authService.loginWithEmail(email, password).toPromise();
        this.router.navigate(['/home']);
      } catch (error) {
        console.error('Email login failed:', error);
      }
    }
  }
}