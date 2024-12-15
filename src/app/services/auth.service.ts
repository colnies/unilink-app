import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor() {}

  loginWithGoogle(): Observable<User> {
    // Mock implementation
    const mockUser: User = {
      id: '1',
      fullName: 'John Doe',
      email: 'john@university.edu',
      profilePicture: 'assets/mock-profile.jpg',
      graduationYear: 2023,
      major: 'Computer Science'
    };
    this.currentUserSubject.next(mockUser);
    return of(mockUser);
  }

  loginWithApple(): Observable<User> {
    // Similar mock implementation
    return this.loginWithGoogle();
  }

  loginWithEmail(email: string, password: string): Observable<User> {
    // Mock email login
    return this.loginWithGoogle();
  }

  logout(): void {
    this.currentUserSubject.next(null);
  }
}