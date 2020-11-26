// function sayHelloTo(name) {
//  let sign = '?!'
//  const message = 'Hello' + ' ' + name
//  return (sign) => message + sign
// }
// let name = 'Roman'
// say = sayHelloTo(name)
// console.log(say('!')) // Hello Roman!
// name = 'Oleg'
// say2 = sayHelloTo(name)
// console.log(say2('?')) // Hello Oleg?

function createFrameworkManager() {
  const fw = []

  return {
    print() {
      console.log(fw.join(', '))
    },
    add(name) {
      fw.push(name)
    }
  }
}

// frameworks = createFrameworkManager()
// frameworks.print()
// frameworks.add('Vue')
// frameworks.add('React')
// frameworks.print()

const fib = [1,2,3,5,8,13]

const log = (iterator, time) => {
  return setTimeout(() => console.log(iterator), time)
} 
console.log(fib)
for (let i = 0; i < fib.length; i++) {
  log(fib[i], 1000 * i)
}
