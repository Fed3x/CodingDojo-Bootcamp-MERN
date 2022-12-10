console.log("page loaded...");
const profileName = document.querySelector('#profileName')
const connections = document.querySelector('#connections')
let connections_quantity = parseInt(connections.innerText);
const connection_requests = document.querySelector('#connection-requests')
let connection_requests_quantity = parseInt(connection_requests.innerText);

Array.prototype.random = function(){
    if (this && this.length) {
        return this[Math.floor(Math.random()*this.length)];
    }
    return 0;
}   


function editProfile() {
    const randomNames = ['Alice Kruger', 'Taylor Shaw', 'Remi', 'Jane Doe']
    const random = randomNames.random()
    profileName.innerText = random
}

function action(action, label) {
    const element = document.querySelector(label)
    if(action == 'add'){
        connections_quantity++
        connections.innerText = connections_quantity
    }

    element.remove();
    connection_requests_quantity--
    connection_requests.innerText = connection_requests_quantity

}