let functionValor = require("./index2");


$.get("https://students-api.up.railway.app/movies" , (data)=>{
    functionValor(data);
});



