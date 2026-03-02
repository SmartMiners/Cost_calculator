// Add your custom JavaScript code here
document.addEventListener('DOMContentLoaded', function() {
    console.log("Custom script loaded successfully!");
    // Add more custom JavaScript code as needed
});

//-----------------------------Service page learmore button expanding-------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".learn-more-btn");
  const description = document.querySelector(".description");

  if (!btn || !description) return;

  btn.addEventListener("click", function () {
    description.classList.toggle("expanded");
    btn.textContent = description.classList.contains("expanded")
      ? "Show Less"
      : "Learn More";
  });
});


//----------------------------- login kuuu---------------------------


 
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-analytics.js";
        import { sendEmailVerification } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";
        import { 
          getAuth, 
          createUserWithEmailAndPassword,
          signInWithEmailAndPassword,
          onAuthStateChanged,
          signOut,
          GoogleAuthProvider,
          signInWithPopup,
          updateProfile
        } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
          apiKey: "AIzaSyDATlIuwLAJ_VrBpf5V8IjOAfDOoArc8_w",
          authDomain: "proptimiz-autho.firebaseapp.com",
          projectId: "proptimiz-autho",
          storageBucket: "proptimiz-autho.firebasestorage.app",
          messagingSenderId: "219467471900",
          appId: "1:219467471900:web:a0f53a7010efb7b1ddd3d9",
          measurementId: "G-DPJRP7YPKB"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);

        const auth = getAuth(app);
        let authModal;

                document.addEventListener("DOMContentLoaded", () => {
                const authModalElement = document.getElementById("authModal");
                authModal = new bootstrap.Modal(authModalElement);

  // 🔥 FORCE CLEANUP AFTER MODAL CLOSE
  authModalElement.addEventListener("hidden.bs.modal", () => {
    document.body.classList.remove("modal-open");
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";

    const backdrops = document.querySelectorAll(".modal-backdrop");
    backdrops.forEach(el => el.remove());
  });
});
        window.firebaseAuth = auth;
        // Signup Logic
const signupBtn = document.getElementById("signupBtn");

signupBtn.addEventListener("click", async () => {
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

// Send verification email
await sendEmailVerification(userCredential.user);

alert("Verification email sent! Please check your inbox.");
authModal.hide();

    // 🔥 Save display name
    await updateProfile(userCredential.user, {
      displayName: name
    });

    authModal.hide();
    console.log("User created:", userCredential.user);

  } catch (error) {
    console.error(error.message);
  }
});

// Login Logic
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", async () => {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    if (!userCredential.user.emailVerified) {
      alert("Please verify your email before logging in.");
      await signOut(auth);
      return;
    }
    
    authModal.hide();
    console.log("Logged in user:", userCredential.user);
  } catch (error) {
    console.error(error.message);
    console.error(error);
  }
});


// Detect Auth State
const authBtn = document.getElementById("authBtn");

onAuthStateChanged(auth, (user) => {
  if (user) {
    authBtn.textContent = "Logout (" + (user.displayName || user.email) + ")";
    
    authBtn.onclick = async () => {
      await signOut(auth);
      console.log("Logged out successfully!");
      location.reload();
    };

  } else {
    authBtn.textContent = "Login / Signup";
    
    authBtn.onclick = () => {
  authModal.show();
    };
  }
});

// Scroll-based flow movement
document.addEventListener("DOMContentLoaded", function () {

const lines = document.querySelectorAll(".flow-line");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  lines.forEach((line, index) => {
    const speed = (index + 1) * 0.03;

    if (line.classList.contains("v")) {
      line.style.transform = `translateY(${scrollY * speed}px)`;
    }

    if (line.classList.contains("d")) {
      line.style.transform = `translate(${scrollY * speed}px, ${scrollY * speed * 0.5}px)`;
    }

    if (line.classList.contains("a")) {
      line.style.transform = `translate(-${scrollY * speed}px, ${scrollY * speed * 0.4}px)`;
    }

  });
});

});

//--------------------------------login with google button---------------------------------------------------------------------------

const googleBtn = document.getElementById("googleLoginBtn");
const provider = new GoogleAuthProvider();

googleBtn.addEventListener("click", async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("Google user:", result.user);
    authModal.hide();
  } catch (error) {
    console.error(error.message);
  }
});



// ===== Contact Form Google Forms Submission =====

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSerqtdcdIDH4fNTwuPKz-2eXqk1_oU3eZHNs7V8B2xAaCnTRg/formResponse";

    const formData = new FormData();
    formData.append("entry.1184599950", name);
    formData.append("entry.11854000", email);
    formData.append("entry.1178137936", message);

    fetch(formURL, {
      method: "POST",
      mode: "no-cors",
      body: formData
    })
    .then(() => {
      alert("Message sent successfully!");
      contactForm.reset();
    })
    .catch(() => {
      alert("Something went wrong. Please try again.");
    });
  });
}






// ===== Smart Get Started Button =====

document.addEventListener("DOMContentLoaded", () => {

  const getStartedBtn = document.getElementById("getStartedBtn");

  if (!getStartedBtn) return;

  getStartedBtn.addEventListener("click", () => {

    const user = firebaseAuth.currentUser;

    if (!user || !user.emailVerified){
      // Not logged in → open modal
      const authModal = new bootstrap.Modal(document.getElementById("authModal"));
      authModal.show();
    } else {
      // Logged in → scroll to calculator
      document.getElementById("Cost Calculator")
        .scrollIntoView({ behavior: "smooth" });
    }

  });

});





// ===== Try Calculator Button Logic =====

document.addEventListener("DOMContentLoaded", () => {

  const tryBtn = document.getElementById("tryCalculatorBtn");

  if (!tryBtn) return;

  tryBtn.addEventListener("click", () => {

    const user = firebaseAuth.currentUser;

    if (!user) {
      // Not logged in → open modal
      const authModal = new bootstrap.Modal(document.getElementById("authModal"));
      authModal.show();
    } else {
      // Logged in → redirect to calculator page
      window.location.href = "calculator.html";
    }

  });

});





// ===== Protect Calculator Page =====

document.addEventListener("DOMContentLoaded", () => {

  if (window.location.pathname.includes("calculator.html")) {

    const user = firebaseAuth.currentUser;

    if (!user) {
      alert("Please login to access the Cost Calculator.");
      window.location.href = "index.html";
    }

    const logoutBtn = document.getElementById("logoutBtn");

    if (logoutBtn) {
      logoutBtn.addEventListener("click", async () => {
        await firebaseAuth.signOut();
        window.location.href = "index.html";
      });
    }

  }

});


















//-----------------------------------------------------------------------------------------------------------------
















//-----------------------------calculator ku---------------------------


function updateInputFields() {
  const operation = document.querySelector('input[name="operation"]:checked').value;
  const inputContainer = document.getElementById('inputContainer');
  inputContainer.innerHTML = '';

  if (operation === 'drilling') {
    const labels = ['Required Tons (Tons)', 'Drill Diameter(mm)', 'Spacing(meter)', 'Burden(meter)', 'Hole Depth(meter)', 'Specific Gravity','Diesel Price(liter)','Penetration Rate(meter/hour)', 'Drilling Hours Available(shift)', 'Compressor Diesel Consumption(litres/hour)'];
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
    const labels = ['Required Tons(Tons)', 'Drill Diameter(mm)', 'Spacing(meter)', 'Burden(meter)', 'Hole Depth(meter)', 'Specific Gravity','Diesel Price(per Liter)', 'Explosives Price(per Kg)', 'RWS of Explosive'];
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
    const labels = ['Required Tons (Tons)','Specific Gravity','Bucket Capacity(Cu.M)', 'Bucket Fill Factor(%)', 'Swing Time(seconds)', 'Swing Back Time(seconds)', 'Excavator Diesel Consumption(liter/Hour)','Diesel Price (Per Liter)', 'Tipper Capacity(Tons)'];
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
    const labels = ['Tons To Be Transported','Tipper Capacity(Tons)', 'Lead Distance(Km)','Loading Time For Single Tipper(minutes)', 'Travel Time(minutes)', 'Waiting Time(minutes)', 'Travel Back Time(minutes)',' Diesel Price(per Litre)','Mileage(Km/ Litre)'];
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
  var rws = parseFloat(document.getElementById('textbox9').value) || 0;
    
  
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
  
  var temp1 = (Math.pow((chargeFactor), (-0.8)));
  var temp2 = (Math.pow((explosiveRequiredPerHole), (0.16666)));
  var temp3 = (Math.pow((115/rws), (0.95)));
    
    var kuznetsovEquation = ((22 * temp1 * temp2 * temp3 )*10);
  
 
  
  
  document.getElementById('result_blast_tons').innerText = totalTons.toFixed(0);
  document.getElementById('explosiveRequiredPerHole').innerText = explosiveRequiredPerHole.toFixed(3);
  document.getElementById('totalExplosivesRequired').innerText = totalExplosivesRequired.toFixed(2);
  document.getElementById('totalExplosivesCost').innerText = totalExplosivesCost.toFixed(0);
  document.getElementById('chargeFactor').innerText = chargeFactor.toFixed(2);
  document.getElementById('explosivesCostPerTon').innerText = explosivesCostPerTon.toFixed(0);
  document.getElementById('kuznetsovEquation').innerText = kuznetsovEquation.toFixed(0);
  
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


