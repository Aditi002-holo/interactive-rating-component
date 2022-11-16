const submitBtn = document.querySelector('.submit-btn');
const rateBtns = document.querySelectorAll('li button');

let rating;

rateBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        localStorage.setItem("rating", btn.textContent);
    })
})

if(submitBtn) {
    submitBtn.addEventListener('click', function() {
        window.location = "display.html";
    })
}

const displayRatingEl = document.querySelector('.display-rating');
let ratingLocal = localStorage.getItem("rating");
if(displayRatingEl) {
    displayRatingEl.textContent = `You selected ${ratingLocal} out of 5`;
}

localStorage.clear();

