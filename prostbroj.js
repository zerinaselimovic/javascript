// Саставити програм који исписује све просте бројеве мање од 500. Користити функцију за
// одређивање простих бројева



function ProstBroj(broj) {
    if (broj <= 1)
        return false
    for (let i = 2; i < broj; i++) {
        if (broj % i === 0)
            return false
    }
    return true
  }
  
  
  for (let i = 1; i <= 500; i++) {
    if (ProstBroj(i) === true)
        console.log(i)
  }
  
  let unetiBroj = prompt("Unesite broj:");
  let broj = parseInt(unetiBroj);
  
  
    if (ProstBroj(broj)) {
      alert(`${broj} je prost broj.`);
    } else {
      alert(`${broj} nije prost broj.`);
    }