const user = {

  company: {
    name: 'Gravity',
    description: 'Build Node.js Apps at Warp Speed',
    address: {
      number: 19,
      street: 'Arthur Street',
      city: 'Belfast'
    }
  },
  name: () => {

    return 'Kyle Gawley';

  }
}

console.log(user?.company?.location?.street);


