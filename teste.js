const people = [
  {
    name: 'Henrique Albuquerque',
    age: 62,
    id: 1,
    talk: {
      watchedAt: '23/10/2020',
      rate: 5,
    },
  },
  {
    name: 'Heloísa Albuquerque',
    age: 67,
    id: 2,
    talk: {
      watchedAt: '23/10/2020',
      rate: 5,
    },
  },
];

const findTalkerIndex = people.findIndex((p) => p.id === 2);

people[findTalkerIndex] = { ...people[findTalkerIndex], name: 'Arthur Messias', age: 30, id: 4 };

console.log(people[findTalkerIndex]);