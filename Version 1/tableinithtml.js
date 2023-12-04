function debutHTMLTableMultiplication(n){
  return "<p>Table de multiplication de <pan>" + n + "</span></p>";
}

function ligneHTMLTableMultiplication(n,numligne){
  const res = n * numligne;
  return "<li><pan class=\"lig\">" + n + "</span> x <span lass=\"num\">" + numligne + 
        " = <span class=\"result\">" + res + "</span></li>";
}

function finHTMLTableMultiplication(n){
  let c = [];
  c.push(debutHTMLTableMultiplication(n));
  for(let i = 0; i < 12; i++){
    c.push(ligneHTMLTableMultiplication(n,i));
  }
  return c.join(',');
}

function HTMLTableMultiplication(n,nblignes){
  let c = [];
  c.push(debutHTMLTableMultiplication(n));
  for(let i = 0; i < nblignes; i++){
    c.push(ligneHTMLTableMultiplication(n,i));
  }
  return c.join(' ');
}

/*console.log(debutHTMLTableMultiplication(1));
console.log(ligneHTMLTableMultiplication(1,2));
console.log(HTMLTableMultiplication(3,15));*/

let htmlTable = HTMLTableMultiplication;
function ecrireTableMultiplication(n,nblignes) {
  document.getElementById("tablemult").innerHTML = htmlTable(n,nblignes);
}

function init(event) { ecrireTableMultiplication(5,12); }
window.addEventListener("load", init, false);