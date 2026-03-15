# DecodeLabs Full Stack Internship

This repository contains the projects completed during the **DecodeLabs Full Stack Development Internship**.

The internship focused on building a complete **full stack web application architecture** step-by-step.

---

# Project Structure

```
fullstack-internship
│
├── backend
│   ├── config
│   │   └── db.js
│   ├── controllers
│   │   └── userController.js
│   ├── models
│   │   └── User.js
│   ├── routes
│   │   └── userRoutes.js
│   ├── package.json
│   └── server.js
│
├── css
│   └── style.css
│
├── js
│   └── script.js
│
├── index.html
├── README.md
└── LICENSE
```

---

# Task 1 – Responsive Frontend

A responsive portfolio landing page built using:

* HTML5
* CSS3 (Grid & Flexbox)
* Vanilla JavaScript

Features:

* Mobile-first layout
* Responsive design
* Semantic HTML structure
* Clean UI design

---

# Task 2 – Backend API

Developed a RESTful API using:

* Node.js
* Express.js

Implemented endpoints:

```
GET /api/users
POST /api/users
GET /api/users/:id
DELETE /api/users/:id
```

Features:

* JSON request handling
* Input validation
* Proper HTTP status codes

---

# Task 3 – Database Integration

Integrated a MongoDB database using **Mongoose**.

Features:

* Database connection setup
* User schema design
* CRUD operations
* Persistent data storage

Example schema:

```
User
 ├─ name
 └─ email
```

---

# Task 4 – Frontend & Backend Integration

Connected the frontend to the backend API using **Fetch API**.

Features:

* Fetch users from backend
* Display users dynamically on UI
* Add new users from frontend
* Store users in MongoDB

Architecture:

```
Frontend (HTML/CSS/JS)
        ↓
Backend API (Express.js)
        ↓
MongoDB Database
```

---

# Tech Stack

Frontend

* HTML5
* CSS3
* JavaScript

Backend

* Node.js
* Express.js

Database

* MongoDB
* Mongoose

---

# Running the Project Locally

Start backend server:

```
cd backend
node server.js
```

Backend runs at:

```
http://localhost:5000
```

Run frontend using **Live Server** in VS Code.

Frontend runs at:

```
http://127.0.0.1:5500
```

---

# Deployment

Frontend is deployed using **GitHub Pages**.

Live URL:

https://shailesh-26.github.io/fullstack-internship/

Note:

GitHub Pages only hosts the frontend.
Backend APIs require a running Node.js server locally.

---

# Author

Shailesh
Full Stack Development Intern – DecodeLabs
