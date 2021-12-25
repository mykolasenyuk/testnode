// const dotenv = require('dotenv')
// console.log(process.pid)
// console.log(process.env.PORT)
// console.log(process.env.NODE_ENV)

// console.log(process.argv)
// const path = require('path')
// console.log(path.join(__dirname, 'first', 'second'))
// const fullPath = path.resolve(__dirname, 'first', 'second.js')
// console.log(path.parse(fullPath))

// const siteUrl = 'http://lo calhost:5001/users?id=323'
// const url = new URL(siteUrl)
// console.log(url)

// console.log('start')
const fs = require('fs')
const path = require('path')
const writeFileAsync = async (path, data) => {
  return new Promise((resolve, reject) =>
    fs.writeFile(path, data, (err) => {
      if (err) {
        return reject(err.message)
      }
      resolve()
    }),
  )
}

const appendFileAsync = async (path, data) => {
  return new Promise((resolve, reject) =>
    fs.appendFile(path, data, (err) => {
      if (err) {
        return reject(err.message)
      }
      resolve()
    }),
  )
}

const readFileAsync = async (path) => {
  return new Promise((resolve, reject) =>
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        return reject(err.message)
      }
      resolve(data)
    }),
  )
}

const removeFileAsync = async (path) => {
  return new Promise((resolve, reject) =>
    fs.rm(path, (err) => {
      if (err) {
        return reject(err.message)
      }
      resolve()
    }),
  )
}

const text = '1 2 3 4 tyu'
// writeFileAsync(path.resolve(__dirname, 'text.txt'), text)
//   .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
//   .then((data) => data.split(' ').length)
//   .then((count) =>
//     writeFileAsync(path.resolve(__dirname, 'count.txt'), `words ${count}`),
//   )
//   .then(() => removeFileAsync(path.resolve(__dirname, 'text.txt')))

const os = require('os')
// console.log(os.platform())
console.log(os.arch())
console.log(os.cpus().length)

// if (cluster.isMaster) {
//   for (let i = 0; i < os.cpus().length - 2; i++) {
//     cluster.fork()
//   }
//   // cluster.on('exit', (worker, code, signal) => {
//   //   console.log(`Воркер с pid = ${worker.process.pid} умер`)
//   //   // if(code ===) {
//   //   //     cluster.fork()
//   //   // } else {
//   //   //     console.log('Воркер умер...')
//   //   // }
//   // })
// } else {
//   console.log(`Воркер с pid= ${process.pid} запущен`)

//   setInterval(() => {
//     console.log(`Воркер с pid= ${process.pid} еще работает`)
//   }, 5000)
// }
