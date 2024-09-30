// import fs from 'fs';
// import path from 'path';
// import readlineSync from 'readline-sync';
// import { match } from 'assert';
// import Animals from '../classes/animals.js';
import Apache from '../classes/apache.js';
import Dogs from '../classes/dogs.js';
// import Item from '../classes/item.js';
import Rednek from '../classes/rednek.js';
import Tamagavk from '../classes/tamagavk.js';
// import Tools from '../classes/tools.js';
// import TribeMember from '../classes/tribeMember.js';
// import Weapon from '../classes/weapon.js';

import { setPerson, addlivePerson } from '../utility.js';

const Vitaly = new Apache('Vitaly');
Vitaly.getDescription();
setPerson(Vitaly);
const Daniil = new Rednek('Daniil');
Daniil.getDescription();
setPerson(Daniil);
const Jon = new Tamagavk('Jon');
Jon.getDescription();
setPerson(Jon);

// const Boby = new Dogs('Вoby');
// console.log(Boby)
// console.log(Jon)

// Jon.tame(Boby)
// Jon.tame(Boby)
// Jon.tame(Boby)
// Jon.tame(Boby)
// Jon.tame(Boby)
// Jon.tame(Boby)
// Jon.tame(Boby)
// Jon.train(Boby)

// console.log(Boby)
// console.log(Jon)

// const motiga = new Tools('motiga')
// Vitaly.addTool(motiga)

// const axe = new Weapon('axe')
// Daniil.addTool(axe)
// Daniil.getToolList()
