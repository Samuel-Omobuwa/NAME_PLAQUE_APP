// Adding variables to store our data
const userInput = document.querySelector('.field-input');
const userLeterPreview = document.querySelector('.plaque-prev');
const userPricePreview = document.querySelector('#plaquePrice');
const buy_submit = document.querySelector(".buy-submit");

// Refactoring with Arrow Function
const countLeters = (some_data) =>{
  const price = some_data.replace(' ', '').length * 5; // price of each letter
  userLeterPreview.textContent = some_data
  userPricePreview.textContent = '$'+price
}

userInput.oninput = (e)=>{
  countLeters(e.target.value)
}

const buyNow = () =>{
  if (userLeterPreview.textContent === "Your Name"){
    alert ("Enter your own custom Letters")
  }
  else if (userLeterPreview.textContent.replaceAll (' ', '') .length === 0 ) {
    alert('Enter your own letter')
  }

  else {
    if (userLeterPreview.textContent.length > 15){
      alert('You have exceeded the number of letters available')
    }
    else {
      alert('Successful')
    }
  }
}

buy_submit.onclick = () => {
  buyNow();
}
