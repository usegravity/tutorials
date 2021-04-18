const db = require('./knex')();
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

exports.create = async function(data){

  data.id = uuidv4();

  // generate a random 10 char string (salt);
  const salt = await bcrypt.genSalt(10);

  // hash the password, this can not be reversed
  data.password = await bcrypt.hash(data.password, salt);

  // save the user
  await db('user').insert(data);

}

exports.verify = async function(user){ 

  // get the user based on their email
  const data = await db('user').select('*').where({ email: user.email });

  // use bcrypt to hash the password and compared it to our stored hash
  return await bcrypt.compare(user.password, data[0].password);
  
}
