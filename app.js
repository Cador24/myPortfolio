const cl = console.log;

cl("hello")



const bodyTag = document.querySelector('body')

// const galleryEl2 = document.getElementById('gallery-container').children
const modalMask = document.getElementById('modal-mask');
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
    if (event.target.tagName == 'IMG') {
      modalMask.style.display = 'block'
      modalWindow.style.display = 'block'
      bodyTag.style.overflowY = "hidden";
    }
    if (event.target.id === 'modal-mask') {
      modalMask.style.display = 'none'
      modalWindow.style.display = 'none'
      bodyTag.style.overflowY = "initial";
    }

  }) 



  // modalMask.style.display = 'block'
  // modalWindow.style.display = 'block'
  // bodyTag.style.overflowY = "hidden";