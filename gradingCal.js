/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
var studentScore=parseInt(prompt("Enter your mark="))
console.log("Your mark=",studentScore);

if(80<=studentScore<=100){

    console.log("Congratulation .You have got A+");
}
else if(70<=studentScore<=80){
    console.log("Very good. You have got A");
}
else if (60<=studentScore<=70){
    console.log("Good, You have got A-");
}
else if(50<=studentScore<=60){
    console.log("Not good, You have got B");
}

else if(40<=studentScore<=50){
    console.log("Bad . You have got C");
}
else if(33<=studentScore<=40){
    console.log("Very bad. You have got D");
}
else{
    if(studentScore>100){
        console.log("Not valid number");
    }
    else{
        console.log("You are fail");
    }
}