# Smart Ride Booking 🚖

A full-stack ride-booking platform built with React, Node.js, Express, and MongoDB. The application enables users to book rides, track ride status, and manage ride requests through a secure and responsive interface.

## Features

* User authentication and authorization using JWT
* Ride booking and ride status tracking
* Role-based access control for users and drivers
* RESTful APIs for ride management
* Responsive and mobile-friendly UI
* Real-time state management for seamless user experience
* Secure backend with protected routes
* Production deployment on Vercel and Render

## Tech Stack

### Frontend

* React.js
* React Router
* Axios
* CSS / Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication

## Architecture

* Frontend communicates with backend through REST APIs.
* JWT-based authentication secures protected resources.
* MongoDB stores user, driver, and ride-related data.
* Modular backend structure for scalability and maintainability.

## API Highlights

* User Registration & Login
* JWT Authentication
* Create Ride Request
* View Ride History
* Update Ride Status
* Driver Assignment & Management

## Deployment

* Frontend: Vercel
* Backend: Render
* Database: MongoDB Atlas

## Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/smart-ride-booking.git
cd smart-ride-booking
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

### Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## Future Enhancements

* Live driver location tracking
* Ride fare estimation
* Online payments integration
* Push notifications
* Ride analytics dashboard

## Author

Manjeet Kumar
