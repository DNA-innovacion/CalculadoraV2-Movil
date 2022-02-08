document.getElementById("rowSerum").style.display = "none";
document.getElementById("rowPrice").style.display = "none";
document.getElementById("rowEarn").style.display = "none";

function calcular() {

    document.getElementById("rowSerum").style.display = "block";
    document.getElementById("rowPrice").style.display = "block";
    document.getElementById("rowEarn").style.display = "block";

    valor = document.getElementById('MXN').value;

    var precio = 0;
    var unidades = 0;
    var resultado = 0;
    var ganancias = 0;

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    })


    if (valor < 35000 || valor == null) {
        document.getElementById('MXN').value = "Inversión minima de 35,000 MXN"
        document.getElementById("rowSerum").style.display = "none";
        document.getElementById("rowPrice").style.display = "none";
        document.getElementById("rowEarn").style.display = "none";
        console.log('invalido')
    }
    else if (valor > 34999 && valor < 50000) {
        precio = 230;
        unidades = Math.round(valor / precio);
        resultado = 299 * unidades;
        ganancias = resultado - valor;

        document.getElementById('ctSerums').value = unidades;
        document.getElementById('PrecioVenta').value = precio;
        document.getElementById('ganancias').value = formatter.format(ganancias);
        document.getElementById('MXN').value = formatter.format(valor);
    }
    else if (valor > 49999 && valor < 60000) {
        precio = 220;
        unidades = Math.round(valor / precio);
        resultado = 299 * unidades;
        ganancias = resultado - valor;

        document.getElementById('ctSerums').value = unidades;
        document.getElementById('PrecioVenta').value = precio;
        document.getElementById('ganancias').value = formatter.format(ganancias);
        document.getElementById('MXN').value = formatter.format(valor);
    }
    else if (valor > 59999 && valor < 100000) {
        precio = 210;
        unidades = Math.round(valor / precio);
        resultado = 299 * unidades;
        ganancias = resultado - valor;

        document.getElementById('ctSerums').value = unidades;
        document.getElementById('PrecioVenta').value = precio;
        document.getElementById('ganancias').value = formatter.format(ganancias);
        document.getElementById('MXN').value = formatter.format(valor);
    }
    else if (valor > 99999 && valor < 130000) {
        precio = 200;
        unidades = Math.round(valor / precio);
        resultado = 299 * unidades;
        ganancias = resultado - valor;

        document.getElementById('ctSerums').value = unidades;
        document.getElementById('PrecioVenta').value = precio;
        document.getElementById('ganancias').value = formatter.format(ganancias);
        document.getElementById('MXN').value = formatter.format(valor);
    }
    else if (valor > 129999 && valor < 150000) {
        precio = 190;
        unidades = Math.round(valor / precio);
        resultado = 299 * unidades;
        ganancias = resultado - valor;

        document.getElementById('ctSerums').value = unidades;
        document.getElementById('PrecioVenta').value = precio;
        document.getElementById('ganancias').value = formatter.format(ganancias);
        document.getElementById('MXN').value = formatter.format(valor);
    }
    else if (valor > 149000 && valor < 200000) {
        precio = 180;
        unidades = Math.round(valor / precio);
        resultado = 299 * unidades;
        ganancias = resultado - valor;

        document.getElementById('ctSerums').value = unidades;
        document.getElementById('PrecioVenta').value = precio;
        document.getElementById('ganancias').value = formatter.format(ganancias);
        document.getElementById('MXN').value = formatter.format(valor);
    }

    else if (valor > 199999) {
        precio = 170;
        unidades = Math.round(valor / precio);
        resultado = 299 * unidades;
        ganancias = resultado - valor;

        document.getElementById('ctSerums').value = unidades;
        document.getElementById('PrecioVenta').value = precio;
        document.getElementById('ganancias').value = formatter.format(ganancias);
        document.getElementById('MXN').value = formatter.format(valor);
    }

}