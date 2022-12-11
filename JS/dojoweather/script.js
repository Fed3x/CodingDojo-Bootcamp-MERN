function changeCity(city) {
    alert('Cargando información de ' + city)
}

function acceptCookie() {
    const element  = document.querySelector('#cookies')
    element.remove();
}

function changeTemperature(element) {
    let elements = document.querySelectorAll('.min, .max')
    elements.forEach(item => {
        let temp = parseInt(item.innerText)
        let new_temp =  element.value == 'C' ? calcCelsius(temp) : calcFahrenheit(temp)
        item.innerText = new_temp + '°'
    })
    
}
function calcCelsius(fahrenheit) {
    return Math.round((fahrenheit - 32) * 5/9);
}
function calcFahrenheit(celsius) {
    return (celsius * 9/5) + 32
}