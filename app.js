$(document).ready(function(){
  
  let modalInfo = {
    alloy_landscape: {
      header: 'Alloy Design Studio Website',
      tools:'',
      details: 'Designed and engineered Alloy Design Studio website with HTML, CSS, Vanilla JS. Also created and brand marketing for their company.',
      image: 'site-alloy-design-studio.jpg',
      link: 'http://www.alloylandscapes.com'
    },
    bin: {
      header: 'Akro-Mils® Bins Promotional Ad',
      tools:'',
      details: 'Designed a promotional ad and created marketing copy for Global Industrial\'s sales team.',
      image: 'design-bin-1500.jpg',
      link: './images/thumbnails/design-bin.jpg'
    },
    locker: {
      header:'Global Industrial™ Promotional Locker Ad',
      tools:'',
      details:'Designed a promotional ad with marketing details for Global Industrial sales\' team.',
      image: 'email-locker-1500.jpg',
      link: '/images/thumbnails/1500/email-locker-1500.jpg'
    },
    ibc: {
      header:'Global Industrial™ IBC Promotional Ad',
      tools:'',
      details:'Designed a promotional ad with marketing details for Global Industrial\'s sales team.',
      image: 'email-ibc-1500.jpg',
      link: '/images/thumbnails/1500/email-ibc-1500.jpg'
    },
    ilovewingsauce: {
      header: 'ilovewingsauce.com Wordpress Site',
      tools:'',
      details: 'Setup a basic Wordpress site for an award winning wing sauce maker, allowing their staff to manage content.',
      image: 'site-ilovewingsauce.png',
      link: 'http://www.ilovewingsauce.com'
    },
    icey: {
      header: 'Mr. Icey Site Design',
      tools:'',
      details:'Designed a website theme and layout prototype for the Mr. Icey E-Liquid Company',
      image: 'design-icey-1500.jpg',
      link: '/images/thumbnails/1500/design-icey-1500.jpg'
    },
    hhv: {
      header: 'Huntington Village Vapes Accessories Page',
      tools:'',
      details:'Designed and created accessories page\'s theme, layout, custom imag, and marketing copy for a local Shop.',
      image: 'desgin-hhv-1500.jpg',
      link: '/images/thumbnails/1500/desgin-hhv-1500.jpg'
    },
    robo_ruckus: {
      header:'Robo Ruckus Game Poster',
      tools:'',
      details:'Designed a promotional game poster using in-game 3D art assets.',
      image: 'design-robo-ruckus-1500.jpg'
    }
  }

const cl = console.log;

$('.portfolio-image').click(function(){
  fillModal(this.id);
});



function fillModal(id){
  $('#project-title').text(modalInfo[id].header);
  $('#project-info').text(modalInfo[id].details);
  $('#modal-gallery').css("background", "url(/images/thumbnails/1500/" + modalInfo[id].image);
  $('#goto-button > A').remove();
  $('#goto-button').append(`<a target="_blank" class="foo">View Work</a>`); 
  $('#goto-button > A').attr('href', modalInfo[id].link); 
}

// function goToProject(link){
//   cl(modalInfo[link].link);
//   $('.goto-button')
// }


//****test code ends****//

/////////////////////////////////////////////////////////////

const bodyTag = document.querySelector('body')

const modalMask = document.getElementById('modal-mask');
const modalWindow = document.getElementById('modal-window');


 document.addEventListener('click', function(){
  /*Toggles Modal*/
  cl($('#goto-button'))
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
    

function splitClassName(){ 
  let getClass = event.target.className;
  let toArray = Array.from(getClass.split(" "))
  return toArray[0];
 }


  function getMyStuff(){

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
getMyStuff()
// return event.target.id

})

// let projectinfo = document.this.id; 
});