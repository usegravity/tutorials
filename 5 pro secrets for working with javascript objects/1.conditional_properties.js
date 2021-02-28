const age = 34;
const sex = 'male';

const user = {

  name: 'Kyle',
  ...age >= 18 && { adult: true },
  ...age < 18 && { child: true },
  ...sex && { sex: sex }
  
}

console.log(user);
