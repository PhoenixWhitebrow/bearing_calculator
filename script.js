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
    if (document.getElementById("results")) {
        document.getElementById("results").remove();
    }

    // display current results
    const resultsDiv = document.createElement("div");
    resultsDiv.setAttribute("id", "results");
    // check if fields are not empty
    function isNumber(value) {
        return !isNaN(parseInt(value));
    }
    if (isNumber(llat1) && isNumber(llong1) && isNumber(llat2) && isNumber(llong2) && isNumber(rad)) {
        resultsDiv.innerHTML = "Bearing " + angledeg.toFixed(0) + "\xB0" + "<br>" + "Target destination is  " + dist.toFixed(3) + " kilometers away";
    // warn if fields are empty
    } else if (isNumber(llat1) && isNumber(llong1) && isNumber(llat2) && isNumber(llong2))
        resultsDiv.innerHTML = "Bearing " + angledeg.toFixed(0) + "\xB0" + "<br>" + "To calculate the distance, enter the planet radius (in kilometers)";
    else {
        resultsDiv.innerHTML =  "First enter the coordinates!";
        resultsDiv.style.color = "red";
    }

    const formDiv = document.getElementById("buttons");
    formDiv.after(resultsDiv);
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
    if (document.getElementById("results")) {
        document.getElementById("results").remove();
    }
}

