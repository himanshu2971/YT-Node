// started operating system process
console.log('first')
// setTimeout fxn is asynchronous so it gets offloaded
setTimeout(() => {
  console.log('second')
}, 3)
console.log('third')
// completed and exited operating system process