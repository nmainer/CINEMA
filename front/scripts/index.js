
const {valor}= require("./index2");
const {valor2}= require("./index3");


    $.get("https://students-api.up.railway.app/movies" , (data)=>{
   
      data.forEach((movie)=>{
       valor2( valor(movie));
      });
       
    });





