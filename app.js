
function cambiar_br() {
    let parrafo = document.getElementById("parrafo_prueba");
    let parrafo_codigo = document.getElementById("parrafo_codigo");
    let valorBr = document.getElementById("slider_br").value + "px";
    
    parrafo.textContent = valorBr;
    document.getElementById("cuadrado_preview").style.borderRadius = valorBr;
    
    parrafo_codigo.textContent = '* { border-radius= "' + valorBr + '" }';
}

function copiar_texto() {
    let texto_a_copiar = document.getElementById("parrafo_codigo").innerText;
    let elemento_temporal = document.createElement("textarea");

    document.body.appendChild(elemento_temporal);
    elemento_temporal.value = texto_a_copiar;

    elemento_temporal.select();

    navigator.clipboard.writeText(elemento_temporal.value);
    document.body.removeChild(elemento_temporal);
}

cambiar_br();