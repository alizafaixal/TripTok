{
let destinationBlock = document.querySelector('.blogs-list');
let updateBtn = document.querySelector('#v-pills-update-tab');
let updateTitle = document.querySelector('#updateTitle');
let updateText = document.querySelector('#updateText'); 
let updatePrice = document.querySelector('#updatePrice'); 
let updateDays = document.querySelector('#updateDays'); 
let updateNights = document.querySelector('#updateNights'); 
let updateForm = document.querySelector('.updateForm');
let id;

destinationBlock.addEventListener('click', async function(e) {
    if(e.target.classList.contains('editBtn')){
         id = e.target.parentNode.parentNode.querySelector('.id').value;
        let destination = await fetch('/destinations/' +id)
        .then((res) => res.json())
        .then((data) => data);
        updateTitle.value = destination.title;
        updateText.value = destination.text;
        updatePrice.value = destination.price;
        updateDays.value = destination.days;
        updateNights.value = destination.nights;
        updateBtn.click();
     
    }
  
})
updateForm.addEventListener('submit', function(e){
    e.preventDefault();
    fetch('/destinations/' +id , {
    method: 'PUT',
    headers:{
        'Content-type' : 'application/json'
    },
    body: JSON.stringify({
        title: updateTitle.value,
        text: updateText.value,
        price: updatePrice.value,
        days: updateDays.value,
        nights: updateNights.value
        
    })
}).then((res) =>res.text()).then(() => window.history.go())

})
}