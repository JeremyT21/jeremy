/*
	David Cacorovski, Jeremy Thummel, Sohail Meghani
	1/8/2021
	Summative Website Code JS
	This is the JS Code for our Assignment
*/
//**** David Cacorovski 1/8/2021 Added dropdown JS code
//Code taken from https://www.w3schools.com/howto/howto_js_dropdown.asp
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
