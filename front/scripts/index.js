
const {valor}= require("./index2");
const axios = require("axios");


  const promise = axios.get("https://students-api.up.railway.app/movies");

console.log (promise);
promise.then((res)=>{
res.data.forEach((movie)=>{
valor(movie);
});

})
.catch((error)=>{
return error;
});



