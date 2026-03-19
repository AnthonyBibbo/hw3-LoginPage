# hw3 Login Page

## Overview
This project is a basic client-server login system inspired by OWASP Juice Shop. It demonstrates common authentication functionality along with simple security practices such as input validation and password hashing.

The application consists of:
- A frontend built with HTML, CSS, and JavaScript
- A backend built with Node.js and Express

---

## Features
- Email and password login form
- Client-side validation:
  - Prevents empty fields
  - Ensures email contains "@"
  - Requires password to be at least 8 characters
- Server-side login handling
- Password hashing using bcrypt
- Basic client-server communication using fetch API

---

## How to Run the Project

### 1. Clone the Repository
git clone https://github.com/AnthonyBibbo/hw3-LoginPage.git

cd hw3-LoginPage

---

### 2. Install Server Dependencies
cd server

npm install

---

### 3. Start the Server
node server.js

You should see:
Server running on http://localhost:3000

---

### 4. Open the Client
In your browser, go to:
http://localhost:3000/index.html

---

## How to Test

### Valid Login
Use the default credentials:
Email/Username: admin@gmail.com
Password: password123

Expected result:
- "Login successful" message displayed

---

### Invalid Login
Try:
- Incorrect password
- Invalid email format
- Password shorter than 8 characters

Expected result:
- Error message displayed

---

### Client-Side Validation Tests
- Submit empty fields → should be blocked
- Enter email without "@" → should be rejected
- Enter short password → should be rejected

---

## How It Works

### Client Side
- The login form captures user input
- JavaScript validates input before submission
- A POST request is sent to the server using fetch

### Server Side
- Express listens for POST requests at `/login`
- User credentials are compared against stored data
- Passwords are verified using bcrypt hashing
- A success or failure response is returned

---

## Security Concepts Demonstrated
- Input validation (client-side)
- Secure password storage (hashing with bcrypt)
- Basic authentication flow
- Separation of client and server responsibilities

---

## Limitations
- Uses a hardcoded user (no database)
- No session management or authentication tokens
- Client-side validation can be bypassed (server-side validation should also be implemented)

---

## Future Improvements
- Add database integration (MongoDB, PostgreSQL, etc.)
- Implement JWT-based authentication
- Add rate limiting to prevent brute force attacks
- Improve UI/UX design
- Add server-side input validation

---
