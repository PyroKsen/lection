import fs from 'fs';
import path from 'path';
import readlineSync from 'readline-sync';
import _ from 'lodash';
import {
  Apache, Rednek, Weapon, Tools,
} from './trash.js';

const getPath = (fPath) => path.resolve() + fPath;

const setPerson = (person) => {
  const path = getPath('/people.json');
  const peopleList = JSON.parse(fs.readFileSync(path));
  const namePerson = person.name;
  const liveManIndex = peopleList.alive.findIndex(({ name }) => name === namePerson);
  if (liveManIndex === -1) {
    peopleList.alive.push(person);
    fs.writeFileSync(path, JSON.stringify(peopleList, null, 2));
  } else {
    peopleList.alive.splice(liveManIndex, 1);
    peopleList.alive.push(person);
    fs.writeFileSync(path, JSON.stringify(peopleList, null, 2));
  }
};

const addDeadPerson = (person) => {
  const path = getPath('/people.json');
  const peopleList = JSON.parse(fs.readFileSync(path));
  const namePerson = person.name;
  const deadManIndex = peopleList.alive.findIndex(({ name }) => name === namePerson);
  // const deadMan = peopleList.alive.find(({name}) => name === namePerson)
  peopleList.alive.splice(deadManIndex, 1);
  peopleList.dead.push(person);
  fs.writeFileSync(path, JSON.stringify(peopleList, null, 2));
};

const backToClass = (name) => {
  const path = getPath('/people.json');
  const peopleList = JSON.parse(fs.readFileSync(path));
  const peopleIndex = peopleList.alive.findIndex(({ nameIter }) => name === nameIter);
  const obj = peopleList.alive[peopleIndex];

  let classObject;
  switch (obj.classForFunction) {
    case 'Apache':
      classObject = new Apache(name);
      break;
    case 'Redneck':
      classObject = new Rednek(name);
      break;
    case 'Weapon':
      classObject = new Weapon(name);
      break;
    default:
      className = new Tools(name);
      break;
  }
  // const newClass = new className(name)
  const entries = Object.entries(obj);
  // for ([key, value] of entries) {
  //     if (_.isObject(value)) {
  //         classObject[key] = value.map((item) => backToClass(item))
  //     } else {
  //         classObject[key] = value
  //     }
  // }

  entries.forEach(([key, value]) => {
    [key] = _.isObject(value) ? value.map((item) => backToClass(item)) : value;
  });
  return classObject;
};

export { setPerson, addDeadPerson };