# TechVerse

## Description

TechVerse is a social network API designed to allow users to share their thoughts, react to friends' thoughts, and manage a friend list. This API is built using Express.js for routing, a MongoDB database, and the Mongoose ODM. It demonstrates the use of NoSQL databases for handling large amounts of unstructured data, making it ideal for social networking platforms.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
  - [User Routes](#user-routes)
  - [Thought Routes](#thought-routes)
  - [Friend and Reaction Routes](#friend-and-reaction-routes)
- [Walkthrough Video](#walkthrough-video)
- [License](#license)
- [Questions](#questions)

## Installation

To install and run TechVerse locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Robert-Ulloa/TechVerse.git
   ```

2. Navigate to the project directory:

   ```bash
   cd TechVerse
   ```

3. Install the necessary dependencies:

   ```bash
   npm install
   ```

4. Start MongoDB:

   ```bash
   mongod
   ```

5. Seed the database (optional but recommended):

   ```bash
   npm run seed
   ```

6. Start the application:

   ```bash
   npm start
   ```

The server will run on `http://localhost:3001`.

## Usage

Once the server is running, you can interact with the API using tools like [Insomnia](https://insomnia.rest/), [Postman](https://www.postman.com/), or similar. The API supports CRUD operations for users, thoughts, friends, and reactions.

## API Routes

### User Routes

- `GET /api/users` - Get all users.
- `GET /api/users/:userId` - Get a single user by their ID.
- `POST /api/users` - Create a new user.
- `PUT /api/users/:userId` - Update an existing user by their ID.
- `DELETE /api/users/:userId` - Delete a user by their ID.

### Thought Routes

- `GET /api/thoughts` - Get all thoughts.
- `GET /api/thoughts/:thoughtId` - Get a single thought by its ID.
- `POST /api/thoughts` - Create a new thought.
- `PUT /api/thoughts/:thoughtId` - Update an existing thought.
- `DELETE /api/thoughts/:thoughtId` - Delete a thought by its ID.

### Friend and Reaction Routes

- `POST /api/users/:userId/friends/:friendId` - Add a friend to a user.
- `DELETE /api/users/:userId/friends/:friendId` - Remove a friend from a user's friend list.
- `POST /api/thoughts/:thoughtId/reactions` - Add a reaction to a thought.
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId` - Remove a reaction from a thought.

## Walkthrough Video

Check out the [walkthrough video](https://drive.google.com/file/d/1dm_l-RGy141rRSBpDZlaVKjU0WEf7Nlf/view?usp=sharing) for a demonstration of the functionality and features of TechVerse.

## License

This project is licensed under the MIT License. For more details, see the [LICENSE](LICENSE) file.

## Questions

If you have any questions or feedback, feel free to reach out to me via:

- GitHub: [Robert-Ulloa](https://github.com/Robert-Ulloa)
