const fs = require('fs')

const readMovies = () => {

  const filePath = '/home/fbzpanatto/codenation/nodejs-5/imdb-movies.json'

  return new Promise(function(resolve, reject){
    try{
      fs.readFile(filePath, 'utf-8', (err, data) => {
        if(err) {
          reject(err)
        }
        resolve(JSON.parse(data))
      })
    } catch (err) {
      reject(err)
    }
  })
}

module.exports = {
  readMovies
}