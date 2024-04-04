console.log (tempData);


function armar1(obj){
    let {title,year,director,duration,genre,rate,poster} = obj;

let titulo = document.createElement("a");
let año = document.createElement("p");
let dir = document.createElement("p");
let durac = document.createElement("p");
let gen= document.createElement("p");
let ra = document.createElement("p");
let pos = document.createElement("img");
let tarjeta = document.createElement("div");

titulo.href=
titulo.textContent= title;
año.innerHTML = year;
dir.innerHTML= director;
durac.innerHTML= duration;
gen.innerHTML= genre;
ra.innerHTML= rate;
pos.src= poster;


tarjeta.classList.add("tar");
titulo.classList.add("tit1");
año.classList.add("tit2");
dir.classList.add("tit2");
durac.classList.add("tit2");
gen.classList.add("tit2");
ra.classList.add("tit2");
pos.classList.add("imgtarjeta");

tarjeta.appendChild(titulo);
tarjeta.appendChild(año);
tarjeta.appendChild(dir);
tarjeta.appendChild(durac);
tarjeta.appendChild(gen);
tarjeta.appendChild(ra);
tarjeta.appendChild(pos);

return tarjeta;

}

let conteiner = document.querySelector(".contenedor");

tempData.forEach(function (elemento){
    let tarjetas = armar1(elemento);
    conteiner.appendChild(tarjetas);
});

