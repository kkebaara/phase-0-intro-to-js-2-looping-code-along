// Code your solutions in this file

//function called writeCards()
//takes 2 arguments array and event
//for loop with a counter starts at 0
//increments at end of each loop
// creat a custom message for each name
//collect the messages and add them to the new array 
//return final array 

function writeCards(array, event){

    let messages = []

    for(let i = 0; i < array.length; i++){
        messages.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return messages
}


function countDown(x){
    let num = x;
    while (num > -1) {
      console.log(num --);
      } 
    };