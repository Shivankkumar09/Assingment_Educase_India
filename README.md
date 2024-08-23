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

All endpoints are hosted at: [https://assingmenteducaseindia.onrender.com/](https://assingmenteducaseindia.onrender.com/)


### 1. Add School

- **Endpoint**: `[POST] /api/addSchool`
- **URL**: https://assingmenteducaseindia.onrender.com/api/addSchool
- **Description**: Adds a new school to the database after validating the provided data.
- **Payload**:

  ```json
  {
    "name": "School Name",
    "address": "School Address",
    "latitude": 12.9715987,
    "longitude": 77.594566
  }

- **Response**:
  
- **201 created**: If the school is successfully added.
- **400 BAD Request**:  If any field is missing or invalid.


### 2. List School

- **Endpoint**: `[GET] /api/listSchools`
- **URL**: https://assingmenteducaseindia.onrender.com/api/listSchools
- **Description**: Retrieves a list of schools sorted by proximity to the user's location based on the Haversine distance.
- **Query Parameters**:
  - `latitude` (required): User's latitude.
  - `longitude` (required): User's longitude.

 - **Example URL**: http://assingmenteducaseindia.onrender.com/api/listSchools?latitude=22.7041&longitude=70.1025 

- **Response**:
  - **200 OK**: Returns a sorted list of schools based on proximity.
  - **400 Bad Request**: If any query parameter is missing or invalid.


 ## Hosting and Testing

 - **Hosting**: The API is hosted on Render.com and can be accessed via the following base URL: https://assingmenteducaseindia.onrender.com/


## Postman Collection
collection Link:-

https://elements.getpostman.com/redirect?entityId=36729152-8bae325d-7bdd-49a1-93a0-c0d340bfe339&entityType=collection

   You can use the Postman collection to test these APIs easily. The collection includes example requests and expected responses.
 
