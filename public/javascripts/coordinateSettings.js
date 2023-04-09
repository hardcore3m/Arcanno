// document.cookie.replace(/(?<=^|;).+?(?=\=|;|$)/g, name => location.hostname.split('.').reverse().reduce(domain => (domain=domain.replace(/^\.?[^.]+/, ''),document.cookie=`${name}=;max-age=0;path=/;domain=${domain}`,domain), location.hostname));

const clockDiv = document.getElementById('clock');
const ephemeridDiv = document.getElementById('ephemerid');

function getUserLocation() {
    const locationCookieName = "user_location";
    const permissionCookieName = "user_location_permission";
    let locationPermission = false;
    const expirationDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);


    const locationCookieValue = getCookieValue(locationCookieName);
    if (locationCookieValue !== null && !isCookieExpired(locationCookieName)) {
        return locationCookieValue;
    }


    const permissionCookieValue = getCookieValue(permissionCookieName);
    if (permissionCookieValue !== null && !isCookieExpired(permissionCookieName)) {
        locationPermission = permissionCookieValue === 'true';
    } else {

        const allowLocation = confirm("Para retornar as efemérides astológicas, o site necessita da sua localização. Deseja permitir o acesso?");
        locationPermission = allowLocation;

        document.cookie = `${permissionCookieName}=${allowLocation}; expires=2147483647; path=/; SameSite=Strict`;

        return getUserLocation();
    }

    if (locationPermission) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            document.cookie = `${locationCookieName}=${latitude},${longitude}; expires=${expirationDate.toUTCString()}; path=/; SameSite=Strict`;

            return getUserLocation();
        });
    } else {

        document.cookie = `${locationCookieName}=0,0; expires=${expirationDate.toUTCString()}; path=/; SameSite=Strict`;

        return getUserLocation();
    }
}



function getCookieValue(cookieName) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();

        if (cookie.indexOf(`${cookieName}=`) === 0) {
            return cookie.split('=')[1];
        }
    }
    return null;
}

function isCookieExpired(cookieName) {
    const cookie = getCookieValue(cookieName);
    if (cookie === null) {
        return true;
    }

    return false;
}


function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    clockDiv.innerHTML = `<h2>${hours}:${minutes}:${seconds}</h2>`;
}


function updateEphemerid() {
    const userLocation = getUserLocation();
    const date = Date.now();
    const adress=`/ephemerid?location=${userLocation}&date=${date}`
    fetch(adress)
        .then(response => response.text())
        .then(data => {
            ephemeridDiv.innerHTML = data;
        });
}

function initPage() {

    updateClock();
    updateEphemerid();

    setInterval(updateClock, 1000);

    setInterval(() => {
        const date = new Date();
        const hour = date.getHours();
        if (hour === 0) {
            updateEphemerid();
        }
    }, 60 * 60 * 1000);

}

