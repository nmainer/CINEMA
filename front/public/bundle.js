(()=>{var e={798:e=>{e.exports={valor:function(e){let t=document.createElement("a"),n=document.createElement("p"),a=document.createElement("p"),r=document.createElement("p"),d=document.createElement("p"),i=document.createElement("p"),s=document.createElement("img"),c=document.createElement("div");return t.href=t.textContent=e.title,n.innerHTML=e.year,a.innerHTML=e.director,r.innerHTML=e.duration,d.innerHTML=e.genre,i.innerHTML=e.rate,s.src=e.poster,c.classList.add("tar"),t.classList.add("tit1"),n.classList.add("tit2"),a.classList.add("tit2"),r.classList.add("tit2"),d.classList.add("tit2"),i.classList.add("tit2"),s.classList.add("imgtarjeta"),c.appendChild(t),c.appendChild(s),c.appendChild(n),c.appendChild(a),c.appendChild(r),c.appendChild(d),c.appendChild(i),c}}},973:e=>{e.exports={valor2:function(e){document.querySelector(".contenedor").appendChild(e)}}}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var d=t[a]={exports:{}};return e[a](d,d.exports,n),d.exports}(()=>{const{valor:e}=n(798),{valor2:t}=n(973);$.get("https://students-api.up.railway.app/movies",(n=>{n.forEach((n=>{t(e(n))}))}))})()})();