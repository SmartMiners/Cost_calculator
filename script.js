//Declaring All the fields
var quantityRequired;
var drillHolediameter;
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
var waitingTime;
var mileage;

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
    drillHolediameter = document.getElementById('drillHolediameter').value;
    spacing = document.getElementById('spacing').value;
    burden = document.getElementById('burden').value;
    depth = document.getElementById('depth').value;
    spacing = document.getElementById('spacing').value;
    burden = document.getElementById('burden').value;
    depth = document.getElementById('depth').value;
    specificGravity = document.getElementById('specificGravity').value;
    penetration = document.getElementById('penetration').value;
    rateOfExplosive = document.getElementById('rateOfExplosive').value;
    rateOfAnfo = document.getElementById('rateOfAnfo').value;
    accessoriesCost = document.getElementById('accessoriesCost').value;
    compressorDieselConsumption = document.getElementById('compressorDieselConsumption').value;
    dieselRate = document.getElementById('dieselRate').value;
    crusherCapacity = document.getElementById('crusherCapacity').value;
    operatingHours = document.getElementById('operatingHours').value;


    //Excavator 
    bucketCapacity = document.getElementById('bucketCapacity').value;
    bucketFillFactor = document.getElementById('bucketFillFactor').value;
    swingTime = document.getElementById('swingTime').value;
    backSwingTime = document.getElementById('backSwingTime').value;
    excavatorDieselConsumption = document.getElementById('excavatorDieselConsumption').value;
    
    //Tipper
    tipperCapacity = document.getElementById('tipperCapacity').value;
    leadDistance = document.getElementById('leadDistance').value;
    waitingTime = document.getElementById('waitingTime').value;
    mileage = document.getElementById('mileage').value;

    //calculate the Totalcost
    calculateTotalCost();
}

function calculation() {
    getInputValueandCalculate();
    
}

function calculateTotalCost()
{

    console.log(quantityRequired);
    console.log(drillHolediameter);
    console.log(spacing);
    console.log(burden);
    console.log(depth);
    console.log(specificGravity);
    console.log(penetration);
    console.log(rateOfExplosive);
    console.log(rateOfAnfo);
    console.log(accessoriesCost);
    console.log(compressorDieselConsumption);
    console.log(dieselRate);
    console.log(crusherCapacity);
    console.log(operatingHours);
    console.log("");
    console.log(bucketCapacity);
    console.log(bucketFillFactor);
    console.log(swingTime);
    console.log(backSwingTime);
    console.log(excavatorDieselConsumption);
    console.log("");
    console.log(tipperCapacity);
    console.log(leadDistance);
    console.log(waitingTime);
    console.log(mileage);
    

    /*-----------------------Drilling cost and machinery and manpower requirements -----------------------------------------------*/
    var noofHoles = quantityRequired/(spacing*burden*depth*specificGravity);//calculate the number of holes required
    var totalMeterageRequired = noofHoles * depth; //calculates the total meters required to be drilled
    var compressorHoursRequired = totalMeterageRequired / penetration; // provides the hours required to drill the holes
    var compressorsRequired = Math.round(compressorHoursRequired / operatingHours); // Number of compressor required
    var compressorDieselCost = (compressorHoursRequired * compressorDieselConsumption * dieselRate) * 1.1;
    var compressorManpowerCost = compressorsRequired * 6 * 1000;
    var compressorMaintenanceCost = compressorDieselCost * 0.2 ;
    var drillingCostperton = (compressorDieselCost + compressorManpowerCost + compressorMaintenanceCost) / quantityRequired;
  
  


/*-----------------------Blasting cost and Explosives and manpower requirements -----------------------------------------------*/


    var explosivesNeededfor1hole = ((depth*0.75)/0.20)*0.125;
    var totalExplosiveNeeded = explosivesNeededfor1hole * noofHoles;
    var totalCostforExplosive = totalExplosiveNeeded * rateOfExplosive;
    var explosiveManpowerneeded = (1250*2);
    var explosiveCostPerTon = (totalCostforExplosive + explosiveManpowerneeded)/quantityRequired;
/*-----------------------Blasting cost and ANFO and manpower requirements -----------------------------------------------*/
    var anfoPerHole = (3.142*0.016*0.016*(depth*0.75)-(3.142*0.0125*0.0125*0.2))*800;
    var primeCostperhole = (rateOfExplosive / 8) ;
    var totalAnfoneeded = anfoPerHole * noofHoles;
    var totalCostforAnfo = (totalAnfoneeded * rateOfAnfo) + (primeCostperhole * noofHoles);
    var AnfoCostPerTon = totalCostforAnfo / quantityRequired; 
/*-----------------------Blasting cost and Accessories and manpower requirements -----------------------------------------------*/
    var accessoriesRequired = noofHoles * 1.02;
    var totalCostperusnitof3meters = accessoriesCost * 3 ;
    var totalAccessoriescost = (accessoriesRequired * totalCostperusnitof3meters);
    var accessoriesCostperton = totalAccessoriescost / quantityRequired;
  
/*-----------------------Excavator Cost per ton -----------------------------------------------*/
  
  //calculated the cycle time to load 1 tipper
    var cycleTimetoload1tippertemp1 = (tipperCapacity/specificGravity);
    var cycleTimetoload1tippertemp2 = (bucketCapacity * (bucketFillFactor/100));
    var cycleTimetoload1tippertemp3 = cycleTimetoload1tippertemp1/cycleTimetoload1tippertemp2;
    var cycleTimetoload1tippertemp4 = ((swingTime/60) + (backSwingTime/60))*1.5;
    var cycleTimetoload1tipper = Math.round((cycleTimetoload1tippertemp3 * cycleTimetoload1tippertemp4));
  
  //calculate Excavator production capacity
    var singleExcavatorProductioncapacity = Math.round((60/cycleTimetoload1tipper)*tipperCapacity);
  
  //calculate delivery at 80% efficiency
  
    var deliveryefficiency = crusherCapacity * (80/100);
  
  //calculate excavators required
    var excavatorrequired = Math.ceil(deliveryefficiency/singleExcavatorProductioncapacity);
  
  //calculate excavator production capacity required
    var excavatorProductioncapacity = Math.floor(excavatorrequired * singleExcavatorProductioncapacity);
  
  //manpower required
    var condition1 = quantityRequired/excavatorProductioncapacity;
    var excavatorManpowerrequired;
    if (condition1<operatingHours)
      {
        excavatorManpowerrequired = excavatorrequired;
      }
    else
      {
        excavatorManpowerrequired = excavatorrequired*2;
      }
    
  //calculate excavator manpower cost
    var excavatorManpowercost = excavatorManpowerrequired * 1250;
  
  //Number of trips required
    var numberOftripsrequiredperhour = (deliveryefficiency/tipperCapacity);
  //total number of trips needed
    var totalNumberoftripsneeded = Math.round(quantityRequired / tipperCapacity);
  //hours required to deliver
    var hoursRequiredtodeliver = totalNumberoftripsneeded/numberOftripsrequiredperhour;
  
  //calculate excavator diesel cost
    var excavatorDieselcost = (hoursRequiredtodeliver*excavatorrequired*excavatorDieselConsumption*dieselRate);
  
  //calculate excavator maintenance cost
    var excavatormaintenancecost = excavatorDieselcost*0.1;
  
  var excavatorCost = excavatorManpowercost + excavatorDieselcost + excavatormaintenancecost;
  var excavatorCostperton = excavatorCost/quantityRequired;
  

/*-----------------------Tipper Cost per ton -----------------------------------------------*/
  
  //total time for a single trip
  var travelAndbacktime = ((leadDistance/(25/60))*2*1.25);
  var totalTimefor1trip = travelAndbacktime+(waitingTime*1);
  
  //Tippers needed for 1 excavator
  var tippersNeededfor1excavator = Math.ceil(totalTimefor1trip/cycleTimetoload1tipper);
  //Tippers Required
  var tippersrequired = tippersNeededfor1excavator * excavatorrequired;
  
  //Tipper Manpower Cost
  var tipperManpowercost = tippersrequired * 1250;
  var totaltrips = totalNumberoftripsneeded;
  var totalkm = totaltrips*leadDistance*2*1.2;
  var tipperDieselrequired = totalkm / mileage;
  var tipperDieselcost = tipperDieselrequired * dieselRate;
  var tipperMaintenancecost = tipperDieselcost * 0.2;
  var tipperCostperton = (tipperDieselcost+tipperMaintenancecost+tipperManpowercost)/quantityRequired;
  
  //Sizing Cost
  var sizingDieselcost = (10*excavatorDieselConsumption*dieselRate);
  var sizingmaintenancecost = sizingDieselcost * 0.6;
  var sizingManpowercost = 1250;
  var sizingCostperton = (sizingDieselcost+sizingmaintenancecost+sizingManpowercost)/quantityRequired;

    var overAllTotalCost = Math.round(drillingCostperton + explosiveCostPerTon + accessoriesCostperton +sizingCostperton+ excavatorCostperton + tipperCostperton ) ; // Replace with your actual calculation result
  
  console.log(overAllTotalCost);

    var result = overAllTotalCost;

    // Redirect to the result page with the result as a parameter in the URL
    window.location.href = 'result.html?result=' + result;

}
