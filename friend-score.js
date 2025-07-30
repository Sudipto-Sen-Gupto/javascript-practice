/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
let yourMark=parseInt(prompt("Enter your mark="));
console.log("Your mark is=");

if(yourMark>=80)
{
    let yourFriendMark=parseInt(prompt("Enter your friend mark="));
    if(yourFriendMark>=80);{
        console.log("Let's go for lunch bro.");
    }
        if (yourFriendMark<=80 && yourFriendMark>=60){
          console.log("Good Luck, Next time.");
    }

    else{
        if(yourFriendMark<=60 && yourFriendMark>=40){
        console.log("Friends message unseen");
    }
    else{
        console.log("Block your friend");
    }
}

}
else{
    console.log("Go to home . Sleep and act as sad.");
}