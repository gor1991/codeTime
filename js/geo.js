
var requestUrl = "http://ip-api.com/json";

$.ajax({
    url: requestUrl,
    type: 'GET',
    success: function(json)
    {
        console.log("My country is: " + json.country, 'region is ' + json.regionName);
    },
    error: function(err)
    {
        console.log("Request failed, error= " + err);
    }
});
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, handleError);
    } else {
        console.error("Geolocation is not supported by this browser.");
    }
}
function showPosition(position) {
    console.log(`Latitude: ${position.coords.latitude}, longitude: ${position.coords.longitude}`);
}

function handleError(error) {
    let errorStr;
    switch (error.code) {
        case error.PERMISSION_DENIED:
            errorStr = 'User denied the request for Geolocation.';
            break;
        case error.POSITION_UNAVAILABLE:
            errorStr = 'Location information is unavailable.';
            break;
        case error.TIMEOUT:
            errorStr = 'The request to get user location timed out.';
            break;
        case error.UNKNOWN_ERROR:
            errorStr = 'An unknown error occurred.';
            break;
        default:
            errorStr = 'An unknown error occurred.';
    }
    console.error('Error occurred: ' + errorStr);
}
getLocation()

function setCurrentDate() {
    let fullDateColl = document.getElementsByClassName("fulldate");
    let fullDateArr = Array.from(fullDateColl)

    fullDateArr.map(function(item) {
        item.innerHTML = new Date().toLocaleDateString().replaceAll(".", "/");
    })
}
setCurrentDate()

let boxesCount = localStorage.getItem("boxesCount") ?? 60;
let left_count = document.getElementsByClassName("left_count");

function withCount(){
    for(let el in left_count){
        left_count[el].innerHTML = boxesCount;
    }
}
withCount()

setInterval(()=> {
    if(+boxesCount > 7) {
        boxesCount--;
        localStorage.setItem("boxesCount", boxesCount)
    }
    withCount()
},10000)

let phoneMasks = Array.from(document.getElementsByClassName('phone__mask'))
phoneMasks.map(function(elem) {
    elem.addEventListener('input', function (e) {
        var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})/);
        e.target.value = '(' +x[1] + ') '+ x[2] + '-' + x[3]
    });
});

let demonModal = document.getElementById('modal-demon');
document.onmouseleave = showModal;


let showCount = 1;
function showModal() {
  if(showCount === 1) {
     demonModal.style.display = 'block';
 }
    showCount = 0
}

document.getElementById('modal-close').addEventListener('click', function (e) {
    demonModal.style.display = 'none'
})
