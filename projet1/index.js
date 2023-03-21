function addition(a,b){
    return a+b;
}



function sommation(tableau){
    let nombre=tableau.length;
    let somme=0;
    for(i=0; i<nombre; i++){
        somme+=tableau[i]
    }

    return somme;
}

function toUpper(chaineDeCaractere){
    let tabChaine1=chaineDeCaractere.split('');
    let tabChaine2=[];

    for(i=0;i<tabChaine1.length;i++){
         let letter=tabChaine1[i];
         let majLetter=letter.toUpperCase();
         tabChaine2.push(majLetter);
    }

    return tabChaine2.join('')
    
}

function comptage(chaineTableau){
    let totalCaractere=[];
    let nombres;

    for(i=0;i<chaineTableau.length;i++){
        totalCaractere=totalCaractere.concat(chaineTableau[i].split(''));
        
    };

    return totalCaractere.length;
}

function clesObjet(objet){
    Object.keys(objet);
}

function isPair(valeur){
    let reste= valeur%2;
    if(reste==0){
        return true
    }else{
        return false;
    }
}


function nombresPaires(valeurs){
    let Paires=[];

    for(i=0;i<valeurs.length;i++){

        let chiffre=valeurs[i];
        if(isPair(chiffre)){
            Paires.push(chiffre)
        }
    }

    return Paires;
}

function longMots(motsTab){
    let longs=[];


    for(i=0;i<motsTab.length;i++){
        let motTab=motsTab[i].split('');

        if(motTab.length>5){
            longs.push(motsTab[i])
        }
    }

    return longs
}

function racinesCarres(racines){
    let racinesCar=[];


    for(i=0;i<racines.length;i++){
        let racinesCarr=Math.sqrt(racines[i]);
        racinesCar.push(racinesCarr);
    }


    return racinesCar
}


function puissance(a,b){
   let calcul=a;
   let exposant=b;

   
   let j=0;
   while(j<b-1){
    calcul=calcul*a;
    j++;
   }

   return calcul;
}