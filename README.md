# My Project

Here is a demo of my project:

[![Watch the video]([https://img.youtube.com/vi/YOUR_VIDEO_ID/0.jpg)](https://www.youtube.com/watch?v=YOUR_VIDEO_ID](https://www.youtube.com/watch?v=XRUGJKP6K4Y&feature=youtu.be))

# User Registration API

This project provides an API for user registration with validation, password hashing, and JWT authentication. The API includes validation for user input using Joi and uses MongoDB as the database to store user details.

## Features

- User registration with validation
- Secure password storage using bcrypt
- JWT-based authentication for secure login
- ISO 8601 format validation for the date of birth (DOB)
- Error handling with meaningful responses

## Technologies Used

- **Node.js** - Backend runtime environment
- **Express.js** - Web framework for building the API
- **MongoDB** - NoSQL database for storing user data
- **Mongoose** - ODM (Object Data Modeling) library for MongoDB
- **Bcrypt.js** - Password hashing
- **JSON Web Token (JWT)** - Authentication mechanism
- **Joi** - Data validation library

## Setup

### Prerequisites

Ensure you have the following installed:

- **Node.js**: [Install Node.js](https://nodejs.org/)
- **MongoDB**: [Install MongoDB](https://www.mongodb.com/try/download/community)
- **Postman** or any other API testing tool to test API endpoints

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root of the project and add the following variables:

   ```plaintext
   JWT_SECRET=your_jwt_secret
   MONGO_URI=mongodb://localhost:27017/your-database
   ```

4. Start the application:

   ```bash
   npm start
   ```

   This will start the server at `http://localhost:8080`.

## API Endpoints

### 1. **POST /auth/register**

Registers a new user with the following data:

#### Request Body:

```json
{
  "name": "John Doe",
  "dob": "2002-10-16",
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Response:

- **Success (201 Created)**:

```json
{
  "message": "Signup successful",
  "success": true,
  "token": "jwt_token",
  "user": {
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
}
```

- **Error (400 Bad Request)**:

  - Invalid or missing fields (e.g., DOB not in the correct ISO 8601 format)

  Example:

  ```json
  {
    "message": "\"dob\" must be in ISO 8601 date format (YYYY-MM-DD)"
  }
  ```

### 2. **POST /auth/login**

Logs in an existing user and returns a JWT token.

#### Request Body:

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Response:

- **Success (200 OK)**:

```json
{
  "message": "Login Success",
  "success": true,
  "jwtToken": "jwt_token",
  "email": "john.doe@example.com",
  "name": "John Doe"
}
```

- **Error (403 Forbidden)**:

  - Invalid credentials or account does not exist

  Example:

  ```json
  {
    "message": "Auth failed email or password is wrong",
    "success": false
  }
  ```

### 3. **GET /ping**

A simple endpoint to check if the server is running.

#### Response:

```json
{
  "message": "PONG"
}
```

## Validation

- **Name**: Minimum 3 characters, maximum 100 characters.
- **DOB**: Date must be in ISO 8601 format (`YYYY-MM-DD`).
- **Email**: Must be a valid email address.
- **Password**: Minimum 6 characters, maximum 100 characters.

## Error Handling

The API provides clear error messages for invalid input:

- **400 Bad Request** for invalid or missing data
- **409 Conflict** when a user tries to register with an existing email
- **500 Internal Server Error** for unexpected errors

## Testing

Use **Postman** or another API tool to test the endpoints:

1. **POST /auth/register**: To register a new user.
2. **POST /auth/login**: To log in and get a JWT token.
3. **GET /ping**: To check if the server is running.

## Future Improvements

- Add more detailed error handling and logging.
- Implement rate-limiting to prevent brute-force attacks on the authentication routes.
- Secure the API further by adding email verification, password reset functionality, and user roles (e.g., admin, user).
- Implement JWT token refresh functionality.

---
