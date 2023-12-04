class ligneatrou{
    constructor(ligne, caract){
        this.ligne = ligne;
        this.c = caract;
    }

    ligneRemplie(contenu){
        let tab = this.ligne.split([this.c]);
        const res = contenu[0] * contenu[1];
        return contenu[0] + tab[1] + contenu[1] + tab[2] + res;
    }
}

function Test(){
    let lignes = new ligneatrou("$ x $ = $", '$');
    console.log(lignes.ligneRemplie([12,5]));
}

Test();