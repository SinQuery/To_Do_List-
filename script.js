function toggleDropdown() {
  var dropdown = document.getElementById("myDropdown");
  dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (document.querySelector.onclick('.round-button')) {
    var dropdown = document.getElementById("myDropdown");
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    }
  }
}

// document.getElementById('checkBox').addEventListener('click', () => console.log('I have been clicked.'));
// let checkBox = document.getElementById('checkBox');
// checkBox.addEventListener('click', () => console.log('I have been clicked.'));

// Function for the submit button
function inputFunc() {
 
}

//Navbar Menu 

function toggleDropdown(menuButton) {
  var dropdown = document.getElementById(menuButton);
  if (dropdown.style.display === 'block') {
      dropdown.style.display = 'none';
  } else {
      dropdown.style.display = 'block';
  }
}
