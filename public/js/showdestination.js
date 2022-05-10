let featuresBlock = document.querySelector('.features-row');
async function getDestinations(){
    return await fetch('/destinations')
    .then((res) => res.json())
    .then((data) => data)
}


document.addEventListener('DOMContentLoaded', async(req,res) =>{
    let destinations = await getDestinations();
    console.log(destinations);
    featuresBlock.innerHTML = '';
    destinations.forEach(destination =>{
        
        let destinationHTML = `<div class="col-lg-4 col-md-6 col-sm-12">
        <div class="feature-box">
            <div class="feature-img">
                <img src="${destination.imgURL}" >
                <div class="price"><p>$${destination.price}</p></div>
                <div class="rating">
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star" ></i>
                    <i class="fa fa-star-half-o" ></i>
                </div>
            </div>
            <div class="feature-details">
                <h4>${destination.title}</h4>
                <p>${destination.text}</p>
                <span> <i class="fa fa-map-marker" ></i>${destination.location}</span>
                <span> <i class="fa fa-sun-o" ></i>${destination.days} Days</span>
                <span> <i class="fa fa-moon-o" ></i>${destination.nights} Nights</span>
            </div>
           
           
        </div>
       </div>`
       featuresBlock.insertAdjacentHTML('beforeend',destinationHTML );

    })
})