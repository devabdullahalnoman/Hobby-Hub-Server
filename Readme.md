# HobbyHub Server

## Overview

This server handles authentication, database operations, and API endpoints for HobbyHub.

HobbyHub is a platform designed to bring together people with shared
interests and passions. Whether you love painting, gaming, cooking, or
hiking, our community helps you connect with like-minded individuals,
form hobby groups, and engage in exciting activities. Our mission is to make it easy for hobby enthusiasts to meet,
collaborate, and grow their skills while forming meaningful
connections. With HobbyHub, you can explore existing groups, create
your own, and participate in meetups—all in one place!

## Tech Stack

- Express.js
- MongoDB

## Dependencies

- cors: ^2.8.5
- "dotenv": "^16.5.0"
- "express": "^5.1.0"
- "mongodb": "^6.16.0"

## Features

- Secure environment variables to protect sensitive data.
- RESTful API structure for handling groups and user actions.
- MongoDB integration for group management.
- CORS enabled to allow cross-origin requests.

## Tricky Implimentations

- **Data Management:** Efficiently handling user-created hobby groups and ensuring smooth CRUD operations with MongoDB.
- **Environment Variables Security:** Ensuring that sensitive MongoDB credentials remain hidden using dotenv.

### Installation & Setup

To run this project locally:

1. **Clone the repository**
```bash
 git clone https://github.com/devabdullahalnoman/Hobby-Hub-Server.git
 cd Hobby-Hub-Server
```

   
2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables Create a .env file and add:**
```env
DB_User="your database username"
DB_Password="your database password"
```
        
4. **Start the development server**

```bash
npm run dev
```

View the app Open http://localhost:3000
