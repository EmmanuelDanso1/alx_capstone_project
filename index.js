// about
 // getting the skills set
 const titleDescs = document.getElementsByClassName('title_desc');
 const titleSetContents = document.getElementsByClassName('title_set_content');

 // using a function and for of loop to loop through the content when clicked
 function setTitle(contents){
     // removes the active page when new page is clicked
     for(titleDesc of titleDescs){
         titleDesc.classList.remove('active');
     }
     
     for(titleSetContent of titleSetContents){
         titleSetContent.classList.remove('first_content');
     }
     // adding event to add content to active page
     event.currentTarget.classList.add('active');
     document.getElementById(contents).classList.add('first_content');
 }

//  side-menu navigation
const sideMenu = document.getElementById('side-menu');
// opens the side menu when clicked
function openMenu(){
    sideMenu.style.right = '0';
}
// closes side menu when clicked
function closeMenu(){
    sideMenu.style.right = '-13rem';
}