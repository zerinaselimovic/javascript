//Саставити програм којим се исписују сви троцифрени бројеви (ако их има) који су једнаки
//суми факторијела својих цифара.


function fakt(broj){
    rezultat=1;

    for(let i=1; i <= broj; i++){
        rezultat *= i;
    }
    return rezultat;
}
for (let i=100; i <= 999; i++){
    let a = parseInt(i/100)
    let c = i % 10
    let b = (i - (a * 100) - c) / 10
    

    if (fakt(a) + fakt(b) + fakt(c) === i)
  
    console.log(i);
}