import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonFooter,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonAvatar,
  IonSegment,
  IonSegmentButton,
  IonCard,
  IonCardContent,
  IonBadge,
  IonButtons, 
} from '@ionic/angular/standalone';
import { addCircleOutline, homeOutline, mapOutline, personOutline, arrowUpOutline, settingsOutline, logOutOutline, schoolOutline, 
    bookOutline, 
    trophyOutline, 
    peopleOutline,
    notificationsOutline,
    lockClosedOutline,
    colorPaletteOutline,
    helpCircleOutline,
    informationCircleOutline,
} from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { PostService } from '../../services/post.service';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    IonFooter,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonAvatar,
    IonSegment,
    IonSegmentButton,
    IonCard,
    IonCardContent,
    IonBadge,
    IonButtons, 
  ]
})
export class ProfilePage implements OnInit {
  selectedSegment = 'posts';
  userPosts: Post[] = [];
  user$ = this.authService.currentUser$;
  stats = {
    totalPosts: 0,
    totalUpvotes: 0,
    joinDate: new Date('2023-09-01')
  };

  constructor(
    private authService: AuthService,
    private postService: PostService,
    private router: Router
  ) {
    addIcons({ 
      addCircleOutline, 
      homeOutline, 
      mapOutline, 
      personOutline, 
      settingsOutline, 
      logOutOutline,
      schoolOutline, 
      bookOutline, 
      trophyOutline, 
      peopleOutline,
      arrowUpOutline,
      notificationsOutline,
      lockClosedOutline,
      colorPaletteOutline,
      helpCircleOutline,
      informationCircleOutline,
    });
  }

  ngOnInit() {
    this.loadUserPosts();
    this.calculateStats();
  }

  private loadUserPosts() {
    // Mock implementation - in real app, would filter by user ID
    this.postService.getPosts().subscribe(posts => {
      this.userPosts = posts.slice(0, 3); // Just show first 3 posts for demo
      this.calculateStats();
    });
  }

  private calculateStats() {
    this.stats.totalPosts = this.userPosts.length;
    this.stats.totalUpvotes = this.userPosts.reduce((sum, post) => sum + post.upvotes, 0);
  }

  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}