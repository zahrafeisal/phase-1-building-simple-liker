// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  const hearts = document.querySelectorAll('.like-glyph')


  for(let heart of hearts) {
    heart.addEventListener('click',(e) => {
    const likedHeart = e.target;
    mimicServerCall()
    .then(() => {
      if(likedHeart.classList.contains('activated-heart')) {
        likedHeart.classList.remove('activated-heart')
        likedHeart.textContent = EMPTY_HEART;

      } else {
        likedHeart.classList.add('activated-heart')
        likedHeart.textContent = FULL_HEART;
      }
    })
    .catch((error) => {
      const errorModal = document.getElementById('modal');
      errorModal.classList.remove('hidden')

      const errorSpace = document.getElementById('modal-message')
      errorSpace.textContent = error.message;

      setTimeout(() => {
        errorModal.classList.add('hidden')
      }, 3000)
    })
  })};
})




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
