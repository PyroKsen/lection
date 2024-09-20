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
}

const addDeadPerson = (person) => {
    const path = getPath('\/people.json')
    const peopleList = JSON.parse(fs.readFileSync(path))
    console.log(peopleList)
    const namePerson = person.name
    const deadManIndex = peopleList.alive.findIndex(({name}) => name === namePerson)
    console.log(deadManIndex)
    // const deadMan = peopleList.alive.find(({name}) => name === namePerson)
    peopleList.alive.splice(deadManIndex, 1)
    peopleList.dead.push(person)
    fs.writeFileSync(path, JSON.stringify(peopleList, null, 2))
}

setPerson({name: 'vova1'})
setPerson({name: 'vova2'})
setPerson({name: 'vova3'})
addDeadPerson({name: 'vova2'})

export default setPerson