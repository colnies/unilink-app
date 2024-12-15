import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonToggle,
  IonButton,
  IonFooter,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonInput,
  IonButtons,
  IonBackButton,
} from '@ionic/angular/standalone';
import { addCircleOutline, homeOutline, mapOutline, personOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.page.html',
  styleUrls: ['./create-post.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonTextarea,
    IonToggle,
    IonButton,
    IonFooter,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonInput,
    IonButtons,
    IonBackButton,
  ]
})
export class CreatePostPage {
  postForm: FormGroup;
  categories = ['School', 'Fitness', 'Social'];

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private router: Router
  ) {
    addIcons({ addCircleOutline, homeOutline, mapOutline, personOutline });
    // Initialize the form in the constructor
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      content: ['', [Validators.required, Validators.minLength(10)]],
      category: ['School', Validators.required],
      isAnonymous: [false],
      includeLocation: [false]
    });
  }

  private createForm() {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      content: ['', [Validators.required, Validators.minLength(10)]],
      category: ['School', Validators.required],
      isAnonymous: [false],
      includeLocation: [false]
    });
  }

  async submitPost() {
    if (this.postForm.valid) {
      const formValue = this.postForm.value;
      const post = {
        title: formValue.title,
        content: formValue.content,
        category: formValue.category,
        isAnonymous: formValue.isAnonymous,
        location: formValue.includeLocation ? 
          { lat: 40.7128, lng: -74.0060 } : // Mock location
          undefined
      };

      this.postService.createPost(post).subscribe(() => {
        this.postForm.reset({
            title: '',
            content: '',
            category: 'School',
            isAnonymous: false,
            includeLocation: false
          });
        this.router.navigate(['/home']);
      });
    }
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}