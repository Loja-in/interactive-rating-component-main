function saveRating(rating) {
    localStorage.setItem('rating', rating);
}
document.getElementById('submit').addEventListener('click', function() {
    window.location.href = 'thank.html';
    let rate = localStorage.getItem('rating');
    if(rate !== null){
        let span = document.querySelector("#rate");
        span.innerHTML = `${rate}`;
    }
});