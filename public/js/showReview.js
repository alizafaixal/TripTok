let reviewsBlock = document.querySelector('.reviews-list');

async function getReviews(){
    return await fetch('/reviews')
    .then((res) =>res.json())
    .then((data) => data)
} 

document.addEventListener('DOMContentLoaded' , async()=>{
    let reviews = await getReviews();
    reviewsBlock.innerHTML = '';
    reviews.forEach(review =>{
        let reviewHTML = `
        <div class="col-md-4">
        <div class="review-box">
            <p>${review.review}</p>
            <h5>${review.name}</h5>
            <small>${review.destionation}</small>
        </div>
        <img src="${review.imgURL}" >
    </div>`
    reviewsBlock.insertAdjacentHTML('beforeend', reviewHTML);
    })
})