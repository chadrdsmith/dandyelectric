let btn = document.getElementById('navBtn').addEventListener('click', goToForm);

function goToForm () {
    document.getElementById('anchor').scrollIntoView(true);
}

window.addEventListener('load', () => {
    let long = -97.10223359999999;
    let lat = 49.8376704;
    let tempdescription = document.querySelector('#weatherDesc');
    let temp = document.querySelector('#weatherTemp');
    const proxy = `https://cors-anywhere.herokuapp.com/`;
    const api = `${proxy}https://api.darksky.net/forecast/81b3b8553772ede4662f4dffbcb03243/${lat},${long}`;

        fetch(api)
            .then((res) => {
                return res.json();
        })
            .then (data => {
                const {temperature, summary, icon} = data.currently;
                // Set Dom elements from API
                temp.textContent = (Math.floor ((5/9) * (temperature - 32)));  
                tempdescription.textContent = summary;
                //locTimeZone.textContent = data.timezone;
                setIcons(icon, document.querySelector('#icon1'));
            });

function setIcons(icon, iconId) {
    const skycons = new Skycons({color: 'white'});
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconId, Skycons[currentIcon]);
}
});
