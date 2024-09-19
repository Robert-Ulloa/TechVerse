const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUsername, getRandomThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('Connected to the database!');

  // Clear existing collections
  await User.deleteMany({});
  await Thought.deleteMany({});

  // Create an array to hold users and thoughts
  const users = [];
  const thoughts = [];

  // Generate random users and thoughts
  for (let i = 0; i < 10; i++) {
    const username = getRandomUsername();
    const email = `${username.toLowerCase()}@example.com`;

    const thoughtText = getRandomThought();
    const newThought = await Thought.create({ thoughtText, username });

    users.push({
      username,
      email,
      thoughts: [newThought._id],
    });

    thoughts.push(newThought);
  }

  // Insert users into the database
  await User.insertMany(users);

  console.log('Database seeded successfully!');
  process.exit(0);
});