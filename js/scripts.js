//mullet front









function handleCalculation(event) {
  event.preventDefault();
  const num1 = parseInt(document.querySelector("input#input1").value);
  const num2 = parseInt(document.querySelector("input#input2").value);
  const num3 = parseInt(document.querySelector("input#input3").value);  

  
  function isTri(num1, num2, num3) {
    return ((num1+num2)<= num3) || ((num2+num3)<= num1) || ((num1+num3)<= num2);
  }


  
console.log(isTri(num1, num2, num3));

let result;
  if ((num1 === num2) && (num2 === num3)) {
  result = "equilateral";
} else if ((num1 === num2) || (num2 === num3) || (num1 === num3)) {
  result = "isosososososles"
} else if (isTri(num1, num2, num3) === false) {;
  result = "scalene"
} else {
  result = "try again with a real triangle joker"
}


  document.getElementById("output").innerText = result;
}

window.addEventListener("load", function() {
  const form = document.getElementById("triangleLength");
  form.addEventListener("submit", handleCalculation);
});