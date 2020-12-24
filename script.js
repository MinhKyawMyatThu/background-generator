var body = document.querySelector("#body");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");

console.log(body)
console.log(color1);
console.log(color2);

color1.addEventListener("input", function() {
    body.style.background= "linear-gradient(to right,"+color1.value+","+color2.value+")"
    // body.style.background= "linear-gradient(to right,"+color1.value+","+color2.value+")";
})

color2.addEventListener("input", function() {
    body.style.background= "linear-gradient(to right,"+color1.value+","+color2.value+")"
})