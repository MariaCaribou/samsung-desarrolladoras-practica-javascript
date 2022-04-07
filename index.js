const valoresDni = new Map([
    [0, "T"],
    [1, "R"],
    [2, "W"],
    [3, "A"],
    [4, "G"],
    [5, "M"],
    [6, "Y"],
    [7, "F"],
    [8, "P"],
    [9, "D"],
    [10, "X"],
    [11, "B"],
    [12, "N"],
    [13, "J"],
    [14, "Z"],
    [15, "S"],
    [16, "Q"],
    [17, "V"],
    [18, "H"],
    [19, "L"],
    [20, "C"],
    [21, "K"],
    [22, "E"],
]);

function comprobarLetraDni()
{
    let inputNumero = document.getElementById("numeroDni");
    let hayErroresDeNumero = comprobarErroresNumeros(inputNumero.value);
    
    let inputLetra = document.getElementById("letra");
    let hayErroresDeLetra = comprobarErroresLetra(inputLetra.value);
    if (hayErroresDeNumero || hayErroresDeLetra)
    {
        inputNumero.value = "";
        inputLetra.value = "";
        return false;
    }

    let letra = calcularLetra(calcularResto(inputNumero.value));
    
    let alertaLetra = document.getElementById("letraDNI");
    let alertaError = document.getElementById("error");

    if (inputLetra.value.toLowerCase() == letra.toLowerCase())
    {
        alertaLetra.innerHTML = letra + " ES CORRECTA";
        alertaError.innerHTML = "";
    }
    else
    {
        alertaError.innerHTML = inputLetra.value + " ES ERRÓNEA";
        alertaLetra.innerHTML = "";
    }

    let alertaDNI = document.getElementById("DNIcompleto");
    alertaDNI.innerHTML = inputNumero.value + letra;
    return false;
}

function comprobarErroresNumeros(valorNumero)
{
    if (valorNumero.length == "")
    {
        alert("Debe rellenar el campo NÚMERO");
        return true;
    }
    
    if (isNaN(valorNumero))
    {
        alert("El apartado NÚMERO deben ser números");
        return true;
    }
    
    return false;
}

function comprobarErroresLetra(valorLetra)
{
    if (valorLetra.length == "")
    {
        alert("Debe rellenar el campo LETRA");
        return true;
    }

    if (!isNaN(valorLetra))
    {
        alert("El apartado LETRA debe ser una letra");
        return true;
    }
    
    return false;
}

function calcularResto(numeroDni)
{
    let suma = 0;
    for(let i = 0; i < numeroDni.length; i++)
    {
        suma = suma + numeroDni[i];
    }
    return suma % 23;   
}

function calcularLetra(resto)
{
    let letrasDNI = Object.fromEntries(valoresDni.entries());
    return letrasDNI[resto];
}

