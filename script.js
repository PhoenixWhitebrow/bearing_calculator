function calculateBearing(){
    // pi – the π number
    // const pi = 3.14159265358979;
    const pi = Math.PI;

    // radius fo planet
    var rad = document.getElementById("rad").value;

    // coordinates of two points
    var llat1 = document.getElementById("lat1").value;
    var llong1 = document.getElementById("lon1").value;
    var llat2 = document.getElementById("lat2").value;
    var llong2 = document.getElementById("lon2").value;

    // in radians
    var lat1 = llat1 * pi / 180;
    var lat2 = llat2 * pi / 180;
    var long1 = llong1 * pi / 180; 
    var long2 = llong2 * pi / 180;

    // cosines and sines of latitudes and longitude differences
    var cl1 = Math.cos(lat1);
    var cl2 = Math.cos(lat2);
    var sl1 = Math.sin(lat1);
    var sl2 = Math.sin(lat2);
    var delta = long2 - long1;
    var cdelta = Math.cos(delta);
    var sdelta = Math.sin(delta);

    // calculating the length of a great circle
    var y = Math.sqrt(Math.pow(cl2 * sdelta, 2) + Math.pow(cl1 * sl2 - sl1 * cl2 * cdelta, 2));
    var x = sl1 * sl2 + cl1 * cl2 * cdelta;
    var ad = Math.atan2(y, x);
    var dist = ad * rad;

    // initial bearing calculation
    x = (cl1 * sl2) - (sl1 * cl2 * cdelta);
    y = sdelta * cl2
    function degrees(radians) {
        return radians * (180 / pi);
    }
    var z = degrees(Math.atan(-y / x));

    if (x <= 0) {
        z = z + 180.;
    }

    var z2 = (z + 180.) % 360. - 180.
    function radians(degrees) {
        return degrees * (pi/180);
    }
    z2 = - radians(z2)
    var anglerad2 = z2 - ((2 * pi) * Math.floor((z2 / (2 * pi))));
    var angledeg = (anglerad2 * 180.) / pi;

    // remove previous results
    Element.prototype.remove = function() {
        this.parentElement.removeChild(this);
    }
    NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
        for(var i = this.length - 1; i >= 0; i--) {
            if(this[i] && this[i].parentElement) {
                this[i].parentElement.removeChild(this[i]);
            }
        }
    }
    if (document.getElementsByClassName("resultLabels")) {
        document.getElementsByClassName("resultLabels").remove();
    }
    if (document.getElementsByClassName("resultValues")) {
        document.getElementsByClassName("resultValues").remove();
    }
    if (document.getElementById("warn")) {
        document.getElementById("warn").remove();
    }

    // check if fields are not empty
    function isNumber(value) {
        return !isNaN(parseInt(value));
    }
    // if everything's filled correct, show bearing and distance
    if (isNumber(llat1) && isNumber(llong1) && isNumber(llat2) && isNumber(llong2) && isNumber(rad)) {
        var labelDiv1 = document.createElement("div");
            labelDiv1.setAttribute("class", "resultLabels");
            labelDiv1.innerHTML = "Bearing: ";
        var valueDiv1 = document.createElement("div");
            valueDiv1.setAttribute("class", "resultValues");
            valueDiv1.innerHTML = angledeg.toFixed(0) + "\xB0";
        var labelDiv2 = document.createElement("div");
            labelDiv2.setAttribute("class", "resultLabels");
            labelDiv2.innerHTML = "Distance: ";
        var valueDiv2 = document.createElement("div");
            valueDiv2.setAttribute("class", "resultValues");
            valueDiv2.innerHTML = dist.toFixed(3) + " km";
        var resultsDiv = document.getElementById("results");
            resultsDiv.appendChild(labelDiv1);
            resultsDiv.appendChild(valueDiv1);
            resultsDiv.appendChild(labelDiv2);
            resultsDiv.appendChild(valueDiv2);
    // if radius is not set, show bearing and show a tip to fill the 'Planet radius' field
    } else if (isNumber(llat1) && isNumber(llong1) && isNumber(llat2) && isNumber(llong2)) {
        var labelDiv1 = document.createElement("div");
            labelDiv1.setAttribute("class", "resultLabels");
            labelDiv1.innerHTML = "Bearing: ";
        var valueDiv1 = document.createElement("div");
            valueDiv1.setAttribute("class", "resultValues");
            valueDiv1.innerHTML = angledeg.toFixed(0) + "\xB0";
        var warnDiv = document.createElement("div");
            warnDiv.setAttribute("id", "warn");
            warnDiv.innerHTML = "To calculate the distance, enter the «Planet radius»";
            warnDiv.style.color = "blue";
        var resultsDiv = document.getElementById("results");
            resultsDiv.appendChild(labelDiv1);
            resultsDiv.appendChild(valueDiv1);
            resultsDiv.after(warnDiv);
    // error message if coordinates are not set
    } else {
        var warnDiv = document.createElement("div");
            warnDiv.setAttribute("id", "warn");
            warnDiv.innerHTML =  "First enter the coordinates!";
            warnDiv.style.color = "red";
        var resultsDiv = document.getElementById("buttons");
            resultsDiv.after(warnDiv);
    }
}

function reset(){
    // clear inputs
    document.getElementById("rad").value = "";
    document.getElementById("lat1").value = "";
    document.getElementById("lon1").value = "";
    document.getElementById("lat2").value = "";
    document.getElementById("lon2").value = "";
    
    // remove previous results
    Element.prototype.remove = function() {
        this.parentElement.removeChild(this);
    }
    NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
        for(var i = this.length - 1; i >= 0; i--) {
            if(this[i] && this[i].parentElement) {
                this[i].parentElement.removeChild(this[i]);
            }
        }
    }
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

