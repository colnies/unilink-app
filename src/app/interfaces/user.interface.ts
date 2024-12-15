export interface User {
    id: string;
    fullName: string;
    email: string;
    profilePicture?: string;
    major: string;
    graduationYear: number;
  }
  
  export interface Post {
    id: string;
    title: string;
    content: string;
    category: 'School' | 'Fitness' | 'Social';
    authorId: string;
    timestamp: Date;
    upvotes: number;
    location?: {
      lat: number;
      lng: number;
    };
    isAnonymous: boolean;
  }