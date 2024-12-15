import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonToolbar, 
  IonTitle,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonList,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonFooter,
  IonSearchbar
} from '@ionic/angular/standalone';
import { addCircleOutline, homeOutline, mapOutline, personOutline, flame, school, barbell, people } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { PostCardComponent } from 'src/app/components/post-card/post-card.component';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/interfaces/post.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonList,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonFooter,
    IonSearchbar,
    PostCardComponent
  ]
})
export class HomePage implements OnInit {
  selectedCategory = 'Hot';
  posts: Post[] = [];

  constructor(
    private postService: PostService,
    private router: Router
  ) {
    addIcons({ addCircleOutline, homeOutline, mapOutline, personOutline, flame, school, barbell, people });
  }

  ngOnInit() {
    this.loadPosts();
  }

  categoryChanged() {
    this.loadPosts();
  }

  private loadPosts() {
    if (this.selectedCategory === 'Hot') {
      // Load all posts and sort by likes descending
      this.postService.getPosts()
        .subscribe((posts: any) => {
          this.posts = posts.sort((a: any, b: any) => b.upvotes - a.upvotes);
        });
    } else {
      // Load posts for specific category
      this.postService.getPosts(this.selectedCategory)
        .subscribe((posts: any) => this.posts = posts);
    }
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}