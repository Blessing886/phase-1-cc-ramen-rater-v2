
// Callbacks
const handleClick = (ramen) => {
  const detailImg = document.querySelector('.detail-image');
  const detailName = document.querySelector('.name');
  const detailRestaurant = document.querySelector('.restaurant');
  const detailsRating = document.getElementById('rating-display');
  const detailsComment = document.getElementById('comment-display');

  detailImg.src = ramen.image;
  detailImg.alt = ramen.name;
  detailName.textContent = ramen.name;
  detailRestaurant.textContent = ramen.restaurant;
  detailsRating.textContent = ramen.rating.toString();
  detailsComment.textContent = ramen.comment;

};




const addSubmitListener = () => {
  const form = document.getElementById('new-ramen');
  form.addEventListener('submit', handleSubmit);
  
}

const handleSubmit = (event) => {
  event.preventDefault();

  const newRamen = {
    image: event.target.image.value,
    name: event.target.name.value,
    restaurant: event.target.restaurant.value,
    rating: event.target.rating.value,
    comment: event.target['new-comment'].value
    
  };
  addRamen(newRamen);
  event.target.reset();
}

const addRamen = (ramen) => {
  const ramenMenuDiv = document.getElementById('ramen-menu');
  const ramenImageElement = document.createElement('img');
  ramenImageElement.src = ramen.image;
  ramenImageElement.alt = ramen.name;

  ramenImageElement.addEventListener('click', () => addRamenListener(ramen));

  ramenMenuDiv.append(ramenImageElement);
};



const displayRamens = () => {
  const ramenMenuDiv = document.getElementById('ramen-menu')
  fetch('http://localhost:3000/ramens')
  .then(res => res.json())
  .then(data => {
    data.forEach(ramen => {
      const ramenImageElement = document.createElement('img');
      ramenImageElement.src = ramen.image;
      ramenMenuDiv.append(ramenImageElement);

      ramenImageElement.addEventListener('click', () => addRamenListener(ramen))
    });
  })
  
  };

  function addRamenListener(ramen) {
    console.log(ramen)
    handleClick(ramen);
  };


const main = () => {
  document.addEventListener('DOMContentLoaded', () => {
    displayRamens();
    addSubmitListener();
  });
  // Invoke displayRamens here
  // Invoke addSubmitListener here
};

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};

