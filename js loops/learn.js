//ARRAYS for in loop in objects
const person = {fname:"John", lname:"Doe", age:25}; 

let txt = "";
for (let x in person) {
  txt += person[x] + " ";
}

document.getElementById("demo").innerHTML = txt;

//ARRAYS for loop
const cars1 = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
let carlist = cars1.length


let text1 = "";
for (let i = 0;
     i < carlist;
      i++) 
      {
        let caritem = cars1[i]
  text1 += caritem + "<br>";
}

document.getElementById("demo2").innerHTML = text1;





