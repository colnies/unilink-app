UniLink App
UniLink is a social networking application designed for university students to connect, collaborate, and engage in various campus activities. Built with Ionic Angular, it provides a platform for students to share academic, fitness, and social events.
Features
Authentication

Login with school email
Sign in with Google/Apple
Secure password management

Main Feed

Filter posts by category (School, Fitness, Social)
View and interact with posts
Upvote system
Real-time updates

Interactive Map

View nearby activities and events
Category-based markers
User location integration
Filter events by type

Create Posts

Multiple categories support
Location tagging option
Anonymous posting capability
Rich text content

User Profiles

View personal posts
Track activity statistics
Manage account settings
Privacy controls

Prerequisites

Node.js (v16 or higher)
npm (v8 or higher)
Ionic CLI
Angular CLI
Android Studio (for Android development)
Xcode (for iOS development, Mac only)

Installation

Install the required CLIs:

Copynpm install -g @ionic/cli @angular/cli

Clone the repository:

Copygit clone [repository-url]
cd unilink-app

Install dependencies:

Copynpm install

Add platform-specific files:

Copy# For Android
npm install @capacitor/android
npx cap add android

# For iOS
npm install @capacitor/ios
npx cap add ios
Running the App
Development Server
Copyionic serve
Access the app at http://localhost:8100
Mobile Preview
Copyionic serve --lab
Access the mobile preview at http://localhost:8100/ionic-lab
Running on Emulator
Android:
Copyionic cap run android -l --external
iOS (Mac only):
Copyionic cap run ios -l --external
Project Structure
Copysrc/
├── app/
│   ├── pages/
│   │   ├── login/
│   │   ├── home/
│   │   ├── map/
│   │   ├── create-post/
│   │   └── profile/
│   ├── components/
│   │   └── post-card/
│   ├── services/
│   │   ├── auth.service.ts
│   │   └── post.service.ts
│   └── interfaces/
│       └── post.interface.ts
├── assets/
└── theme/
Building for Production

Build the app:

Copyionic build --prod

Sync with native projects:

Copynpx cap sync

Open in native IDEs:

Copy# For Android
npx cap open android

# For iOS
npx cap open ios
Dependencies

@ionic/angular
@capacitor/core
@capacitor/ios
@capacitor/android
leaflet (for maps)

Development Guidelines

Use standalone components
Follow Angular best practices
Implement proper error handling
Maintain consistent code formatting
Write meaningful commit messages
