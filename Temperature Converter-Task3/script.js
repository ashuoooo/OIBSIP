/*

// Get the form and result elements from the DOM
const form = document.getElementById("tempcalculation");
const result = document.getElementById("result");

// Function to calculate the temperature conversion
function calculateTemp() {
  // Get the input temperature and type of conversion from the form
  const temp = parseFloat(document.getElementById("temp").value);
  const temp_diff = document.getElementById("temp_diff").value;

  // Perform the appropriate temperature conversion based on the selected option
  if (temp_diff === "cel") {
    const convertedTemp = (temp * 9/5) + 32;
    result.innerHTML = `${temp} Celsius is equal to ${convertedTemp} Fahrenheit.`;
  } else {
    const convertedTemp = (temp - 32) * 5/9;
    result.innerHTML = `${temp} Fahrenheit is equal to ${convertedTemp} Celsius.`;
  }
}

// Add an event listener to the form for the submit event
form.addEventListener("submit", calculateTemp);
*/

const calculateTemp =() =>{
    const numberTemp=document.getElementById('temp').value;
    //console.log(numberTemp);
    const tempSelected=document.getElementById('temp_diff');
    const valueTemp=temp_diff.options[tempSelected.selectedIndex].value;
    //console.log(valueTemp);

    const celtofah=(cel) =>{
        let fahrenheit=((cel*9/5)+32).toFixed(1);
        return fahrenheit;
    }

    const fahtocel=(fah) =>{
        let celsius=((fah-32)* 5/9).toFixed(1);
        return celsius;
    }

    let result;
    if(valueTemp=='cel'){
        result=celtofah(numberTemp);
        document.getElementById('result').innerHTML= celtofah(numberTemp)+"Farenheit";
    }
    else{
        result=fahtocel(numberTemp);
        document.getElementById('result').innerHTML= fahtocel(numberTemp)+"Celsius";
    }

}
