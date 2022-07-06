
//  !!!i failed so i just wrote comments to the solution to try to understand

// fetch the data from the server (frrom the website)
function fetchRamen(){
    fetch('http://localhost:4000/ramens')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        renderRamens(data)
    })
}

// i think the async method makes more sense i dont understand this at all 



fetchRamen()

// create global variables of html tags , id names

let menu = document.getElementById('ramen-menu')

let image = document.createElement('img') //creating the image element 

// making variabes from thee images  
let ramenImage = document.querySelector('.detail-image') /
let ramenName = document.querySelector('.name')
let ramenRestaurant = document.querySelector('.restaurant')
let ramenRating = document.getElementById('rating-display')
let ramenComment = document.getElementById('comment-display')

//making variables for the form 
let ramenForm = document.getElementById('new-ramen')
let newName = document.getElementById('new-name')
let newRestaurant = document.getElementById('new-restaurant')
let newImage = document.getElementById('new-image')
let newComment = document.getElementById('new-comment')
let newRating = document.getElementById('new-rating')

const renderRamens = (data) => {
    console.log(data, " From the render function")
    for (const item of data){
        console.log(item)
        let image = document.createElement('img')
        image.src =  item.image
        menu.append(image)

        image.addEventListener('click', function(){
            ramenImage.src = item.image
            ramenName.innerHTML =`${item.name}`
            ramenRestaurant.innerHTML = `${item.restaurant}`
            ramenRating.innerHTML = item.rating
            ramenComment.innerHTML =   item.comment

        })
    }
}

const addNewRamen = () =>{
    ramenForm.addEventListener('submit', function(e){
        e.preventDefault()
        ramenForm.reset()
        console.log('Submitted')
        console.log(newName.value)
        let newRamen = [{"name": newName.value, "restaurant": newRestaurant.value, "image": newImage.value, "rating": newRating.value, "comment": newComment.value}]
        console.log(newRamen, "   This is the new Object")
        renderRamens(newRamen)
    })
}

addNewRamen()

