// var sentence = "Hello Kashan,"
// var updated_sentence = sentence.replace("Kashan", "Tanveer")
// var updated_sentence2 = sentence.replace("Kashan", "Meerab")

// console.log(sentence)
// console.log(updated_sentence)
// console.log(updated_sentence2)


// Rounding Numbers

// var score = 299.4

// var rounded_score = Math.round(score)
// console.log(score)
// console.log(rounded_score)

// var calc = .00000012
// console.log(Math.ceil(calc))

// var score = 299.1

// var rounded_score = Math.floor(score)
// console.log(score)
// console.log(rounded_score)



// Math.random

var user_prompt = prompt("Enter any number")
var random = Math.random() * 10

var random_number = Math.floor(random)
console.log(random_number)
if (user_prompt == random_number) {
    console.log("Hurry You are right")
} else {
    console.log("sorry you are failed try again")
}