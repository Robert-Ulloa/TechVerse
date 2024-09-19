const usernames = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Smith',
    'Jones',
    'Coollastname',
    'enter_name_here',
    'Ze',
    'Zechariah',
    'Zeeshan',
    'Zidane',
    'Zinedine',
    'Zion',
    'Ziya',
    'Ziyaan',
    'Zohaib',
  ];
  
  const thoughtTexts = [
    'Just had a great day!',
    'Coding is life.',
    'I love JavaScript!',
    'MongoDB is awesome!',
    'Express.js makes server handling easy.',
    'Having a coffee break.',
    'Trying out new tech!',
    'Learning new things every day.',
  ];
  
  // Function to get a random item from an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Function to generate random username
  const getRandomUsername = () => getRandomArrItem(usernames);
  
  // Function to generate random thought text
  const getRandomThought = () => getRandomArrItem(thoughtTexts);
  
  module.exports = { getRandomUsername, getRandomThought };