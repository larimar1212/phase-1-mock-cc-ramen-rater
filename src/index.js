// See all ramen images in the `div` with the id of `ramen-menu`. When the page
// loads, request the data from the server to get all 
//the ramen objects. 
//Then, display the image for each of the ramen using an `img` tag inside the
// `#ramen-menu` div.

const baseUrl = 'http://localhost:3000/ramens'
const ramenMenu = document.getElementById('ramen-menu')
const ramenComment = document.getElementById('comment-display')
const ramenRating = document.getElementById('rating-display')
const ramenImage = document.getElementById('detail-image')
const ramenName = document.getElementById('name')
const ramenRestaurant = document.getElementById('restaurant')

const fetchData = () => {
    fetch(baseUrl)
        .then(req => req.json())
        .then(res => {
            res.forEach(obj => {
                ramenObject(obj) // invoking the function to render for each

            })
        });
}

// abstraction passes in the object as a parameter 
let ramenObject = (obj) => {
    const imgDiv = document.createElement('div') // create a div to hold the ramen image and delete button
    const img = document.createElement('img')
    img.src = obj.image
    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'Delete'
    imgDiv.append(img, deleteButton) // append img and delete button to div
    ramenMenu.append(imgDiv) // append div to ramen menu div
    deleteButton.addEventListener('click', (e) => {
        imgDiv.remove() // delete the div that contains the img and button on click
    })




    img.addEventListener('click', (e) => {
        ramenRating.innerText = obj.rating
        ramenComment.innerText = obj.comment
        ramenImage.src = obj.image
        ramenName.textContent = obj.name
        ramenRestaurant.textContent = obj.restaurant



    })
}
fetchData()

/* Click on an image from the `#ramen-menu` div and see all the info about that
// ramen displayed inside the `#ramen-detail` div and where it says
// `insert comment here` and`insert rating here`.


// Create a new ramen after submitting the `new-ramen` form.The new ramen should
// be added to the`#ramen-menu` div.The new ramen does not need to persist; in
// other words, if you refresh the page, it's okay that the new ramen is no
// longer on the page. */

const form = document.getElementById('new-ramen')
const inputName = document.getElementById('new-name')
const inputRestaurant = document.getElementById('new-restaurant')
const inputImage = document.getElementById('new-image')
const inputRating = document.getElementById('new-rating')
const inputComment = document.getElementById('new-comment')



form.addEventListener('submit', (e) => {
    e.preventDefault()
    let newObj = {}
    newObj.name = inputName.value
    newObj.restaurant = inputRestaurant.value
    newObj.image = inputImage.value
    newObj.rating = inputRating.value
    newObj.comment = inputComment.value
    ramenObject(newObj) // invoking the 


})

/* See the details for the first ramen as soon as the page loads (without
 clicking on an image)
- Update the rating and comment for a ramen by submitting a form. Changes should
 be reflected on the frontend. No need to persist. You can add this HTML to the
 `index.html` file to create the edit form: 

 Delete a ramen (you can add a "delete" button if you'd like, or use an
 existing element to handle the delete action). The ramen should be removed
 from the `ramen-menu` div, and should not be displayed in the `ramen-detail`
 div. No need to persist.*/

//get ramendetail div in a fetch + 1

const firstRamen = 'http://localhost:3000/ramens/1'

const displayFirstRamen = () => {
    fetch(firstRamen)
        .then(req => req.json())
        .then(obj => {
            ramenRating.innerText = obj.rating
            ramenComment.innerText = obj.comment
            ramenImage.src = obj.image
            ramenName.textContent = obj.name
            ramenRestaurant.textContent = obj.restaurant

        })
}

displayFirstRamen()

// POST CREATE SOMETHING THAT DOESNT EXIST ONTO JSON
// DELETE // DELETES THE RAMENS ONTO SERVER
// PATCH // UPDATE RAMEN RATING AND COMMENTS 




/* POST REQ , 


const postReq = await fetch(baseUrl)
method: 'POST',
headers: {'Content=Type': 'application/json'},
body: JSON.stringify({newObj}) // didnt work 

/*

const postReq = () => {
  fetch(baseUrl)
  method: 'POST',
  headers: {
    'Content-type': 'application/json'

  },
  body: JSON.stringify(
    {n }

}

postReq()


// DELETE REQ 
const deleteReq = () => {
   delete(baseUrl)
   Method: 'DELETE',
   headers: {
    'Content-type': 'application/json'
   }

} */