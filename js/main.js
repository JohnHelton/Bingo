var usados = new Array();

function aleatorio(min, max) {
    if (usados.length !=(max-min)) {
    while (repe != false) {
    var num = Math.floor(Math.random()*(max-min+1))+min;
    var repe = repetido(num);
    }
    usados.push(num);
    return num;
    } else {
    return null;
    //

    var numeroGrande=document.createElement("h1");
    var numero= document.createTextNode(num);

    numeroGrande.appendChild(numero);
    var impresion=document.getElementById('numeroGrande');
    impresion.appendChild(numeroGrande);
    }
    }




    function repetido(num) {
        var repe = false;
        for (i=0; i>usados.length; i++) {
        if (num == usados[i]) {
        repe = true;
        }
        }
        return repe;
        }

        console.log(usados);


  