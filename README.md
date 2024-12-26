# Gmail Clone Backend

This is the backend API for the Gmail Clone project, built using Node.js, Express, and MongoDB. The backend allows users to register, log in, send emails, and view their inbox, sent, and trash folders. It includes authentication and email management features.

## Features

- **User Authentication**: Allows users to register, log in, and authenticate using JWT.
- **Send Emails**: Users can send emails with details like recipient, subject, message, and folder.
- **Manage Emails**: Retrieve emails from different folders (Inbox, Sent, Trash).
- **JWT-based Authorization**: Secures email routes with authentication middleware.
- **MongoDB Integration**: Uses MongoDB for storing user and email data.

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express**: Web framework for handling HTTP requests and routing.
- **MongoDB**: NoSQL database for storing user and email data.
- **Mongoose**: ODM for MongoDB to define models and interact with the database.
- **JWT**: JSON Web Tokens for secure authentication.
- **bcrypt.js**: Used for hashing and securing passwords.

## Project Setup

### Clone the repository

git clone https://github.com/your-username/gmail-clone-backend.git

## Folder Structure

- **config/**: Contains the database connection logic (db.js).
- **controllers/**: Handles the logic for user authentication and email management (authController.js, emailController.js).
- **middlewares/**: Includes the authentication middleware to secure routes (authMiddleware.js).
- **models/**: Defines the Mongoose schemas for User and Email (User.js, Email.js).
- **routes/**: Contains route definitions for authentication and emails (authRoutes.js, emailRoutes.js).
- **server.js**: The main entry point for the backend server.

## Endpoints

 ### Authentication
**POST /api/auth/register**: Register a new user.
**POST /api/auth/login**: Log in an existing user.
### Emails
**POST /api/emails/send**: Send an email (requires authentication).
**GET /api/emails/:folder**: Get emails from a specific folder (Inbox, Sent, Trash) (requires authentication).

## Render Deployment

The backend is deployed on Render.
https://gmail-clone-backend-6eqs.onrender.com

## Development Process

**Initial Setup**: Set up the backend using Node.js, Express, and MongoDB.
**User Authentication**: Implemented JWT authentication for secure login and registration.
**Email Management**: Created routes and controllers for sending and retrieving emails from different folders.
**Middleware Implementation**: Implemented middleware to protect email routes and ensure authenticated access.
