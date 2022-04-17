const sueldo = () => {
    let sueldoBruto;

    do {
        sueldoBruto = parseFloat(prompt("Ingrese su sueldo bruto"));
    } while (sueldoBruto <= 0 || isNaN(sueldoBruto) || sueldoBruto === " ");
    alert("Su sueldo ingresado es :" + " " + sueldoBruto);
    return sueldoBruto;
};

const condicionConvenio = () => {

    let convenio = prompt("Ingrese su situación labora\n1)BAJO CONVENIO\n2)FUERA DE CONVENIO");

    while (convenio > 2 || convenio < 1 || isNaN(convenio)) {
        convenio = prompt("Ingrese su situación laboral\n1)BAJO CONVENIO\n2)FUERA DE CONVENIO");
    };
    return (convenio)
};

const descuento = (aportes) => {
    if (aportes == 1) {
        return 0.795;
    } else {
        return 0.83;
    };
};

const sueldoNeto = (situacion, aportes, haberes) => {

    if (situacion == 1) {
        alert("Su sueldo neto es " + "$" + haberes * aportes)
        return (parseFloat(haberes * aportes));
    } else {
        // El else hace lo mismo q el if
        alert("Su sueldo neto es " + "$" + haberes * aportes)
        return parseFloat((haberes * aportes));
    }
};

const ganancias = (haberesSretencion) => {

    let iigg = 0.35;
    let iiggMedium = 0.20;
     // haberesSinAportes no es una variable local, la intencion era usar el parametro haberesSretencion? 
    if (haberesSinAportes > 150000) {
        alert("Su impuesto es $" + "" + haberesSinAportes * iigg);
        return iigg;
    } else if (haberesSinAportes <= 149999 && haberesSinAportes > 100000) {
        alert("Su impuesto es $" + "" + haberesSinAportes * iiggMedium);
        return iiggMedium;
    } else {
        alert("Ud.no debe pagar IIGG");
        // Aca falta el return 0; (Asi la funcion cumple su proposito, devolver el % IIGG)
    }
};

const cierre = (impuesto, limpio) => {
    // No llamar a variables globales, usar los parametros y agregar los que faltan. El parametro 'limpio' no se utiliza
    let sFinal = haberesSinAportes - (impGanancias * haberesSinAportes);
    // Esta logica se puede simplificar. El while y sus breaks no son necesarions, el else vacio tambien puede volar
    while (impuesto != "") {
        let sFinal = haberesSinAportes - (impGanancias * haberesSinAportes);
        if (isNaN(sFinal) || haberesSinAportes < 100000) {
            alert("Su sueldo final será $" + "" + haberesSinAportes)
            break
        } else {}
        alert("Su sueldo final será $" + "" + sFinal);
        break;
    }
    return sFinal;
};

const continua =()=> {
let avanzar = confirm ("¿Desea hacer otra consulta?")

if(avanzar===true){
 alert("Si desea realizar otra consulta presione F5 y reinicie el simulador")
}else{
    alert("Muchas gracias por utilizar nuestro servicio");
};

}

// Todo esto va dentro de una nueva funcion, e.g. liquidar ------------------------------------>
let sueldoBrutoIngresado = sueldo();
console.log(sueldoBrutoIngresado);
let situacionConvencional = condicionConvenio();
console.log(situacionConvencional);
let importeDescuento = descuento(situacionConvencional);
console.log(importeDescuento);
let haberesSinAportes = sueldoNeto(situacionConvencional, importeDescuento, sueldoBrutoIngresado);
console.log(haberesSinAportes);
let impGanancias = ganancias(haberesSinAportes);
console.log(impGanancias);
let sueldoFinal = cierre(impGanancias);
console.log(sueldoFinal);
//<-----------------------------------------------------------------------------------------------

// Para iniciar el programa, y dejarlo en bucle, se puede llamar a las funciones 'liquidar' y 'continua' en un do-while 
