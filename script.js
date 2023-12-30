function saveRating(rating) {
    localStorage.setItem('rating', rating);
}

document.getElementById('submit').addEventListener('click', function() {
        window.location.href = 'thank.html';
});
function displayRating() {
let rating = localStorage.getItem('rating');

if (rating !== null){
let span = document.querySelector('#rating');
span.innerHTML = `${rating}`;
console.log(span);
        }}