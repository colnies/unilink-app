import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
    private mockPosts: Post[] = [
        {
          id: '1',
          title: 'Study Group for Finals',
          content: 'Looking for study partners for upcoming finals...',
          category: 'School',
          authorId: '1',
          timestamp: new Date(),
          upvotes: 5,
          isAnonymous: false
        },
        {
          id: '2',
          title: 'Pickup Basketball Game',
          content: 'Anyone up for a pickup basketball game at the rec center? Starting at 5 PM.',
          category: 'Fitness',
          authorId: '2',
          timestamp: new Date(),
          upvotes: 8,
          location: { lat: 40.7128, lng: -74.0060 },
          isAnonymous: false
        },
        {
          id: '3',
          title: 'Campus Movie Night',
          content: 'Organizing a movie night this Saturday. Vote for your movie choice!',
          category: 'Social',
          authorId: '3',
          timestamp: new Date(),
          upvotes: 25,
          location: { lat: 40.7128, lng: -74.0060 },
          isAnonymous: false
        },
        {
          id: '4',
          title: 'Looking for Gym Partner',
          content: 'Need a consistent gym buddy for morning workouts. I usually go at 7 AM!',
          category: 'Fitness',
          authorId: '4',
          timestamp: new Date(),
          upvotes: 15,
          location: { lat: 40.7128, lng: -74.0060 },
          isAnonymous: false
        },
        {
          id: '5',
          title: 'CS 301 Notes Sharing',
          content: 'Created a comprehensive study guide for CS 301 Data Structures. Happy to share with anyone who needs it!',
          category: 'School',
          authorId: '5',
          timestamp: new Date(),
          upvotes: 42,
          isAnonymous: false
        },
        {
          id: '6',
          title: 'Weekend Board Game Night',
          content: 'Hosting a board game night in the common room. Bringing Catan and Monopoly! Everyone welcome.',
          category: 'Social',
          authorId: '6',
          timestamp: new Date(),
          upvotes: 12,
          location: { lat: 40.7128, lng: -74.0060 },
          isAnonymous: false
        },
        {
          id: '7',
          title: 'Group Project Partners Needed',
          content: 'Looking for 2 more people for our Marketing 301 final project. Must be good with deadlines!',
          category: 'School',
          authorId: '7',
          timestamp: new Date(),
          upvotes: 35,
          isAnonymous: false
        },
        {
          id: '8',
          title: 'Yoga Session on the Quad',
          content: 'Free yoga session this Friday at 4 PM. Bring your own mat! All skill levels welcome.',
          category: 'Fitness',
          authorId: '8',
          timestamp: new Date(),
          upvotes: 18,
          location: { lat: 40.7128, lng: -74.0060 },
          isAnonymous: false
        },
        {
          id: '9',
          title: 'End of Semester Party',
          content: 'Huge party at University Commons this Saturday! Bringing snacks and music.',
          category: 'Social',
          authorId: '9',
          timestamp: new Date(),
          upvotes: 55,
          location: { lat: 40.7128, lng: -74.0060 },
          isAnonymous: false
        },
        {
          id: '10',
          title: 'Physics Study Session',
          content: 'Studying for Physics final in library room 204. Join if you want to practice problems together!',
          category: 'School',
          authorId: '10',
          timestamp: new Date(),
          upvotes: 9,
          location: { lat: 40.7128, lng: -74.0060 },
          isAnonymous: false
        },
        {
          id: '11',
          title: 'Soccer Tournament',
          content: 'Organizing a 5v5 soccer tournament next weekend. Need 4 more teams to join!',
          category: 'Fitness',
          authorId: '11',
          timestamp: new Date(),
          upvotes: 28,
          location: { lat: 40.7128, lng: -74.0060 },
          isAnonymous: false
        },
        {
          id: '12',
          title: 'Karaoke Night',
          content: 'Karaoke night at the Student Center! Come show off your singing skills or just enjoy the show.',
          category: 'Social',
          authorId: '12',
          timestamp: new Date(),
          upvotes: 33,
          location: { lat: 40.7128, lng: -74.0060 },
          isAnonymous: false
        }
    ];

  getPosts(category?: string): Observable<Post[]> {
    let posts = this.mockPosts;
    if (category) {
      posts = posts.filter(post => post.category === category);
    }
    return of(posts);
  }

  createPost(post: Partial<Post>): Observable<Post> {
    const newPost: Post = {
      id: Date.now().toString(),
      timestamp: new Date(),
      upvotes: 0,
      ...post
    } as Post;
    this.mockPosts.unshift(newPost);
    return of(newPost);
  }
}