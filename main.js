const sueldo = () => {
    let sueldoBruto;

    do {
        sueldoBruto = parseFloat(prompt("Ingrese su sueldo bruto"));
    } while (sueldoBruto <= 0 || isNaN(sueldoBruto) || sueldoBruto === " ");
    return sueldoBruto;
};

const condicionConvenio = () => {

    let convenio = 0

    while (convenio > 2 || convenio < 1 || isNaN(convenio)) {
        convenio = prompt("Ingrese su situación laboral\n1)BAJO CONVENIO\n2)FUERA DE CONVENIO");
    };
    return (convenio)
};

const descuento = (dentroDeConvenio) => {

    if (dentroDeConvenio) {
        
        return 0.795;
    } else {
        return 0.83;
    };
};



const ganancias = (haberesSinAportes) => {

    let iigg = 0.35;
    let iiggMedium = 0.20;

    if (haberesSinAportes >= 150000) {
        return iigg;
    } else if (haberesSinAportes >= 100000) {
        return iiggMedium;
    } else {
        return 0.0;
    }
};

const cierre = (impGanancias, haberesSinAportes) => {

    let sFinal = haberesSinAportes * (1 - impGanancias);
    return sFinal;
};

const continua = () => {
    let avanzar = confirm("¿Desea hacer otra consulta?")

    if (!avanzar) {
        alert("Muchas gracias por utilizar nuestro servicio");
    }
    return avanzar;
};





const liquidar = () => {
    let sueldoBrutoIngresado = sueldo();
    console.log(sueldoBrutoIngresado);

    //1-BAJO CONVENIO 2 FUERA DE CONVENIO

    let situacionConvencional = condicionConvenio();
    console.log(situacionConvencional);
    let importeDescuento = descuento(situacionConvencional == 1);
    console.log(importeDescuento);
    let haberesSinAportes = sueldoBrutoIngresado * importeDescuento;
    console.log(haberesSinAportes);
    
    //alert("Su sueldo neto es $" +""+ haberesSinAportes);
    let impGanancias = ganancias(haberesSinAportes); 
    //alert("Su impuesto es $" + "" + haberesSinAportes * impGanancias);
    console.log(impGanancias);
    let sueldoFinal = cierre(impGanancias, haberesSinAportes);
    //alert("Su sueldo final será $" + "" + sueldoFinal);
    alert("Sueldo bruto: $"+""+sueldoBrutoIngresado+"\n"+
    "Dentro de Convenio: "+""+situacionConvencional+"\n"+
    "Sueldo neto s/retención: $"+""+haberesSinAportes+"\n"+
    "% IIGG:"+""+impGanancias+"\n"+
    "Su sueldo final será: $"+""+sueldoFinal);
    console.log(sueldoFinal);
};

do {
    liquidar()
}
while (continua());