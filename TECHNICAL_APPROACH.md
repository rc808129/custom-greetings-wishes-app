

## Project Overview

- Custom Greetings & Wishes App is a full-stack web application that allows users to create personalized greeting templates using their profile image and username.

- The application includes authentication, profile setup, categorized greeting templates, personalized live previews, image sharing functionality, and premium template access control.


## Application WorkFlow


## Problem Solving Approach

- The project was build using resuable React components and a scalable frontend architecture for better code management.

- Firebase authentication and JWT authorization were used to implement secure Email, Google, and Guest login systems.

- For profile image upload, FormData was used on the frontend to send image data to the backend. Multer was used to access uploaded files, Cloudinary was used to store images, and the returned image URL was stored in MongoDB.

- Greeting templates were organized into categorized arrays with dynamic filtering functionality.

- html2canvas-pro was used to generate personalized sharedable greeting images by merging templates, usernames, and profile images into a single image.

- Premium template access was controlled using conditional rendering and subscription popup functionality



## Tech Stack

### Frontend
- React.js for dynamic UI rendering
- Tailwind CSS for responsive styling
- React Router DOM for routing
- Axios for API calls
- Firebase for Google authentication
- html2canvas-pro for image generation

### Backend
- Node.js and Express.js for backend APIs
- MongoDB and Mongoose for database management
- JWT for authentication
- Cloudinary for image storage
- Multer for file uploads


## Challenges

- Managing profile image uploads and integrating Cloudinary image storage with MongoDB.

- Handling image uploads using FormData, Multer middleware, and Cloudinary APIs.

- Managing homepage state efficiently using useReducer for API data and template filtering functionality.

- Dynamically filtering Birthday, Festival, and Relationship templates based on selected categories.

- Passing user profile image and username across reusable React components using props drilling.

- Generating personalized shareable greeting images dynamically using html2canvas-pro.

- Handling html2canvas styling and rendering issues while converting templates into a single image.

- Maintaining reusable and scalable frontend component architecture.

- Implementing premium template access control using conditional rendering and popup functionality.



## Future Improvements

- Store greeting templates dynamically in Cloudinary and MongoDB instead of managing templates locally in the frontend assets folder.

- Create an admin/template upload system where users can upload and manage their own custom templates.

- Fetch templates dynamically from backend APIs instead of storing template arrays in frontend files.

- Add template editing functionality such as custom text editing, font styling, color changes, and element positioning.

- Add greeting image download functionality.

- Implement a real payment gateway and subscription management system for premium templates.

- Add drag-and-drop customization for profile images and text placement.

- Improve image generation and sharing performance.

- Add AI-generated greeting and wishes suggestions.

- Add more greeting categories and premium template collections.


