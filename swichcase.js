// for(let i=1; i<=10; i++){
//     console.log('neka poruka');

//     if(i===5) continue;//preskace broj 5
//     console.log(i);
// }
////////////////////////////////////////////////

// for( let i=1; i<=20; i++){
    
//     if(i % 3===0)
//         continue;
        
//     console.log(i);
// }

////////////////////////////////////////////////////////////////////

//sastaviti program da ispisuje na ekranu da li je uneto glasnik ili suglasnik

// let slovo=prompt('unesite slovo');

// switch(slovo){
//     case 'a':
//         console.log('slovo je samoglasnik')
//         break;
//     case 'e':
//         console.log('slovo je samoglasnik');
//         break;
//     case 'i':
//         console.log('slovo je samoglasnik');
//         break;
//      case 'o':
//         console.log('slovo je samoglasnik');
//         break;
//     case 'u':
//         console.log('slovo je samoglasnik');
//         break;


// }
////////////////////////////////////////

// let godina=parseInt(prompt("unesite godinu:"));
// let mesec=parseInt(prompt("unesite mesec"))

// switch(mesec){
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:   
//         console.log("31");
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log("30");
//         break;
//     case 2:
//         if((godina % 4 === 0 && 100 !=0) || (godina % 400 === 0))    {
//             console.log("29");
//         }
//         else{
//             console.log("28");
//         }
//         break;

//         default:
//             console.log("mesec nije dobar");
//             break;
        
       
// }

/////////////////////////////////////////////////////

let godina=parseInt(prompt("unesite godinu"));
let mesec=parseInt(prompt("unesite mesec"));
let dan=prompt("unesite dan");
let d=0;

switch(mesec){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        d=31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        d=30;
        break;
    case 2:
        if((godina % 4 === 0 && 100 !=0) || (godina % 400 === 0))    {
                        d=29;
                    }
                    else{
                        d=28;
                    }
                    break;
            
     default:
      console.log("mesec nije dobar");
   
      if(dan===d){
        dan=1;
        mesec++;
      }
      else{
        dan++;
      }
      if(mesec<12){
        mesec=1;
        dan=1;
        godina++
      }

}
console.log(dan, mesec, godina);


