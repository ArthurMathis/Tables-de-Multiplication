class FormatTableMultiplication{
    constructor(debut, ligne, fin, trou){
        this.debut = debut;
        this.ligne = ligne;
        this.fin = fin;
        this.trou = trou;
    }

    remplace(c){
        const l = this.ligne.split([this.trou]);
        const res = c[0] * c[1];
        return  "<span class=\"lig\">" + c[0] + "</span>" + l[1] + "<span class=\"lig\">" + c[1] + "</span>" + l[2] + "<span class=\"result\">" + res + "</span>";
    }

    HTMLTable(n, nblignes){
        let res = '';
        for(let i = 0; i < nblignes; i++){
            const object = this.remplace([n,i]);
            res += object;
            console.log(object);
        }
        return res;
    }

    HTMLTableListeFormat(n, nblignes){
        let res = '<li>';
        for(let i = 0; i < nblignes; i++){
            res += "<ul>" + this.remplace([n,i]) + "</ul>";
        }
        res += "</li>"
        return res;
    }
}

function ecrireTableMultiplication(n,nblignes) {
    const table = new FormatTableMultiplication(n, "$ x $ = $", nblignes, '$');
    document.getElementById("tablemult").innerHTML = table.HTMLTableListeFormat(table.debut, table.fin);
}
  
  function init(event) { ecrireTableMultiplication(5,12); }
  window.addEventListener("load", init, false);