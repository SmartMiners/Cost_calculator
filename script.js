//Declaring All the fields
var quantityRequired;
var spacing;
var burden;
var depth;
var specificGravity;
var penetration;
var rateOfExplosive;
var accessoriesCost;
var compressorDieselConsumption;
var dieselRate;
var crusherCapacity;

//Excavator 
var bucketCapacity;
var bucketFillFactor;
var swingTime;
var backSwingTime;
var excavatorDieselConsumption;

//Tipper
var tipperCapacity;
var leadDistance;
var travelTime;
var travelBackTime;
var millage;

function validate() {
    const inputs = document.querySelectorAll('input[type="number"]');
    const errorMessages = document.getElementById('errorMessages');
    let allFilled = true;

    inputs.forEach(input => {
      if (input.value === '') {
        allFilled = false;
        return;
      }
    });

    if (!allFilled) {
      errorMessages.textContent = 'Please fill in all fields.';
    } else {
      errorMessages.textContent = '';
      // Perform calculation here
      alert('All fields are filled! Proceed with calculation.');
      calculation();
    }
  }
function getInputValueandCalculate() {

    quantityRequired = document.getElementById('quantityRequired').value;
    spacing = document.getElementById('spacing').value;
    burden = document.getElementById('burden').value;
    depth = document.getElementById('depth').value;
    specificGravity = document.getElementById('specificGravity').value;
    penetration = document.getElementById('penetration').value;
    rateOfExplosive = document.getElementById('rateOfExplosive').value;
    accessoriesCost = document.getElementById('accessoriesCost').value;
    compressorDieselConsumption = document.getElementById('compressorDieselConsumption').value;
    dieselRate = document.getElementById('dieselRate').value;
    crusherCapacity = document.getElementById('crusherCapacity').value;
    
    //Excavator 
    bucketCapacity = document.getElementById('bucketCapacity').value;
    bucketFillFactor = document.getElementById('bucketFillFactor').value;
    swingTime = document.getElementById('swingTime').value;
    backSwingTime = document.getElementById('backSwingTime').value;
    excavatorDieselConsumption = document.getElementById('excavatorDieselConsumption').value;
    
    //Tipper
    tipperCapacity = document.getElementById('tipperCapacity').value;
    leadDistance = document.getElementById('leadDistance').value;
    travelTime = document.getElementById('travelTime').value;
    travelBackTime = document.getElementById('travelBackTime').value;
    millage = document.getElementById('millage').value;

    //calculate the Totalcost
    calculateTotalCost();
}

function calculation() {
    getInputValueandCalculate();
    
}

function calculateTotalCost()
{

    console.log(quantityRequired);
    console.log(spacing);
    console.log(burden);
    console.log(depth);
    console.log(specificGravity);
    console.log(penetration);
    console.log(rateOfExplosive);
    console.log(accessoriesCost);
    console.log(compressorDieselConsumption);
    console.log(dieselRate);
    console.log(crusherCapacity);
    console.log("");
    console.log(bucketCapacity);
    console.log(bucketFillFactor);
    console.log(swingTime);
    console.log(backSwingTime);
    console.log(excavatorDieselConsumption);
    console.log("");
    console.log(tipperCapacity);
    console.log(leadDistance);
    console.log(travelTime);
    console.log(travelBackTime);
    console.log(millage);

    var noofHoles = quantityRequired/(spacing*burden*depth*specificGravity);

    var explosivesNeededfor1hole = ((depth*0.75)/0.20)*0.125;

    var totalExplosiveNeeded = explosivesNeededfor1hole * noofHoles;

    var totalCostforExplosive = totalExplosiveNeeded * rateOfExplosive;

    var explosiveCostPerTon = totalCostforExplosive/quantityRequired;






    var overAllTotalCost = 97; // Replace with your actual calculation result

    var result = overAllTotalCost; 

    // Redirect to the result page with the result as a parameter in the URL
    window.location.href = 'result.html?result=' + result;

}
