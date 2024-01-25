  function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.round-button')) {
      var dropdown = document.getElementById("myDropdown");
      if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
      }
    }
  }

// document.getElementById('checkBox').addEventListener('click', () => console.log('I have been clicked.'));

let checkBox = document.getElementById('checkBox');
// checkBox.addEventListener('click', () => console.log('I have been clicked.'));

