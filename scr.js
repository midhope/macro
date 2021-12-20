let btn = document.querySelector(".topMenu a");
let theP = document.querySelector("#theP");
let pic1 = document.querySelector("#pic1");
let pic2 = document.querySelector("#pic2");
let pic3 = document.querySelector("#pic3");


btn.addEventListener("click", ()=>{
  pic1.style = "display:none";
  pic2.style = "display:none";
  pic3.style = "display:none";

  fetch("pum.pum", {
    method: "POST",
    body: "hello world"
})
  .then( r=>r.text() )
  .then( t=>{theP.outerHTML=t} );

});