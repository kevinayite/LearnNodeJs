const readline = require('readline');
const rl = readline.createInterface({ input : process.stdin,
                            output : process.stdout
});

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let answer = num1 + num2;


rl.question(`What is ${num1} + ${num2}? \n`,
    (userInput)=>{
        //console.log(userInput);
        if(userInput.trim() == answer){
            rl.close(); // here we are calling close when the user get the answer right
        }
        else{
            rl.setPrompt('Incorrect response, please try again \n'); // etting the prompt
            rl.prompt(); // We are calling the prompt now
            rl.on('line', (userInput)=>{ //The 'line' event is triggered whenever the user enters a line of input and presses Enter.
                if(userInput.trim() == answer)
                    rl.close();
                else{
                    rl.setPrompt(`Your answer of ${ userInput } is incorrect try again \n`);
                    rl.prompt();
                }
            })
        }
    }
);
// Here we are creating a listener, that will be called after rl.close that why we can see  that 
// rl.on('close') close is in the parenthesis
rl.on('close',()=> {
    console.log('Correct!');
});