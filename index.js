var num = parseInt(prompt("zadej číslo"))-1;

for (let y = 0; y < num;y++) {
  for (let i = 2; i <= num/2; i++) {
    if ((num % i) == 0) {
      i = 1;
      num--;
    }
  }

  var x = (""+num).split("");
  for (let i = 0; i <= x.length; i++) {
    for (let j = 0; j <= x.length; j++) {
      if(x[i] == x[j] && i != j) {
        num--;
        y = 0;
        break;
      }
    }
  }
}

document.write(num);
function reload() { document.location.reload() }
