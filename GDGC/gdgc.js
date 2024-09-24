let parent = document.querySelector('.parent');

function getStoreCards() {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(store => {
        store.forEach(storeObj => {
            parent.innerHTML += 
            `<div class="col g-3 text-center">
                <div class="card card-body h-100 rounded-5" style="background-color:rgb(167, 167, 160)">
                    <div class="d-flex">
                    <img src="${storeObj.image}" class="img1 mb-4 m-auto">  
                    </div>  
                    <h6 class="hei">${storeObj.title}</h6>
                    <h6><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg> ${storeObj.rating.rate}</h6>
                    <h6>₹${storeObj.price}</h6>
                    <button class="btn btn-secondary w-50 m-auto">Add to cart</button>
                </div>
            </div>`
        })
    })
    .catch(err => console.log(err))
};

getStoreCards();

let parent1 = document.querySelector('.parent1');

function getCartCards() {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(store => {
        store.forEach(cardObj => {
            parent1.innerHTML += 
            `<div class="col g-3">
                <div class="bg-light d-flex p-2 m-1 h-100 rounded-3 border border-dark">
                    <img src="${cardObj.image}" alt="img not found" class="img2 me-3 my-auto">
                    <div>
                        <p>${cardObj.title}</p>
                        <p class="fw-bold">₹${cardObj.price}</p>
                    </div>
                    <p class="bg-white rounded-pill my-auto" style="height:1.5rem;width:70px;font-size:0.8rem"><button class="bg-white border-0 my-auto" style="height:1.5rem;font-size:0.8rem">-</button> 0 <button class="bg-white border-0 my-auto" style="height:1.5rem;font-size:0.8rem">+</button></p>
                    <button class="border-0 bg-transparent" style="height:1.5rem;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg></button>
                </div>
            </div>`
        })
    })
    .catch(err => console.log(err))
};

getCartCards();