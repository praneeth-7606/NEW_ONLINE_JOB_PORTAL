
# Online Job Portal

Welcome to our Online Job Portal! This web application is a comprehensive platform built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, designed to facilitate job search and recruitment processes for both job seekers and employers.

## Features

- **User Authentication**: Secure user registration and login functionality, with password hashing and JWT-based authentication for enhanced security.
- **Job Listings**: Extensive job search capabilities, allowing users to filter job listings based on multiple criteria such as job title, location, company, and category.
- **Job Applications**: Seamless application process for job seekers, enabling them to apply for job listings by submitting their resumes and cover letters directly through the platform.
- **Employer Dashboard**: A dedicated dashboard for employers to manage job listings, review applications, and interact with potential candidates.
- **Responsive Design**: The application is fully responsive and mobile-friendly, ensuring an optimal user experience across all devices and screen sizes.

## Technologies Used

### Frontend
- **React.js**: A powerful JavaScript library for building user interfaces.
- **React Router**: Declarative routing for React applications, enabling navigation between different views.
- **Axios**: Promise-based HTTP client for making AJAX requests, used for communicating with the backend API.
- **Bootstrap**: Frontend framework for responsive and mobile-first web development, providing pre-styled components and layout utilities.

### Backend
- **Node.js**: Server-side JavaScript runtime environment for building scalable and efficient web applications.
- **Express.js**: Fast, unopinionated web framework for Node.js, providing robust features for building RESTful APIs.
- **MongoDB**: A NoSQL document-oriented database, used for storing and managing job listings, user data, and other application information.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js, providing a higher-level abstraction for interacting with MongoDB databases.

## Setup Instructions

1. **Clone the Repository**: 
   ```
   git clone https://github.com/praneeth-7606/NEW_ONLINE_JOB_PORTAL
   ```
2. **Navigate to the Project Directory**: 
   ```
   cd online-job-portal
   ```
3. **Install Dependencies for the Backend**:
   ```
   cd backend
   npm install
   ```
4. **Set Up Environment Variables**:
   - Create a `.env` file in the `backend` directory.
   - Define the following variables:
     ```
     PORT=5000
     MONGODB_URI=your-mongodb-uri
     JWT_SECRET=your-jwt-secret
     ```
5. **Start the Backend Server**: 
   ```
   npm start
   ```
6. **Install Dependencies for the Frontend**:
   ```
   cd ..
   cd frontend
   npm install
   ```
7. **Start the Frontend Development Server**: 
   ```
   npm start
   ```
8. **Open Your Web Browser** and navigate to `http://localhost:3000` to view the application.

## Contributing

We welcome contributions from the community! Please fork the repository, make your changes, and submit a pull request for review.


---

