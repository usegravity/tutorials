const users = [
  { 
    id: 1,
    name: 'Kyle',
    company: 'Gravity',
  },
  {
    id: 2, 
    name: 'Jack',
    company: 'SpaceX'
  }
]

const result = users.findIndex(x => x.name === 'Kyle');
console.log(result);