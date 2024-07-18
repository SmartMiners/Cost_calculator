// Add your custom JavaScript code here
document.addEventListener('DOMContentLoaded', function() {
    console.log("Custom script loaded successfully!");
    // Add more custom JavaScript code as needed
});


//------------------------------------------------------------------

function updateInputFields() {
  const operation = document.querySelector('input[name="operation"]:checked').value;
  const inputContainer = document.getElementById('inputContainer');
  inputContainer.innerHTML = '';

  if (operation === 'drilling') {
    const labels = ['Required Tons', 'Drill Diameter', 'Spacing', 'Burden', 'Hole Depth', 'Specific Gravity','Diesel Cost','Penetration Rate', 'Drilling Hours Available', 'Compressor Diesel Consumption' ];
    labels.forEach((labelText, i) => {
      const label = document.createElement('label');
      label.htmlFor = `textbox${i + 1}`;
      label.innerText = `${labelText}: `;
      const inputField = document.createElement('input');
      inputField.type = 'text';
      inputField.id = `textbox${i + 1}`;
      inputField.name = `textbox${i + 1}`;
      inputField.oninput = updateResult;
      inputContainer.appendChild(label);
      inputContainer.appendChild(inputField);
      inputContainer.appendChild(document.createElement('br'));
      inputContainer.appendChild(document.createElement('br'));
    });
    document.getElementById('drillingResults').style.display = 'block';
    document.getElementById('blastingResults').style.display = 'none';
    document.getElementById('muckingResults').style.display = 'none';
    document.getElementById('transportationResults').style.display = 'none';
  } 
  else if (operation === 'blasting') {
    const labels = ['Required Tons', 'Drill Diameter', 'Spacing', 'Burden', 'Hole Depth', 'Specific Gravity','dieselCost', 'Explosives Cost'];
    labels.forEach((labelText, i) => {
      const label = document.createElement('label');
      label.htmlFor = `textbox${i + 1}`;
      label.innerText = `${labelText}: `;
      const inputField = document.createElement('input');
      inputField.type = 'text';
      inputField.id = `textbox${i + 1}`;
      inputField.name = `textbox${i + 1}`;
      inputField.oninput = updateResult;
      inputContainer.appendChild(label);
      inputContainer.appendChild(inputField);
      inputContainer.appendChild(document.createElement('br'));
      inputContainer.appendChild(document.createElement('br'));
    });
    document.getElementById('drillingResults').style.display = 'none';
    document.getElementById('blastingResults').style.display = 'block';
    document.getElementById('muckingResults').style.display = 'none';
    document.getElementById('transportationResults').style.display = 'none';
  }
  else if (operation === 'mucking') {
    const labels = ['Required Tons','Specific Gravity','Bucket Capacity', 'Bucket Fill Factor', 'Swing Time', 'Swing Back Time', 'Excavator Diesel Consumption per Hour','Diesel Price Per Liter', 'Tipper Capacity'];
    labels.forEach((labelText, i) => {
      const label = document.createElement('label');
      label.htmlFor = `textbox${i + 1}`;
      label.innerText = `${labelText}: `;
      const inputField = document.createElement('input');
      inputField.type = 'text';
      inputField.id = `textbox${i + 1}`;
      inputField.name = `textbox${i + 1}`;
      inputField.oninput = updateResult;
      inputContainer.appendChild(label);
      inputContainer.appendChild(inputField);
      inputContainer.appendChild(document.createElement('br'));
      inputContainer.appendChild(document.createElement('br'));
    });
    document.getElementById('drillingResults').style.display = 'none';
    document.getElementById('blastingResults').style.display = 'none';
    document.getElementById('muckingResults').style.display = 'block';
    document.getElementById('transportationResults').style.display = 'none';
  }
  else if (operation === 'transportation') {
    const labels = ['Tons To Be Transported','Tipper Capacity', 'Lead Distance','Loading Time For Single Tipper', 'Travel Time', 'Waiting Time', 'Travel Back Time',' Diesel Price','Mileage'];
    labels.forEach((labelText, i) => {
      const label = document.createElement('label');
      label.htmlFor = `textbox${i + 1}`;
      label.innerText = `${labelText}: `;
      const inputField = document.createElement('input');
      inputField.type = 'text';
      inputField.id = `textbox${i + 1}`;
      inputField.name = `textbox${i + 1}`;
      inputField.oninput = updateResult;
      inputContainer.appendChild(label);
      inputContainer.appendChild(inputField);
      inputContainer.appendChild(document.createElement('br'));
      inputContainer.appendChild(document.createElement('br'));
    });
    document.getElementById('drillingResults').style.display = 'none';
    document.getElementById('blastingResults').style.display = 'none';
    document.getElementById('muckingResults').style.display = 'none';
    document.getElementById('transportationResults').style.display = 'block';
  }
  updateResult();
}

function updateResult() {
  
  
  /*checking the radio boxes is clicked*/
  const operation = document.querySelector('input[name="operation"]:checked').value;
   
  
  if (operation === 'drilling') {
    

  /*--------------------------------------------------------------------------------------------Drilling calculations-------------------------------------------------------------------------------------------*/
 
  const requiredTons = parseFloat(document.getElementById('textbox1').value) || 0;
  const drillDiameter = parseFloat(document.getElementById('textbox2').value) || 0;
  const spacing = parseFloat(document.getElementById('textbox3').value) || 0;
  const burden = parseFloat(document.getElementById('textbox4').value) || 0;
  const holeDepth = parseFloat(document.getElementById('textbox5').value) || 0;
  const specificGravity = parseFloat(document.getElementById('textbox6').value) || 0;
  const dieselCost = parseFloat(document.getElementById('textbox7').value) || 0;
  const penetrationRate = parseFloat(document.getElementById('textbox8').value) || 0;
  const drillingHoursAvailable = parseFloat(document.getElementById('textbox9').value) || 0;
  const compressorDieselConsumption = parseFloat(document.getElementById('textbox10').value) || 0;
  
  
  
  var drillingType;
  var compressorManpowerCost; 
  if (drillDiameter >= 38)
  {
    drillingType = ('Rig Drilling');
    compressorManpowerCost = compressorRequired * 2 *1000;
  }
  else
    {
      drillingType = ('Jack Hammer Drilling');
      compressorManpowerCost = compressorRequired * 6 *1000;
    }
  
  const tons = spacing * burden * holeDepth * specificGravity;
  const holesRequired = Math.ceil(requiredTons / tons);
  const totalTons = tons * holesRequired;
  const totalMeterage = holesRequired * holeDepth;
  const compressorHoursRequired = totalMeterage / penetrationRate;
  const compressorRequired1 = compressorHoursRequired / drillingHoursAvailable;
  var compressorRequired; 
  if(compressorRequired1 < 1){
       compressorRequired = 1;
    }
    else{
       compressorRequired = Math.ceil(compressorHoursRequired / drillingHoursAvailable);
    }
 //drilling diesel cost------------------------------------------------------------------------------------------
  const compressorDieselCost = dieselCost * compressorDieselConsumption * compressorHoursRequired * 1.1;
  
  var compressorManpowerCost; //drilling manpower cost--------------------------------------------------------------------------------------------
  if (drillDiameter >= 38)
  {
    compressorManpowerCost = compressorRequired * 2 *1000;
  }
  else
    {
      compressorManpowerCost = compressorRequired * 6 *1000;
    }
  
  const drillingMaintenanceCost = compressorDieselCost * 0.2;//drilling maintainence cost---------------------------------------------------------------------------------------
  
  const drillingCostPerTon = (compressorDieselCost + compressorManpowerCost + drillingMaintenanceCost) / totalTons;
  
  
  
  
  
  
  
  
  document.getElementById('drillingType').innerText = drillingType;
  document.getElementById('holesRequired').innerText = holesRequired;
  document.getElementById('totalMeterage').innerText = totalMeterage.toFixed(0);
  document.getElementById('compressorHoursRequired').innerText = compressorHoursRequired.toFixed(0);
  document.getElementById('compressorRequired').innerText = compressorRequired.toFixed(0);
  document.getElementById('compressorDieselCost').innerText = compressorDieselCost.toFixed(0);
  document.getElementById('compressorManpowerCost').innerText = compressorManpowerCost.toFixed(0);
  document.getElementById('drillingMaintenanceCost').innerText = drillingMaintenanceCost.toFixed(0);
  document.getElementById('drillingCostPerTon').innerText = drillingCostPerTon.toFixed(0);
  
  } 
  else if (operation === 'blasting') {
    
  const requiredTons = parseFloat(document.getElementById('textbox1').value) || 0;
  const drillDiameter = parseFloat(document.getElementById('textbox2').value) || 0;
  const spacing = parseFloat(document.getElementById('textbox3').value) || 0;
  const burden = parseFloat(document.getElementById('textbox4').value) || 0;
  const holeDepth = parseFloat(document.getElementById('textbox5').value) || 0;
  const specificGravity = parseFloat(document.getElementById('textbox6').value) || 0;
  const dieselCost = parseFloat(document.getElementById('textbox7').value) || 0;
  const explosivesCost = parseFloat(document.getElementById('textbox8').value) || 0;
    
  
    const tons = spacing * burden * holeDepth * specificGravity;
    const holesRequired = Math.ceil(requiredTons / tons);
    const totalTons = tons * holesRequired;
    
    
  var explosiveRequiredPerHole;
  if(drillDiameter >= 38){
    explosiveRequiredPerHole = ((holeDepth - burden)/0.45) * (2.738);
  }
  else{
    explosiveRequiredPerHole = ((holeDepth - burden)/0.2) * (0.125);
  }
  
  var totalExplosivesRequired = explosiveRequiredPerHole * holesRequired;
  var totalExplosivesCost = totalExplosivesRequired * explosivesCost;
  var chargeFactor = totalExplosivesRequired / (spacing * burden * holeDepth * holesRequired);
  const explosivesCostPerTon = totalExplosivesCost / totalTons;
  
  
  
  
  
  
  
  document.getElementById('result_blast_tons').innerText = totalTons.toFixed(0);
  document.getElementById('explosiveRequiredPerHole').innerText = explosiveRequiredPerHole.toFixed(0);
  document.getElementById('totalExplosivesRequired').innerText = totalExplosivesRequired;
  document.getElementById('totalExplosivesCost').innerText = totalExplosivesCost;
  document.getElementById('chargeFactor').innerText = chargeFactor.toFixed(2);
  document.getElementById('explosivesCostPerTon').innerText = explosivesCostPerTon.toFixed(0);
  
  }
  else if (operation === 'mucking') {
     
     const requiredTons = parseFloat(document.getElementById('textbox1').value) || 0;
     const specificGravity = parseFloat(document.getElementById('textbox2').value) || 0;
     const bucketCapacity = parseFloat(document.getElementById('textbox3').value) || 0;
     const bucketFillFactor = parseFloat(document.getElementById('textbox4').value) || 0;
     const swingTime = parseFloat(document.getElementById('textbox5').value) || 0;
     const swingBackTime = parseFloat(document.getElementById('textbox6').value) || 0;
     const excavatorDieselConsumptionPerHour = parseFloat(document.getElementById('textbox7').value) || 0;
     const dieselPricePerLiter = parseFloat(document.getElementById('textbox8').value) || 0;
     const tipperCapacity = parseFloat(document.getElementById('textbox9').value) || 0;
     
    
  
    
    const cycleTimeToLoad1Tipper = Math.ceil(((tipperCapacity/specificGravity)/(bucketCapacity*(bucketFillFactor/100))*((swingTime/60)+(swingBackTime/60)))*1.5);
    const excavatorHours = requiredTons/((60/cycleTimeToLoad1Tipper)*tipperCapacity);
    const excavatorProductionCapacity = (60/cycleTimeToLoad1Tipper)*tipperCapacity;
    const excavatorManpowerRequired = Math.ceil(excavatorHours/8);
    const excavatorManpowerCost = excavatorManpowerRequired * 1250;
    const excavatorDieselCost = excavatorHours * excavatorDieselConsumptionPerHour*dieselPricePerLiter*1.05;
    const excavatorMaintanenceCost = excavatorDieselCost * 0.1;
    const muckingCostPerTon = (excavatorManpowerCost + excavatorDieselCost + excavatorMaintanenceCost) / requiredTons;
   
    
  
  
  
  
  
    document.getElementById('excavatorHours').innerText = excavatorHours.toFixed(0);
    document.getElementById('excavatorProductionCapacity').innerText = excavatorProductionCapacity.toFixed(0);
    document.getElementById('excavatorManpowerRequired').innerText = excavatorManpowerRequired.toFixed(0);
    document.getElementById('excavatorManpowerCost').innerText = excavatorManpowerCost.toFixed(0);
    document.getElementById('excavatorDieselCost').innerText = excavatorDieselCost.toFixed(0);
    document.getElementById('excavatorMaintanenceCost').innerText = excavatorMaintanenceCost.toFixed(0);
    document.getElementById('muckingCostPerTon').innerText = muckingCostPerTon.toFixed(0);
  
  
  }
  else if (operation === 'transportation') {
     
     const tonsToBeTransported = parseFloat(document.getElementById('textbox1').value) || 0;
     const tipperCapacity = parseFloat(document.getElementById('textbox2').value) || 0;
     const leadDistance = parseFloat(document.getElementById('textbox3').value) || 0;
     const loadingTimeOfSingleTipper = parseFloat(document.getElementById('textbox4').value) || 0;
     const travelTime = parseFloat(document.getElementById('textbox5').value) || 0;
     const waitingTime = parseFloat(document.getElementById('textbox6').value) || 0;
     const travelBackTime = parseFloat(document.getElementById('textbox7').value) || 0; 
     const dieselCost = parseFloat(document.getElementById('textbox8').value) || 0;  
     const tipperMileage = parseFloat(document.getElementById('textbox9').value) || 0;

     
     const totalTimeForSingleTrip = travelTime + waitingTime + travelBackTime;
     const tippersRequired = Math.ceil(totalTimeForSingleTrip/loadingTimeOfSingleTipper);
     const tipperManpowerCost = tippersRequired * 1250;
     const totalTrips = tonsToBeTransported/tipperCapacity;
     const totalKms = totalTrips * leadDistance * 2 * 1.2;
     const tipperDieselRequired = (totalKms/tipperMileage);
     const tipperDieselCost = tipperDieselRequired * dieselCost;
     const tipperMaintanenceCost = tipperDieselCost * 0.1;
     const transportationCostPerTon = (tipperManpowerCost + tipperDieselCost + tipperMaintanenceCost)/tonsToBeTransported;
   
    
  
  
  
  
  
    document.getElementById('tippersRequired').innerText = tippersRequired.toFixed(0);
    document.getElementById('tipperManpowerCost').innerText = tipperManpowerCost.toFixed(0);
    document.getElementById('totalTrips').innerText = totalTrips.toFixed(0);
    document.getElementById('totalKms').innerText = totalKms.toFixed(0);
    document.getElementById('tipperDieselRequired').innerText = tipperDieselRequired.toFixed(0);
    document.getElementById('tipperDieselCost').innerText = tipperDieselCost.toFixed(0);
    document.getElementById('tipperMaintanenceCost').innerText = tipperMaintanenceCost.toFixed(0);
    document.getElementById('transportationCostPerTon').innerText = transportationCostPerTon.toFixed(0);
    
  
  
  }
}

window.onload = function() {
  updateInputFields();
}
