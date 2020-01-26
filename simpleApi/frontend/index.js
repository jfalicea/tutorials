console.log('health check');


/*
*-------------------------------------------------
** API - Key and Endpoint
*-------------------------------------------------
*/
const _API_KEY_ = 'xxx'
const url = `http://localhost:3000/?id=${_API_KEY_}`



//getNames 
async function getNames(){
    let listOfNames = await fetch(url).then(resp=>resp.json())
    displayNames(listOfNames)
}
getNames()

function displayNames(arr){
    arr.forEach(item =>{
        const ul = document.querySelector('ul')
        const li = document.createElement('li')
        const name= document.getElementById('name');
        li.innerHTML = `${item.fname} ${item.lname}`
        name.appendChild(li).addEventListener('click', (e)=>{
            const x = document.getElementById('target'); 
            x.innerHTML = `Hello, ${e.target.innerHTML}`;
            e.target.innerHTML = 'l'
        });
    })
}
