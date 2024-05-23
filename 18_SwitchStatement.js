// switch statement


// example using if else if statement

// let day = +prompt();


// if(day === 0){
//     console.log("sunday")
// }else if(day === 1){
//     console.log("Monday")
// }else if(day === 2){
//     console.log("Tuesday")
// }else if(day === 3){
//     console.log("wednesday")
// }else if(day === 4){
//     console.log("Thursday")
// }else if(day === 5){
//     console.log("Friday")
// }else if(day === 6){
//     console.log(saturday)
// }else{
//     console.log("wrong Number")
// }


// using switch statement

// let days = +prompt();

// switch(days){
//     case 0:
//         console.log("Its sunday");
//         break;
//     case 1:
//         console.log("Its monday");
//         break;
//     case 2:
//         console.log("Its Tuesday")
//         break;
//     case 3:
//         console.log("Its Wen")
//         break;
//     case 4:
//         console.log("it thurday")
//         break;
//     case 5:
//         console.log("its friday")
//         break;
//     case 6:
//         console.log("its saturaday")
//         break;
//     default:
//         console.log('wrong number')
// }



let day = 3 
let dayName ;
switch(day){
    case 1 :
        dayName = "monday"
        break;
    case 2:
        dayName = 'TuesDay'
        break;
    case 3:
        dayName = 'Wen'
        break;
    case 4:
        dayName = 'Thurday'
        break;
    case 5:
        dayName = 'Friday'
        break;
    case 6:
        dayName = 'sat'
        break;
    default:
        dayName = 'wrong number'


}

console.log(dayName)