//  a class to set up the data
class InputData{
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ,
    ){
        this.time_seconds = time_senconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}

// a getData function to load data from the data file 
function getData(){
    var loadedData = loadData();
    return loadedData;
}
//a dataRow function to set up the data 
function dataRow(legend, value, units){
    msg= "<td>";
    msg += legend;
    msg += "</td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}
function updateDisplay(){

    // record and display time data
    theTime = new Date();
    document.getElementById("clockTime").innerHTML = theTime.getHours() + ":" + theTime.getMinutes() + ":" + theTime.getSeconds();

//updateDisplay to tie it all together
    
var timeRead = data[index].time_seconds;


//update table...
if(timeRead >= 10){
    document.getElementById("data").rows["seconds"].innerHTML =
        dataRow("Time Elapsed", data[index].time_seconds, "seconds");
    document.getElementById("data").rows["latitude"].innerHTML =
        dataRow("Latitude", data[index].latitude,"" );
    document.getElementById("data").rows["longitude"].innerHTML =
        dataRow("Longitude", data[index].longitude,"" );
    document.getElementById("data").rows["GPS_Altitude"].innerHTML =
        dataRow("GPS_Altitude", data[index].gps_altitude,"" );
    document.getElementById("data").rows["BMP_Altitude"].innerHTML =
        dataRow("BMP_Altitude", data[index].bmpSensor_altitude,"" );
    document.getElementById("data").rows["BMP_Pressure"].innerHTML =
        dataRow("BMP_Pressure", data[index].bmpSensor_pressure,"" );
    document.getElementById("data").rows["BMP_Temperature"].innerHTML =
        dataRow("BMP_Temperature", data[index].bmpSensor_temp,"" );
    document.getElementById("data").rows["Digital Temperature"].innerHTML =
        dataRow("Digital Temperature", data[index].digSensor_temp,"" );
    document.getElementById("data").rows["CSS Temperature"].innerHTML =
        dataRow("CSS Temperature", data[index].cssSensor_temp,"" );
    document.getElementById("data").rows["css_eC02"].innerHTML =
        dataRow("css_eC02", data[index].cssSensor_eCO2,"" );
    document.getElementById("data").rows["CSS_TVOC"].innerHTML =
        dataRow("CSS_TVOC", data[index].cssSensor_TVOC,"" );
    document.getElementById("data").rows["UV"].innerHTML =
        dataRow("UV", data[index].UV,"" );
    document.getElementById("data").rows["accelX"].innerHTML =
        dataRow("accelX", data[index].accelX,"" );
    document.getElementById("data").rows["accelY"].innerHTML =
        dataRow("accelY", data[index].accelY,"" );
    document.getElementById("data").rows["accelZ"].innerHTML =
        dataRow("accelZ", data[index].accelZ,"" );
    document.getElementById("data").rows["magneticX"].innerHTML =
        dataRow("magneticX", data[index].magneticX,"" );
    document.getElementById("data").rows["magneticY"].innerHTML =
        dataRow("magneticY", data[index].magneticY,"" );
    document.getElementById("data").rows["magneticZ"].innerHTML =
        dataRow("magneticZ", data[index].magneticZ,"" );
    document.getElementById("data").rows["gyroX"].innerHTML =
        dataRow("gyroX", data[index].gyroX,"" );
    document.getElementById("data").rows["gyroY"].innerHTML =
        dataRow("gyroY", data[index].gyroY,"" );
    document.getElementById("data").rows["gyroZ"].innerHTML =
        dataRow("gyroZ", data[index].gyroZ,"" );
}

if(index < 500){
    index++;
} else {
    index=0;
}

}