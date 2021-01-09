const db = firebase.firestore();

db.collection("dispositivos").doc("Disp01")
    .onSnapshot(function(doc) {
        console.log("Temperatura: ", doc.data().Temperatura);
        document.getElementById("temperatura_value").innerHTML = doc.data().Temperatura + "°C";
    });

db.collection("dispositivos").doc("Disp01")
.onSnapshot(function(doc) {
    console.log("Distancia: ", doc.data().Distancia);
    document.getElementById("distancia_value").innerHTML = doc.data().Distancia + " m";
});

db.collection("dispositivos").doc("Disp01")
.onSnapshot(function(doc) {
    if (doc.data().Alarma == "true")
    {
        var alarma_valor = "Encendido";
    }
    else
    {
        var alarma_valor = "Apagado"
    }
    console.log("Alarma: ", );
    document.getElementById("alarma_value").innerHTML = alarma_valor;
});



