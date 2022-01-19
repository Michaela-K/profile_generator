const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "What's your name? Nicknames are also acceptable :)? ",
  (answer1) => {
    console.log(`Oh cool name ${answer1}`);
    rl.question("What's an activity you like doing? ", (answer2) => {
      console.log(`Whoa ok then, ${answer2} is awesome!`);
      rl.question("What do you listen to while doing that? ", (answer3) => {
        console.log(`Well, ${answer3} is the best!`);
        rl.question(
          "Which meal is your favourite (eg: dinner, brunch, etc.)",
          (answer4) => {
            console.log(`Oh, ${answer4} is my fav too!`);
            rl.question(
              "What's your favourite thing to eat for that meal?",
              (answer5) => {
                console.log(`${answer5} is delicious!`);
                rl.question(
                  "What is your superpower? In a few words, tell us what you are amazing at!",
                  (answer5) => {
                    console.log(`${answer5} is unbelieveable!`);
                    rl.close();
                  }
                );
              }
            );
          }
        );
      });
    });
  }
);
