const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
We will create an application where we will register people into an array. 
We will have a functionat that allows the host to check the registry to see all the user registered.
Use a for loop to go through all the users registered

This application also allows the host add users to the banned list and check them when they need to

CHALLENGE, when adding a user, if the user exist in the ban list, do not add the user
- hint, you will need a boolean to check... let checkBan = false...

CHALLENGE 2, use the settings to allow the adding the go through or not

first let people add their name into registry, ask for their name in addusertoregistry then push it to keep track of all names added  
call addusertoregistry to ask question of their name to be added
use for loop to go through all the names added through addusertoregistry
when they type check it should give them a list of the people the have typed their name in addusertoregsitry
Challenge 1:
let checkban = false
ask user who they want to ban
when they enter a name check to see if the banned user is already there, if it is tell them they are already banned
if not tell them they have successfully banned them
if users type check ban it will show a list of the people written on the banned list
Challenge 2: when users are asked what to do and they type add register, it will switch addregistry to false
when they type register after that, it will deny their access

*/

let users = [];
let banned = [];
let settings = {
  addRegistry:true,
  checkRegistry:true,
  banPerson:true,
  checkBans:true
}

function AddUserToRegistry() {
  if(settings.addRegistry === true) {

  readline.question("what is your name: ", _name => {
    users.push(_name);
    console.log(users);
    StartApp();
  }) 
}
  else {
    console.log("Permission denied");
}
  //user readline to prompt for the name of the user to be added
}

function CheckRegistry() {
  for(let n=0; n< users.length; n++) {
    console.log(`Here are the people registered: ${users[n]}`)
  }
  //loop through all the users and log them
}

function BanUser(){
  readline.question("Enter the name of the person you would like to ban: ", _ban => {
    let checkBan= false;
    for(let i=0; i < banned.length; i++) {
      if (banned[i] === _ban) {
        checkBan = true;
        banned.push(_ban);
        break;
      }
    }
    if (checkBan) {
      console.log(`${_ban} is already banned`);
    } else {
      banned.push(_ban); {
        console.log(`${_ban} has been banned`);
      }
      StartApp();
    }
  })
  //use readline to prompt for the name of the user to be banned
}

function CheckBanned(){
  for(let b=0; b<banned.length; b++) {
console.log(`Banned user: ${banned[b]}`);
  }
  //loop through all the banned users and log them
}

function StartApp() {
  readline.question("Welcome, What would you like to do? ", (_command) => {
    
    //add other commands here to add

  if(_command === "register") {
    AddUserToRegistry();
  }
   else if(_command ==="check") {
    CheckRegistry();
  }
   else if (_command ==="ban") {
    BanUser();
  }
   else if (_command === "check ban") {
    CheckBanned();
  }
   else if (_command === "add register") {
    settings.addRegistry = !settings.addRegistry;
    StartApp();
  } 
   else if (_command !== "quit") {
      StartApp();
    } else {
      readline.close();
    }
  });
}

StartApp();
