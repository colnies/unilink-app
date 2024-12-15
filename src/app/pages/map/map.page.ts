import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFooter,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonCard,
  IonCardContent,
  IonButton,
  IonBadge,
  IonSearchbar,
} from '@ionic/angular/standalone';
import { addCircleOutline, homeOutline, mapOutline, personOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../interfaces/post.interface';

// Declare Leaflet types
declare const L: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonFooter,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonCard,
    IonCardContent,
    IonButton,
    IonBadge,
    IonSearchbar,
  ]
})
export class MapPage implements OnInit {
    @ViewChild('map') mapContainer!: ElementRef;
    map: any;
    markers: any[] = [];
    posts: Post[] = [];
    selectedPost: Post | null = null;
  
    constructor(
      private postService: PostService,
      private router: Router
    ) {
      addIcons({ addCircleOutline, homeOutline, mapOutline, personOutline });
    }
  
    ngOnInit() {
      this.loadPosts();
    }
  
    ionViewDidEnter() {
      this.initMap();
    }
  
    private initMap() {
      if (!this.map) {
        this.map = L.map(this.mapContainer.nativeElement, {
          center: [40.7128, -74.0060],
          zoom: 13
        });
  
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(this.map);
  
        this.map.locate({ setView: true, maxZoom: 16 });
  
        this.map.on('locationfound', (e: any) => {
          const radius = e.accuracy / 2;
          L.marker(e.latlng).addTo(this.map)
            .bindPopup('You are here').openPopup();
          L.circle(e.latlng, radius).addTo(this.map);
        });
      }
  
      this.updateMarkers();
    }
  
    private loadPosts() {
      this.postService.getPosts().subscribe(posts => {
        this.posts = posts;
        this.updateMarkers();
      });
    }
  
    private createCustomIcon(category: string) {
      const color = category === 'School' ? '#4A90E2' : 
                   category === 'Fitness' ? '#2dd36f' : 
                   '#6a64ff';
      return L.divIcon({
        className: 'custom-div-icon',
        html: `<div style="background-color: ${color};" class="marker-pin"></div>`,
        iconSize: [30, 42],
        iconAnchor: [15, 42]
      });
    }
  
    private updateMarkers() {
      this.markers.forEach(marker => this.map?.removeLayer(marker));
      this.markers = [];
  
      this.posts.forEach(post => {
        if (post.location) {
          const marker = L.marker([post.location.lat, post.location.lng], {
            icon: this.createCustomIcon(post.category)
          }).addTo(this.map);
  
          marker.on('click', () => {
            this.selectedPost = post;
          });
  
          this.markers.push(marker);
        }
      });
    }
  
    closePostDetails() {
      this.selectedPost = null;
    }
  
    navigateTo(path: string) {
      this.router.navigate([path]);
    }
  }