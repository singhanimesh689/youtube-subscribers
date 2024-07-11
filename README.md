# youtube-subscribers

# Express Subscribers API

This Express API provides endpoints to manage subscribers. It includes functionality to get all subscribers, get subscribers with specific fields, and get a subscriber by ID.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
  - [Get All Subscribers](#get-all-subscribers)
  - [Get Subscribers with Name and Subscribed Channel](#get-subscribers-with-name-and-subscribed-channel)
  - [Get Subscriber by ID](#get-subscriber-by-id)
- [Error Handling](#error-handling)

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/singhanimesh689/youtube-subscribers.git
    cd youtube-subscribers
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the root of your project and add your MongoDB URL:
    ```plaintext
    MONGODB_URL="your atlas connection string"

4. **Run the server:**
    ```bash
    npm start
    ```

## Usage

Make sure your server is running. You can interact with the API using tools like [Postman](https://www.postman.com/) or [curl](https://curl.se/).

## Endpoints

### Get All Subscribers

- **URL:** `/subscribers`
- **Method:** `GET`
- **Description:** Retrieves all subscribers from the database.
- **Response:**
  ```json
  [
    {
        "_id": "668e88e223875e16b579a89c",
        "name": "Jeread Krus",
        "subscribedChannel": "CNET",
        "subscribedDate": "2024-07-10T13:13:06.618Z",
        "__v": 0
    }
    ...
  ]


### Get Subscribers with Name and Subscribed Channel

- **URL:** `/subscribers/names`
- **Method:** `GET`
- **Description:** Retrieves subscribers with only their name and subscribed channel. 
- **Response:**
  ```json
  [
    {
        "name": "Jeread Krus",
        "subscribedChannel": "CNET"
    },
    ...
  ]


### Get Subscriber by ID

- **URL:** `/subscribers/:id`
- **Method:** `GET`
- **Description:** Retrieves a subscriber by their ID.
- **Response:**
  ```json
  [
    {
        "_id": "668e88e223875e16b579a89c",
        "name": "Jeread Krus",
        "subscribedChannel": "CNET",
        "subscribedDate": "2024-07-10T13:13:06.618Z",
        "__v": 0
    }
  ]

### Error Handling

The API includes error handling middleware to catch and respond to errors gracefully. If an error occurs during a request, the server will respond with a JSON object containing the error message.



This `README.md` provides detailed instructions on setting up the project, using the endpoints, and understanding the error handling implemented in the Express application. Adjust the repository URL and any specific details as necessary for your project.
