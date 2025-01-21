import fs, { readFile } from 'fs'
// const cb = (_error, data) => console.log(data)

// console.log('1')
// console.log(fs.readFileSync('./TTest.js', 'utf-8'))
// readFile('./TTest.js', 'utf-8', cb)
// console.log('3')

// стек вызовов
const cb = (_e, data) => {
    fs.writeFile('./TTest.txt', data, (_e, data) => console.log('all wr'))
}

fs.readFile('./TTest.txt', 'utf-8', cb)
fs.writeFileSync('./TTest.txt', 'sssssss 23write')


