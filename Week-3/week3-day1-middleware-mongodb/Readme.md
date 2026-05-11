# Week 3 - Day 1 - Middleware & MongoDB

## Project Overview

This module focuses on:
- Express middleware concepts
- MongoDB fundamentals
- CRUD database operations
- Query operators
- Backend request processing

The project demonstrates how backend applications communicate with databases using APIs and middleware.

---

# Topics Covered

- Express Middleware
- Path-Based Middleware
- MongoDB Introduction
- Collections & Documents
- CRUD Operations
- Query Operators
- Nested Objects in MongoDB
- REST Client Tools

---

# Programs

| File Name | Description |
|------------|-------------|
| `mongodbAndExpressFundamentals.js` | Concepts related to Express middleware, MongoDB operations, CRUD methods, query operators, and backend fundamentals |

---

# Middleware Concepts

## What is Middleware?

Middleware is a function that executes between:
- client request
- server response

Middleware can:
- modify request data
- send response
- forward request to next middleware

---

## Example Middleware

```javascript
function middleware1(req, res, next) {
  console.log("Middleware executed");

  next();
}
```

---

## Using Middleware

```javascript
app.use(middleware1);
```

### Description

Registers middleware globally for all incoming requests.

---

# MongoDB Fundamentals

## What is MongoDB?

MongoDB is:
- NoSQL database
- document-oriented database
- stores data in JSON-like format

Structure:

```txt
Database → Collection → Document
```

---

# MongoDB Commands

## Create Database

```bash
use databaseName
```

### Description

Creates or switches to database.

---

## Show Databases

```bash
show databases
```

### Description

Displays all available databases.

---

## Create Collection

```javascript
db.createCollection("users")
```

### Description

Creates a new collection inside current database.

---

# CRUD Operations

## Insert One Document

```javascript
db.users.insertOne({
  name: "Ravi",
  age: 21,
  city: "Hyderabad"
})
```

### Description

Inserts a single document into collection.

---

## Insert Multiple Documents

```javascript
db.users.insertMany([
  {
    name: "Mani",
    age: 27
  },
  {
    name: "Kanta",
    age: 76
  }
])
```

### Description

Inserts multiple documents.

---

# Read Operations

## Find One Document

```javascript
db.users.findOne()
```

### Description

Returns first matching document.

---

## Find All Documents

```javascript
db.users.find()
```

### Description

Returns all documents from collection.

---

# Query Operators

| Operator | Meaning |
|----------|---------|
| `$gt` | Greater than |
| `$eq` | Equal to |
| `$and` | Logical AND |

---

## Example Query

```javascript
db.users.find({
  city: {
    $eq: "Hyderabad"
  }
})
```

### Description

Finds all users from Hyderabad.

---

# Update Operations

## Update One Document

```javascript
db.users.updateOne(
  {
    name: "Ravi"
  },
  {
    $set: {
      age: 30
    }
  }
)
```

### Description

Updates matching document fields.

---

# Delete Operations

## Delete One Document

```javascript
db.users.deleteOne({
  name: "Ravi"
})
```

### Description

Deletes first matching document.

---

# Array Operators

| Operator | Description |
|----------|-------------|
| `$push` | Adds element including duplicates |
| `$addToSet` | Adds only unique elements |

---

# Nested Object Query

```javascript
db.users.findOne({
  "address.city": "Hyderabad"
})
```

### Description

Access nested object fields.

---

# API Testing Tools

- REST Client
- Postman
- Thunder Client

Used for testing backend APIs.

---

# Skills Practiced

- Middleware Usage
- Backend Concepts
- MongoDB CRUD Operations
- Query Operators
- Database Design
- REST API Understanding
- Backend Logic Building

---

# Technologies Used

- JavaScript
- Node.js
- Express.js
- MongoDB

---

# Author

**Vivekananda Reddy**

GitHub: https://github.com/nanda-dev7
