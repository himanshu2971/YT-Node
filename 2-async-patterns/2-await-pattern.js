const { readFile, writeFile } = require('fs').promises
//This line imports the readFile and writeFile functions from the fs module and utilizes the .promises property to access the promise-based versions of these functions. 
//By using promises, we can use async/await syntax to handle asynchronous operations.
const start = async () => {
  try {
    const first = await readFile('../content/first.txt', 'utf8')
    const second = await readFile('../content/second.txt', 'utf8')
    await writeFile(
      '../content/result-mind-grenade.txt',
      `THIS IS AWESOME : ${first} ${second}`,
      { flag: 'a' }
    )
    console.log(first, second)
  } catch (error) {
    console.log(error)
  }
}

start()