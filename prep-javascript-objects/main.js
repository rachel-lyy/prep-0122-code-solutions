var person = {
  firstName: 'Taylor',
  // eslint-disable-next-line quotes
  lastName: 'Swift',
  hobby: 'Baking'
};

console.log(person);

console.log('The person\'s name is: ' + person.firstName + ' ' + person.lastName);

person.job = 'Singer';
console.log('The person\'s job is: ' + person.job);

person.previousJob = 'Actress';
console.log('The person\'s previous job is: ' + person.previousJob);

console.log('The person\'s complete object: ');
console.log(person);
