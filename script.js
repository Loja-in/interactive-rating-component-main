function saveRating(rating) {
    localStorage.setItem('rating', rating);
}

document.getElementById('submit').addEventListener('click', function() {
    let rating = localStorage.getItem('rating');
if (rating) {
        window.location.href = 'thank.html';
        
        let span = document.querySelector('#rating');
        span.innerHTML = `${rating}`;
    } else {
        alert('Please rate before submitting.');
    }

});