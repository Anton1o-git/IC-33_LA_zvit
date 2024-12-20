const placeDiv = document.getElementById('place');

window.addEventListener('click', (event) => {
    const clickedInside = placeDiv.contains(event.target);
    console.log(clickedInside);
});
