'use strict'
//Creo una función para cargar el json.

function cargarJson () {
    fetch('timeline.json') 
    //Escribo el nombre de mi archivo json con su extensión. 
    //Con el método fetch hago la petición de leer el archivo json que mencioné.
    .then(info => info.json()) //Indico el formato en el que deseo recibir la información.
    .then(timeline => {

        timeline.sort(function (a, b) {
        if (a.date > b.date) {
            return 1;
        }
        if (a.date < b.date) {
            return -1;
        }

        return timeline;
    })

timeline.forEach(timeline => {
    const events = document.getElementById('events');
    let date = timeline.date;
    let title = timeline.title;
    let image = timeline.image;
    let text = timeline.text;

events.innerHTML += `

<div class="codigohtml">
<center>
<p id="p1"><strong>${date}, ${title}</strong></p>
<img src="${image}" alt="">
<p>${text}</p>
</center>

</div>

`


    

});

console.log(timeline)

    });
}
cargarJson();

//---------------------------------------------------------------------------------------//
