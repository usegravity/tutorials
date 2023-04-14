require('dotenv').config();
const openai = require('./openai');

async function run(){

  const text = await openai.text({ prompt: 'Write a function to reduce an array of numbers in Javascript' });
  const image = await openai.image({ prompt: 'A photo of a kitten drinking coffee' });

  console.log(text);
  console.log(image);
  
}

run();