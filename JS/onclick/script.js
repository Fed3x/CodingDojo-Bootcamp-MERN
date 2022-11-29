function changeText(element) {
    if(element.innerHTML == 'LogOut'){
        element.innerHTML = 'LogIn'
    } else {
        element.innerHTML = 'LogOut'
    }
}

function removeButton(element) {
    element.remove()
}

function alertLike() {
    alert('Ninja was liked')
}