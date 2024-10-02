import fs from 'fs';
import path from 'path';
import readlineSync from 'readline-sync';
import _ from 'lodash';
import Animals from './classes/animals.js';
import Apache from './classes/apache.js';
import Dogs from './classes/dogs.js';
import Item from './classes/item.js';
import Rednek from './classes/rednek.js';
import Tamagavk from './classes/tamagavk.js';
import Tools from './classes/tools.js';
import TribeMember from './classes/tribeMember.js';
import Weapon from './classes/weapon.js';

const getPath = () => path.resolve() + '/people.json';

const getObject = () => JSON.parse(fs.readFileSync(getPath(), 'utf-8'))

const updateJSON = (dataToUpdate) => fs.writeFileSync(getPath(), JSON.stringify(dataToUpdate, null, 2), 'utf-8')


const createObject = (person) => {
  const classes = ['Apache', 'Redneck', 'Tool', 'Weapon']
  const classToCreate = readlineSync.keyInSelect(classes,"что создаём?")

  if (classToCreate === -1) {
    console.log('ну не надо')
    return false
  }

  const name = classToCreate < 2 ? readlineSync.question('Name: ')
  : readlineSync.question('Название: ')

  const obj = classToCreate === 0 ? new Apache(name)
  : classToCreate === 1 ? new Rednek(name)
    : classToCreate === 2 ? new Tools(name) : new Weapon(name);

    console.log(obj)
    setPerson(obj) // хз как будет работать
    return true
};

const addItem = () => {
  const listOfObjects = getObject()
  const listOfNames = listOfObjects.alive.map(({name}) => name)
  const indexOfName = readlineSync.keyInSelect(listOfNames,'кому добавить? ')
  const listOfItems = listOfObjects.item.map(({name}) => name)
  const indexOfItem = readlineSync.keyInSelect(listOfItems,'Что добавить? ')

  const person = backToClass(listOfObjects.alive.at(indexOfName))
  const item = backToClass(listOfObjects.item.at(indexOfItem))
  if (person.classForFunction === 'Apache' && item.classForFunction === 'Weapon') {
    console.log('ytdjpvj;yj lj,fdbnm jhe;bt rkfcce fgfxt')
    return false
  }
  person.addTool(item);
  console.log(person)
  setPerson(person)
  return true
}



const addDeadPerson = (person) => {
  const peopleList = getObject()
  const namePerson = person.name;
  const deadManIndex = peopleList.alive.findIndex(({ name }) => name === namePerson);
  // const deadMan = peopleList.alive.find(({name}) => name === namePerson)
  peopleList.alive.splice(deadManIndex, 1);
  peopleList.dead.push(person);
  updateJSON(peopleList)
};

const setPerson = (person) => {
  const peopleList = getObject()
  const namePerson = person.name;
  const toolClass = person.classForFunction
  const live = person.live
  const liveManIndex = peopleList.alive.findIndex(({ name }) => name === namePerson);
  if (toolClass === 'Tools' || toolClass === 'Weapon') {
    peopleList.items.push(person);
    updateJSON(peopleList)
  } else if (liveManIndex === -1) {
    peopleList.alive.push(person);
    updateJSON(peopleList)
  } else if (live === -1) {
    addDeadPerson(person)
  } else {
    peopleList.alive.splice(liveManIndex, 1);
    peopleList.alive.push(person);
    updateJSON(peopleList)
  }
};


const backToClass = (nameToFind) => {
  const peopleList = getObject()
  let peopleIndex = peopleList.alive.findIndex(({ name }) => name === nameToFind);
  if (findIndex === -1) {
    peopleIndex = peopleList.items.findIndex(({ name }) => name === nameToFind);
  }
  const obj = peopleList.alive[peopleIndex];

  let classObject;
  switch (obj.classForFunction) {
    case 'Apache':
      classObject = new Apache(nameToFind);
      break;
    case 'Redneck':
      classObject = new Rednek(nameToFind);
      break;
    case 'Weapon':
      classObject = new Weapon(nameToFind);
      break;
    default:
      classObject = new Tools(nameToFind);
      break;
  }
  const entries = Object.entries(obj);

  entries.forEach(([key, value]) => {
    [key] = _.isObject(value) ? value.map((item) => backToClass(item)) : value;
  });
  return classObject;
};

export { setPerson, createObject, addItem } ;