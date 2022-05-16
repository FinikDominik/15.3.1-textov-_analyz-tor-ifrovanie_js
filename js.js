let Divcont = document.getElementById('container');

//              vyhladaj vyraz v texte

let btnVyhl = document.getElementById('btnvyhl');
    btnVyhl.onclick = function(event){
        event.preventDefault();
        let vlozText = document.getElementById('Vloztext').value;
        let searchValue = (document.getElementById('input1').value);
        let result = vlozText.includes(searchValue);
        
        // zápis vysledku do div
        let res = document.getElementById('res');
        if(res.innerHTML !== null || "" ) {
            res.innerHTML = "";
        }

        if( result == true) {
            res.style.color = 'greenyellow';
            res.innerHTML += 'Hladaný výraz sa v texte nachádza :-)';
        }else {
            res.style.color = 'red';
            res.innerHTML += 'Hladaný výraz sa v texte nenachádza :-(';
        }
}
let btnanal = document.getElementById('btnanal');
    btnanal.onclick = function(event){
        event.preventDefault();
        let vlozText = document.getElementById('Vloztext').value;
        
        // dlžka textu
        let N = vlozText.toString().length;

        // dlžka textu bez medzier
        let M = vlozText.replaceAll(' ', '');
        let NM = M.toString().length;

        // počet číslic
        reg = vlozText.replace(/[^0-9]/g, "");
        let Nreg = reg.toString().length;

        // najdlhšie slovo  -  dlžka slova  
        let PureWords = vlozText.replace(/[^a-žA-ž ]/g," ");
        let NS = PureWords.split(' ');

        function NajdiDlskuSlova(str) {
            let longestWord = 0;
                for(let i = 0; i < NS.length; i++){
                    if(NS[i].length > longestWord){ 
                    longestWord = NS[i].length; 
                     }
                }
                return longestWord; 
        }
        DlskaSlova = NajdiDlskuSlova(PureWords);

        // najdlhšie slovo  -  vypis slova  

        let Najdlhsie = NS.reduce(
            function (a, b) {
                return a.length > b.length ? a : b;
            }
        );

        // vytvorenie zápisu vysledkov do div

        if(Divcont.innerHTML !== null || "" ) {
            Divcont.innerHTML = "";
        }
        Divcont.innerHTML += "<p>" + "Dlžka textu:   " + N + "<br>" + "Dlžka textu bez medzier:   " + NM + "<br>" + "Počet číslic:   " + Nreg + "<br>" + "Najdlhšie slovo:   " + Najdlhsie + "<br>" +  "Počet písmen najdlhšieho slova:   " + DlskaSlova + "</p>";    

}
 //         šifrovanie textu

let btnSif = document.getElementById('btnSif');
    btnSif.onclick = function(event){
        event.preventDefault();
        let vlozText = document.getElementById('Vloztext').value;
        let sif = vlozText.replaceAll('O', '0');
        let sif2 = sif;
        let sif3 = sif2.replaceAll("o", "0");
        let sif4 = sif3;
        let sif5 = sif4.replaceAll("I", "1");
        let sif6 = sif5;
        let sif7 = sif6.replaceAll("i", "1");
        let sif8 = sif7;
        let sif9 = sif8.replaceAll("E", "3");
        let sif10 = sif9;
        let sif11 = sif10.replaceAll("e", "3");
        let sif12 = sif11;
        let sif13 = sif12.replaceAll("A", "4");
        let sif14 = sif13;
        let sif15 = sif14.replaceAll("a", "4");
        let sif16 = sif15;
        let sif17 = sif16.replaceAll("S", "5");
        let sif18 = sif17;
        let sif19 = sif18.replaceAll("s", "5");
        let sif20 = sif19;
        let sif21 = sif20.replaceAll("B", "8");
        let sif22 = sif21;
        let sif23 = sif22.replaceAll("b", "8");

        // vytvorenie zápisu vysledkov do div

        if(Divcont.innerHTML !== null || "" ) {
            Divcont.innerHTML = "";
        }
        Divcont.innerHTML += "<p>" + sif23 + "</p>"; 
}
