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
- dotenv for environment variables
- CORS

## Features

- Secure environment variables to protect sensitive data.
- RESTful API structure for handling groups and user actions.
- MongoDB integration for group management.
- CORS enabled to allow cross-origin requests.

## Tricky Implimentations

- **Data Management:** Efficiently handling user-created hobby groups and ensuring smooth CRUD operations with MongoDB.
- **Environment Variables Security:** Ensuring that sensitive MongoDB credentials remain hidden using dotenv.
