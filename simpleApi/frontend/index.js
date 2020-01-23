console.log('health check');


//form values

//getNames 

async function getNames(){
    let listOfNames = await fetch('http://localhost:3000/?id=xxx').then(resp=>resp.json())
    displayNames(listOfNames)
}
getNames()

function displayNames(arr){
    arr.forEach(item =>{
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        const name= document.getElementById('name');
        li.innerHTML = `<h1>${item.fname} ${item.lname}</h1>`
        name.appendChild(li)
    })
}
