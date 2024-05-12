function calculateBearing(){
    // pi – the π number
    // const pi = 3.14159265358979;
    const pi = Math.PI;

    // radius fo planet
    rad = document.getElementById("rad").value;

    // coordinates of two points
    llat1 = document.getElementById("lat1").value;
    llong1 = document.getElementById("lon1").value;
    llat2 = document.getElementById("lat2").value;
    llong2 = document.getElementById("lon2").value;

    // in radians
    let lat1 = llat1 * pi / 180;
    let lat2 = llat2 * pi / 180;
    let long1 = llong1 * pi / 180; 
    let long2 = llong2 * pi / 180;

    // cosines and sines of latitudes and longitude differences
    let cl1 = Math.cos(lat1);
    let cl2 = Math.cos(lat2);
    let sl1 = Math.sin(lat1);
    let sl2 = Math.sin(lat2);
    let delta = long2 - long1;
    let cdelta = Math.cos(delta);
    let sdelta = Math.sin(delta);

    // calculating the length of a great circle
    let y = Math.sqrt(Math.pow(cl2 * sdelta, 2) + Math.pow(cl1 * sl2 - sl1 * cl2 * cdelta, 2));
    let x = sl1 * sl2 + cl1 * cl2 * cdelta;
    let ad = Math.atan2(y, x);
    dist = ad * rad;

    // initial bearing calculation
    x = (cl1 * sl2) - (sl1 * cl2 * cdelta);
    y = sdelta * cl2;
    function degrees(radians) {
        return radians * (180 / pi);
    }
    let z = degrees(Math.atan(-y / x));

    if (x <= 0) {
        z = z + 180;
    }

    let z2 = (z + 180) % 360 - 180;
    function radians(degrees) {
        return degrees * (pi/180);
    }
    z2 = - radians(z2)
    let anglerad2 = z2 - ((2 * pi) * Math.floor((z2 / (2 * pi))));
    angledeg = (anglerad2 * 180) / pi;

    // remove previous calculations results
    removeResults();
    // show the results of calculations
    showResults();
}

function removeResults() {
    // remove a single element function
    Element.prototype.remove = function() {
        this.parentElement.removeChild(this);
    }
    // remove an array of elements function
    NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
        for(var i = this.length - 1; i >= 0; i--) {
            if(this[i] && this[i].parentElement) {
                this[i].parentElement.removeChild(this[i]);
            }
        }
    }
    // remove previous calculations results
    if (document.getElementsByClassName("resultLabels")) {
        document.getElementsByClassName("resultLabels").remove();
    }
    if (document.getElementsByClassName("resultValues")) {
        document.getElementsByClassName("resultValues").remove();
    }
    if (document.getElementById("warn")) {
        document.getElementById("warn").remove();
    }
}

function showResults() {
    // check if the fields are filled with numbers
    function isNumber(value) {
        return !isNaN(parseInt(value));
    }
    // if everything's filled correct, show bearing and distance
    if (isNumber(llat1) && isNumber(llong1) && isNumber(llat2) && isNumber(llong2) && isNumber(rad)) {
        let labelDiv1 = document.createElement("div");
            labelDiv1.setAttribute("class", "resultLabels");
            labelDiv1.innerHTML = "Bearing: ";
        let valueDiv1 = document.createElement("div");
            valueDiv1.setAttribute("class", "resultValues");
            valueDiv1.innerHTML = angledeg.toFixed(0) + "\xB0";
        let labelDiv2 = document.createElement("div");
            labelDiv2.setAttribute("class", "resultLabels");
            labelDiv2.innerHTML = "Distance: ";
        let valueDiv2 = document.createElement("div");
            valueDiv2.setAttribute("class", "resultValues");
            valueDiv2.innerHTML = dist.toFixed(3) + " km";
        let resultsDiv = document.getElementById("results");
            resultsDiv.appendChild(labelDiv1);
            resultsDiv.appendChild(valueDiv1);
            resultsDiv.appendChild(labelDiv2);
            resultsDiv.appendChild(valueDiv2);
    // if radius is not set, show bearing and show a tip to fill the 'Planet radius' field
    } else if (isNumber(llat1) && isNumber(llong1) && isNumber(llat2) && isNumber(llong2)) {
        let labelDiv1 = document.createElement("div");
            labelDiv1.setAttribute("class", "resultLabels");
            labelDiv1.innerHTML = "Bearing: ";
        let valueDiv1 = document.createElement("div");
            valueDiv1.setAttribute("class", "resultValues");
            valueDiv1.innerHTML = angledeg.toFixed(0) + "\xB0";
        let warnDiv = document.createElement("div");
            warnDiv.setAttribute("id", "warn");
            warnDiv.innerHTML = "To calculate the distance, enter the «Planet radius»";
            warnDiv.style.color = "#2987CD";
        let resultsDiv = document.getElementById("results");
            resultsDiv.appendChild(labelDiv1);
            resultsDiv.appendChild(valueDiv1);
            resultsDiv.after(warnDiv);
    // error message if coordinates are not set
    } else {
        let warnDiv = document.createElement("div");
            warnDiv.setAttribute("id", "warn");
            warnDiv.innerHTML =  "First enter the coordinates! <br> (and mind the spaces  😉)";
            warnDiv.style.color = "orangered";
        let resultsDiv = document.getElementById("buttons");
            resultsDiv.after(warnDiv);
    }
}

function reset(){
    // remove previous calculations results
    removeResults();
    // clear inputs
    document.getElementById("rad").value = "";
    document.getElementById("lat1").value = "";
    document.getElementById("lon1").value = "";
    document.getElementById("lat2").value = "";
    document.getElementById("lon2").value = "";
    
    
}

