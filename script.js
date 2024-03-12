function runFizzBuzz() {
// When a user inputs a number
let userInput = Number(prompt('enter a number you would like to "FizzBuzz" to: '))

// Loop from 1 to the entered number


for (let counter = 1; counter <= userInput; counter++) {

  // If the current number is divisible by 3 and 5 then print "FizzBuzz"
  if (counter % 3 === 0 && counter % 5 === 0) {
    console.log('FizzBuzz')
  }

  // If the current number is divisible by 3 then print "Fizz"
  else if (counter % 3 === 0) {
    console.log('Fizz')
  }

  // If the current number is divisible by 5 then print "Buzz"
  else if (counter % 5 === 0) {
    console.log('Buzz')
  }

  // Otherwise print the current number
  else {console.log(counter)
  }
}


}