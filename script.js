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

   // Initialize an array to store items
   var itemList = [];

   // Function to save text to local storage, update the table, and the array
   function saveText() {
       var textInput = document.getElementById('input-box');
       var text = textInput.value.trim();

       if (text !== "") {
           var textList = document.getElementById('text-list');
           var tableRow = document.createElement('tr');

           // Create a single column for checkbox and text
           var checkboxTextCell = document.createElement('td');
           var checkbox = document.createElement('input');
           checkbox.type = 'checkbox';
           checkboxTextCell.appendChild(checkbox);
           checkboxTextCell.appendChild(document.createTextNode(text));
           tableRow.appendChild(checkboxTextCell);

           // Create a delete button cell
           var deleteCell = document.createElement('td');
           var deleteButton = document.createElement('button');
           deleteButton.textContent = 'Delete';
           deleteButton.className = 'delete-btn';
           deleteButton.onclick = function() {
               deleteItem(tableRow);
           };
           deleteCell.appendChild(deleteButton);
           tableRow.appendChild(deleteCell);

           textList.appendChild(tableRow);

           textInput.value = ""; // Clear the input field

           // Save the updated table to local storage
           localStorage.setItem('textTable', document.getElementById('text-table').innerHTML);

           // Update the array
           itemList.push({ text: text, checked: false });
           // Save the updated array to local storage (optional)
           localStorage.setItem('itemList', JSON.stringify(itemList));
       }
   }

   // Function to delete a specific item
   function deleteItem(row) {
       var textList = document.getElementById('text-list');
       var index = Array.from(textList.children).indexOf(row);

       // Remove the corresponding table row
       textList.removeChild(row);

       // Update the array by removing the deleted item
       itemList.splice(index, 1);

       // Save the updated table and array to local storage
       localStorage.setItem('textTable', document.getElementById('text-table').innerHTML);
       localStorage.setItem('itemList', JSON.stringify(itemList));
   }

   // Retrieve and display the table from local storage on page load
   window.onload = function() {
       var storedTable = localStorage.getItem('textTable');
       if (storedTable) {
           document.getElementById('text-table').innerHTML = storedTable;
       }

       // Retrieve and update the array from local storage (optional)
       var storedArray = localStorage.getItem('itemList');
       if (storedArray) {
           itemList = JSON.parse(storedArray);

           // Update checkboxes based on the stored array
           var checkboxes = document.getElementById('text-list').querySelectorAll('input[type="checkbox"]');
           checkboxes.forEach(function(checkbox, index) {
               checkbox.checked = itemList[index].checked;
           });
       }
   };

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
