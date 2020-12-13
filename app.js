const cl = console.log;

cl("hello")



const bodyTag = document.querySelector('body')

// const galleryEl2 = document.getElementById('gallery-container').children
const modalWrapper = document.getElementById('modal-wrapper');
const modalWindow = document.getElementById('modal-window');


/* 
// for(let elem of galleryEl2) {
//   elem.addEventListener('click', function() {
//     alert('hello');
//    });
//   }; 

/* Clicker Callback Function: */

// Close Button Callback.

 document.addEventListener('click', function(){
    console.log(event.target.tagName);
    if (event.target.tagName == 'IMG') {
      modalWrapper.style.display = 'block'
      modalWindow.style.display = 'block'
      bodyTag.style.overflowY = "hidden";

      // bodyTag.style.overflowY = "hidden";
    }
    if (event.target.id === 'modal-wrapper') {
      modalWrapper.style.display = 'none'
      modalWindow.style.display = 'none'
      bodyTag.style.overflowY = "initial";
    }

  })
