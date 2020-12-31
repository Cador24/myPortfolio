$(document).ready(function(){
  

  let projectDetails = {
    alloyLandscape: {
      header:'Alloy Design Studio',
      tools:'',
      details:'Created a custom website and brand marketing for Alloy Design Studio. Created with HTML, CSS, Vanilla JS.'
    },
    bin: {
      header:'Akro-Mils&#174; Bins Promotional Ad',
      tools:'',
      details:'Designed a promotional ad with marketing details for global industrial sales team.'
    }
  }


/////////////////////////////////////////////////////////////  
//****test code start****//

const cl = console.log;

$('.portfolio-image').click(function(){
  fillModal(this.id);
});


function fillModal(id){
  $('#project-title').text(projectDetails[id].header);
  $('#project-info').text(projectDetails[id].details);
  $('#modal-gallery').css("background-img", "url(/images/thumbnails/site-alloy-design-studio.jpg)");//Requires Fix

  /* PSUEDO
  - Insert Image
   ...Get Target's ID, change image background == target's img URL
  -
  
  */
}

//****test code ends****//

/////////////////////////////////////////////////////////////

const bodyTag = document.querySelector('body')

const modalMask = document.getElementById('modal-mask');
const modalWindow = document.getElementById('modal-window');


 document.addEventListener('click', function(){
  /*Toggles Modal*/
    if (event.target.tagName == 'IMG') {
      modalMask.style.display = 'block'
      modalWindow.style.display = 'block'
      bodyTag.style.overflowY = "hidden";
    }
    /*Closes Modal*/
    if ( event.target.id === 'modal-mask' || event.target.id === 'close-button' ) {
      modalMask.style.display = 'none'
      modalWindow.style.display = 'none'
      bodyTag.style.overflowY = "initial";
    }
  }) 
    
  // projectinfo = projectDetails;
    // if(event.target.className == 'portfolio-image shadow-main site'){
    //   galleryElem[0].innerHTML = "<h2>Hello</h2>";
    // }


/* 
GET PORTFOLIO IMAGE ID

1) get class "portfolio-image"
2) Conditional => if class == "portfolio image" {
  get event.target.id
}


MODAL INNER HTML = H2(title), <p>(details)

*/

function splitClassName(){ 
  let getClass = event.target.className;
  let toArray = Array.from(getClass.split(" "))
  return toArray[0];
 }


  function getMyShit(){

    function splitClassName(){ 
       let getClass = event.target.className;
       let toArray = Array.from(getClass.split(" "))
       return toArray[0];
      }

          
      if(splitClassName() == 'portfolio-image'){
        cl(event.target.id)
      }
    }
    
 

const galleryElem = document.getElementById('gallery-container');

galleryElem.addEventListener('click', function() {
// let getId = event.target.id;

// cl (projectDetails.getId.details)
getMyShit()
// return event.target.id

})



// let projectinfo = document.this.id; 
});