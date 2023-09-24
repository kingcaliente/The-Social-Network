# Social Media API

## Description

This project is an API developed for a social media startup. The goal of this API is to provide the necessary backend functionality for a social network application. The API utilizes a NoSQL database (MongoDB) to handle large amounts of unstructured data efficiently. This repository contains the codebase and instructions to set up and use the API.

## User Story

As a social media startup, I want an API for my social network that uses a NoSQL database so that my website can handle large amounts of unstructured data.

## Acceptance Criteria

### Server Setup

- Given a social network API
- When I enter the command to invoke the application
- Then my server is started and the Mongoose models are synced to the MongoDB database.

### User and Thought Routes

- When I open API GET routes in Insomnia for users and thoughts
- Then the data for each of these routes is displayed in a formatted JSON.

### CRUD Operations for Users and Thoughts

- When I test API POST, PUT, and DELETE routes in Insomnia
- Then I am able to successfully create, update, and delete users and thoughts in my database.

### Reactions and Friends

- When I test API POST and DELETE routes in Insomnia
- Then I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list.

## Installation and Usage

To set up and use this API, follow these steps:

1. Clone this repository to your local machine:

   ```
   git clone git@github.com:kingcaliente/The-Social-Network.git
   ```

2. Navigate to the project directory:

   ```
   cd The-Social-Network
   ```

3. Install the required dependencies:

   ```
   npm install
   ```

4. Configure your MongoDB connection by editing the `.env` file and providing the necessary database URL.

5. Start the server:

   ```
   npm start
   ```

6. You can now use Insomnia or any other API testing tool to interact with the API based on the defined routes and methods.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Contributors

- Luis Pardo

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Special thanks to my friends and family.
