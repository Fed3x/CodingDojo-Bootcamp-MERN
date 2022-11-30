

function addLike(name) {
    
    try {
        element = document.querySelector('#' + name);
        like = parseInt(element.innerHTML);
        like++;
        element.innerHTML = like;
    } catch (error) {
        console.log(error)
    }
}

