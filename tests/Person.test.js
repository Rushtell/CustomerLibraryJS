const Person = require('../src/Person.js');

test('testCreatePerson', () => {
  const person = new Person('qwer', 'qwert');
  expect(person.firstName).toBe('qwer');
  expect(person.lastName === 'qwert').toBe(true);
});
