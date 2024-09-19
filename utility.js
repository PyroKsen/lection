import fs from 'fs'
import path from 'path'
import readlineSync from 'readline-sync'

const getPath = (fPath) => {
    return path.resolve() + fPath
}

const setPerson = (person) => {
    const path = getPath('\/people.json')
    const peopleList = JSON.parse(fs.readFileSync(path))
    peopleList.alive.push(person)
    fs.writeFileSync(path, JSON.stringify(peopleList, null, 2))
    console.log(peopleList)
}

// const addDeadPerson = (person) => {
//     const path = getPath('\/people.json')
//     const peopleList = JSON.parse(fs.readFileSync(path))
//     const namePerson = person.name
//     const deadMan = peopleList.alive.filter(({name}) => name === namePerson)
    
//     const newArrayDead = [...peopleList.alive.slice(0, indexAlivePerson - 1), ...peopleList.alive.slice(indexAlivePerson)]
//     peopleList.dead.push(person)
//     fs.writeFileSync(path, JSON.stringify(peopleList, null, 2))
//     console.log(peopleList)
// }

export default setPerson