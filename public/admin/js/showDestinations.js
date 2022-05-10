let destinationsList = document.querySelector('.blogs-list tbody');
let id = 1;

async function getDestinations(){
 return await  fetch('/destinations')
                .then((res) => res.json())
                .then((data) => data);
 
}


document.addEventListener('DOMContentLoaded', async () =>{
   let destinations = await getDestinations();
   destinationsList.innerHTML = '';
   destinations.forEach(destination =>{
       let destinationHTML = ` <tr>
       <th >${id++} <input type="hidden" class="id" value ="${destination.id}" /></th>
       <td>${destination.title}</td>
       <td>${destination.date}</td>
       <td>${destination.location}</td>
       <td>${destination.price}</td>
       <td>${destination.days}</td>
       <td>${destination.nights}</td>
       <td><button type="button" class="btn btn-link p-0 editBtn">Edit</button></td>
       <td><button type="button" class="btn btn-link deleteBtn p-0">X</button></td>
     </tr>`

     destinationsList.insertAdjacentHTML('beforeend', destinationHTML);
   })
})

destinationsList.addEventListener('click', function(e){
    if(e.target.classList.contains('deleteBtn')){
        let id = e.target.parentNode.parentNode.querySelector('.id').value;
        fetch('/destinations/' +id, {
            method: 'DELETE'
        }).then((res) => res.text())
        .then(() => window.history.go());
    }
})

