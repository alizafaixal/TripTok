{
    let id =1;
let contactList = document.querySelector('.contact-list tbody');
async function getContacts(){
    return await fetch('/contacts')
    .then((res) =>res.json())
    .then((data) => data)
}

document.addEventListener('DOMContentLoaded', async(req,res) =>{
    let contacts = await getContacts();
    contactList.innerHTML = '';
    contacts.forEach(contact =>{
        let contactHTML = `
        <tr>
        <th >${id++} <input type="hidden" class="id" value ="${contact.id}" /></th>
        <td>${contact.fname}</td>
        <td>${contact.lame}</td>
        <td>${contact.email}</td>
        <td>${contact.number}</td>
        <td>${contact.date}</td>
        <td>${contact.msg}</td>
        <td><button type="button" class="btn btn-link deleteBtn p-0">X</button></td>
        </tr>`
        contactList.insertAdjacentHTML('beforeend',contactHTML );
    })
    
})

contactList.addEventListener('click', (e)=>{
    if(e.target.classList.contains('deleteBtn')){
        let newID = e.target.parentNode.parentNode.querySelector('.id').value;
        fetch('/contacts/'+ newID,{
            method:'DELETE'
        }).then((res) => res.text()).then(() => window.history.go());
    }
})
}