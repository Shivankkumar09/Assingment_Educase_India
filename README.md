# School Management API

This API is developed using Node.js and Express.js to manage school data. It allows users to add new schools and retrieve a list of schools sorted by proximity to a specified location.

## Table of Contents

- [Technology Stack](#technology-stack)
- [Database Setup](#database-setup)
- [API Endpoints](#api-endpoints)
  - [1. Add School](#1-add-school)
  - [2. List Schools](#2-list-schools)
- [Hosting and Testing](#hosting-and-testing)
- [Deliverables](#deliverables)
- [Postman Collection](#postman-collection)

## Technology Stack

- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Hosting**: Render.com

## Database Setup

A `schools` table in MySQL has been created with the following fields:

- `id` (Primary Key)
- `name` (VARCHAR)
- `address` (VARCHAR)
- `latitude` (FLOAT)
- `longitude` (FLOAT)

## API Endpoints

### 1. Add School

- **Endpoint**: `[POST] /api/addSchool`
- **Description**: Adds a new school to the database after validating the provided data.
- **Payload**:

  ```json
  {
    "name": "School Name",
    "address": "School Address",
    "latitude": 12.9715987,
    "longitude": 77.594566"
  }
