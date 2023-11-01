// Саставити програм којим се исписују сви троцифрени Амстронгови бројеви. Троцифрени
// број је Амстронгов ако је једнак суми кубова својих цифара. Формирати две функције, једна за
// рачунање суме кубова, а друга за одређивање да ли је дати број Амстронгов (ако јесте враћа 1, ако
// није враћа 0).




function sumaKubova(broj){
    let a = parseInt(broj/100)
    let c = broj % 10
    let b = (broj - (a * 100) - c) / 10

    return Math.pow(a,3) + Math.pow(b,3) + Math.pow(c,3)
}

function isArmstrong(broj){
    if(sumaKubova(broj) === broj)
    return true;
return false
}

for(let i=100; i<=999; i++){
    if(isArmstrong(i))
    console.log(i);
}